'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MatchCard } from '@/components/matches/match-card'
import { Skeleton } from '@/components/ui/skeleton'
import { isToday } from '@/lib/utils'
import type { Database } from '@/lib/database.types'
import { useAuth } from '@/lib/auth-context'

type Team = Database['public']['Tables']['teams']['Row']
type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team
}

export function MatchList() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  const [voteData, setVoteData] = useState<{
    userVotes: { [key: string]: string }
    voteCounts: { [key: string]: { [key: string]: number } }
  }>({ userVotes: {}, voteCounts: {} })
  const { user } = useAuth()

  const fetchMatches = async () => {
    setLoading(true)

    // Get all matches with team details
    const { data, error } = await supabase
      .from('matches')
      .select(
        `
        *,
        team1:team1_id(id, name, short_name, logo_url),
        team2:team2_id(id, name, short_name, logo_url),
        winner:winner_id(id, name, short_name, logo_url)
      `
      )
      .order('match_date', { ascending: true })
      .order('match_time', { ascending: true })

    if (error) {
      console.error('Error fetching matches:', error)
    } else if (data) {
      setMatches(data as unknown as Match[])

      // Fetch vote data for all matches
      if (user) {
        const matchIds = data.map((match) => match.id)

        // Get user's votes for all matches
        const { data: userVotes } = await supabase
          .from('votes')
          .select('match_id, team_id')
          .eq('user_id', user.id)
          .in('match_id', matchIds)

        // Get vote counts for all matches
        const { data: allVotes } = await supabase
          .from('votes')
          .select('match_id, team_id')
          .in('match_id', matchIds)

        // Process user votes
        const userVotesMap: { [key: string]: string } = {}
        userVotes?.forEach((vote) => {
          userVotesMap[vote.match_id] = vote.team_id
        })

        // Process vote counts
        const voteCountsMap: { [key: string]: { [key: string]: number } } = {}
        allVotes?.forEach((vote) => {
          if (!voteCountsMap[vote.match_id]) {
            voteCountsMap[vote.match_id] = {}
          }
          voteCountsMap[vote.match_id][vote.team_id] =
            (voteCountsMap[vote.match_id][vote.team_id] || 0) + 1
        })

        setVoteData({
          userVotes: userVotesMap,
          voteCounts: voteCountsMap,
        })
      }
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchMatches()
  }, [user])

  const filteredMatches = matches.filter((match) => {
    if (activeTab === 'all') return true
    if (activeTab === 'today') return isToday(match.match_date)
    if (activeTab === 'upcoming')
      return new Date(match.match_date) >= new Date() && match.status === 'upcoming'
    if (activeTab === 'past') return match.status === 'completed'
    return true
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-[200px] w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : filteredMatches.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  showVoteControls={isToday(match.match_date)}
                  userVote={voteData.userVotes[match.id]}
                  voteCount={voteData.voteCounts[match.id]}
                  onMatchUpdated={fetchMatches}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No matches found</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

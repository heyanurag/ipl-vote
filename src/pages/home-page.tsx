'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MatchCard } from '@/components/matches/match-card'
import type { Database } from '@/lib/database.types'
import { CalendarDays } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { Leaderboard } from '@/components/home/leaderboard'

type Team = Database['public']['Tables']['teams']['Row']
type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team
}

export function HomePage() {
  const [todayMatches, setTodayMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [voteData, setVoteData] = useState<{
    userVotes: { [key: string]: string }
    voteCounts: { [key: string]: { [key: string]: number } }
  }>({ userVotes: {}, voteCounts: {} })
  const { user } = useAuth()

  const fetchTodayMatches = async () => {
    setLoading(true)

    // Use the RPC function to get today's matches
    const { data, error } = await supabase.rpc('get_todays_matches')

    if (error) {
      console.error("Error fetching today's matches:", error)
      setLoading(false)
      return
    }

    // If we have matches, get the team details
    if (data && data.length > 0) {
      const matchIds = data.map((match) => match.id)

      const { data: matchesWithTeams, error: teamError } = await supabase
        .from('matches')
        .select(
          `
          *,
          team1:team1_id(*),
          team2:team2_id(*),
          winner:winner_id(*)
        `
        )
        .in('id', matchIds)
        .order('match_time', { ascending: true })

      if (teamError) {
        console.error('Error fetching match details:', teamError)
      } else if (matchesWithTeams) {
        setTodayMatches(matchesWithTeams as unknown as Match[])

        // Fetch vote data for all matches
        if (user) {
          // Get user's votes for today's matches
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
    } else {
      setTodayMatches([])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchTodayMatches()
  }, [user])

  return (
    <div className="container py-6 max-w-7xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Today's Matches</CardTitle>
              <CardDescription>Vote for your favorite teams in today's matches</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-[200px] bg-muted rounded-lg" />
                  ))}
                </div>
              ) : todayMatches.length > 0 ? (
                <div className="space-y-6">
                  {todayMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      showVoteControls={true}
                      userVote={voteData.userVotes[match.id]}
                      voteCount={voteData.voteCounts[match.id]}
                      onVoteSuccess={() => {
                        // Refresh the matches after voting
                        fetchTodayMatches()
                      }}
                      onMatchUpdated={() => {
                        // Refresh the matches after admin updates
                        fetchTodayMatches()
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No matches today</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Check back later or view all upcoming matches.
                  </p>
                  <Button asChild className="mt-4">
                    <Link to="/matches">View All Matches</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}

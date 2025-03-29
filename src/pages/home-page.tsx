'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { MatchCard } from '@/components/matches/match-card'
import { Leaderboard } from '@/components/home/leaderboard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import type { Database } from '@/lib/database.types'
import { CalendarDays } from 'lucide-react'

type Team = Database['public']['Tables']['teams']['Row']
type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team
}

export function HomePage() {
  const [todayMatches, setTodayMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

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
      }
    } else {
      setTodayMatches([])
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchTodayMatches()
  }, [])

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

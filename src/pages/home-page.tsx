'use client'

import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MatchCard } from '@/components/matches/match-card'
import { CalendarDays } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useTodaysMatches, useVoteStats } from '@/lib/query-hooks'
import { Leaderboard } from '@/components/home/leaderboard'

export function HomePage() {
  const { data: todayMatches = [], isLoading } = useTodaysMatches()
  const { userVotes, voteCounts } = useVoteStats(todayMatches)

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
              {isLoading ? (
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
                      userVote={userVotes[match.id]}
                      voteCount={voteCounts[match.id]}
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

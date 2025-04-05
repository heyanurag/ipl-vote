'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MatchCard } from '@/components/matches/match-card'
import { Skeleton } from '@/components/ui/skeleton'
import { isToday } from '@/lib/utils'
import { useMatches, useVoteStats } from '@/lib/query-hooks'

export function MatchList() {
  const [activeTab, setActiveTab] = useState('all')
  const { data: matches = [], isLoading } = useMatches()
  const { userVotes, voteCounts } = useVoteStats(matches)

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
          {isLoading ? (
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
                  showVoteControls={isToday(match.match_date) || match.status === 'completed'}
                  userVote={userVotes[match.id]}
                  voteCount={voteCounts[match.id]}
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

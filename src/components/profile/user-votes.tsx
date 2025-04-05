'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import { Check, X } from 'lucide-react'
import { useVotesByUser } from '@/lib/query-hooks'

interface UserVotesProps {
  userId: string
}

export function UserVotes({ userId }: UserVotesProps) {
  const { data: votes = [], isLoading } = useVotesByUser(userId)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voting History</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-lg" />
            ))}
          </div>
        ) : votes.length > 0 ? (
          <div className="space-y-4">
            {votes.map((vote) => (
              <div
                key={vote.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {vote.match.team1.short_name} vs {vote.match.team2.short_name}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {formatDate(vote.match.match_date)}
                    </Badge>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm">Voted for:</span>
                    <Badge variant="secondary" className="font-medium">
                      {vote.team.short_name}
                    </Badge>
                  </div>
                </div>

                <div>
                  {vote.is_correct === true && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="text-sm font-medium">Correct</span>
                    </div>
                  )}

                  {vote.is_correct === false && (
                    <div className="flex items-center gap-1 text-red-600">
                      <X className="h-4 w-4" />
                      <span className="text-sm font-medium">Incorrect</span>
                    </div>
                  )}

                  {vote.is_correct === null && vote.match.status === 'completed' && (
                    <Badge variant="outline" className="text-xs">
                      No result
                    </Badge>
                  )}

                  {vote.is_correct === null && vote.match.status !== 'completed' && (
                    <Badge variant="outline" className="text-xs">
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No votes found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

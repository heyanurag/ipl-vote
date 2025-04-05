'use client'

import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Trophy } from 'lucide-react'
import { useLeaderboard } from '@/lib/query-hooks'

export function Leaderboard() {
  const { data: leaderboard = [], isLoading } = useLeaderboard(10)

  const getTrophyColor = (position: number) => {
    switch (position) {
      case 0:
        return 'text-yellow-500'
      case 1:
        return 'text-gray-400'
      case 2:
        return 'text-amber-600'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 py-2">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="space-y-1 flex-1">
                  <div className="h-4 w-24 bg-muted rounded" />
                  <div className="h-3 w-16 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : leaderboard.length > 0 ? (
          <div className="space-y-2">
            {leaderboard.map((entry, index) => (
              <Link
                key={entry.user_id}
                to={`/profile/${entry.user_id}`}
                className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center justify-center w-8">
                  {index < 3 ? (
                    <Trophy className={`h-5 w-5 ${getTrophyColor(index)}`} />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                  )}
                </div>

                <Avatar className="h-8 w-8">
                  <AvatarFallback>{entry.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <p className="text-sm font-medium">{entry.username}</p>
                  <p className="text-xs text-muted-foreground">
                    {entry.correct_votes} correct of {entry.total_votes} votes
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium">
                    {Math.round((entry.correct_votes / (entry.total_votes || 1)) * 100)}%
                  </p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground">No data available yet</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

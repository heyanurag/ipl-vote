'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useProfile, useVotesByUser } from '@/lib/query-hooks'
import { useMemo } from 'react'

interface UserStatsProps {
  userId: string
}

export function UserStats({ userId }: UserStatsProps) {
  const { data: profile, isLoading: isProfileLoading } = useProfile(userId)
  const { data: votes = [], isLoading: isVotesLoading } = useVotesByUser(userId)

  // Calculate vote stats from the votes data
  const voteStats = useMemo(() => {
    const total = votes.length
    const correct = votes.filter((v) => v.is_correct === true).length
    const pending = votes.filter((v) => v.is_correct === null).length

    return {
      total,
      correct,
      pending,
    }
  }, [votes])

  const isLoading = isProfileLoading || isVotesLoading

  // Calculate accuracy
  const accuracy = useMemo(() => {
    if (voteStats.total === 0 || voteStats.total === voteStats.pending) return 0
    return Math.round((voteStats.correct / (voteStats.total - voteStats.pending)) * 100)
  }, [voteStats])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="h-6 w-32 bg-muted rounded mb-2" />
          <div className="h-4 w-48 bg-muted rounded" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!profile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User not found</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{profile.username}</CardTitle>
        <CardDescription>
          Member since {new Date(profile.created_at as string).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{voteStats.total}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Correct Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{voteStats.correct}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{isNaN(accuracy) ? '0' : accuracy}%</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

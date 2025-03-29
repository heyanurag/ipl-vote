'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Tables } from '@/lib/database.types'

interface UserStatsProps {
  userId: string
}

export interface UserProfile extends Tables<'profiles'> {}

export function UserStats({ userId }: UserStatsProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [voteStats, setVoteStats] = useState({
    total: 0,
    correct: 0,
    pending: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)

      // Get user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (profileError) {
        console.error('Error fetching profile:', profileError)
      } else if (profileData) {
        setProfile(profileData)
      }

      // Get vote statistics
      const { data: votesData, error: votesError } = await supabase
        .from('votes')
        .select('is_correct')
        .eq('user_id', userId)

      if (votesError) {
        console.error('Error fetching votes:', votesError)
      } else if (votesData) {
        const total = votesData.length
        const correct = votesData.filter((v) => v.is_correct === true).length
        const pending = votesData.filter((v) => v.is_correct === null).length

        setVoteStats({
          total,
          correct,
          pending,
        })
      }

      setLoading(false)
    }

    fetchUserData()
  }, [userId])

  if (loading) {
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

  const accuracy =
    voteStats.total > 0
      ? Math.round((voteStats.correct / (voteStats.total - voteStats.pending)) * 100)
      : 0

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

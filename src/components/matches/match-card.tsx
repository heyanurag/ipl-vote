'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate, formatTime, getMatchStatus } from '@/lib/utils'
import type { Database } from '@/lib/database.types'
import { AlertCircle, Check } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AdminMatchActions } from '@/components/admin/admin-match-actions'
import { useAuth } from '@/lib/auth-context'
import { toast } from 'sonner'

type Team = Database['public']['Tables']['teams']['Row']
type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team
}

interface MatchCardProps {
  match: Match
  showVoteControls?: boolean
  onVoteSuccess?: () => void
  onMatchUpdated?: () => void
  userVote?: string | null
  voteCount?: { [key: string]: number }
}

export function MatchCard({
  match,
  showVoteControls = false,
  onVoteSuccess,
  onMatchUpdated,
  userVote,
  voteCount = {},
}: MatchCardProps) {
  const { user, profile } = useAuth()
  const [loading, setLoading] = useState(false)

  const matchStatus = getMatchStatus(match)
  const isVotingEnabled = showVoteControls && matchStatus === 'upcoming'
  const showAdminControls =
    profile?.is_admin &&
    (matchStatus === 'live' || matchStatus === 'completed' || match.status === 'upcoming')

  const handleVote = async (teamId: string) => {
    if (!user) {
      toast.error('Please log in to vote')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.from('votes').insert({
        user_id: user.id,
        match_id: match.id,
        team_id: teamId,
      })

      if (error) throw error

      onVoteSuccess?.()
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('An error occurred while voting man', {
          description: error.message,
        })
      } else {
        toast.error('An error occurred while voting')
      }
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = () => {
    switch (matchStatus) {
      case 'upcoming':
        return <Badge variant="outline">Upcoming</Badge>
      case 'live':
        return (
          <Badge variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">
            Live
          </Badge>
        )
      case 'completed':
        return (
          <Badge variant="secondary" className="bg-green-500 text-white hover:bg-green-600">
            Completed
          </Badge>
        )
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted p-4 flex flex-row items-center justify-between">
        <div>
          <p className="text-sm font-medium">{formatDate(match.match_date)}</p>
          <p className="text-xs text-muted-foreground">
            {formatTime(match.match_time)} • {match.venue}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge()}
          {showAdminControls && (
            <AdminMatchActions
              match={match}
              onMatchUpdated={() => {
                if (onMatchUpdated) onMatchUpdated()
              }}
            />
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
              {match.team1.logo_url ? (
                <img
                  src={match.team1.logo_url || '/placeholder.svg'}
                  alt={match.team1.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <span className="text-xl font-bold">{match.team1.short_name}</span>
              )}
            </div>
            <h3 className="font-semibold">{match.team1.short_name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {voteCount[match.team1_id] || 0} votes
            </p>
            {match.winner_id === match.team1_id && (
              <Badge
                variant="outline"
                className="mt-2 bg-green-100 text-green-800 border-green-200"
              >
                Winner
              </Badge>
            )}
          </div>

          <div className="text-center">
            <span className="text-2xl font-bold">VS</span>
          </div>

          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
              {match.team2.logo_url ? (
                <img
                  src={match.team2.logo_url || '/placeholder.svg'}
                  alt={match.team2.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <span className="text-xl font-bold">{match.team2.short_name}</span>
              )}
            </div>
            <h3 className="font-semibold">{match.team2.short_name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {voteCount[match.team2_id] || 0} votes
            </p>
            {match.winner_id === match.team2_id && (
              <Badge
                variant="outline"
                className="mt-2 bg-green-100 text-green-800 border-green-200"
              >
                Winner
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      {isVotingEnabled && (
        <CardFooter className="bg-muted p-4 flex justify-between">
          <Button
            variant={userVote === match.team1_id ? 'default' : 'outline'}
            className="w-[45%]"
            onClick={() => handleVote(match.team1_id)}
            disabled={loading || !!userVote}
          >
            {userVote === match.team1_id && <Check className="mr-2 h-4 w-4" />}
            Vote {match.team1.short_name}
          </Button>

          <Button
            variant={userVote === match.team2_id ? 'default' : 'outline'}
            className="w-[45%]"
            onClick={() => handleVote(match.team2_id)}
            disabled={loading || !!userVote}
          >
            {userVote === match.team2_id && <Check className="mr-2 h-4 w-4" />}
            Vote {match.team2.short_name}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

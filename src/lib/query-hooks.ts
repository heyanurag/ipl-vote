import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from './api-service'
import type { Match } from './api-service'

// Query keys
export const queryKeys = {
  matches: ['matches'] as const,
  todaysMatches: ['matches', 'today'] as const,
  userVotes: (userId: string) => ['votes', userId] as const,
  userProfile: (userId: string) => ['profile', userId] as const,
  leaderboard: ['leaderboard'] as const,
  voteStats: (matchId: string) => ['voteStats', matchId] as const,
}

// Match hooks
export function useMatches() {
  return useQuery({
    queryKey: queryKeys.matches,
    queryFn: () => api.matches.getMatches(),
  })
}

export function useTodaysMatches() {
  return useQuery({
    queryKey: queryKeys.todaysMatches,
    queryFn: () => api.matches.getTodaysMatches(),
  })
}

// Vote hooks
export function useVotesByUser(userId: string) {
  return useQuery({
    queryKey: queryKeys.userVotes(userId),
    queryFn: () => api.votes.getVotesByUser(userId),
    enabled: !!userId,
  })
}

export function useVoteStats(matches: Match[] | undefined) {
  const queryClient = useQueryClient()
  const userId = queryClient.getQueryData<string>(['currentUser', 'id'])

  const matchIds = matches?.map((match) => match.id) || []

  const { data: userVotes = {} } = useQuery({
    queryKey: ['userVotes', ...matchIds],
    queryFn: () => api.votes.getUserVotesForMatches(userId, matchIds),
    enabled: !!userId && matchIds.length > 0,
  })

  const { data: voteCounts = {} } = useQuery({
    queryKey: ['voteCounts', ...matchIds],
    queryFn: () => api.votes.getVoteCountsForMatches(matchIds),
    enabled: matchIds.length > 0,
  })

  return { userVotes, voteCounts }
}

export function useCreateOrUpdateVote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      userId,
      matchId,
      teamId,
      hasExistingVote,
    }: {
      userId: string
      matchId: string
      teamId: string
      hasExistingVote?: boolean
    }) => api.votes.createOrUpdateVote(userId, matchId, teamId, hasExistingVote),
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: queryKeys.todaysMatches })
      queryClient.invalidateQueries({ queryKey: queryKeys.matches })
      // Invalidate leaderboard since vote count affects it
      queryClient.invalidateQueries({ queryKey: queryKeys.leaderboard })
      // We don't know which user's votes were affected, so we can't target specific userVotes queries
      queryClient.invalidateQueries({ queryKey: ['userVotes'] })
      queryClient.invalidateQueries({ queryKey: ['voteCounts'] })
    },
  })
}

// Profile hooks
export function useProfile(userId: string) {
  return useQuery({
    queryKey: queryKeys.userProfile(userId),
    queryFn: () => api.profiles.getProfile(userId),
    enabled: !!userId,
  })
}

// Match admin hooks
export function useUpdateMatchResult() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      matchId,
      winnerId,
      status,
    }: {
      matchId: string
      winnerId: string
      status?: string
    }) => api.matches.updateMatchResult(matchId, winnerId, status),
    onSuccess: () => {
      // Invalidate all match-related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.matches })
      queryClient.invalidateQueries({ queryKey: queryKeys.todaysMatches })
      // Also invalidate leaderboard since the results affect it
      queryClient.invalidateQueries({ queryKey: queryKeys.leaderboard })
      // And invalidate all vote queries since vote correctness might have changed
      queryClient.invalidateQueries({ queryKey: ['userVotes'] })
    },
  })
}

// Leaderboard hooks
export function useLeaderboard(limit: number = 10) {
  return useQuery({
    queryKey: [...queryKeys.leaderboard],
    queryFn: () => api.leaderboard.getLeaderboard(limit),
  })
}

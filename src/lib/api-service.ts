import { supabase } from './supabase'
import type { Database } from './database.types'

// Type definitions
export type Team = Database['public']['Tables']['teams']['Row']
export type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team | null
}
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Vote = Database['public']['Tables']['votes']['Row'] & {
  team: Team
  match: Match
}
export type LeaderboardEntry = {
  user_id: string
  username: string
  correct_votes: number
  total_votes: number
}

// API service object
export const api = {
  // Auth related methods
  auth: {
    signIn: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return data
    },

    signUp: async (email: string, password: string, username: string) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      })

      if (error) throw error
      return data
    },

    signOut: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },

    getCurrentUser: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      return user
    },
  },

  // Profile related methods
  profiles: {
    getProfile: async (userId: string) => {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()

      if (error) throw error
      return data as Profile
    },

    updateProfile: async (userId: string, updates: Partial<Profile>) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return data as Profile
    },
  },

  // Match related methods
  matches: {
    getMatches: async () => {
      const { data, error } = await supabase
        .from('matches')
        .select(
          `
          *,
          team1:team1_id(id, name, short_name, logo_url),
          team2:team2_id(id, name, short_name, logo_url),
          winner:winner_id(id, name, short_name, logo_url)
        `
        )
        .order('match_date', { ascending: true })
        .order('match_time', { ascending: true })

      if (error) throw error
      return data as unknown as Match[]
    },

    getTodaysMatches: async () => {
      const { data, error } = await supabase.rpc('get_todays_matches')

      if (error) throw error

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

        if (teamError) throw teamError
        return matchesWithTeams as unknown as Match[]
      }

      return [] as Match[]
    },

    updateMatchResult: async (matchId: string, winnerId: string, status: string = 'completed') => {
      const { data, error } = await supabase.rpc('admin_update_match_result', {
        p_match_id: matchId,
        p_winner_id: winnerId,
        p_status: status,
      })

      if (error) throw error
      return data
    },
  },

  // Vote related methods
  votes: {
    getVotesByUser: async (userId: string) => {
      const { data, error } = await supabase
        .from('votes')
        .select(
          `
          *,
          team:team_id(*),
          match:match_id(
            *,
            team1:team1_id(*),
            team2:team2_id(*),
            winner:winner_id(*)
          )
        `
        )
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as unknown as Vote[]
    },

    getUserVotesForMatches: async (userId: string | undefined, matchIds: string[]) => {
      const userVotes: Record<string, string> = {}

      if (!userId) {
        return {}
      }

      const { data, error } = await supabase
        .from('votes')
        .select('match_id, team_id')
        .eq('user_id', userId)
        .in('match_id', matchIds)

      if (error) throw error

      data.forEach((vote) => {
        userVotes[vote.match_id] = vote.team_id
      })

      return userVotes
    },

    getVoteCountsForMatches: async (matchIds: string[]) => {
      const { data, error } = await supabase
        .from('votes')
        .select('match_id, team_id')
        .in('match_id', matchIds)

      if (error) throw error

      const voteCounts: Record<string, Record<string, number>> = {}
      data?.forEach((vote) => {
        if (!voteCounts[vote.match_id]) {
          voteCounts[vote.match_id] = {}
        }
        voteCounts[vote.match_id][vote.team_id] = (voteCounts[vote.match_id][vote.team_id] || 0) + 1
      })

      return voteCounts
    },

    createOrUpdateVote: async (
      userId: string,
      matchId: string,
      teamId: string,
      hasExistingVote?: boolean
    ) => {
      // If we already know whether the user voted, skip the check
      console.log('Creating or updating vote:', { userId, matchId, teamId, hasExistingVote })
      if (hasExistingVote !== undefined) {
        if (hasExistingVote) {
          // Update existing vote
          const { data, error } = await supabase
            .from('votes')
            .update({ team_id: teamId })
            .eq('user_id', userId)
            .eq('match_id', matchId)
            .select()

          if (error) throw error
          return { data, isNewVote: false }
        } else {
          // Create new vote
          const { data, error } = await supabase
            .from('votes')
            .insert({
              user_id: userId,
              match_id: matchId,
              team_id: teamId,
            })
            .select()

          if (error) throw error
          return { data, isNewVote: true }
        }
      }

      // Fallback to checking if a vote exists when hasExistingVote parameter is not provided
      const { data: existingVote } = await supabase
        .from('votes')
        .select('id')
        .eq('user_id', userId)
        .eq('match_id', matchId)
        .single()

      if (existingVote) {
        // Update existing vote
        const { data, error } = await supabase
          .from('votes')
          .update({ team_id: teamId })
          .eq('user_id', userId)
          .eq('match_id', matchId)
          .select()

        if (error) throw error
        return { data, isNewVote: false }
      } else {
        // Create new vote
        const { data, error } = await supabase
          .from('votes')
          .insert({
            user_id: userId,
            match_id: matchId,
            team_id: teamId,
          })
          .select()

        if (error) throw error
        return { data, isNewVote: true }
      }
    },
  },

  // Leaderboard related methods
  leaderboard: {
    getLeaderboard: async (limit: number = 10) => {
      const { data, error } = await supabase.rpc('get_leaderboard', { limit_count: limit })

      if (error) throw error
      return data as LeaderboardEntry[]
    },
  },
}

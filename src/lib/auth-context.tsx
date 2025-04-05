import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import { api } from './api-service'
import type { Profile } from './api-service'
import { useQueryClient } from '@tanstack/react-query'

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const queryClient = useQueryClient()

  // Effect to handle auth state changes
  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const user = await api.auth.getCurrentUser()
        setUser(user)

        // Store user ID in query client for access in hooks
        if (user) {
          queryClient.setQueryData(['currentUser', 'id'], user.id)
        } else {
          queryClient.removeQueries({ queryKey: ['currentUser'] })
        }

        setLoading(false)
      } catch (error) {
        console.error('Error in getInitialSession:', error)
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event)
      const newUser = session?.user || null
      setUser(newUser)

      // Update user in query client
      if (newUser) {
        queryClient.setQueryData(['currentUser', 'id'], newUser.id)
      } else {
        queryClient.removeQueries({ queryKey: ['currentUser'] })
      }

      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [queryClient])

  // Effect to fetch profile when user changes
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setProfile(null)
        return
      }

      try {
        const profileData = await api.profiles.getProfile(user.id)
        setProfile(profileData)

        // Store profile in query client for access in hooks
        queryClient.setQueryData(['profile', user.id], profileData)
      } catch (error) {
        console.error('Error in fetchProfile:', error)
        setProfile(null)
      }
    }

    fetchProfile()
  }, [user, queryClient])

  const signOut = async () => {
    try {
      await api.auth.signOut()

      // Clear related queries on logout
      queryClient.clear()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

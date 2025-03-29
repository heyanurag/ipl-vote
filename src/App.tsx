"use client"

import type React from "react"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { HomePage } from "@/pages/home-page"
import { MatchesPage } from "@/pages/matches-page"
import { ProfilePage } from "@/pages/profile-page"
import { AuthPage } from "@/pages/auth-page"

function App() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get current user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (loading) return <div>Loading...</div>

    if (!user) {
      return <Navigate to="/auth" replace />
    }

    return <>{children}</>
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="ipl-voting-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/matches" element={<MatchesPage />} />
              <Route
                path="/profile/:id"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/auth" element={user ? <Navigate to="/" replace /> : <AuthPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer className="border-t py-6">
            <div className="container text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} IPL Voting App
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


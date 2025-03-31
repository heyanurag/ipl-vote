'use client'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { HomePage } from '@/pages/home-page'
import { MatchesPage } from '@/pages/matches-page'
import { ProfilePage } from '@/pages/profile-page'
import { AuthPage } from '@/pages/auth-page'
import { AuthProvider } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { useAuth } from '@/lib/auth-context'

function AppRoutes() {
  const { user } = useAuth()

  return (
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
    </Routes>
  )
}

function App() {
  console.log('production', import.meta.env.PROD)
  const isProduction = import.meta.env.PROD

  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <AppRoutes />
            </main>
          </div>
        </Router>
        <Toaster richColors />
        {isProduction ? <Analytics /> : null}
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App

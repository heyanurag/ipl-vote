'use client'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { AuthProvider } from '@/lib/auth-context'
import { QueryProvider } from '@/lib/query-provider'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { useAuth } from '@/lib/auth-context'
import { useInstallPwaPrompt } from './hooks/use-install-pwa-prompt'

// Lazy load page components
const HomePage = lazy(() => import('@/pages/home-page').then(module => ({ 
  default: module.HomePage 
})))
const MatchesPage = lazy(() => import('@/pages/matches-page').then(module => ({ 
  default: module.MatchesPage 
})))
const ProfilePage = lazy(() => import('@/pages/profile-page').then(module => ({ 
  default: module.ProfilePage 
})))
const AuthPage = lazy(() => import('@/pages/auth-page').then(module => ({ 
  default: module.AuthPage 
})))

// Loading fallback component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function AppRoutes() {
  const { user } = useAuth()
  useInstallPwaPrompt()

  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  )
}

function App() {
  const isProduction = import.meta.env.PROD

  return (
    <QueryProvider>
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
    </QueryProvider>
  )
}

export default App

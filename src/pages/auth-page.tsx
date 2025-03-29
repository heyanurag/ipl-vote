import { AuthForm } from "@/components/auth/auth-form"

export function AuthPage() {
  return (
    <div className="container py-10 max-w-7xl">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to IPL Voting</h1>
        <AuthForm />
      </div>
    </div>
  )
}


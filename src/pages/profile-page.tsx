"use client"

import { useParams } from "react-router-dom"
import { UserStats } from "@/components/profile/user-stats"
import { UserVotes } from "@/components/profile/user-votes"

export function ProfilePage() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className="container py-6 max-w-7xl">
        <h1 className="text-2xl font-bold mb-6">User not found</h1>
      </div>
    )
  }

  return (
    <div className="container py-6 max-w-7xl">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      <div className="space-y-6">
        <UserStats userId={id} />
        <UserVotes userId={id} />
      </div>
    </div>
  )
}


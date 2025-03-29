"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import type { Database } from "@/lib/database.types"
import { Check, X } from "lucide-react"

type Team = Database["public"]["Tables"]["teams"]["Row"]
type Match = Database["public"]["Tables"]["matches"]["Row"] & {
  team1: Team
  team2: Team
  winner?: Team
}

interface Vote {
  id: string
  match_id: string
  team_id: string
  is_correct: boolean | null
  created_at: string
  match: Match
  team: Team
}

interface UserVotesProps {
  userId: string
}

export function UserVotes({ userId }: UserVotesProps) {
  const [votes, setVotes] = useState<Vote[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVotes = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from("votes")
        .select(`
          *,
          team:team_id(*),
          match:match_id(
            *,
            team1:team1_id(*),
            team2:team2_id(*),
            winner:winner_id(*)
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching votes:", error)
      } else if (data) {
        setVotes(data as unknown as Vote[])
      }

      setLoading(false)
    }

    fetchVotes()
  }, [userId])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voting History</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-lg" />
            ))}
          </div>
        ) : votes.length > 0 ? (
          <div className="space-y-4">
            {votes.map((vote) => (
              <div key={vote.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {vote.match.team1.short_name} vs {vote.match.team2.short_name}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {formatDate(vote.match.match_date)}
                    </Badge>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm">Voted for:</span>
                    <Badge variant="secondary" className="font-medium">
                      {vote.team.name}
                    </Badge>
                  </div>
                </div>

                <div>
                  {vote.is_correct === true && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="text-sm font-medium">Correct</span>
                    </div>
                  )}

                  {vote.is_correct === false && (
                    <div className="flex items-center gap-1 text-red-600">
                      <X className="h-4 w-4" />
                      <span className="text-sm font-medium">Incorrect</span>
                    </div>
                  )}

                  {vote.is_correct === null && vote.match.status === "completed" && (
                    <Badge variant="outline" className="text-xs">
                      No result
                    </Badge>
                  )}

                  {vote.is_correct === null && vote.match.status !== "completed" && (
                    <Badge variant="outline" className="text-xs">
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No votes found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


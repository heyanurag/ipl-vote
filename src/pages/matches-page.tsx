import { MatchList } from "@/components/matches/match-list"

export function MatchesPage() {
  return (
    <div className="container py-6 max-w-7xl">
      <h1 className="text-2xl font-bold mb-6">IPL Matches</h1>
      <MatchList />
    </div>
  )
}


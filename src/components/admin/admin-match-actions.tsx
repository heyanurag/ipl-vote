'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { MoreVertical, Trophy } from 'lucide-react'
import { useUpdateMatchResult } from '@/lib/query-hooks'
import type { Match } from '@/lib/api-service'

interface AdminMatchActionsProps {
  match: Match
  onMatchUpdated: () => void
}

export function AdminMatchActions({ match, onMatchUpdated }: AdminMatchActionsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedWinner, setSelectedWinner] = useState<string | null>(match.winner_id || null)
  
  // Use React Query mutation
  const updateMatchMutation = useUpdateMatchResult()

  const handleUpdateMatch = async () => {
    if (!selectedWinner) {
      toast.warning('Please select a winning team')
      return
    }

    try {
      await updateMatchMutation.mutateAsync({
        matchId: match.id,
        winnerId: selectedWinner,
        status: 'completed',
      })

      toast.success('Match result has been updated')
      setIsDialogOpen(false)
      onMatchUpdated()
    } catch (error: any) {
      toast.error('Failed to update match result')
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Admin actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <Trophy className="mr-2 h-4 w-4" />
            <span>Set Match Result</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Match Result</DialogTitle>
            <DialogDescription>Select the winning team for this match.</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <RadioGroup
              value={selectedWinner || ''}
              onValueChange={setSelectedWinner}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value={match.team1_id} id={`team-${match.team1_id}`} />
                <Label htmlFor={`team-${match.team1_id}`} className="flex-1 cursor-pointer">
                  {match.team1.name}
                </Label>
              </div>

              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value={match.team2_id} id={`team-${match.team2_id}`} />
                <Label htmlFor={`team-${match.team2_id}`} className="flex-1 cursor-pointer">
                  {match.team2.name}
                </Label>
              </div>
            </RadioGroup>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={updateMatchMutation.isPending}>
              Cancel
            </Button>
            <Button onClick={handleUpdateMatch} disabled={updateMatchMutation.isPending || !selectedWinner}>
              {updateMatchMutation.isPending ? 'Updating...' : 'Save Result'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

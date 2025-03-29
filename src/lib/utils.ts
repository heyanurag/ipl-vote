import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Database } from './database.types'

type Team = Database['public']['Tables']['teams']['Row']
type Match = Database['public']['Tables']['matches']['Row'] & {
  team1: Team
  team2: Team
  winner?: Team
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatTime(timeString: string): string {
  // Parse time string in format "HH:MM:SS"
  const [hours, minutes] = timeString.split(':')
  const date = new Date()
  date.setHours(Number.parseInt(hours, 10))
  date.setMinutes(Number.parseInt(minutes, 10))

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export function isToday(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export function getMatchStatus(match: Match): 'upcoming' | 'live' | 'completed' {
  if (match.status === 'completed') {
    return 'completed'
  }

  if (match.status === 'live') {
    return 'live'
  }

  const matchDateTime = new Date(`${match.match_date}T${match.match_time}`)
  const now = new Date()

  if (matchDateTime <= now) {
    return 'live'
  }

  return 'upcoming'
}

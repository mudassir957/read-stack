import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name?: string): string => {
  if (!name) return ''

  const parts = name.trim().split(/\s+/).filter(Boolean)

  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase()
  }

  return parts
    .map(part => part[0].toUpperCase())
    .join('')
    .slice(0, 2)
}

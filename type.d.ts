import { UserRoundIcon } from 'lucide-react'
import { string } from 'zod'

interface Book {
  id: string
  title: string
  author: string
  genre: string
  rating: number
  totalCopies: number
  availableCopies: number
  description: string
  coverColor: string
  coverUrl: string
  summary: string
  createdAt: Date | null
}

interface User {
  id: string
  fullName: string
  email: string
  universityId: number
  password: string
  universityCard: string
  status: string
  role: string
  lastActivityDate: Date | null
  createdAt: Date | null
}

interface AuthCredentials {
  fullName: string
  email: string
  password: string
  universityId: number
  universityCard: string
}

interface BookParams {
  title: string
  author: string
  genre: string
  rating: number
  coverUrl: string
  coverColor: string
  description: string
  totalCopies: number
  summary: string
}

interface BorrowBookParams {
  bookId: string
  userId: string
}

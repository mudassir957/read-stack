import { number, z } from 'zod'

export const SignUpSchema = z.object({
  fullName: z.string().min(6).max(30),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty(),
  password: z.string().min(6).max(30),
})

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
})

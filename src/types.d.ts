import { type DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    refreshToken: string
    user: {
      id: string
    } & DefaultSession['user']
  }
}

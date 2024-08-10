import NextAuth from 'next-auth'
import authConfig from '@/auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session ({ session, token }) {
      // Pasar los valores del token a la sesión
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.user.id = token.id as string

      return session
    },
    async jwt ({ token, account, profile }) {
      if ((account != null) && (profile != null)) {
        token.accessToken = account.access_token as string
        token.refreshToken = account.refresh_token as string
        token.id = profile.id as string
      }

      return token
    }
  },
  ...authConfig
})

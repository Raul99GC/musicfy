import NextAuth from "next-auth"

import authConfig from '@/auth.config'
import { apiLoginRoute, publicRoutes, DEFAULT_LOGIN_REDIRECT } from "@/routes"



const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req) {

  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiLoginRoute = nextUrl.pathname.startsWith(apiLoginRoute)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

  if (isApiLoginRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
  }

  if (!isLoggedIn && isPublicRoute) {
    console.log({ pathname: nextUrl.pathname })
    return Response.redirect(new URL(apiLoginRoute, nextUrl))
  }


  return
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
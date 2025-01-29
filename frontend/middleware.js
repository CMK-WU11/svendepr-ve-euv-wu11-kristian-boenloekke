import { NextResponse } from "next/server"

export function middleware(req) {
  const { pathname } = req.nextUrl
  const hasSessionCookie = req.cookies.get('hasSeenWelcome')

  if (pathname === '/' && !hasSessionCookie) {
    const url = req.nextUrl.clone()
    url.pathname = '/welcome'
    return NextResponse.redirect(url)
  }

  if (pathname === '/welcome' && hasSessionCookie) {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  if (pathname === '/welcome') {
    const res = NextResponse.next()
    res.cookies.set('hasSeenWelcome', 'true', {
      path: '/', 
      httpOnly: true, 
    })
    return res
  }

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], 
}



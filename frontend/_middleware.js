import { NextResponse } from "next/server";

// Brug af middleware for adgang til currentPath i server-komponenter er hentet fra dette eksempel
// https://medium.com/@beecodeguy/access-current-pathname-in-server-components-next-js-app-router-81686d2ed60f

export function middleware(request) {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname)
  console.log('middleware: x-current-path', request.nextUrl.pathname);
  
  return NextResponse.next({ headers })
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
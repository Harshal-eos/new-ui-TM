import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // If accessing root path, redirect to /en
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/en', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Only match the root path
        '/',
    ],
}

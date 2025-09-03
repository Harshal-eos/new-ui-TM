import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // If accessing root path, redirect to /en
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/en', request.url))
    }

    // Check if pathname starts with a valid language code
    const pathnameIsMissingLocale = ['en', 'fr', 'es'].every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // If pathname doesn't start with a valid language code, redirect to /en
    if (pathnameIsMissingLocale && pathname !== '/') {
        return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico|images|manifest.json|robots.txt|sitemap.xml).*)',
    ],
}

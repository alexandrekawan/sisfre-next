import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'

    const { pathname } = req.nextUrl

    if (pathname === '/') {
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}
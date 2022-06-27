import { NextResponse, NextRequest } from 'next/server'

const redirects = [
    {
        from: '/',
        to: '/login'
    },
    {
        from: '/professor',
        to: '/professor/myschedule'
    }
]

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl

    for (let redirect of redirects) {
        if (redirect.from === pathname) {
            console.log(redirect)
            const url = req.nextUrl.clone()
            url.pathname = redirect.to

            NextResponse.redirect(url)

            break
        }
    }


    return NextResponse.next()
}
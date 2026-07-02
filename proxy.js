import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { SESSION_COOKIE_NAME } from './lib/constants';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const config = {
  matcher: ['/admin/:path*'],
};

export async function proxy(req) {
  if (req.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

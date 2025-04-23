// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ambil nilai cookie 'role' dari request
  const role = req.cookies.get('role')?.value;

  // Jika user mencoba akses dashboard TANPA login
  if (pathname.startsWith('/dashboard') && !role) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Aktifkan middleware untuk semua path yang dimulai dari /dashboard/
export const config = {
  matcher: ['/dashboard/:path*'],
};

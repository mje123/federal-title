import { NextResponse, type NextRequest } from 'next/server';

const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/mfa/enroll', '/portal/mfa/verify'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/portal')) return NextResponse.next();
  if (PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next();

  // Lightweight cookie check — no SDK needed in edge runtime.
  // The dashboard layout does full Supabase verification; this just
  // redirects obviously-unauthenticated requests before they hit the server.
  const hasSbSession = request.cookies.getAll().some(
    (c) => c.name.startsWith('sb-') && c.name.endsWith('-auth-token')
  );

  if (!hasSbSession) {
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*'],
};

import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/mfa/enroll', '/portal/mfa/verify'];

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Always refresh session — required by @supabase/ssr
  const { data: { user } } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/portal')) return supabaseResponse;

  // Allow login and MFA pages through (they handle their own redirects if already authed)
  if (PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p))) return supabaseResponse;

  // No session → login
  if (!user) {
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }

  // Email allowlist — set ADMIN_ALLOWED_EMAILS as comma-separated list in env
  const allowedEmails = process.env.ADMIN_ALLOWED_EMAILS?.split(',').map((e) => e.trim().toLowerCase()) ?? [];
  if (allowedEmails.length > 0 && !allowedEmails.includes((user.email ?? '').toLowerCase())) {
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL('/portal/login?error=unauthorized', request.url));
  }

  // Enforce MFA (AAL2) for all portal pages
  const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

  if (aal?.currentLevel !== 'aal2') {
    const { data: factors } = await supabase.auth.mfa.listFactors();
    const hasEnrolled = (factors?.totp?.length ?? 0) > 0;
    const dest = hasEnrolled ? '/portal/mfa/verify' : '/portal/mfa/enroll';
    return NextResponse.redirect(new URL(dest, request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/portal/:path*'],
};

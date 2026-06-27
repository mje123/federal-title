import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/mfa/enroll', '/portal/mfa/verify'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/portal')) return NextResponse.next({ request });

  // Allow login and MFA pages through unconditionally
  if (PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next({ request });

  // If Supabase env vars are missing, fall through to the page (login will handle it)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }

  try {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
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
    });

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }

    const allowedEmails = process.env.ADMIN_ALLOWED_EMAILS?.split(',').map((e) => e.trim().toLowerCase()) ?? [];
    if (allowedEmails.length > 0 && !allowedEmails.includes((user.email ?? '').toLowerCase())) {
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL('/portal/login?error=unauthorized', request.url));
    }

    const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

    if (aal?.currentLevel !== 'aal2') {
      const { data: factors } = await supabase.auth.mfa.listFactors();
      const hasEnrolled = (factors?.totp?.length ?? 0) > 0;
      const dest = hasEnrolled ? '/portal/mfa/verify' : '/portal/mfa/enroll';
      return NextResponse.redirect(new URL(dest, request.url));
    }

    return supabaseResponse;
  } catch {
    // Supabase unreachable (paused project, network error) — redirect to login
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }
}

export const config = {
  matcher: ['/portal/:path*'],
};

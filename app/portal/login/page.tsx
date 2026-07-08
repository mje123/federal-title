'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Eye, EyeOff, Lock } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState(
    params.get('error') === 'unauthorized' ? 'Your account is not authorized to access this portal.' : ''
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = createClient();
    let authError;
    try {
      const result = await supabase.auth.signInWithPassword({ email, password });
      authError = result.error;
    } catch {
      setError('Connection error — please try again.');
      setLoading(false);
      return;
    }

    if (authError) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }

    // Check MFA status
    const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

    if (aal?.nextLevel === 'aal2') {
      const { data: factors } = await supabase.auth.mfa.listFactors();
      const hasEnrolled = (factors?.totp?.length ?? 0) > 0;
      router.push(hasEnrolled ? '/portal/mfa/verify' : '/portal/mfa/enroll');
    } else {
      router.push('/portal');
    }

    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[var(--color-primary-900)] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Staff Portal</h1>
          <p className="text-white/50 text-sm mt-1">Federal Title & Escrow</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[var(--color-neutral-600)] uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
              placeholder="you@federaltitle.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--color-neutral-600)] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-[var(--color-neutral-300)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-600)]"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PortalLogin() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

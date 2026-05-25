'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ShieldCheck } from 'lucide-react';

export default function MFAVerify() {
  const router = useRouter();
  const [factorId, setFactorId] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFactorId() {
      const supabase = createClient();
      const { data } = await supabase.auth.mfa.listFactors();
      if (data?.totp?.[0]) setFactorId(data.totp[0].id);
    }
    getFactorId();
  }, []);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!factorId) return;
    setError('');
    setLoading(true);

    const supabase = createClient();
    const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({ factorId });
    if (challengeError || !challenge) {
      setError('Could not initiate challenge. Please sign in again.');
      setLoading(false);
      return;
    }

    const { error: verifyError } = await supabase.auth.mfa.verify({
      factorId,
      challengeId: challenge.id,
      code: code.trim(),
    });

    if (verifyError) {
      setError('Incorrect code. Check your authenticator app and try again.');
      setLoading(false);
      return;
    }

    window.location.replace('/portal');
  }

  return (
    <div className="min-h-screen bg-[var(--color-primary-900)] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Two-Factor Verification</h1>
          <p className="text-white/50 text-sm mt-1">Open your authenticator app</p>
        </div>

        <form onSubmit={handleVerify} className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[var(--color-neutral-600)] uppercase tracking-wider mb-1.5">
              6-Digit Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              required
              autoFocus
              placeholder="000000"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm text-center tracking-[0.5em] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
              autoComplete="one-time-code"
            />
          </div>

          <button
            type="submit"
            disabled={loading || code.length !== 6 || !factorId}
            className="w-full py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying…' : 'Enter Portal'}
          </button>
        </form>
      </div>
    </div>
  );
}

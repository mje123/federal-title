'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { ShieldCheck } from 'lucide-react';

export default function MFAEnroll() {
  const router = useRouter();
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [factorId, setFactorId] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [enrolling, setEnrolling] = useState(true);

  useEffect(() => {
    async function enroll() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.mfa.enroll({ factorType: 'totp', issuer: 'Federal Title Portal' });
      if (error || !data) {
        setError('Failed to generate QR code. Please try signing in again.');
        setEnrolling(false);
        return;
      }
      setQrCode(data.totp.qr_code);
      setSecret(data.totp.secret);
      setFactorId(data.id);
      setEnrolling(false);
    }
    enroll();
  }, []);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const supabase = createClient();

    const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({ factorId });
    if (challengeError || !challenge) {
      setError('Challenge failed. Please try again.');
      setLoading(false);
      return;
    }

    const { error: verifyError } = await supabase.auth.mfa.verify({
      factorId,
      challengeId: challenge.id,
      code: code.trim(),
    });

    if (verifyError) {
      setError('Incorrect code. Try again.');
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
          <h1 className="text-xl font-bold text-white">Set Up Two-Factor Auth</h1>
          <p className="text-white/50 text-sm mt-1">Required for all staff accounts</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {enrolling ? (
            <p className="text-sm text-center text-[var(--color-neutral-500)]">Generating QR code…</p>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary-900)] mb-2">
                  Step 1 — Scan this QR code
                </p>
                <p className="text-xs text-[var(--color-neutral-500)] mb-4">
                  Open <strong>Google Authenticator</strong>, <strong>Authy</strong>, or any TOTP app and scan the code below.
                </p>
                {qrCode && (
                  <div className="flex justify-center">
                    <Image src={qrCode} alt="QR code for 2FA setup" width={180} height={180} unoptimized />
                  </div>
                )}
                {secret && (
                  <div className="mt-3 bg-[var(--color-neutral-50)] rounded-lg p-3 text-center">
                    <p className="text-xs text-[var(--color-neutral-400)] mb-1">Can't scan? Enter this key manually:</p>
                    <p className="font-mono text-xs text-[var(--color-neutral-700)] break-all select-all">{secret}</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary-900)] mb-2">
                    Step 2 — Enter the 6-digit code
                  </p>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                    required
                    placeholder="000000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm text-center tracking-[0.5em] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
                    autoComplete="one-time-code"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || code.length !== 6}
                  className="w-full py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
                >
                  {loading ? 'Verifying…' : 'Activate & Enter Portal'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

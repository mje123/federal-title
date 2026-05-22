import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REAL Credit™ — Save Up to $750 | Federal Title & Escrow',
  description: 'REAL Credit™ has saved homebuyers over $32 million in closing costs. Order your settlement services online and receive up to $750 back at closing.',
};

export default function RealCreditPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">REAL Benefits™</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            REAL Credit™
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Save up to $750 in closing costs — just by ordering your settlement services online. Over $32 million saved and counting.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                How It Works
              </h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                Federal Title does not share profits with real estate agents or brokerages through Affiliated Business Arrangements (ABA) or Marketing Service Agreements (MSA). By keeping those relationships independent, we pass the savings directly to you — averaging up to $750 per closing.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8">
                Simply order your settlement services online at federaltitle.com. Takes about 5–7 minutes. The credit is applied at your closing.
              </p>
              <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
                Order Online Now
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-4">Eligibility Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Settlement services must be ordered online at federaltitle.com',
                    'Property must be in DC, Maryland, Virginia, or Florida',
                    'Homebuyers only (not available to sellers)',
                    'Subject to lender underwriting approval',
                    'Cannot be combined with other Federal Title programs',
                    'Properties with title insurance reissue rate discounts are ineligible',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-600)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-neutral-700)]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--color-accent-600)] rounded-xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-1">$32M+</div>
                <div className="text-white/80 text-sm">Saved by homebuyers through REAL Credit™</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Start Saving Today
          </h2>
          <p className="text-white/70 mb-8">Order online in 5 minutes and lock in your $750 credit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Order Services
            </Link>
            <Link href="/real-benefits" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              All REAL Benefits™
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homebuying Fees | Federal Title & Escrow Company',
  description: 'Understand title fees, settlement fees, and closing costs when buying a home in DC, Maryland, or Virginia.',
};

export default function HomebuyingFeesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Homebuyers</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Homebuying Fees & Closing Costs
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Understand every fee you'll pay at settlement — and how Federal Title keeps costs low.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">
          <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed">
            Closing costs fall into three categories: title fees, title insurance premiums, and taxes. Taxes are the same across all title companies. Title insurance premiums are generally regulated by underwriters. Title fees — the settlement fees charged by the title company — are where you'll find the most significant variation.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Variable Title Fees (Shop These)
            </h2>
            <div className="space-y-3">
              {[
                { fee: 'Settlement / Closing Fee', desc: 'Federal Title\'s settlement fee is all-inclusive. Most title companies itemize and charge separately for each service. Always compare total fees.' },
                { fee: 'Title Search / Abstract Fee', desc: 'The cost to search public records for liens, judgments, and ownership history.' },
                { fee: 'Title Insurance Premium', desc: 'A one-time fee for your owner\'s title policy. Rate varies by underwriter and coverage type (standard vs. enhanced).' },
                { fee: 'Location Survey Fee', desc: 'Required in some transactions to confirm property boundaries.' },
                { fee: 'Courier / Overnight Fee', desc: 'Charged by some companies for document delivery. Federal Title minimizes these costs.' },
              ].map(({ fee, desc }) => (
                <div key={fee} className="flex gap-4 p-5 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary-900)] mb-1 text-sm">{fee}</h3>
                    <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Non-Variable Costs (Same Everywhere)
            </h2>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              These costs are the same regardless of which title company you choose:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'DC Recordation & Transfer Taxes',
                'Maryland State Transfer & Recordation Taxes',
                'Virginia Recordation Tax',
                'Document Recording Fees',
                'Government Tax Stamps',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-neutral-700)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-neutral-400)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-100)] rounded-xl p-6">
            <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Save Up to $750 with REAL Credit™</h3>
            <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Order your settlement services online at federaltitle.com and receive a closing cost credit of up to $750. Over $32 million saved by homebuyers to date.
            </p>
            <Link href="/order" className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Order Online & Save $750
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            See Your Exact Closing Costs
          </h2>
          <p className="text-white/70 mb-8">Get a guaranteed, itemized quote in minutes — no surprises at closing.</p>
          <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Get a Guaranteed Quote
          </Link>
        </div>
      </section>
    </>
  );
}

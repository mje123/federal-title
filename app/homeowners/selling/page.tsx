import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selling Your Home | Federal Title & Escrow Company',
  description: 'Selling your home in DC, MD or VA? Federal Title handles your settlement. Learn about seller fees, transfer taxes, and remote closing options.',
};

export default function HomeownersSellingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Homeowners</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Selling Your Home
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Federal Title handles the settlement for sellers in DC, Maryland, and Virginia — efficiently, transparently, and with attorney oversight.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                What Sellers Can Expect
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Title Clearance', desc: 'We research and clear any liens, judgments, or encumbrances on your property before closing.' },
                  { title: 'Mortgage Payoff', desc: 'We coordinate payoff of your existing mortgage(s) directly from sale proceeds.' },
                  { title: 'Transfer Tax Coordination', desc: 'We calculate and collect all applicable transfer taxes and ensure proper remittance.' },
                  { title: 'Proceeds Disbursement', desc: 'Net proceeds are wired to you on the day of closing or next business day.' },
                  { title: 'Document Recording', desc: 'The new deed and release of your mortgage are recorded with the county within hours.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-[var(--color-primary-900)]">{title} — </span>
                      <span className="text-sm text-[var(--color-neutral-700)]">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Calculate Your Proceeds</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-4">
                  Use the Close It!™ app to generate a complete Seller Net Proceeds Sheet showing your estimated walk-away amount.
                </p>
                <div className="flex gap-3">
                  <a href="https://closeit.federaltitle.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--color-accent-600)] hover:underline">
                    Open Close It!™ →
                  </a>
                  <Link href="/sellers/calculate-proceeds" className="text-sm font-medium text-[var(--color-accent-600)] hover:underline">
                    Proceeds Guide →
                  </Link>
                </div>
              </div>
              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Close Remotely</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-3">
                  Sellers can close from anywhere with Federal Title's remote closing option — no office visit required.
                </p>
                <Link href="/sellers/remote-closing" className="text-sm font-medium text-[var(--color-accent-600)] hover:underline">
                  Learn about remote closings →
                </Link>
              </div>
              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Your Right to Choose</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                  While the buyer traditionally selects the title company in the DMV, sellers can request Federal Title. Talk to your agent or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Close Your Sale?
          </h2>
          <p className="text-white/70 mb-8">Contact Federal Title or order services online to get started.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Order Services
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculate Your Sale Proceeds | Federal Title & Escrow Company',
  description: 'Calculate how much you\'ll pocket from your home sale. Review seller fees, transfer taxes, and use the Close It!™ app for a complete net proceeds sheet.',
};

export default function CalculateProceedsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Sellers</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Seller's Net Proceeds Calculator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Understand exactly what you'll walk away with after your home sale — before you ever reach the closing table.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                What Costs Do Sellers Pay?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Settlement / Title Fees',
                    desc: 'Federal Title\'s all-inclusive settlement fee covers title search, document preparation, and settlement coordination. No nickel-and-diming.',
                  },
                  {
                    title: 'Transfer Taxes',
                    desc: 'In DC and Maryland, sellers typically pay the transfer tax portion. In Virginia, transfer taxes are split between buyer and seller or negotiated in the contract.',
                  },
                  {
                    title: 'Real Estate Commission',
                    desc: 'Agent commissions are typically the largest seller cost, usually ranging from 2–3% per agent side.',
                  },
                  {
                    title: 'Mortgage Payoff',
                    desc: 'Your existing mortgage(s) are paid off from proceeds at closing. Federal Title handles all payoff coordination.',
                  },
                  {
                    title: 'Pro-Rated Real Estate Taxes',
                    desc: 'Property taxes are prorated between buyer and seller based on the closing date.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-600)] mt-1 self-stretch max-h-4" />
                    <div>
                      <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{title}</h3>
                      <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--color-primary-900)] rounded-xl p-8 text-white">
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Get Your Net Proceeds Sheet
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  For a complete, itemized Seller Net Proceeds Sheet, use our free Close It!™ app. It calculates your exact walk-away number including all fees, taxes, and commissions.
                </p>
                <a
                  href="https://closeit.federaltitle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full h-12 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
                >
                  Open Close It!™ App
                </a>
              </div>

              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-3">Sellers, Know Your Rights</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                  In the DMV, the buyer traditionally chooses the title company — but sellers can request Federal Title for their transaction. Ask your agent about using Federal Title, or contact us directly to discuss your options.
                </p>
              </div>

              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-3">Close Remotely</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-4">
                  Sellers can close from anywhere with Federal Title's remote closing option — powered by Stavvy. No need to be physically present.
                </p>
                <Link href="/sellers/remote-closing" className="text-sm font-medium text-[var(--color-accent-600)] hover:underline">
                  Learn about remote closings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8">Contact Federal Title or order services online to begin your home sale.</p>
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

import type { Metadata } from 'next';
import QuickQuoteEmbed from './QuickQuoteEmbed';

export const metadata: Metadata = {
  title: 'Get a Guaranteed Quote | Federal Title & Escrow Company',
  description:
    'Get an instant, itemized closing cost quote for your DC, MD, or VA home purchase or refinance. No hidden fees. Attorney-led title company serving the DMV since 1996.',
  alternates: { canonical: 'https://www.federaltitle.com/quick-quote' },
};

export default function QuickQuotePage() {
  return (
    <>
      {/* Crawlable hero — indexed by search engines; iframe content is not */}
      <section className="bg-[var(--color-primary-900)] text-white py-14">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Free &amp; Instant
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get a Guaranteed Quote
          </h1>
          <p className="text-white/70 text-lg">
            Instant, itemized closing costs for DC, Maryland &amp; Virginia purchases and refinances.
            No hidden fees. No obligation. Order online and save up to $750 with REAL Benefits™.
          </p>
        </div>
      </section>

      {/* Auto-resizing iframe embed */}
      <QuickQuoteEmbed />

      {/* Crawlable SEO content below the fold */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-2xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            About Our Guaranteed Quote
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[var(--color-neutral-700)] leading-relaxed">
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">What's included</h3>
              <p>
                Your quote includes all title fees, title insurance premiums, recording fees, and
                transfer taxes — everything that appears on your Closing Disclosure. Federal Title
                is one of the only title companies in the DC metro area to provide a truly itemized,
                guaranteed quote online with no bait-and-switch.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">Save up to $750</h3>
              <p>
                Order your settlement services online and receive up to a $750 REAL Credit™ applied
                directly to your closing costs. Federal Title is independently owned and passes
                savings from avoided referral arrangements directly back to homebuyers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">DC, Maryland &amp; Virginia</h3>
              <p>
                We provide quotes and closings for properties in Washington DC, all Maryland
                counties, and Northern Virginia. Our attorneys are licensed across all three
                jurisdictions and handle purchases, refinances, and seller-side transactions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">Questions?</h3>
              <p>
                Call us at{' '}
                <a href="tel:+12023621500" className="text-[var(--color-primary-700)] font-medium hover:underline">
                  (202) 362-1500
                </a>{' '}
                or email{' '}
                <a href="mailto:info@federaltitle.com" className="text-[var(--color-primary-700)] font-medium hover:underline">
                  info@federaltitle.com
                </a>
                . Our team is happy to walk through your quote or answer any questions before you
                order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

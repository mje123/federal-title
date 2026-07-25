import type { Metadata } from 'next';
import FtEmbed from '@/components/FtEmbed';

export const metadata: Metadata = {
  title: 'Order Closing Services | Federal Title & Escrow Company',
  description:
    'Order title and settlement services online. Drop your sales contract and receive up to $750 in REAL Credits plus 2 hours of free REALegal™ consultation when you order through Federal Title.',
  alternates: { canonical: 'https://www.federaltitle.com/order' },
};

export default function OrderPage() {
  return (
    <>
      {/* Auto-resizing iframe embed */}
      <FtEmbed path="/public/order" title="Start Your Order | Federal Title & Escrow" />

      {/* Crawlable SEO content below the fold */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-2xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            About Ordering With Federal Title
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[var(--color-neutral-700)] leading-relaxed">
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">What's included</h3>
              <p>
                Order online and automatically receive up to $750 in REAL Credit™ toward your
                closing costs, plus 2 hours of free REALegal™ consultation. You&apos;ll get a
                closing process tracker and a complete cash-to-close picture from day one.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">Purchasing or refinancing</h3>
              <p>
                Purchasing? Drop your signed sales contract and we&apos;ll take it from there.
                Refinancing? Switch to the Refinance tab above for a short manual form.
                You&apos;ll receive a confirmation email right away.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">Attorney-led closing</h3>
              <p>
                Every closing is led by a licensed attorney, not a processor. We handle
                purchases, refinances, and seller-side transactions across Washington DC,
                Maryland, and Northern Virginia.
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
                <a href="mailto:order@federaltitle.com" className="text-[var(--color-primary-700)] font-medium hover:underline">
                  order@federaltitle.com
                </a>
                . Our team is happy to help before or after you order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

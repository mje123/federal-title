import type { Metadata } from 'next';
import Image from 'next/image';
import { Zap, ShieldCheck, Users, Star } from 'lucide-react';
import QuickQuoteEmbed from './QuickQuoteEmbed';

export const metadata: Metadata = {
  title: 'Get a Guaranteed Quote | Federal Title & Escrow Company',
  description:
    'Get an instant, itemized closing cost quote for your DC, MD, or VA home purchase or refinance. No hidden fees. Attorney-led title company serving the DMV since 1996.',
  alternates: { canonical: 'https://www.federaltitle.com/quick-quote' },
};

const whyUs = [
  {
    icon: Zap,
    title: 'Fast & Guaranteed',
    description: 'A detailed, itemized quote in under a minute.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Know your costs upfront.',
  },
  {
    icon: Users,
    title: 'Attorney-Led Closings',
    description: 'Experienced real estate attorneys in DC, MD & VA.',
  },
  {
    icon: Star,
    title: 'Trusted Since 1996',
    description: 'Independent. Local. Committed to a better closing experience.',
  },
];

export default function QuickQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-[var(--color-neutral-200)] lg:h-[420px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src="/images/hero/capitol-rowhouses-quote.png"
            alt="U.S. Capitol dome seen from a tree-lined DC rowhouse street"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8 py-16 lg:py-0 lg:h-full lg:flex lg:flex-col lg:justify-center">
          <p className="text-[var(--color-accent-600)] font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            Fast. Accurate. Attorney-Led.
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-4 lg:whitespace-nowrap leading-tight"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get your <em className="italic text-[var(--color-accent-600)]">guaranteed</em> quote.
          </h1>
          <p className="text-lg text-[var(--color-neutral-600)] max-w-xl">
            A detailed, itemized quote in under a minute.
          </p>
        </div>
      </section>

      {/* Quote tool + sidebar */}
      <section className="py-12 lg:py-16 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div>
              <QuickQuoteEmbed />
            </div>

            <aside className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-8 lg:sticky lg:top-24">
              <h2
                className="text-xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Why get a quote from us?
              </h2>
              <ul className="space-y-6">
                {whyUs.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <div
                      className={
                        i === 0
                          ? 'h-11 w-11 rounded-full flex items-center justify-center shrink-0 bg-[var(--color-accent-600)] text-white'
                          : 'h-11 w-11 rounded-full flex items-center justify-center shrink-0 bg-white border-2 border-[var(--color-accent-600)] text-[var(--color-accent-600)]'
                      }
                    >
                      <item.icon className="h-5 w-5" fill={item.icon === Star ? 'currentColor' : 'none'} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-primary-900)] mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="my-8 border-t border-[var(--color-neutral-200)]" />

              <p
                className="italic text-center text-[var(--color-accent-700)] leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                More than a title company.
                <br />
                A partner in your next move.
              </p>

              <div className="relative mt-8 h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/rowhouses-sidebar.png"
                  alt="Historic DC rowhouses on a tree-lined street"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-[var(--color-neutral-500)] mt-4">
                Serving DC <span className="mx-1">|</span> Maryland <span className="mx-1">|</span> Virginia
              </p>
            </aside>
          </div>
        </div>
      </section>

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

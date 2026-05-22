import Link from 'next/link';
import { DollarSign, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homebuying Guide | Federal Title & Escrow Company',
  description:
    'What to expect when you\'re expecting to close on time. Federal Title\'s complete homebuying guide for DC, Maryland & Virginia buyers.',
};

export default function HomebuyingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Buyer&apos;s Resource
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Homebuying Guide
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            What to expect when you&apos;re expecting to close on time.
          </p>
        </div>
      </section>

      {/* Buyer's right */}
      <section className="py-14 bg-[var(--color-accent-50)] border-b border-[var(--color-accent-100)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2
            className="text-2xl font-bold text-[var(--color-primary-900)] mb-3"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Buyers, it&apos;s your right to choose
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg">
            It is the legal right of the homebuyer to choose the title company in DC, Maryland and Virginia. Don&apos;t let your agent or lender make this choice for you — shop title fees and get the service you deserve.
          </p>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Understanding Closing Costs
            </h2>
            <p className="text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
              Approximately 70% of closing costs that are variable are title-related, including the insurance premium and service charges. When buying a home, you will need closing funds beyond the down payment. As a general rule, tack on 3% to 6% of the purchase price to account for closing costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: 'Title Insurance Premiums',
                desc: 'Calculate your homebuying title insurance premium for enhanced or standard coverage. Rates are filed with DC, Maryland, and Virginia — Federal Title can help you find the most competitive underwriter.',
                link: { text: 'Get a Quote', href: '/quick-quote' },
              },
              {
                icon: <FileText className="h-6 w-6" />,
                title: 'Settlement Fees',
                desc: "Review homebuying costs and other important information homebuyers need to know ahead of closing. Federal Title's settlement fee is all-inclusive — no itemized nickel-and-diming.",
                link: { text: 'Compare Fees', href: '/quick-quote' },
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Transfer & Recordation Taxes',
                desc: 'For DC, MD & VA homebuyers, explore homebuying taxes paid at closing. Taxes are the same across the board — no variance between title companies.',
                link: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-7"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed mb-4">{item.desc}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                  >
                    {item.link.text} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL Benefits */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What&apos;s Included with Federal Title
          </h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: 'REAL Credit™',
                desc: 'Homebuyers save up to $750 by ordering services with Federal Title online.',
                href: '/real-benefits',
              },
              {
                title: 'REALegal™',
                desc: 'Homebuyers who close with us receive peace of mind with up to 2 hours of free legal counsel.',
                href: '/realegal',
              },
              {
                title: 'REALSafe™',
                desc: 'Explore contactless closing options and wire fraud prevention designed to keep you safe.',
                href: '/realsafe',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] mb-3">{item.desc}</p>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to get your closing cost estimate?"
        description="Get a guaranteed quote in under 2 minutes. Order online and save up to $750."
        primaryAction={{ text: 'Just a Quote, Please »', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

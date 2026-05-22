import Link from 'next/link';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeowners | Federal Title & Escrow Company',
  description:
    'Refinancing or transferring a deed? Federal Title handles homeowner transactions in DC, Maryland & Virginia with attorney oversight and transparent pricing.',
};

export default function HomeownersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Homeowners
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Already Own? We Can Help.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Whether you&apos;re refinancing, transferring a deed, or tapping home equity — Federal Title&apos;s attorneys are here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quick-quote"
              className="px-6 py-3 rounded-lg bg-white text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-neutral-100)] transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: 'Refinancing',
                desc: 'Refinancing your mortgage? We handle lender title insurance policies, title searches, and settlement for refinance transactions — with the same attorney oversight as a purchase closing.',
                href: '/homeowners/refinancing',
              },
              {
                title: 'Deed Transfers',
                desc: 'Adding or removing a name from a deed, transferring property between family members, or putting a property into a trust? Our attorneys handle deed transfers efficiently and correctly.',
                href: '/homeowners/deed-transfers',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-8"
              >
                <h3
                  className="text-xl font-bold text-[var(--color-primary-900)] mb-3"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--color-neutral-600)] mb-5 leading-relaxed">{item.desc}</p>
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
        title="Have questions about your property?"
        description="Our attorneys are happy to talk through your situation. Give us a call or get a quote online."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Contact Us', href: '/contact' }}
        background="gradient"
      />
    </>
  );
}

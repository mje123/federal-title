import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinancing | Federal Title & Escrow Company',
  description:
    'Refinancing your mortgage in DC, Maryland or Virginia? Federal Title provides lender title insurance, title searches, and settlement for refinance transactions with attorney oversight.',
};

export default function RefinancingPage() {
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
            Refinancing
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Attorney-led refinance closings with transparent pricing for DC, Maryland & Virginia homeowners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What to expect at your refinance closing
          </h2>
          <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
            A refinance closing involves many of the same steps as a purchase closing — title search, lender title insurance policy, and settlement services — but typically without an owner&apos;s policy or transfer taxes.
          </p>
          <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
            Federal Title&apos;s attorneys oversee every refinance closing to ensure accuracy and compliance. Get a guaranteed quote online in under 2 minutes.
          </p>

          <div className="space-y-3 mb-10">
            {[
              "Title search to clear any clouds on your title",
              "Lender's title insurance policy (required by your lender)",
              "Attorney oversight throughout the process",
              "Transparent, all-inclusive settlement fee",
              "In-office or remote closing options available",
              "Closing process tracker so you know exactly where things stand",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0" />
                <span className="text-[var(--color-neutral-700)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/quick-quote"
              className="px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
            >
              Get a Refinance Quote
            </Link>
            <Link
              href="/order"
              className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-semibold hover:bg-[var(--color-primary-50)] transition-colors"
            >
              Order Services
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to refinance?"
        description="Get a guaranteed quote in under 2 minutes. No obligation, transparent pricing."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Contact Us', href: '/contact' }}
        background="gradient"
      />
    </>
  );
}

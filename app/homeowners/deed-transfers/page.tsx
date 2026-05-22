import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deed Transfers | Federal Title & Escrow Company',
  description:
    'Federal Title handles deed transfers in DC, Maryland & Virginia — adding or removing a name, family transfers, trust placement, and more. Attorney oversight on every transaction.',
};

export default function DeedTransfersPage() {
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
            Deed Transfers
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Attorney-prepared deed transfers for DC, Maryland & Virginia property owners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            When do you need a deed transfer?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              'Adding or removing a spouse from the deed',
              'Transferring property between family members',
              'Placing property into a trust',
              'Removing a deceased owner from the deed',
              'Correcting errors on an existing deed',
              'Changing how you hold title (joint tenancy, tenancy in common, etc.)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0" />
                <span className="text-[var(--color-neutral-700)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-primary-50)] rounded-xl border border-[var(--color-primary-200)] p-7 mb-8">
            <h3
              className="text-xl font-bold text-[var(--color-primary-900)] mb-3"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Attorney oversight on every deed
            </h3>
            <p className="text-[var(--color-neutral-600)] leading-relaxed">
              Deed transfers in DC, Maryland, and Virginia can trigger transfer taxes and recordation fees. Our attorneys ensure your deed is drafted correctly, filed with the proper county or city, and that all tax implications are understood before you sign.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
            >
              Contact Us About a Deed Transfer
            </Link>
            <Link
              href="/quick-quote"
              className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-semibold hover:bg-[var(--color-primary-50)] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Need to transfer a deed?"
        description="Our attorneys handle deed transfers efficiently and correctly. Contact us to get started."
        primaryAction={{ text: 'Contact Us', href: '/contact' }}
        secondaryAction={{ text: 'Get a Quote', href: '/quick-quote' }}
        background="gradient"
      />
    </>
  );
}

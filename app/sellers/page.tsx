import Link from 'next/link';
import { CheckCircle2, DollarSign, Laptop } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Sellers | Federal Title & Escrow Company',
  description:
    'Selling your home in DC, Maryland or Virginia? Federal Title handles seller closings — in-person or remotely. Calculate your net proceeds and get a guaranteed quote.',
};

export default function SellersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Sellers
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Selling Your Home?
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Federal Title makes the seller side of closing simple — in-person at any of our five offices, or remotely from anywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quick-quote"
              className="px-6 py-3 rounded-lg bg-white text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-neutral-100)] transition-colors"
            >
              Just a Quote, Please »
            </Link>
            <Link
              href="/order"
              className="px-6 py-3 rounded-lg bg-[var(--color-accent-500)] text-white font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
            >
              Order Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-4xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                What sellers can expect
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: 'Calculate Your Net Proceeds',
                    desc: 'Use our free Seller\'s Net Proceeds calculator to see exactly what you\'ll walk away with after closing costs and fees.',
                  },
                  {
                    icon: <Laptop className="h-5 w-5" />,
                    title: 'Remote Closing Available',
                    desc: 'Sellers can close remotely with Federal Title attorneys from any smart device, any time, within minutes. No need to come in.',
                  },
                  {
                    icon: <CheckCircle2 className="h-5 w-5" />,
                    title: 'Transparent Seller Fees',
                    desc: 'Our fees are published online. No surprises — you\'ll know exactly what you owe before closing day.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{item.title}</h3>
                      <p className="text-[var(--color-neutral-600)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-2xl border border-[var(--color-neutral-200)] p-8">
              <h3
                className="text-2xl font-bold text-[var(--color-primary-900)] mb-3"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Remote Closing
              </h3>
              <p className="text-[var(--color-neutral-600)] mb-4">
                These days consumers expect every aspect of their real estate transactions to be digitized. Sellers can close remotely with Federal Title attorneys — from any smart device, any time, within minutes.
              </p>
              <Link
                href="/sellers/remote-closing"
                className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
              >
                Learn about remote closing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to close?"
        description="Get a guaranteed quote and see your estimated net proceeds before you commit."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

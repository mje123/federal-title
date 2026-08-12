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

      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">
          <div>
            <h2
              className="text-4xl font-bold text-[var(--color-primary-900)] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Settlement Fees for Sellers
            </h2>
            <p className="text-[var(--color-neutral-600)] text-lg max-w-2xl">
              Our fees are published online — no surprises, and you&apos;ll know exactly what you owe before closing day.
            </p>
          </div>

          <div>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)] bg-white">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-primary-900)] text-white">
                    <th className="text-left p-4 font-semibold">Title Services</th>
                    <th className="text-left p-4 font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-neutral-200)]">
                    <td className="p-4 font-semibold text-[var(--color-primary-900)]">
                      Settlement Fee (all inclusive¹)
                    </td>
                    <td className="p-4 text-[var(--color-primary-900)] font-bold">$550</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[var(--color-primary-900)]">
                      Mortgage Payoff / Release Procurement
                    </td>
                    <td className="p-4 text-[var(--color-primary-900)] font-bold">
                      $185{' '}
                      <span className="text-xs font-medium text-[var(--color-neutral-500)]">(per lien)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary-900)] mb-1">Additional / Other Services</h3>
            <p className="text-sm text-[var(--color-neutral-500)] mb-4">
              These services are not required for all transactions.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)] bg-white">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-neutral-100)]">
                    <th className="text-left p-4 font-semibold text-[var(--color-primary-900)]">Service</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-primary-900)]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Mortgage Payoff / Release Procurement', fee: '$185' },
                    { service: 'Title Clearing Services²', fee: '$200 (per hour)' },
                    { service: 'Power of Attorney Document Preparation', fee: '$150' },
                    { service: 'FIRPTA Withholding', fee: '$750' },
                    { service: 'MD Non-Resident Withholding', fee: '$125' },
                    { service: 'Deed Preparation (required for sale of property)', fee: '$250' },
                    { service: 'Deed Preparation (if amending title, but not selling property)', fee: '$500' },
                  ].map(({ service, fee }) => (
                    <tr key={service} className="border-b border-[var(--color-neutral-100)]">
                      <td className="p-4 text-[var(--color-neutral-700)]">{service}</td>
                      <td className="p-4 font-semibold text-[var(--color-primary-900)]">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[var(--color-neutral-200)] space-y-3 text-sm text-[var(--color-neutral-600)]">
            <p>
              <strong>¹</strong> Includes notary fees, courier/wire costs and E-document storage/delivery, but does
              not include additional services set forth above.
            </p>
            <p>
              <strong>²</strong> In the event that liens require additional title clearance proceedings, upon
              notification to the seller, an additional charge for additional services will be added.
            </p>
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

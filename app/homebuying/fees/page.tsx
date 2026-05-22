'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomebuyingFeesPage() {
  const [activeTab, setActiveTab] = useState<'dc' | 'md' | 'va'>('dc');

  const included = [
    'Title Exam',
    'Electronic Storage + Access',
    'Closing Protection Letter (CPL)',
    'Courier Costs',
    'Tax Certificate',
    'Recording Service (if applicable)',
    'Notary',
  ];

  const jurisdictions = {
    dc: {
      label: 'District of Columbia',
      fees: [
        { label: 'Settlement Fee (all inclusive¹)', amount: '$1,275' },
      ],
      poaFee: '$150',
      applicableNote: 'Prices applicable to the District of Columbia. All other jurisdictions, use our Quick Quote.',
    },
    md: {
      label: 'Maryland',
      fees: [
        { label: 'Montgomery County (all inclusive¹)', amount: '$1,275' },
        { label: 'Other Counties (all inclusive¹)', amount: '$1,475' },
      ],
      poaFee: '$125',
      applicableNote: 'Prices applicable to Montgomery and Prince George\'s counties. All other jurisdictions, use our Quick Quote.',
    },
    va: {
      label: 'Virginia',
      fees: [
        { label: 'Arlington, Fairfax, City of Alexandria (all inclusive¹)', amount: '$1,275' },
        { label: 'Other Counties (all inclusive¹)', amount: '$1,475' },
      ],
      poaFee: '$125',
      applicableNote: 'Prices applicable to Arlington and Fairfax counties and the City of Alexandria. All other jurisdictions, use our Quick Quote.',
    },
  };

  const active = jurisdictions[activeTab];

  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Homebuyers</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Settlement Fees for Homebuyers
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Homebuyers can save on closing costs by price shopping multiple title service providers.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">

          {/* Jurisdiction tabs */}
          <div className="flex border-b border-[var(--color-neutral-200)]">
            {(['dc', 'md', 'va'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  activeTab === key
                    ? 'border-[var(--color-accent-600)] text-[var(--color-accent-600)]'
                    : 'border-transparent text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)]'
                }`}
              >
                {key === 'dc' ? 'D.C.' : key === 'md' ? 'Maryland' : 'Virginia'}
              </button>
            ))}
          </div>

          {/* Fee table */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              {active.label}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-primary-900)] text-white">
                    <th className="text-left p-4 font-semibold">Service</th>
                    <th className="text-left p-4 font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {active.fees.map(({ label, amount }) => (
                    <tr key={label} className="border-b border-[var(--color-neutral-200)]">
                      <td className="p-4 font-semibold text-[var(--color-primary-900)]">{label}</td>
                      <td className="p-4 text-[var(--color-primary-900)] font-bold">{amount}</td>
                    </tr>
                  ))}
                  {included.map((item) => (
                    <tr key={item} className="border-b border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)]">
                      <td className="p-4 pl-8 text-[var(--color-neutral-700)]">{item}</td>
                      <td className="p-4 text-[var(--color-neutral-500)] text-xs font-medium">Included</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[var(--color-neutral-500)] mt-3">
              Our settlement fee is all-inclusive. For bank-owned / foreclosure, new construction, short sale and commercial properties, settlement fees may vary.{' '}
              <Link href="/quick-quote" className="text-[var(--color-accent-600)] hover:underline">Use Quick Quote</Link> for an accurate and anonymous closing cost estimate.
            </p>
          </div>

          {/* Additional services */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary-900)] mb-1">Additional Services¹</h3>
            <p className="text-sm text-[var(--color-neutral-500)] mb-4">These services are not required for all transactions.</p>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-neutral-100)]">
                    <th className="text-left p-4 font-semibold text-[var(--color-primary-900)]">Service</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-primary-900)]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Power of Attorney Document Preparation', fee: active.poaFee },
                    { service: 'Simultaneous 2nd Trust Document Preparation²', fee: '$300' },
                    { service: 'Buyer Remote / Mobile Notary Closing / Signing³', fee: '$200' },
                    { service: 'Expedited Closing⁴', fee: '$350' },
                  ].map(({ service, fee }) => (
                    <tr key={service} className="border-b border-[var(--color-neutral-100)]">
                      <td className="p-4 text-[var(--color-neutral-700)]">{service}</td>
                      <td className="p-4 font-semibold text-[var(--color-primary-900)]">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-neutral-400)] mt-2">{active.applicableNote}</p>
          </div>

          {/* Footnotes */}
          <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)] space-y-3 text-sm text-[var(--color-neutral-600)]">
            <p><strong>¹</strong> The all-inclusive fee does not include the additional services listed above, as they are not required for all transactions.</p>
            <p><strong>²</strong> An additional document preparation fee of $300 applies if you obtain a second mortgage (i.e., home equity line of credit) simultaneously with your transaction.</p>
            <p><strong>³ IMPORTANT:</strong> Due to the numerous documents required to be signed by homebuyers and the lender-imposed signature rules, buyer remote closings pose a significant risk to the homebuyer. For lender-financed transactions, original wet-ink documents must be signed and returned to our offices no later than the date of closing. A missing signature, initial, improper document date, or improper notarization would nullify the closing and require a re-scheduling; the result of which may jeopardize the homebuyer&apos;s performance under the terms of their sales contract and put them at risk of default. Note also that many mortgage lenders prohibit the practice of homebuyer remote closings/signings.</p>
            <p><strong>⁴</strong> For requests to close within 10 business days from the date of the title order.</p>
          </div>

          {/* Context note */}
          <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-100)] rounded-xl p-6">
            <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
              Settlement fees are fixed, meaning they remain constant regardless of purchase price. However, settlement fees are not the only fees included in closing costs. Consumers must also pay transfer &amp; recordation taxes (buyer &amp; seller, respectively) and a title insurance policy premium. These costs vary depending on the purchase price of your home.{' '}
              <strong>By law, it is the buyer&apos;s right to choose what title company handles their closing.</strong> A little shopping can save a homebuyer thousands of dollars.
            </p>
          </div>

          {/* Save $750 */}
          <div className="bg-[var(--color-primary-900)] rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Save Up to $750 with REAL Credit™</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Order your settlement services online at federaltitle.com and receive a closing cost credit of up to $750. Over $32 million saved by homebuyers to date.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quick-quote" className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
                Get a Guaranteed Quote
              </Link>
              <Link href="/order" className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
                Order Online &amp; Save $750
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

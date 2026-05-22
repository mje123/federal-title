import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DC Homestead Deduction | Federal Title & Escrow Company',
  description:
    'The DC Homestead Deduction reduces your assessed property value by up to $85,000 and caps annual assessment increases at 10%. Learn how to apply and qualify.',
};

export default function DcHomesteadDeductionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            DC Property Tax Relief
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            DC Homestead Deduction
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Property tax relief for DC homeowners who occupy their property as a primary residence — with additional
            savings available for seniors and disabled persons.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Key Benefits
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-2">
                $85,000 Assessed Value Reduction
              </h3>
              <p className="text-[var(--color-neutral-600)] leading-relaxed">
                Qualifying homeowners receive a deduction of up to $85,000 from the assessed value of their property,
                directly lowering the taxable base.
              </p>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-2">
                10% Annual Assessment Cap
              </h3>
              <p className="text-[var(--color-neutral-600)] leading-relaxed">
                An assessment cap prevents taxation on more than a 10% annual increase in assessed value, protecting
                homeowners from sudden spikes in property taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Qualification Criteria
          </h2>
          <p className="text-[var(--color-neutral-700)] mb-6 leading-relaxed">
            To qualify for the DC Homestead Deduction, all four of the following conditions must be met:
          </p>
          <div className="space-y-5">
            {[
              {
                num: '1',
                title: 'File an Application',
                desc: 'Submit an application with the DC Office of Tax and Revenue. Title companies — including Federal Title — can assist during the closing process.',
              },
              {
                num: '2',
                title: 'Property Requirements',
                desc: 'The property cannot exceed five dwelling units and must be your principal residence.',
              },
              {
                num: '3',
                title: 'DC Domicile',
                desc: 'You must be domiciled in DC, meaning you possess a DC-issued ID, are registered to vote in DC, and file DC income taxes.',
              },
              {
                num: '4',
                title: 'U.S. Citizenship',
                desc: 'Generally, you must be a U.S. Citizen. Some G-4 visa holders may qualify with employer verification.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{item.title}</h3>
                  <p className="text-[var(--color-neutral-600)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Application Timeline
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">October 1 – March 31</h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Applications filed during this period receive <strong>full-year benefits</strong> for the upcoming
                tax year.
              </p>
            </div>
            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">April 1 – September 30</h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Applications filed during this period receive <strong>half benefits</strong> on the second-half tax
                bill, with full deductions for future years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Restrictions */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Important Restrictions
          </h2>
          <ul className="space-y-3">
            {[
              'Only one property per person can receive the deduction.',
              'You must cancel the deduction if the property is no longer your primary residence.',
              'Properties rented out must have the deduction cancelled.',
              'You cannot maintain the deduction on non-owner-occupied properties.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-neutral-700)]">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Relief */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Additional Relief for Seniors &amp; Disabled Persons
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-3">Senior Citizens</h3>
              <p className="text-[var(--color-neutral-600)] leading-relaxed">
                Eligible seniors age 65 or older can save approximately <strong>50% on property taxes</strong> if
                household income is under $125,000 and they own at least 50% of the property.
              </p>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6">
              <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-3">Disabled Persons</h3>
              <p className="text-[var(--color-neutral-600)] leading-relaxed">
                Requires SSA certification or disability payment documentation, at least 50% ownership, and
                household income under $134,550.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            We&apos;ll Help You Apply at Closing
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Federal Title assists DC homebuyers with the Homestead Deduction application during the closing process.
            Get started with a guaranteed quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Get a Guaranteed Quote
            </Link>
            <Link
              href="/dc-tax-abatement"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              DC Tax Abatement →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

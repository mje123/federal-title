import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DC First-Time Homebuyer Reduced Recordation Tax | Federal Title & Escrow Company',
  description:
    'Qualifying DC first-time homebuyers pay a reduced recordation tax rate of just 0.725% at closing. Learn the income limits, property requirements, and how to apply.',
};

const incomeTable = [
  { members: '1', limit: '$194,940' },
  { members: '2', limit: '$222,840' },
  { members: '3', limit: '$250,740' },
  { members: '4', limit: '$278,460' },
  { members: '5', limit: '$300,780' },
  { members: '6', limit: '$323,100' },
  { members: '7', limit: '$345,420' },
  { members: '8', limit: '$367,740' },
];

export default function DcReducedRecordationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            DC First-Time Homebuyer Benefit
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Recordation Tax Reductions for DC First-Time Homebuyers
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            First-time DC homebuyers who qualify pay less in taxes at closing — a reduced recordation tax rate of
            just 0.725%.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            How to Qualify
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-4 leading-relaxed">
            District of Columbia lawmakers created this benefit to reduce the tax burden for qualifying first-time
            homebuyers. Under this program, the recordation tax at settlement for houses and condos drops to{' '}
            <strong>0.725%</strong>. Seller transfer taxes remain at 1.1% or 1.45% based on sales price — the
            entire benefit goes to qualifying buyers.
          </p>
          <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed">
            The title company files an application with the DC Office of Tax and Revenue at closing. Applicants must
            provide documentation proving they meet property requirements, household income limits, and DC first-time
            homebuyer criteria.
          </p>
          <p className="text-[var(--color-neutral-500)] text-sm mt-4 italic">
            Information updated April 14, 2025. Not guaranteed.
          </p>
        </div>
      </section>

      {/* Property Eligibility */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Property Eligibility
          </h2>
          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6 mb-6">
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              <strong>Maximum sales price: $753,000.</strong> The property must qualify for DC&apos;s Homestead
              Deduction. Properties that fail to qualify for the Homestead Deduction will not receive the reduced
              recordation rate, and additional tax may apply.
            </p>
          </div>
        </div>
      </section>

      {/* Income Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Household Income Limits
          </h2>
          <p className="text-[var(--color-neutral-700)] mb-6 leading-relaxed">
            All deed grantees plus occupying residents must provide their prior-year Form 1040 U.S. Individual Tax
            Return. Tenants under separate leases and those under 18 years of age do not count toward income
            limits.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-primary-900)] text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Household Members</th>
                  <th className="px-5 py-3 text-left font-semibold">Income Limit</th>
                </tr>
              </thead>
              <tbody>
                {incomeTable.map((row, i) => (
                  <tr
                    key={row.members}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]'}
                  >
                    <td className="px-5 py-3 text-[var(--color-neutral-700)]">{row.members}</td>
                    <td className="px-5 py-3 text-[var(--color-neutral-700)] font-medium">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Required Documentation
          </h2>
          <ul className="space-y-3">
            {[
              'Settlement Statement or Closing Disclosure copy',
              'DC Homestead Deduction application copy',
              "Each applicant's complete U.S. Individual Income Tax Return (Form 1040) from immediately before closing",
              'Additional documentation if applicant previously owned DC property with an ex-spouse (now divorced or separated)',
              'Audit materials if required by the Recorder of Deeds',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-neutral-700)]">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                What is the definition of a DC first-time homebuyer?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                A &ldquo;DC first-time homebuyer&rdquo; is someone who has never owned eligible property as their
                principal residence. This includes individuals who were divorced or separated and did not obtain an
                ownership interest in a previously joint-owned principal residence through a settlement agreement or
                court order. All deed grantees must be first-time District homebuyers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                Is there a residency requirement?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Applicants must be domiciled in DC or have immediate plans to reside there upon closing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                Can the seller share in the tax reduction?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                No. The entire tax reduction benefit must go to qualifying homebuyers on the deed. Sellers pay their
                full transfer tax.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                I previously owned DC property jointly with my ex-spouse. Can I still qualify?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Possibly. If prior DC ownership was joint only with an ex-spouse, you may still qualify. Submit a
                written separation agreement or court order showing you relinquished ownership to the ex-spouse.
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
            See Your Full Savings Picture
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Federal Title files the reduced recordation tax application on your behalf at closing. Get a guaranteed
            quote to see exactly what you&apos;ll pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Get a Guaranteed Quote
            </Link>
            <Link
              href="/dc-homestead-deduction"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Homestead Deduction →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

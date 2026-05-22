import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DC Tax Abatement Program | Federal Title & Escrow Company',
  description:
    'Learn about the DC Tax Abatement Program — exemption from recordation tax at settlement plus 5 years of property tax relief for qualifying first-time homebuyers in Washington DC.',
};

const incomeTable = [
  { members: '1', limit: '$80,100' },
  { members: '2', limit: '$91,550' },
  { members: '3', limit: '$102,950' },
  { members: '4', limit: '$114,350' },
  { members: '5', limit: '$123,500' },
  { members: '6', limit: '$132,700' },
  { members: '7', limit: '$141,850' },
  { members: '8', limit: '$150,960' },
];

export default function DcTaxAbatementPage() {
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
            DC Tax Abatement Program
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Exemption from recordation tax at settlement and up to 5 years of property tax relief for qualifying
            lower-income first-time homebuyers in the District of Columbia.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Program Overview
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-4 leading-relaxed">
            The DC Tax Abatement Program assists lower-income first-time homebuyers in the District of Columbia.
            Qualified applicants receive an exemption from DC Recordation Tax at settlement and become exempt from
            property taxes for their first 5 years of homeownership, beginning the next full tax year after closing.
          </p>
          <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] rounded-xl p-6 mt-6">
            <p className="text-[var(--color-neutral-800)] font-medium">
              For properties under $400,000, qualifying buyers save approximately <strong>2.2% of the purchase
              price</strong> in combined recordation and transfer taxes — plus years of property tax savings.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Eligibility Requirements
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                Purchase Price Limit
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                The maximum purchase price is <strong>$556,000</strong>. Properties above this threshold do not
                qualify for the Tax Abatement Program.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-4">
                Household Income Limits
              </h3>
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

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                Domiciliation in DC
              </h3>
              <p className="text-[var(--color-neutral-700)] mb-3 leading-relaxed">
                Applicants must be domiciled in DC, which requires all of the following:
              </p>
              <ul className="space-y-2">
                {[
                  'Obtaining a DC government-issued ID',
                  'Registering to vote in DC',
                  'Filing DC Personal Income taxes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--color-neutral-700)]">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                Property Requirements
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                The property must serve as the purchaser&apos;s primary residence. The purchaser must actually live in
                the property to maintain eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Required Documentation
          </h2>
          <p className="text-[var(--color-neutral-700)] mb-6 leading-relaxed">
            Applications require the following documents. Federal Title assists with the FP-420 filing process at
            closing:
          </p>
          <ul className="space-y-3">
            {[
              'Completed FP-420 application form',
              'Copy of the Closing Disclosure',
              'Fully executed sales contract',
              'W-2 forms',
              'Proof of household income',
              'Employment verification or notarized affidavits for non-working household members',
              'Profit and loss statements for self-employed applicants',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-neutral-700)]">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--color-neutral-600)] text-sm mt-6 italic">
            Applications may be filed up to 3 years after the closing settlement date.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Take Advantage of DC Tax Abatement?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Federal Title guides qualifying buyers through the DC Tax Abatement application process at closing.
            Get a guaranteed quote and see your full savings picture.
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
              DC Homestead Deduction →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

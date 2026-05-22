import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FIRPTA Withholding | Federal Title & Escrow Company',
  description:
    'Learn about FIRPTA — the Foreign Investment in Real Property Tax Act — and how it affects real estate closings involving non-resident aliens in DC, Maryland & Virginia.',
};

export default function FirptaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Tax Compliance
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Foreign Investment in Real Property Tax Act
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            FIRPTA withholding: tax on non-resident aliens selling real property in the U.S.
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
            What Is FIRPTA?
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-4 leading-relaxed">
            The Foreign Investment in Real Property Tax Act (FIRPTA) was enacted in 1980 to authorize U.S. taxation of
            foreign persons — known as nonresident aliens — when they sell American real property interests. Persons
            purchasing U.S. real property interests (the transferee) from nonresident aliens (the transferor) are
            required to withhold 10% of the amount realized and remit that amount to the Internal Revenue Service within
            20 days.
          </p>
          <p className="text-[var(--color-neutral-700)] text-lg mb-4 leading-relaxed">
            On February 16, 2016, the withholding rate increased to{' '}
            <strong>15%</strong> for properties exceeding $1 million in value.
          </p>
        </div>
      </section>

      {/* Who is a Nonresident Alien */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Who Is a &ldquo;Nonresident Alien&rdquo; (Foreign Person)?
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-4 leading-relaxed">
            A nonresident alien is any individual who lacks U.S. citizenship and does not meet the IRS residency tests.
            The primary residency test is the <strong>substantial presence test</strong> — generally requiring physical
            presence in the United States for 183 or more days in a calendar year. Individuals who do not satisfy this
            threshold are considered nonresident aliens and may be subject to FIRPTA withholding upon sale of U.S. real
            property.
          </p>
        </div>
      </section>

      {/* Exemptions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Exemptions
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-6 leading-relaxed">
            FIRPTA withholding is not required in all cases. Common exemptions include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Home purchase at or below $300,000 intended for personal use by the buyer',
              'IRS withholding certificate issued to the transferee',
              'Non-foreign status certification provided by the seller',
              'Gift transfers (no amount realized)',
              'Government-mandated property acquisitions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-neutral-700)]">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Required Forms */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            FIRPTA Solutions &amp; Required Forms
          </h2>
          <p className="text-[var(--color-neutral-700)] text-lg mb-6 leading-relaxed">
            Federal Title works with foreign sellers to ensure FIRPTA compliance. Required IRS forms include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { form: 'IRS Form 8288', desc: 'U.S. Withholding Tax Return — the primary withholding report filed with the IRS.' },
              { form: 'IRS Form 8288-A', desc: 'Statement of Withholding on Dispositions by Foreign Persons — allocation statement attached to Form 8288.' },
              { form: 'IRS Form 8288-B', desc: 'Application for Withholding Certificate — used to apply for a reduced withholding certificate.' },
              { form: 'IRS Form W-7', desc: 'Application for IRS Individual Taxpayer Identification Number — required if the foreign person lacks a U.S. tax ID.' },
            ].map((item) => (
              <div
                key={item.form}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6"
              >
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.form}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            FIRPTA FAQs
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                Who is responsible for the withholding?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                The buyer (transferee) is legally responsible for withholding the required amount from the sale proceeds
                and remitting it to the IRS. Failure to do so may result in the buyer being held liable for the tax.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                What are the withholding rates?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                The standard FIRPTA withholding rate is <strong>10%</strong> of the amount realized. For properties
                with a sales price exceeding $1 million, the withholding rate is <strong>15%</strong> (effective
                February 16, 2016).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                Can the withholding be reduced or eliminated?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Yes. The foreign seller may apply for an IRS Withholding Certificate (Form 8288-B) to reduce or
                eliminate withholding based on the actual tax liability. Processing can take several months, so
                applications should be filed well in advance of closing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">
                Does Federal Title handle FIRPTA transactions?
              </h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Yes. Federal Title &amp; Escrow operates across Washington D.C., Maryland, and Virginia and has
                extensive experience managing FIRPTA-compliant closings. Our team coordinates the required filings and
                ensures funds are properly withheld and remitted to the IRS.
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
            Questions About FIRPTA?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Our experienced closing team serves DC, Maryland, and Virginia. Get a guaranteed quote or contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Get a Guaranteed Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

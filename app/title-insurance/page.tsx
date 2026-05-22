import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Title Insurance? | Federal Title & Escrow Company',
  description: 'Title insurance protects homebuyers and lenders against losses from ownership disputes, liens, forged documents, and undiscovered title defects. Learn more.',
};

const coveredRisks = [
  'False impersonation of the true owner',
  'Forged deeds, releases, and wills',
  'Deeds by persons of unsound mind or minors',
  'Fraud and undisclosed heirs',
  'Invalid documents executed by expired attorneys',
  'Claims for unpaid estate, inheritance, and gift taxes',
  'Unrecorded easements and restrictions',
  'Deeds delivered after grantor\'s death',
  'Fraudulent impersonations',
  'Invalid divorces affecting property rights',
];

export default function TitleInsurancePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            What is Title Insurance?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Insurance against loss due to an unknown defect in a title or interest in real estate.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Why Do I Need Title Insurance?
              </h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Title insurance is a one-time charge assessed at settlement. It protects a homebuyer in the event that the property title — which proves ownership — is flawed. Problems can include outstanding mortgages or liens, easements, inaccurate notary acknowledgments and deeds, or wills and trusts with wrong names or improper vestings.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mt-4">
                Unlike typical insurance that protects against future events, title insurance addresses historical problems that may not have been discovered before your purchase. The financial stakes are substantial — potential losses can range from hundreds of thousands to millions of dollars. Without owner's title insurance, you bear all legal costs and risk losing your property if a title dispute arises.
              </p>
            </div>

            <div className="bg-[var(--color-neutral-50)] rounded-xl p-8 border border-[var(--color-neutral-200)]">
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Standard vs. Enhanced Policies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Standard Policy</h3>
                  <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                    Covers issues that should have been identified before closing — forged documents, liens, undisclosed heirs, and other pre-purchase title defects. Sufficient for most transactions.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Enhanced (ALTA) Policy</h3>
                  <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                    Approximately 20% more expensive. Includes all Standard protections plus post-closing concerns like adverse possession, prescriptive easements, and living trust coverage. Covers issues like improvements built without permits.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Owner's Policy vs. Lender's Policy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-[var(--color-neutral-200)] rounded-xl">
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Owner's Policy</h3>
                  <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                    Protects the homebuyer against losses from ownership faults or interest issues in the property. Stays active as long as you (or your heirs) own the property. Covers legal fees for defending claims.
                  </p>
                </div>
                <div className="p-6 border border-[var(--color-neutral-200)] rounded-xl">
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Lender's Policy</h3>
                  <p className="text-left text-sm text-[var(--color-neutral-700)] leading-relaxed">
                    Protects the mortgage holder's financial interest. Required by virtually all lenders. Expires when the loan is paid off. When you refinance, a new lender's policy is required.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                What Risks Does Title Insurance Cover?
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {coveredRisks.map((risk) => (
                  <div key={risk} className="flex items-start gap-2 text-sm text-[var(--color-neutral-700)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                    {risk}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-accent-50)] rounded-xl p-6 border border-[var(--color-accent-100)]">
              <p className="text-sm text-[var(--color-neutral-700)]">
                <strong>Did you know?</strong> According to ALTA surveys, title problems arise in one out of every four real estate transactions. Title insurers paid over $460 million in claims in a single year. Owner's title insurance is the only protection that fully covers buyers if a title problem surfaces after closing.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4 flex-wrap">
            <Link href="/title-insurance/owners-protection" className="text-[var(--color-accent-600)] font-medium hover:underline">
              Owner's Title Insurance →
            </Link>
            <Link href="/quick-quote" className="text-[var(--color-accent-600)] font-medium hover:underline">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Get a Title Insurance Quote
          </h2>
          <p className="text-white/70 mb-8">Federal Title offers both standard and enhanced owner's title insurance. Get your guaranteed quote in minutes.</p>
          <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Get a Guaranteed Quote
          </Link>
        </div>
      </section>
    </>
  );
}

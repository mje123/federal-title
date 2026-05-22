import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Does a Title Company Do? | Federal Title & Escrow',
  description: 'A title company searches public records to verify ownership rights, issues title insurance, and conducts real estate closings. Learn what Federal Title does for you.',
};

export default function WhatDoesATitleCompanyDoPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            What Does a Title Company Do?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Title companies conduct extensive searches of public records to verify the seller's legal right to transfer property ownership — and protect everyone involved in the transaction.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">
          {[
            {
              title: 'Title Search',
              body: 'The primary function of a title company is to conduct an extensive search of public records to verify the seller\'s legal right to transfer property ownership. The purpose of this research is to discover claims or defects — known as "clouds" — that limit the owner\'s right to transfer the property. These include liens, easements, outstanding mortgages, and other encumbrances.',
            },
            {
              title: 'Title Insurance',
              body: 'Title companies facilitate two types of insurance policies. A lender\'s policy protects the mortgage holder\'s financial interest and ensures first lien position on the property. An owner\'s policy protects the purchaser against losses from ownership faults or interest issues. Premiums are paid only once, with coverage lasting as long as the owner maintains interest in the property.',
            },
            {
              title: 'Real Estate Closing',
              body: 'Title companies coordinate and conduct the actual real estate settlement — the "closing." This includes preparing the Closing Disclosure, coordinating with lenders, collecting and disbursing funds, and ensuring all documents are properly executed and recorded. Federal Title closings are conducted by licensed attorneys.',
            },
            {
              title: 'Legal Representation',
              body: 'Federal Title\'s attorneys review all documentation and maintain representation throughout the transaction. They provide explanation, negotiation, and legal advocacy regarding any matters arising during property purchase and sale — something not all title companies offer.',
            },
            {
              title: 'Post-Closing Services',
              body: 'After closing, the title company records all documents with the appropriate government offices, pays off existing mortgages, obtains lien releases, handles final utility bills, and resolves any remaining title issues. Federal Title\'s post-closing team manages all of this on your behalf.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-l-4 border-[var(--color-accent-600)] pl-8">
              <h2 className="text-xl font-bold text-[var(--color-primary-900)] mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                {title}
              </h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">{body}</p>
            </div>
          ))}

          <div className="bg-[var(--color-neutral-50)] rounded-xl p-8 border border-[var(--color-neutral-200)]">
            <h2 className="text-xl font-bold text-[var(--color-primary-900)] mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Why Choose Federal Title?
            </h2>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Federal Title is different from most title companies. We are independently owned and operated — not affiliated with any real estate brokerage or lender. That independence means no conflicts of interest, which is exactly what you want from a company handling your most important financial transaction.
            </p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              We were the nation's first title company to offer online ordering and instant quotes. Our REAL Credit™ program has saved clients over $32 million in closing costs. Every closing is conducted by a licensed attorney.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Work With Federal Title?
          </h2>
          <p className="text-white/70 mb-8">Get a guaranteed quote or order services online in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Get a Guaranteed Quote
            </Link>
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Order Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

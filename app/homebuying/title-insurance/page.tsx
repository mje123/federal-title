import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Title Insurance for Homebuyers | Federal Title & Escrow",
  description: "Why homebuyers need title insurance, the difference between standard and enhanced policies, and how much it costs in DC, MD & VA.",
};

export default function HomebuyingTitleInsurancePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Homebuyers</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Title Insurance for Homebuyers
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            A one-time purchase that protects your most valuable asset for as long as you own it.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">
          <div>
            <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed mb-4">
              When you buy a home, you receive a deed proving ownership — but that deed is only as good as the title history behind it. Title insurance protects you if any claim against your property surfaces after closing, including problems a thorough public records search might not have uncovered.
            </p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              It's a one-time premium paid at settlement. Your coverage lasts for your entire ownership — no annual renewals. Federal Title offers both standard and enhanced owner's title insurance, and your attorney will walk you through the options at closing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
              <h2 className="font-bold text-[var(--color-primary-900)] mb-3">Standard Policy</h2>
              <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-3">Covers pre-existing title defects: forged deeds, undisclosed liens, missing heirs, fraud, and anything that should have been found before closing.</p>
              <p className="text-sm text-[var(--color-neutral-500)]">Sufficient for most transactions.</p>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-accent-200)] ring-1 ring-[var(--color-accent-200)]">
              <h2 className="font-bold text-[var(--color-primary-900)] mb-3">Enhanced (ALTA) Policy</h2>
              <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-3">Everything in Standard plus post-closing risks: adverse possession claims, encroachments, improvements built without permits, prescriptive easements, and more.</p>
              <p className="text-sm text-[var(--color-neutral-500)]">Approximately 20% more than Standard.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Do I Have to Buy Owner's Title Insurance?
            </h2>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Owner's title insurance is not required by law. However, virtually all real estate attorneys and lenders strongly recommend it. You are not legally required to purchase it, but you do have a choice of coverage type — Standard or Enhanced — right up until you sign at the closing table.
            </p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Your lender will require their own separate lender's policy to protect their interest. That lender's policy does not protect you — only an owner's policy does.
            </p>
          </div>

          <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-100)] rounded-xl p-6">
            <p className="text-sm text-[var(--color-neutral-700)]">
              <strong>Industry fact:</strong> According to the American Land Title Association (ALTA), title problems arise in 1 out of every 4 real estate transactions. Title insurers paid over $460 million in claims in a single year. Your owner's policy covers both your losses and legal defense costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Get Your Title Insurance Quote
          </h2>
          <p className="text-white/70 mb-8">See exactly what owner's title insurance costs for your specific property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Get a Guaranteed Quote
            </Link>
            <Link href="/title-insurance" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

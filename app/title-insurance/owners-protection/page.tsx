import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Owner's Title Insurance Protection | Federal Title & Escrow",
  description: "Owner's title insurance protects your home purchase for as long as you own the property. Learn why you need it and what it covers.",
};

export default function OwnersProtectionPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Title Insurance</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Owner's Title Insurance Protection
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Without owner's title insurance, you assume all costs to defend or clear title — and risk losing your equity entirely if a defect surfaces after closing.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Why Purchase an Owner's Policy?
            </h2>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              When buying a home, you want certainty that the title is clear. However, even the most diligent public records search can fail to disclose every title defect. An owner's title insurance policy protects you for your entire homeownership duration — not just at the time of purchase.
            </p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Only owner's title insurance fully protects buyers if title problems arise that the title search didn't discover. It also covers legal fees for defending your ownership against any claims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "When does an owner's policy expire?", a: "An owner's title insurance policy stays active as long as you (or your heirs) own the property. It never expires during your ownership." },
              { q: "Why can't I use the seller's policy?", a: "The seller may have judgments or other issues affecting title. Additionally, the policy must reflect the new purchase price. However, if the seller's policy is less than 10 years old, you may qualify for a discounted reissue rate." },
              { q: "Is owner's title insurance required by law?", a: "No. But virtually all real estate attorneys and financial advisors strongly recommend it. Most lenders require their own lender's policy, but the owner's policy is your personal protection." },
              { q: "How common are title claims?", a: "More common than most people think. According to ALTA, title problems arise in 1 out of every 4 real estate transactions. Title insurers paid over $460 million in claims in a single year." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-3 text-base">{q}</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Title Problems That Could Arise
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Forged wills or deeds',
                'Title transfers by a minor',
                'Married persons conveying without their spouse',
                'Fraudulent impersonations',
                'Secret marriages affecting ownership',
                'Undisclosed heirs from a prior owner',
                'Invalid divorces affecting property rights',
                'False affidavits of any kind',
              ].map((risk) => (
                <div key={risk} className="flex items-start gap-2 text-sm text-[var(--color-neutral-700)] py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                  {risk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Get a Quote Including Owner's Protection
          </h2>
          <p className="text-white/70 mb-8">Federal Title offers both standard and enhanced owner's title insurance. See your exact premium in our guaranteed quote.</p>
          <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Get a Guaranteed Quote
          </Link>
        </div>
      </section>
    </>
  );
}

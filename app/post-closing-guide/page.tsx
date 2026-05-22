import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post-Closing Guide | Federal Title & Escrow Company',
  description: 'What happens after your real estate closing? Federal Title\'s post-closing team handles recording, payoffs, water bills, taxes, and more.',
};

export default function PostClosingGuidePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Post-Closing Guide
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Federal Title continues working for you after closing. Here's what our post-closing team handles on your behalf.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            What Federal Title Does After Closing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Document Recording', desc: 'We prepare the recording package and submit it to the Land Records Office. Documents typically return recorded within six months. We use e-recording when available, submitting within 3–4 hours of closing.' },
              { title: 'Mortgage Payoff & Lien Release', desc: 'We pay off existing mortgages, obtain lien releases, and record them. We make sure all liens are properly released so your title is clean.' },
              { title: 'Water Bill Management', desc: 'We handle obtaining and paying the final water bill — a critical step, since an unpaid water bill creates a lien on the property.' },
              { title: 'HOA & Condo Dues', desc: 'We submit HOA and condo association dues to the appropriate associations and handle any prorations.' },
              { title: 'Repair Escrows', desc: 'We maintain and disburse repair escrows and security deposits per the terms of your settlement.' },
              { title: 'Owner\'s Title Policy', desc: 'Your owner\'s title insurance policy is issued and mailed after closing. Keep it permanently — you\'ll need it when you sell or refinance.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Tips for New Homeowners
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { title: 'Keep your closing documents permanently', desc: 'You\'ll need your Closing Disclosure for tax purposes and may need it for future transactions. Federal Title can provide scanned digital copies.' },
              { title: 'Verify your homestead deduction', desc: 'Confirm that applicable tax discounts (homestead, senior citizen, etc.) appear on your first property tax bill.' },
              { title: 'Monitor your escrow account', desc: 'If your lender manages your taxes, verify payments are being made through your lender\'s website or automated phone line.' },
              { title: 'Ownership in tax databases takes time', desc: 'Expect up to six months for local tax databases to reflect your new ownership.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2.5" />
                <div>
                  <span className="font-semibold text-[var(--color-primary-900)]">{title} — </span>
                  <span className="text-[var(--color-neutral-700)]">{desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-primary-900)] mb-3">Post-Closing Contact</h3>
            <p className="text-sm text-[var(--color-neutral-700)] mb-2">Post-Closing Manager: <strong>Dedra Roberts</strong></p>
            <p className="text-sm text-[var(--color-neutral-700)]">Phone: <a href="tel:+12029189359" className="text-[var(--color-accent-600)] hover:underline">(202) 918-9359</a></p>
            <p className="text-sm text-[var(--color-neutral-700)]">Email: <a href="mailto:info@federaltitle.com" className="text-[var(--color-accent-600)] hover:underline">info@federaltitle.com</a></p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Questions After Closing?</h2>
          <p className="text-white/70 mb-8">Our post-closing team is here to help.</p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

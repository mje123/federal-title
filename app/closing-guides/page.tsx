import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Closing Guides | Federal Title & Escrow Company',
  description: 'Pre-closing and post-closing guides for homebuyers, sellers, and homeowners in DC, Maryland, and Virginia.',
};

const guides = [
  {
    title: 'Pre-Closing Guide',
    description: 'Get ready for your closing. Documents to review, funds to prepare, and what to expect on closing day.',
    href: '/pre-closing-guide',
    audience: 'Buyers & Sellers',
  },
  {
    title: 'Post-Closing Guide',
    description: 'What happens after closing — recording, payoffs, water bills, tax tips, and more from our post-closing team.',
    href: '/post-closing-guide',
    audience: 'Buyers & Sellers',
  },
  {
    title: 'Homebuying Guide',
    description: 'Everything first-time and repeat homebuyers need to know about the settlement process in DC, MD & VA.',
    href: '/homebuying',
    audience: 'Homebuyers',
  },
  {
    title: 'Calculate Sale Proceeds',
    description: 'Estimate exactly how much you\'ll walk away with after your home sale.',
    href: '/sellers/calculate-proceeds',
    audience: 'Sellers',
  },
  {
    title: 'Refinancing Guide',
    description: 'What to expect when refinancing, including title insurance requirements and fee breakdowns.',
    href: '/homeowners/refinancing',
    audience: 'Homeowners',
  },
  {
    title: 'Utility Providers',
    description: 'Phone numbers for DC, Maryland, and Virginia utility and internet providers.',
    href: '/utility-providers',
    audience: 'All',
  },
];

export default function ClosingGuidesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Closing Guides
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Everything you need to prepare for and complete a real estate closing in DC, Maryland, or Virginia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group bg-white rounded-xl border border-[var(--color-neutral-200)] p-7 hover:border-[var(--color-accent-400)] hover:shadow-md transition-all">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-600)] bg-[var(--color-accent-50)] px-2.5 py-1 rounded-full mb-4">
                  {guide.audience}
                </span>
                <h2 className="text-lg font-bold text-[var(--color-primary-900)] mb-2 group-hover:text-[var(--color-accent-600)] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ready to Get Started?</h2>
          <p className="text-white/70 mb-8">Get a guaranteed quote or order services online.</p>
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

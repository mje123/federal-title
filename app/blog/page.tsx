import Link from 'next/link';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Federal Title & Escrow Company',
  description:
    'Expert real estate and title insurance articles from Federal Title attorneys. DC, Maryland & Virginia closing insights, guides, and news.',
};

const posts = [
  {
    title: 'Federal Title Featured by Redfin',
    author: 'Luke Bacigalupo',
    date: 'May 6, 2026',
    excerpt:
      "We're excited to share that Federal Title & Escrow Company was recently featured in a Redfin article discussing one of the most overlooked — but critical — steps in the closing process: the final walk-through. The final walk-through is not just a formality. It's the buyer's last opportunity to confirm the property's condition before the keys are handed over.",
    href: '/blog/federal-title-featured-by-redfin',
  },
  {
    title: 'Fear Not! You Did NOT Just Sell Your House for $10!',
    author: 'Federal Title',
    date: 'March 31, 2026',
    excerpt:
      "Virginia deeds often say something like the following: 'That for and in consideration of TEN DOLLARS ($10.00), cash in hand paid, and other good and valuable considerations, the receipt and sufficiency of which are hereby acknowledged...' Does this language mean your house was sold for $10?",
    href: '/blog/virginia-deed-ten-dollars',
  },
  {
    title: 'NVAR Contract – What Day is It?!',
    author: 'Federal Title',
    date: 'March 26, 2026',
    excerpt:
      "Our attorney team recently received two great questions about the Northern Virginia Association of Realtors (NVAR) Contract relating to HOA deadlines and what counts as a 'Day.' Scenario: We Ratified at 9pm on 2/11/26. EMD delivery is required 3 Business Days from Ratification.",
    href: '/blog/nvar-contract-what-day-is-it',
  },
  {
    title: "DC's New TOPA Law – Rebalancing Expectations for Neighbors, Tenants, and Landlords (RENTAL) Act",
    author: 'Federal Title',
    date: 'March 5, 2026',
    excerpt:
      "Washington, DC has officially entered a new era of tenant purchase law with sweeping changes approved by the DC Council.",
    href: '/blog/dc-topa-law-rental-act',
  },
  {
    title: 'Using a Power of Attorney with a Trust: Q & A for Sellers and Listing Agents',
    author: 'Todd Ewing',
    date: 'March 3, 2026',
    excerpt:
      "Transactions involving trusts and Powers of Attorney come up regularly — and they're often misunderstood. Here's what sellers and listing agents need to know.",
    href: '/blog/power-of-attorney-trust',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Knowledge Base
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Real Estate Blog
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert insights on title insurance, real estate closings, and the DC–Maryland–Virginia
            market — written by Federal Title attorneys.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.href}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 hover:border-[var(--color-primary-200)] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--color-neutral-400)] mb-3">
                  <span>{post.author}</span>
                  <span>·</span>
                  <time>{post.date}</time>
                </div>
                <h2
                  className="text-xl font-bold text-[var(--color-primary-900)] mb-3 leading-snug hover:text-[var(--color-primary-700)] transition-colors"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="text-[var(--color-neutral-600)] leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Questions about your closing?"
        description="Our attorneys answer real estate questions every day. Get a quote or give us a call."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Contact Us', href: '/contact' }}
        background="gradient"
      />
    </>
  );
}

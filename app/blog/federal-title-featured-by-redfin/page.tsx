import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Title Featured by Redfin | Federal Title & Escrow Company',
  description:
    "Federal Title & Escrow Company was recently featured in a Redfin article discussing one of the most overlooked steps in the closing process: the final walk-through.",
};

export default function RedfInPostPage() {
  return (
    <div className="bg-[var(--color-neutral-50)] min-h-screen">
      <section className="bg-[var(--color-primary-900)] text-white py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-white/50 hover:text-white/80 text-sm transition-colors mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-[var(--color-accent-400)] text-xs font-semibold uppercase tracking-widest mb-3">
            Article
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Federal Title Featured by Redfin
          </h1>
          <div className="flex items-center gap-3 mt-4 text-white/50 text-sm">
            <span>Luke Bacigalupo</span>
            <span>·</span>
            <time>May 6, 2026</time>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 lg:p-10 prose prose-neutral max-w-none">
            <p>
              Federal Title &amp; Escrow Company was recently highlighted in a Redfin article examining an often-overlooked yet essential component of home transactions: the final walk-through inspection.
            </p>
            <p>
              The piece emphasizes that this step transcends mere formality. It represents &ldquo;the buyer&rsquo;s last opportunity to confirm that the property is delivered exactly as agreed in the contract&rdquo; and helps prevent closing-day disputes.
            </p>
            <p>The article identifies key verification points for buyers:</p>
            <ul>
              <li>Completion of all negotiated repairs</li>
              <li>Property cleanliness and removal of seller&apos;s items</li>
              <li>Presence of all contractual appliances and fixtures</li>
              <li>Proper functioning of major systems (plumbing, electrical, HVAC)</li>
              <li>Absence of new damage since contract execution</li>
            </ul>
            <p>
              Federal Title&apos;s perspective highlights that expectation misalignment — rather than legal complications — typically creates walk-through friction. Their team identifies three success factors: precise contract language regarding repairs and inclusions, effective coordination among agents and contractors, and proactive pre-closing dialogue.
            </p>
            <p>
              The closing suggests that thorough preparation beforehand ensures &ldquo;the easiest part of the transaction should be sitting at the closing table.&rdquo; Federal Title offers resources for addressing walk-through concerns, credits, and last-minute complications.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
            >
              ← All Posts
            </Link>
            <div className="flex gap-3">
              <Link
                href="/quick-quote"
                className="text-sm font-medium px-4 py-2 rounded-lg bg-[var(--color-primary-700)] text-white hover:bg-[var(--color-primary-900)] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

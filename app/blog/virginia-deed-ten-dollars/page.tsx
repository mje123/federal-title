import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fear Not! You Did NOT Just Sell Your House for $10! | Federal Title',
  description:
    'Virginia deeds often mention $10 consideration. Does this mean your house sold for $10? Federal Title explains this common deed language.',
};

export default function TenDollarsPostPage() {
  return (
    <div className="bg-[var(--color-neutral-50)] min-h-screen">
      <section className="bg-[var(--color-primary-900)] text-white py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-white/50 hover:text-white/80 text-sm transition-colors mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-[var(--color-accent-400)] text-xs font-semibold uppercase tracking-widest mb-3">
            Article · Selling
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Fear Not! You Did NOT Just Sell Your House for $10!
          </h1>
          <div className="flex items-center gap-3 mt-4 text-white/50 text-sm">
            <span>Federal Title</span>
            <span>·</span>
            <time>March 31, 2026</time>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 lg:p-10 prose prose-neutral max-w-none">
            <p>
              Virginia deeds often include language stating: <em>&ldquo;That for and in consideration of TEN DOLLARS ($10.00), cash in hand paid, and other good and valuable considerations, the receipt and sufficiency of which are hereby acknowledged, the Grantor does bargain, sell, and convey unto the Grantee the following described real property…&rdquo;</em> This raises a common question: did the seller actually sell their house for $10? The answer is no.
            </p>
            <p>
              Real estate transactions involve two critical steps. First, there&apos;s the sales contract — a written agreement between buyer and seller detailing the transaction&apos;s key terms. However, this contract doesn&apos;t transfer property ownership. Second comes the deed, which is the publicly recorded document that legally transfers title from seller to buyer.
            </p>
            <p>
              Valid contracts require consideration, meaning &ldquo;something of value is exchanged and legally requires a promise, act or forbearance from each party.&rdquo; In sales contracts, the earnest money deposit typically serves as consideration. In deeds, consideration appears as a factual recital acknowledging that value passed between parties.
            </p>
            <p>
              The actual sales price and tax-assessed value typically appear within the deed&apos;s margins so recording clerks can collect proper recordation taxes.
            </p>
            <p>
              Virginia deeds continue using the $10 language simply due to tradition.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-sm font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors">
              ← All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

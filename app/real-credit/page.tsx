import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REAL Credit™ — Save Up to $750 | Federal Title & Escrow',
  description:
    'REAL Credit™ has saved homebuyers over $32 million in closing costs. Order your settlement services online and receive up to $750 back at closing.',
};

const faqs = [
  {
    q: 'How can you offer such a large credit?',
    a: "Federal Title doesn't participate in Affiliated Business Arrangements (ABAs) or Marketing Service Agreements (MSAs) with real estate agents or brokerages. Other title companies often share profits with agents or brokers who refer business. We don't. Those profits go back to you instead — in the form of the REAL Credit™.",
  },
  {
    q: 'The truth about ABAs',
    a: 'Affiliated Business Arrangements (ABAs) are joint ventures between real estate companies and title/settlement companies. Under an ABA, a portion of the fees you pay at closing flows back to the agent or broker who referred you. In many cases, this actually drives your closing costs up. Federal Title is entirely independent — no referral arrangements, no shared profits, no conflicts of interest.',
  },
  {
    q: 'Sounds easy. What\'s the catch?',
    a: "THAT'S IT! The only requirement is that you order your settlement services online at federaltitle.com. It takes about 5 to 7 minutes. Your data entry saves us time and reduces errors, and we pass those operational savings back to you as the REAL Credit™.",
  },
  {
    q: 'Is that even legal?',
    a: "Yes. The REAL Credit™ has been reviewed and approved by the insurance commissions in DC, Maryland, and Virginia. It complies with anti-rebating regulations and is consistent with a DC Department of Insurance bulletin supporting credits for consumers who apply electronically.",
  },
  {
    q: 'Do I have to work with a particular lender or agent?',
    a: "Nope. The REAL Credit™ has no restrictions on which lender or real estate agent you use. It's your closing — you're free to work with whoever you choose.",
  },
  {
    q: "Aren't your fees just inflated to offset the credit?",
    a: "No. Federal Title's settlement fee is all-inclusive and competitively priced. We've published fee comparisons showing our rates are consistently lower than competitors — credit included. The REAL Credit™ is a genuine reduction, not an accounting shuffle.",
  },
  {
    q: 'What about the quote — is it guaranteed?',
    a: "Yes. Our Automated Quote Generator (AQG) provides an instant, guaranteed quote that includes all title charges, recording fees, and transfer taxes. No surprises, no hidden fees, no bait-and-switch. The credit amount is reflected directly in your quote.",
  },
  {
    q: 'Why would you do this?',
    a: "We're forward-thinking. Consumer demand, RESPA transparency requirements, and a commitment to doing right by homebuyers all point the same direction: pass the savings on. We've built our business around the idea that consumers who shop for title services end up better off — and we want to be the obvious choice when they do.",
  },
  {
    q: 'Is the REAL Credit™ a true credit?',
    a: "Absolutely. The REAL Credit™ is applied directly against our settlement fee at closing. There's no fee inflation to offset it. Homebuyers also receive a clear choice between standard and enhanced owner's title insurance policies at closing, so you know exactly what you're getting.",
  },
  {
    q: 'Do I have to order online?',
    a: "Yes — that's the one requirement. Ordering online takes about 5 to 7 minutes, and agents or lenders can order on your behalf. The time you save us on data entry and error correction is the primary reason we can offer such a large credit.",
  },
  {
    q: 'Other benefits to ordering online',
    a: "When you order online, you receive an instant guaranteed quote that reflects the REAL Credit™. You'll also get an email confirmation with a personalized breakdown of your savings. Your agent or lender can place the order on your behalf if you prefer.",
  },
  {
    q: 'Can a seller receive the REAL Credit™?',
    a: "Unfortunately, no. The REAL Credit™ is available to homebuyers only. Sellers are not eligible.",
  },
];

export default function RealCreditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">
            REAL Benefits™
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Save up to $750 in closing costs
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">
            Federal Title has saved homebuyers over $32 million through the REAL Credit™ program. Order
            your settlement services online and the credit is applied automatically at closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/order"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Order Services
            </Link>
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Just a Quote, Please »
            </Link>
          </div>
        </div>
      </section>

      {/* Intro — exact wording from live site */}
      <section className="py-16 bg-white border-b border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            REALCredit™ has saved homebuyers over $32 million!
          </h2>
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-5 text-lg">
            Federal Title &amp; Escrow Company, through its REALCredit™ program, offers homebuyers a
            substantial credit to reduce their closing costs. Homebuyers will receive a credit simply by
            ordering settlement services online.
          </p>
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8 text-lg">
            We are able to provide this credit because we are an independent title company. This means we
            do not share our profits with referral sources through Affiliated Business Arrangements (ABA)
            or Marketing Service Agreements (MSA). Because of this, we are able to pass along the savings
            to our clients. That boils down to an average cost savings of up to $750 per client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/order"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Order Services
            </Link>
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] transition-colors"
            >
              Just a Quote, Please
            </Link>
          </div>
        </div>
      </section>

      {/* Overview + Eligibility */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                How it works
              </h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                Federal Title does not share profits with real estate agents or brokerages through
                Affiliated Business Arrangements (ABAs) or Marketing Service Agreements (MSAs). By keeping
                those relationships independent, we pass the savings directly to you — averaging up to{' '}
                <strong>$750 per closing</strong>.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8">
                Simply order your settlement services online at federaltitle.com. It takes about 5–7
                minutes. The credit is applied at your closing — no coupon codes, no haggling.
              </p>
              <Link
                href="/order"
                className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
              >
                Order Online Now
              </Link>
            </div>

            <div className="space-y-5">
              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-4">
                  Terms &amp; Conditions
                </h3>
                <ul className="space-y-3">
                  {[
                    'Settlement services must be ordered online at federaltitle.com',
                    'Property must be in DC, Maryland, Virginia, or Florida',
                    'Available to homebuyers only — not sellers',
                    'Subject to lender underwriting approval',
                    'Cannot be combined with other Federal Title discount programs',
                    'Properties eligible for title insurance reissue rate discounts are excluded',
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-600)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-neutral-700)]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--color-accent-600)] rounded-xl p-6 text-white text-center">
                <div className="text-5xl font-bold mb-1">$32M+</div>
                <div className="text-white/80 text-sm">Saved by homebuyers through REAL Credit™</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-10"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Common Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-neutral-200)] pb-8 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[var(--color-neutral-700)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-16 bg-white border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            About Federal Title
          </h2>
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
            Federal Title &amp; Escrow Company has been independently owned and operated since 1996. We
            built our own paperless, custom closing workflow software long before that was the industry
            standard. We created the free Close It!™ mobile app for agents. And we pioneered online title
            ordering with an instant guaranteed quote — because we believe consumers who shop for title
            services deserve transparency and a fair deal.
          </p>
          <p className="text-[var(--color-neutral-700)] leading-relaxed">
            The REAL Credit™ is a reflection of that philosophy. Over $32 million returned to homebuyers
            and counting.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 bg-[var(--color-neutral-100)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-900)] mb-4"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Closing Costs Explained...
              </h2>
              <p className="text-[var(--color-neutral-600)] leading-relaxed mb-4">
                Closing costs include taxes, lender fees, and title fees that a homebuyer pays at
                settlement. Watch this video to understand where the REAL Credit™ applies.
              </p>
              <Link
                href="/blog"
                className="text-[var(--color-primary-700)] font-medium hover:text-[var(--color-primary-900)] transition-colors"
              >
                Browse all videos
              </Link>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/fifp2mLGoWc"
                title="Closing Costs Explained Visually"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Start Saving Today"
        description="Order online in 5–7 minutes and lock in your REAL Credit™ of up to $750."
        primaryAction={{ text: 'Order Services', href: '/order' }}
        secondaryAction={{ text: 'Just a Quote, Please »', href: '/quick-quote' }}
        background="gradient"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}

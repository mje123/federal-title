import {
  DollarSign,
  Shield,
  Award,
  CheckCircle2,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { PressBar } from '@/components/sections/PressBar';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Federal Title & Escrow Company | Attorney-Led Title Insurance DC, MD & VA',
  description:
    'Independent, attorney-led title company serving DC, Maryland & Virginia since 1996. Get a guaranteed quote and save up to $750 with our REAL Benefits™ when you order online.',
};

const features = [
  {
    image: { src: '/images/features/zoccam-logo.png', alt: 'ZOCCAM® - Driving Success Not Checks' },
    title: 'Mobile Fund Deliveries',
    description:
      'Send your earnest money checks quickly and securely, directly from your smart phone.',
    link: { text: 'Learn More', href: '/homebuyers' },
  },
  {
    image: { src: '/images/features/real-online-closings.jpg', alt: 'REAL Online Closings - Powered by Stavvy' },
    title: 'Remote, Digital Closings',
    description:
      'Legally close with Federal Title attorneys, from any smart device, any time, within minutes.',
    link: { text: 'How It Works', href: '/sellers/remote-closing' },
  },
  {
    image: { src: '/images/features/wire-fraud.jpg', alt: 'Red Alert: Wire Fraud Prevention', rounded: true },
    title: 'Red Alert: Wire Fraud',
    description:
      'Protect yourself from wire fraud with our industry-leading security protocols and verification procedures.',
    link: { text: 'Protect Yourself »', href: '/realsafe' },
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Complete Cash-to-Close Picture',
    description:
      'Get a complete, upfront view of all costs before closing day—no surprises, no hidden fees.',
    link: { text: 'Get a Quote', href: '/quick-quote' },
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'REAL Benefits™',
    description:
      'A closing cost credit of up to $750, plus up to 2 hours of free legal consultation included.',
    link: { text: 'Learn About REAL Benefits™', href: '/real-benefits' },
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Closing Process Tracker',
    description:
      'Track your closing in real time. Know exactly where things stand from contract to keys.',
    link: { text: 'Order Now', href: '/order' },
  },
];

const stats = [
  { label: 'Years in Business', value: '30+' },
  { label: 'Closing Cost Credit', value: '$750' },
  { label: 'Free Legal Consult', value: '2 hrs' },
  { label: 'Client Rating', value: '4.9★' },
];

const comparisonData = [
  {
    jurisdiction: 'Washington, DC',
    averagePrice: '$769,351',
    competitorCost: '$6,502',
    federalTitleCost: '$4,838',
    savings: '$1,664',
  },
  {
    jurisdiction: 'Maryland',
    averagePrice: '$400,544',
    competitorCost: '$4,459',
    federalTitleCost: '$3,025',
    savings: '$1,434',
  },
  {
    jurisdiction: 'Virginia',
    averagePrice: '$379,083',
    competitorCost: '$3,461',
    federalTitleCost: '$2,703',
    savings: '$758',
  },
];

interface GoogleReview {
  rating: number;
  relativePublishTimeDescription: string;
  text: { text: string };
  authorAttribution: { displayName: string; photoUri?: string };
}

async function getDailyReviews(count: number): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return [];
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews',
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const fiveStar: GoogleReview[] = (data.reviews ?? []).filter(
      (r: GoogleReview) => r.rating === 5 && r.text?.text
    );
    if (fiveStar.length === 0) return [];
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    const start = dayOfYear % fiveStar.length;
    const result: GoogleReview[] = [];
    for (let i = 0; i < count; i++) {
      result.push(fiveStar[(start + i) % fiveStar.length]);
    }
    return result;
  } catch {
    return [];
  }
}

const faqs = [
  {
    question: 'What does a title company do?',
    answer:
      "Your local title insurance company will conduct an extensive search of public records, known as a title search, to verify the seller's legal right to transfer ownership to the homebuyer. The purpose of the title search is to discover title claims or defects (a.k.a. 'clouds') that limit the homeowner's right in transferring the property.\n\nOnce a title company has reviewed the record and confirmed a clean chain of title, it will issue an owner's title insurance policy to the homebuyer. For a one-time fee, this policy protects the homebuyer's down payment along with any mortgage payments made or funds invested into the property should a title matter arise down the road.\n\nApproximately 1/3 of properties have a title issue arise, usually at time of sale or refinance, however most homeowners never hear about it because their owner's title insurance policy covers them.",
  },
  {
    question: 'Who chooses the title company?',
    answer:
      'It is the legal right of the homebuyer to choose the title company in DC, Maryland and Virginia. The custom may vary in other jurisdictions. Homebuyers who shop title fees and service ratings tend to have better experiences at the closing table.',
  },
  {
    question: 'Does it matter which title company I choose?',
    answer:
      "We certainly think so, and most consumers would agree. The title company is supposed to be an unbiased third party primarily looking out for the best interests of the homebuyer. Sometimes, real estate brokerages will purchase a title company or real estate agents will create joint ventures with a title company, which not only eliminates the unbias element of an independent third-party, replacing it with a significant conflict of interest, these arrangements tend to jack up closing costs for consumers. Whatever title company you choose, make sure you choose an independent title company for your real estate settlement. And if you value exceptional service and low fees, consider choosing Federal Title as your closing services provider.",
  },
  {
    question: 'How do I compare title companies near me?',
    answer:
      "For starters, go to the websites of local title companies and get a quote. Most have an online quote tool now, although Federal Title was the first. Second, understand there are 3 types of costs that appear on a title company quote. They are title fees, title insurance premiums and taxes. Taxes are the same across the board. Title insurance premiums are generally the same across the board because they are filed with DC, Maryland or Virginia. However, title insurance underwriters may file different rates in an effort to compete with each other. Depending on the title insurance underwriter, a title company quote may show some variance in the title insurance premium. You can also ask the title company if they use a title insurance underwriter with a lower title insurance rate on file. Where you'll find the most significant variance is in the title or settlement fees. Federal Title's settlement fee is all-inclusive, but most title companies itemize and nickel and dime. Tabulate all the fees in the title company quote for a real apples-to-apples cost comparison of local title companies. Finally, note how many other title companies you encounter are as transparent about their fees as Federal Title. We sincerely encourage you to shop fees among local title companies, because we believe in providing excellent service at a competitive price.",
  },
  {
    question: 'Can I close remotely with a title company?',
    answer:
      "These days consumers expect every aspect of their real estate transactions to be digitized. The industry is moving that way but hasn't fully converted. Sellers and all-cash buyers, plus borrowers with lender approval, can close remotely with Federal Title attorneys. Legislation to permit remote closing (a.k.a. digital closing) nationally has already passed the House, and we anxiously await passage in the Senate as of summer 2022 so we can begin offering remote closings to all.",
  },
];

export default async function HomePage() {
  const googleReviews = await getDailyReviews(6);
  return (
    <>
      <Hero
        title="Attorney-Led, Consumer Driven."
        subtitle="Trusted by the DMV for 30 years."
        description="Shop for title to lower costs; close from anywhere »"
        cta={{
          primary: { text: 'Get a Guaranteed Quote', href: '/quick-quote' },
          secondary: { text: 'Order Now', href: '/order' },
        }}
        image={{
          src: '/images/hero/dc-rowhouses.jpg',
          alt: 'Beautiful DC rowhouses in Bloomingdale neighborhood',
          position: 'background',
        }}
        gradient={false}
      />

      <Stats stats={stats} />

      <PressBar />

      {/* The Federal Title Difference */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-4">
                Who We Are
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[var(--color-primary-900)]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                The Federal Title Difference
              </h2>
              <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed mb-6">
                Federal Title is an attorney driven title company. As the closing industry changes, we believe that one thing should remain the same: serving your best interests. Federal Title has been independently owned and operated since 1996 with the mission that we serve the consumer by offering the best service at an unbeatable price. Nearly three decades later, that mission holds true.
              </p>
              <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed mb-8">
                If you want to speak with us about an upcoming closing, or have any questions about a real estate transaction, give us a call.
              </p>
              <div className="space-y-2 mb-8">
                <a href="tel:2023621500" className="flex items-center gap-2 text-[var(--color-primary-700)] font-semibold hover:text-[var(--color-primary-900)] transition-colors">
                  (202) 362-1500
                </a>
                <a href="tel:2029189358" className="flex items-center gap-2 text-[var(--color-neutral-600)] text-sm hover:text-[var(--color-primary-700)] transition-colors">
                  Attorney Consultation: (202) 918-9358
                </a>
                <a href="mailto:info@federaltitle.com" className="flex items-center gap-2 text-[var(--color-neutral-600)] text-sm hover:text-[var(--color-primary-700)] transition-colors">
                  info@federaltitle.com
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quick-quote"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary-800)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
                >
                  Get a Guaranteed Quote
                </Link>
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent-500)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[var(--color-neutral-500)] text-xs uppercase tracking-widest font-semibold mb-2">
                What sets us apart
              </p>
              {[
                'Remote & digital closing solutions',
                'Complete, upfront cash-to-close picture',
                'Closing process tracker',
                'Local knowledge accrued over 25 years of business',
                'Seamless, stress-free closings',
                'Accessible in-house attorneys & seasoned support staff',
                'Easy, proactive communication',
                'REAL Benefits™ including a closing cost credit of up to $750, and up to 2 hours of free legal consultation',
                'Best service for the best rate',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0 mt-0.5" />
                  <span className="text-[var(--color-neutral-700)]">{item}</span>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-[var(--color-neutral-200)]">
                <Link
                  href="/testimonials"
                  className="text-[var(--color-primary-700)] font-medium hover:text-[var(--color-primary-900)] transition-colors"
                >
                  Read Our Reviews »
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="How We Help You Close"
        subtitle="Services built for modern homebuyers"
        description="From mobile earnest money to remote attorney closings, we meet you where you are."
        features={features}
        columns={3}
        background="gray"
      />

      <ComparisonTable
        title="See How Much You Save"
        description="Average closing costs for title insurance and settlement services (excluding taxes)"
        data={comparisonData}
        source="Source: CoreLogic market analysis"
        cta={{ text: 'Compare Title Companies »', href: '/quick-quote' }}
      />

      {/* Google Reviews */}
      {googleReviews.length > 0 && (
        <section className="py-20 lg:py-28 bg-[var(--color-neutral-50)]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-3">Client Stories</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Trusted by thousands across DC, MD & VA
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                <span className="text-[var(--color-neutral-600)] text-sm ml-1">4.9 · 139+ Google reviews</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {googleReviews.map((review, i) => (
                <div key={i} className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    {review.authorAttribution.photoUri ? (
                      <img src={review.authorAttribution.photoUri} alt={review.authorAttribution.displayName} className="h-9 w-9 rounded-full object-cover shrink-0" />
                    ) : (
                      <div className="h-9 w-9 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-semibold text-sm shrink-0">
                        {review.authorAttribution.displayName.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-semibold text-[var(--color-primary-900)] text-sm truncate">{review.authorAttribution.displayName}</p>
                      <p className="text-xs text-[var(--color-neutral-400)]">{review.relativePublishTimeDescription}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(j => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <blockquote className="text-[var(--color-neutral-700)] leading-relaxed text-sm flex-1 line-clamp-5">
                    &ldquo;{review.text.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-[var(--color-neutral-100)]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                    <span className="text-xs text-[var(--color-neutral-400)]">Google review</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] text-sm font-medium hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-700)] transition-colors">
                See all reviews →
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ title="Common Questions" faqs={faqs} />

      {/* Blog Preview */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-2">
                From the Blog
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Latest Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[var(--color-primary-700)] font-medium hover:text-[var(--color-primary-900)] transition-colors hidden sm:block"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Federal Title Featured by Redfin',
                excerpt: "We're excited to share that Federal Title & Escrow Company was recently featured in a Redfin article discussing one of the most overlooked — but critical — steps in the closing process: the final walk-through.",
                href: '/blog/federal-title-featured-by-redfin',
              },
              {
                title: 'Fear Not! You Did NOT Just Sell Your House for $10!',
                excerpt: "Virginia deeds often say something like the following: 'That for and in consideration of TEN DOLLARS ($10.00), cash in hand paid, and other good and valuable considerations…' Does this language mean your house was sold for $10?",
                href: '/blog/virginia-deed-ten-dollars',
              },
              {
                title: 'NVAR Contract – What Day is It?!',
                excerpt: "Our attorney team recently received two great questions about the Northern Virginia Association of Realtors (NVAR) Contract relating to HOA deadlines and what counts as a 'Day.'",
                href: '/blog/nvar-contract-what-day-is-it',
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white rounded-xl border border-[var(--color-neutral-200)] p-7 hover:border-[var(--color-primary-300)] hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-3 group-hover:text-[var(--color-primary-700)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[var(--color-primary-700)] group-hover:text-[var(--color-primary-900)] transition-colors">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-[var(--color-neutral-100)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Closing Costs Explained...
              </h2>
              <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                Closing costs include taxes, lender fees and title fees that a homebuyer pays at settlement. Watch this video to prepare for the process.
              </p>
              <Link href="/blog" className="text-[var(--color-primary-700)] font-medium hover:text-[var(--color-primary-900)] transition-colors">
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
        title="Get a Guaranteed Quote Today"
        description="Order online and receive up to $750 in closing cost credits with REAL Benefits™. Save more, stress less."
        primaryAction={{ text: 'Just a Quote, Please »', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

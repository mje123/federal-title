import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials',
  description:
    'Read what thousands of satisfied clients say about Federal Title & Escrow Company. Real reviews from DC, Maryland & Virginia homebuyers and sellers.',
};

const testimonials = [
  {
    quote:
      'We used Federal Title to close on our home in November. Anthea and the team could not have been more professional. Everything went so smoothly and they did a fantastic job of making everything as efficient and easy for us as possible throughout the entire process. We highly recommend them for anyone who needs title services.',
    author: 'Satisfied Client',
    source: 'Google',
    rating: 5,
  },
  {
    quote:
      'We had a particularly tricky closing. Working with Federal Title really eased our minds. At all stages of the process, they were on top of things, and they were never the time-limiting step. We found them to be very responsive, and they were able to move things along and execute as quickly as the systems and external entities would allow.',
    author: 'Verified Client',
    source: 'Yelp',
    rating: 5,
  },
  {
    quote:
      'Kudos to the team at Federal Title who took the initiative to solve a few last-minute problems to ensure a smooth closing.',
    author: 'Satisfied Client',
    source: 'Yelp',
    rating: 5,
  },
  {
    quote:
      'Quick, easy, efficient. Closing papers were in my email when I got home—only 10 minutes away. Our closing attorney was perfect.',
    author: 'Homebuyer',
    source: 'Yelp',
    rating: 5,
  },
  {
    quote:
      'Our interactions through emails, telephone and in person with the team have been very pleasant. They were consistently very personal, helpful and polite. Our experience during closing was remarkable. Both were very patient and explained all documents very carefully. Such people are the real asset of an organization.',
    author: 'DC Homebuyer',
    source: 'Website',
    rating: 5,
  },
  {
    quote:
      "The first time I bought my condo, my previous experience with a title company was terrible—slow, unorganized. Federal Title showed me that there are actual title companies that know what they're doing. Federal Title is a well-oiled machine and makes that big financial decision so much easier.",
    author: 'Repeat Client',
    source: 'Yelp',
    rating: 5,
  },
  {
    quote:
      'Federal Title are great at their jobs! Had a very good experience. Super quick replies and very helpful staff, including really detailed explanations for each step. Everything went smoothly!',
    author: 'First-Time Buyer',
    source: 'Yelp',
    rating: 5,
  },
  {
    quote:
      'This was the smoothest settlement experience I have had in my 10+ years of buying and selling real estate. The entire process was seamless from contract to close. I will definitely use Federal Title again.',
    author: 'Real Estate Investor',
    source: 'Website',
    rating: 5,
  },
  {
    quote:
      "I had an excellent experience with Federal Title. From the initial quote through the closing day, every detail was handled professionally. I particularly appreciated how the attorney took the time to explain exactly what I was signing. This is how closings should work.",
    author: 'Northern VA Buyer',
    source: 'Google',
    rating: 5,
  },
  {
    quote:
      "Federal Title saved us over $1,400 compared to what our agent's recommended title company quoted. And the service was better. I tell every first-time buyer I know: shop your title company and use Federal Title.",
    author: 'Bethesda Homebuyer',
    source: 'Google',
    rating: 5,
  },
  {
    quote:
      "They were on it immediately. I had questions at 8pm and got a response within the hour. That kind of responsiveness is rare and made all the difference when we were stressed about our closing timeline.",
    author: 'DC Seller',
    source: 'Google',
    rating: 5,
  },
  {
    quote:
      "Used Federal Title for our refinancing. The process was completely painless. The team was thorough, prompt, and incredibly professional. Will absolutely use them again for our next transaction.",
    author: 'Maryland Homeowner',
    source: 'Google',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Thousands of satisfied clients across DC, Maryland & Virginia have trusted
            Federal Title with their most important financial transaction.
          </p>
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white/10 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--color-accent-400)] text-[var(--color-accent-400)]" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9 out of 5</span>
            <span className="text-white/60 text-sm">· 800+ reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--color-neutral-100)]" />

                {t.rating && (
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star
                        key={j}
                        className={`h-4 w-4 ${
                          j <= t.rating
                            ? 'fill-[var(--color-accent-500)] text-[var(--color-accent-500)]'
                            : 'text-[var(--color-neutral-300)]'
                        }`}
                      />
                    ))}
                  </div>
                )}

                <blockquote className="text-[var(--color-neutral-700)] leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-neutral-100)]">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-semibold text-xs">
                      {t.author.charAt(0)}
                    </div>
                    <p className="font-medium text-sm text-[var(--color-neutral-900)]">
                      {t.author}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--color-neutral-400)] bg-[var(--color-neutral-100)] px-2 py-1 rounded">
                    {t.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Review site links */}
          <div className="mt-12 text-center">
            <p className="text-[var(--color-neutral-500)] text-sm mb-4">
              Read more reviews on
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { name: 'Google Reviews', href: '#' },
                { name: 'Yelp', href: '#' },
                { name: 'Zillow', href: '#' },
              ].map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] text-sm font-medium hover:border-[var(--color-primary-400)] hover:text-[var(--color-primary-700)] transition-colors"
                >
                  {site.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Join 50,000+ satisfied clients"
        description="Get your guaranteed quote today. Save up to $750 when you order online."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Now & Save', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Federal Title & Escrow Company',
  description:
    "Independent, attorney-led title company founded in 1996. Learn about Federal Title's story, values, and 30+ years serving DC, Maryland & Virginia.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Independent Since 1996
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Attorney-led. Consumer-driven. No conflicts of interest. No hidden fees. Just
            exceptional service at a fair price.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-[var(--color-neutral-900)] mb-6 font-display"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Built on a simple idea
              </h2>
              <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-5">
                Federal Title&apos;s humble beginnings trace back to a single, closet-sized sublet
                office, with a makeshift desk fashioned from a piece of plywood—founded by Todd
                Ewing in 1996 with one mission: serve the consumer by offering the best service at
                an unbeatable price.
              </p>
              <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-5">
                Federal Title became the nation&apos;s first title company to offer online ordering
                and transparent, instant online quotes. Nearly three decades later, that founding
                principle remains the core of everything we do.
              </p>
              <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-5">
                Federal Title remains independent and 100-percent in the corner of every buyer and
                seller we serve, dedicated to building successful partnerships with every real
                estate professional.
              </p>
              <p className="text-[var(--color-neutral-600)] text-base leading-relaxed italic mb-8">
                &ldquo;Often imitated but never replicated – we set the bar other title companies
                aspire to reach.&rdquo;
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Nation\'s first title company to offer instant online quotes',
                  'REAL Credit program has saved clients upward of $18 million',
                  'Developed paperless closing workflow software',
                  'Launched Close It! mobile app for agents',
                  'No affiliated business arrangements — truly independent',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)]">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about-us/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary-600)] text-white font-medium hover:bg-[var(--color-primary-700)] transition-colors"
              >
                Meet the Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/lobby.jpg"
                  alt="Federal Title office lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border border-[var(--color-neutral-200)]">
                <p
                  className="text-4xl font-bold text-[var(--color-primary-700)] font-display"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  30+
                </p>
                <p className="text-sm font-medium text-[var(--color-neutral-600)]">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-neutral-50)] border-y border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '1996', label: 'Founded' },
              { value: '50,000+', label: 'Closings Completed' },
              { value: '8+', label: 'Licensed Attorneys' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl font-bold text-[var(--color-primary-700)] mb-1 font-display"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[var(--color-neutral-600)] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to work with us?"
        description="Get a guaranteed quote in under 2 minutes. No obligation, no hidden fees."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'View Our Team', href: '/about-us/team' }}
        background="gradient"
      />
    </>
  );
}

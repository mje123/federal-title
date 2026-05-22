import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Federal Title & Escrow Company',
  description: 'Join the Federal Title team. We\'re an independent, attorney-led title company serving DC, Maryland & Virginia. Competitive benefits, flexible work, and a culture that cares.',
};

const benefits = [
  'Competitive salary and health, dental & vision insurance',
  'Short-term disability and life insurance options',
  'Flexible Spending Accounts (healthcare & dependent care)',
  'Employee incentive programs',
  '401(k) and Roth 401(k) with 7.5% employer contribution',
  'Paid time off',
  'Remote and flexible work arrangements',
  'Office snacks and social events',
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">
            Join Our Team
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Enjoy Where You Work
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Taking excellent care of people is at the heart of what we do — and that starts with our own team.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-4">
                Our Culture
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                People First, Always
              </h2>
              <div className="space-y-4 text-[var(--color-neutral-700)] leading-relaxed">
                <p>
                  Federal Title & Escrow Company has been independently owned and operated since 1996. We're not a franchise, not a joint venture, and not beholden to any real estate brokerage. That independence lets us build a team culture focused entirely on doing right by our clients and each other.
                </p>
                <p>
                  We recruit motivated individuals from across the Capital Region. Curiosity, initiative, and a positive attitude matter more than formal credentials. If you care about people and want to grow professionally in a collaborative environment, we want to hear from you.
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-2xl p-8">
              <h3
                className="text-xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Benefits & Perks
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-600)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-neutral-700)] text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Current Openings
          </h2>
          <p className="text-[var(--color-neutral-600)] text-lg mb-8">
            We don't always have open positions listed, but we're always interested in meeting talented people. Send us your resume and tell us why you'd be a great fit.
          </p>
          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8">
            <p className="text-[var(--color-neutral-500)] italic mb-6">No positions currently listed.</p>
            <p className="text-[var(--color-neutral-700)] text-sm mb-6">
              Interested in joining the team? Reach out directly:
            </p>
            <div className="space-y-2 text-sm text-[var(--color-neutral-600)]">
              <p>5481 Wisconsin Avenue, Suite D, Chevy Chase, MD 20815</p>
              <p>
                <a
                  href="mailto:info@federaltitle.com"
                  className="text-[var(--color-accent-600)] hover:underline font-medium"
                >
                  info@federaltitle.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Meet the Team
          </h2>
          <p className="text-white/70 mb-8">
            See the people who make Federal Title exceptional.
          </p>
          <Link
            href="/about-us/team"
            className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
          >
            View Our Team
          </Link>
        </div>
      </section>
    </>
  );
}

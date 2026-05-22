import Link from 'next/link';
import { CheckCircle2, DollarSign, Scale, Smartphone } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REAL Benefits™ | Federal Title & Escrow Company',
  description:
    'Federal Title\'s REAL Benefits™ program for agents. Protect your clients, protect your reputation. REAL Credit up to $750, REALegal™ consultation, Close It!™ app, and more.',
};

const benefits = [
  {
    icon: <DollarSign className="h-7 w-7" />,
    title: 'REAL Credit™',
    subtitle: 'Up to $750 in closing cost savings',
    description:
      'Every client you refer receives up to a $750 REALCredit applied to our already low settlement fee. What will you save?',
    cta: { text: 'Get a Quote', href: '/quick-quote' },
  },
  {
    icon: <Scale className="h-7 w-7" />,
    title: 'REALegal™ Consultation',
    subtitle: '2 hours of free legal counsel',
    description:
      'Clients receive a certificate for 2 hours of free legal consultation for post-closing issues — covering property conditions, disclosure disputes, security deposits, appliances and fixtures, and rent-back situations.',
    cta: { text: 'Learn More', href: '/realegal' },
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    title: 'Close It!™ App',
    subtitle: 'Instant, accurate cash-to-close estimates',
    description:
      'Send your buyers and sellers accurate Closing Disclosures from your smart device. Instant, accurate cash-to-close and net proceeds estimates with no signup required.',
    cta: { text: 'Try Close It!™', href: 'https://closeit.federaltitle.com' },
  },
  {
    icon: <CheckCircle2 className="h-7 w-7" />,
    title: 'No Conflicts of Interest',
    subtitle: 'Proudly independent',
    description:
      'Federal Title is proudly independent, with no affiliated business arrangements. We serve your clients\' best interests — not ours or your broker\'s.',
    cta: null,
  },
];

export default function RealBenefitsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Real Estate Agents
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            REAL Benefits™
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-4 font-medium">
            Protect Your Clients. Protect Your Reputation. Strengthen Your Business.
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our perks are the REAL Deal — inventing offers designed to help grow your business.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Are you part of our squad?
            </h2>
            <p className="text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
              Submit orders faster, save homebuyers up to $750 in closing costs, and offer them
              up to 2 hours of free legal counsel — all through REAL Benefits™.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8"
              >
                <div className="h-14 w-14 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3
                  className="text-xl font-bold text-[var(--color-primary-900)] mb-1"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-[var(--color-accent-600)] font-medium text-sm mb-3">
                  {benefit.subtitle}
                </p>
                <p className="text-[var(--color-neutral-600)] leading-relaxed mb-5">
                  {benefit.description}
                </p>
                {benefit.cta && (
                  <Link
                    href={benefit.cta.href}
                    className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                    {...(benefit.cta.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {benefit.cta.text} →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sign up CTA */}
          <div className="mt-14 text-center bg-white rounded-2xl border border-[var(--color-neutral-200)] p-10 max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-3"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Become a REAL Benefits™ Partner
            </h3>
            <p className="text-[var(--color-neutral-600)] mb-6">
              Sign up for free to access agent tools, submit orders faster, and give your clients
              access to REAL Credits and REALegal consultations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://tools.federaltitle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
              >
                Sign Up
              </a>
              <a
                href="https://tools.federaltitle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-semibold hover:bg-[var(--color-primary-50)] transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to save your clients money?"
        description="Get a guaranteed quote in under 2 minutes. REAL Credit applies automatically when you order online."
        primaryAction={{ text: 'Order Services', href: '/order' }}
        secondaryAction={{ text: 'Just a Quote, Please »', href: '/quick-quote' }}
        background="gradient"
      />
    </>
  );
}

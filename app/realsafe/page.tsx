import Link from 'next/link';
import { AlertTriangle, Shield, CheckCircle2, Phone } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REALSafe™ Closing Solutions | Federal Title & Escrow Company',
  description:
    'Protect yourself from wire fraud with REALSafe™ closing solutions from Federal Title. Red Alert wire fraud prevention for DC, Maryland & Virginia home closings.',
};

export default function REALSafePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Wire Fraud Prevention
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            REALSafe™ Closing Solutions
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Protect yourself from one of the fastest-growing scams in real estate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="bg-red-50 border border-red-200 rounded-xl p-7 mb-10 flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-red-900 text-lg mb-2">
                Red Alert: Wire Fraud is Real
              </h2>
              <p className="text-red-800 leading-relaxed">
                Wire fraud targeting homebuyers is one of the fastest-growing scams in real estate.
                Criminals intercept email communications and impersonate title companies or lenders,
                tricking buyers into wiring funds to fraudulent accounts. Once sent, funds are
                nearly impossible to recover.
              </p>
            </div>
          </div>

          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            How REALSafe™ protects you
          </h2>

          <div className="space-y-5 mb-10">
            {[
              {
                icon: <Shield className="h-5 w-5" />,
                title: 'Verified wire instructions',
                desc: 'We send wire instructions through secure, verified channels — never via unencrypted email. Always verify wire instructions by calling our office directly before sending any funds.',
              },
              {
                icon: <CheckCircle2 className="h-5 w-5" />,
                title: 'Call-back verification',
                desc: 'Before wiring funds, always call Federal Title directly at (202) 362-1500 to verify the wire instructions — even if the email looks legitimate.',
              },
              {
                icon: <AlertTriangle className="h-5 w-5" />,
                title: 'Watch for red flags',
                desc: 'Be suspicious of any last-minute changes to wire instructions. A legitimate title company will never change wire instructions via email without a phone call confirmation.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{item.title}</h3>
                  <p className="text-[var(--color-neutral-600)] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-primary-900)] rounded-xl p-7 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5 text-[var(--color-accent-400)]" />
              <h3 className="font-semibold text-lg">Always call to verify</h3>
            </div>
            <p className="text-white/70 mb-4">
              Before wiring ANY funds related to your real estate transaction, call Federal Title directly to verify.
            </p>
            <a
              href="tel:+12023621500"
              className="inline-flex items-center gap-2 text-[var(--color-accent-400)] font-bold text-xl hover:text-[var(--color-accent-300)] transition-colors"
            >
              (202) 362-1500
            </a>
          </div>
        </div>
      </section>

      <CTA
        title="Questions about wire safety?"
        description="Our team is available by phone to verify wire instructions and answer any questions."
        primaryAction={{ text: 'Contact Us', href: '/contact' }}
        secondaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        background="gradient"
      />
    </>
  );
}

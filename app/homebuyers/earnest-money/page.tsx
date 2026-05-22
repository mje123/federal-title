import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deposit Earnest Money | Federal Title & Escrow Company',
  description: 'Deposit your earnest money quickly and securely via ZOCCAM mobile app. No fees, encrypted transmission, available 24/7.',
};

const steps = [
  { num: '1', text: 'Download ZOCCAM from your device\'s app store.' },
  { num: '2', text: 'Register using your name, email, and license information (if applicable).' },
  { num: '3', text: 'Verify your device via SMS PIN and create an 8-digit passcode (location services required).' },
  { num: '4', text: 'Select "Capture" on the home screen, choose fund type, and select "Federal Title & Escrow."' },
  { num: '5', text: 'Photograph the front and back of your check on a dark, well-lit, flat surface.' },
  { num: '6', text: 'Funds transmit directly to Federal Title. Email confirmations are sent to all parties.' },
];

export default function EarnestMoneyPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Homebuyers</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Deposit Your Earnest Money
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Federal Title partners with ZOCCAM® to make earnest money deposits fast, secure, and paperless — straight from your phone.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <Image src="/images/features/zoccam-logo.png" alt="ZOCCAM® - Driving Success Not Checks" width={200} height={60} className="object-contain mb-6" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Why Use ZOCCAM?
              </h2>
              <ul className="space-y-4">
                {[
                  { title: 'Save time', desc: 'No physical check pickup or delivery needed.' },
                  { title: 'Peace of mind', desc: 'Encrypted transmission — as secure as a bank deposit.' },
                  { title: '24/7 availability', desc: 'Deposit any time, any day.' },
                  { title: 'No fees', desc: 'No transaction fees charged to buyers.' },
                  { title: 'Instant confirmation', desc: 'All parties receive email notifications upon completion.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-[var(--color-primary-900)]">{title}</span>
                      <span className="text-[var(--color-neutral-600)]"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                How to Deposit in 6 Steps
              </h2>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 p-4 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-600)] text-white flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8">Order your settlement services online and receive up to $750 back with REAL Benefits™.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Order Services
            </Link>
            <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

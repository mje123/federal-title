import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deposit Earnest Money Electronically – ZOCCAM | Federal Title & Escrow Company',
  description:
    'Send your earnest money deposit quickly and securely from your smartphone using ZOCCAM. No cost, available 24/7, and integrated directly with Federal Title & Escrow.',
};

const steps = [
  {
    number: '1',
    text: 'Download ZOCCAM from the app store.',
  },
  {
    number: '2',
    text: 'Register with your name and email address (license number if applicable).',
  },
  {
    number: '3',
    text: "Verify your device by entering the PIN sent via SMS text, then create an 8-digit numeric passcode. (Phone's location services must be enabled.)",
  },
  {
    number: '4',
    text: 'Select Capture, choose funds type, then select Federal Title & Escrow.',
  },
  {
    number: '5',
    text: 'Capture the front and back of your check on a dark, flat, well-lit surface.',
  },
  {
    number: '6',
    text: 'Receive a success notification confirming your funds were sent — email confirmations go to all parties.',
  },
];

const benefits = [
  { title: 'Save Time', desc: 'No trips to the office or waiting in line. Send your deposit in minutes from anywhere.' },
  { title: 'Peace of Mind', desc: 'Funds are captured and confirmed digitally with receipts for all parties.' },
  { title: 'Available 24/7', desc: 'Submit your earnest money deposit any time of day, any day of the week.' },
  { title: 'No Cost to You', desc: 'ZOCCAM is completely free to use for homebuyers.' },
  { title: 'Buyer Capture', desc: 'Buyers capture the check themselves — simple, secure, and seamless.' },
  { title: 'Superior Experience', desc: 'A modern, stress-free alternative to delivering a physical check.' },
];

export default function DepositEarnestMoneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/features/zoccam-logo.png"
              alt="ZOCCAM® – Driving Success Not Checks"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert"
              unoptimized
            />
          </div>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Earnest Money Deposit Using Your Phone
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            We've partnered with ZOCCAM to offer a mobile fund delivery solution — send your earnest money
            checks quickly and securely, directly from your smartphone.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-2"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            How It Works
          </h2>
          <p className="text-[var(--color-neutral-600)] mb-10">
            Six simple steps to send your earnest money from your phone.
          </p>

          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6"
              >
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {step.number}
                </div>
                <p className="text-[var(--color-neutral-700)] leading-relaxed pt-1.5">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://apps.apple.com/us/app/zoccam/id931762803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-primary-900)] text-white font-semibold hover:bg-[var(--color-primary-700)] transition-colors"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.zoccam.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-semibold hover:bg-[var(--color-primary-50)] transition-colors"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-2"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Why You'll Love It
          </h2>
          <p className="text-[var(--color-neutral-600)] mb-10">
            Mobile fund delivery is the modern way to handle earnest money.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0" />
                  <h3 className="font-semibold text-[var(--color-primary-900)]">{b.title}</h3>
                </div>
                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner note */}
      <section className="py-12 bg-white border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-[var(--color-primary-50)] rounded-2xl border border-[var(--color-primary-200)] p-8">
            <Image
              src="/images/features/zoccam-logo.png"
              alt="ZOCCAM®"
              width={140}
              height={40}
              className="h-10 w-auto shrink-0"
              unoptimized
            />
            <div>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Federal Title & Escrow Company has partnered with{' '}
                <strong className="text-[var(--color-primary-900)]">ZOCCAM®</strong> to bring you a faster,
                safer way to deliver earnest money. ZOCCAM is a secure mobile payment platform built
                specifically for real estate transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Order Your Closing?"
        description="Order services online and your client automatically receives up to $750 in closing cost credits."
        primaryAction={{ text: 'Order Services', href: '/order' }}
        secondaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        background="gradient"
      />
    </>
  );
}

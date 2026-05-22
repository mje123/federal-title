import Link from 'next/link';
import { Laptop, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remote Closing | Federal Title & Escrow Company',
  description:
    'Close remotely with Federal Title attorneys from any smart device, any time, from anywhere. Legally sign your closing documents without coming into the office.',
};

export default function RemoteClosingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            REALSafe™ Closing Solutions
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Remote, Digital Closings
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Legally close with Federal Title attorneys, from any smart device, any time, within minutes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-[var(--color-neutral-700)] text-xl leading-relaxed mb-8">
            These days consumers expect every aspect of their real estate transactions to be digitized. The industry is moving that way but hasn&apos;t fully converted. Sellers and all-cash buyers, plus borrowers with lender approval, can close remotely with Federal Title attorneys.
          </p>

          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Who can close remotely?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              'Sellers — sign your side of the closing from anywhere',
              'All-cash buyers — no lender approval required',
              'Refinancing borrowers — with lender approval',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-500)] shrink-0" />
                <span className="text-[var(--color-neutral-700)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Laptop className="h-6 w-6" />,
                title: 'Any device',
                desc: 'Close from a laptop, tablet, or smartphone — wherever you are.',
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: 'Any time',
                desc: 'No need to coordinate schedules around office hours.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Fully legal',
                desc: 'Attorney-supervised remote closings are legally valid in DC, Maryland, and Virginia.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6 text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-primary-50)] rounded-xl border border-[var(--color-primary-200)] p-7">
            <h3
              className="text-xl font-bold text-[var(--color-primary-900)] mb-3"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Wire fraud warning
            </h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              Whether you close in person or remotely, always verify wire instructions by calling Federal Title directly before sending funds. Wire fraud is one of the fastest-growing real estate scams.
            </p>
            <Link
              href="/realsafe"
              className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
            >
              Learn about REALSafe™ »
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to close remotely?"
        description="Get a guaranteed quote and start your remote closing process today."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

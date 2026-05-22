import Link from 'next/link';
import { Scale, Star, Clock, Shield } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REALegal™ | Federal Title & Escrow Company',
  description:
    'REALegal™ provides homebuyers and sellers who close at Federal Title with up to 2 hours of free legal consultation for both pre-closing and post-closing matters.',
};

export default function REALegalPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Included with Your Closing
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            REALegal™
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto font-medium">
            Peace of mind for your buyers and sellers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-[var(--color-neutral-700)] text-xl leading-relaxed mb-10">
            REALegal™ provides homebuyers and sellers who close at Federal Title with up to 2 hours of free legal consultation for both pre-closing and post-closing matters.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Star className="h-6 w-6" />,
                title: 'Look like a hero',
                desc: 'We give all the credit to you — your clients will remember the agent who got them free legal counsel.',
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: 'Save valuable time',
                desc: 'With 2 hours of free legal consultation, your clients get expert advice without the clock running.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Empower your clients',
                desc: 'Your clients will feel secure knowing they have a legal safety net for post-closing issues.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6 text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-primary-50)] rounded-xl border border-[var(--color-primary-200)] p-8 mb-10">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              How REALegal™ works
            </h2>
            <ol className="space-y-3">
              {[
                'Close your transaction at Federal Title — REALegal™ is automatically included.',
                'Receive your REALegal™ certificate at closing with attorney contact information.',
                'For post-closing matters, contact the attorney listed on your certificate or reach Federal Title at (202) 362-1500.',
                'Get up to 2 hours of free legal consultation from experienced real estate attorneys.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-[var(--color-primary-700)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[var(--color-neutral-700)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="h-6 w-6 text-[var(--color-primary-700)]" />
              <h2
                className="text-xl font-bold text-[var(--color-primary-900)]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Legal Service Providers
              </h2>
            </div>
            <p className="text-[var(--color-neutral-600)] mb-3">
              REALegal™ consultations are provided by The Lawrence Law Group, PLLC or John E. Reid, PLLC — both with more than 10 years of experience in negotiating and resolving disputes relating to residential real estate transactions.
            </p>
            <p className="text-sm text-[var(--color-neutral-400)]">
              REALegal™ is available only to clients of REAL Benefits™ members who close at Federal Title.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Included with every closing"
        description="Close at Federal Title and your clients automatically receive REALegal™ — plus up to $750 in REAL Credits."
        primaryAction={{ text: 'Become a REAL Benefits™ Partner', href: '/real-benefits' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

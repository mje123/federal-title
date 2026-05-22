import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rockville, MD Office | Federal Title & Escrow Company',
  description: 'Federal Title\'s Rockville, Maryland office at 1 Research Court, Suite 450 (4th Floor), Rockville, MD 20850.',
};

export default function RockvillePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">Rockville · Est. 2019</p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-playfair), serif' }}>Rockville, MD</h1>
          <p className="text-xl text-white/70 max-w-xl">Federal Title&apos;s Rockville, Maryland office serving Montgomery County.</p>
        </div>
      </section>
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
            <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8">
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Office Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-[var(--color-primary-600)] mt-0.5 shrink-0" /><div><p className="font-medium text-[var(--color-neutral-900)]">Address</p><p className="text-[var(--color-neutral-600)]">1 Research Court, Suite 450 (4th Floor)</p><p className="text-[var(--color-neutral-600)]">Rockville, MD 20850</p></div></div>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-[var(--color-primary-600)] mt-0.5 shrink-0" /><div><p className="font-medium text-[var(--color-neutral-900)]">Phone</p><a href="tel:+12023621500" className="text-[var(--color-primary-600)]">(202) 362-1500</a></div></div>
                <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-[var(--color-primary-600)] mt-0.5 shrink-0" /><div><p className="font-medium text-[var(--color-neutral-900)]">Email</p><a href="mailto:info@federaltitle.com" className="text-[var(--color-primary-600)]">info@federaltitle.com</a></div></div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/quick-quote" className="flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors">Get a Free Quote</Link>
              <Link href="/order" className="flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-accent-600)] text-white font-semibold hover:bg-[var(--color-accent-700)] transition-colors">Order Services</Link>
              <Link href="/locations" className="text-sm text-center text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)] transition-colors mt-2">← All Locations</Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Ready to close in Rockville?" description="Get a guaranteed quote online or call (202) 362-1500." primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }} secondaryAction={{ text: 'All Locations', href: '/locations' }} background="gradient" />
    </>
  );
}

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Locations | Federal Title & Escrow Company',
  description:
    'Federal Title & Escrow Company has 6 office locations across DC, Maryland & Virginia — Chevy Chase, U Street DC, Rockville, Arlington, Potomac, and Fairfax.',
};

const mainOffices = [
  {
    label: 'Uptown',
    name: 'Friendship Heights / Chevy Chase',
    address: '5481 Wisconsin Avenue, Suite D',
    city: 'Chevy Chase, MD 20815',
    note: 'Main Office',
    since: 'Est. 1996',
    href: '/locations/friendship-heights',
  },
  {
    label: 'Downtown',
    name: 'U Street / Logan Circle',
    address: '1803 14th Street, NW, Third Floor',
    city: 'Washington, DC 20009',
    since: 'Est. 2013',
    href: '/locations/14th-street',
  },
  {
    label: 'Rockville',
    name: 'Rockville, MD',
    address: '1 Research Court, Suite 450 (4th Floor)',
    city: 'Rockville, MD 20850',
    since: 'Est. 2019',
    href: '/locations/rockville-md',
  },
  {
    label: 'Arlington',
    name: 'Clarendon / Arlington',
    address: '3101 Wilson Boulevard, Suite 500',
    city: 'Arlington, VA 22201',
    since: 'Est. 2021',
    href: '/locations/arlington-va',
  },
  {
    label: 'Potomac',
    name: 'Potomac, MD',
    address: '10000 Falls Road, Suite 101 (Use Elevator)',
    city: 'Potomac, MD 20854',
    since: 'Est. 2021',
    href: '/locations/potomac-md',
  },
  {
    label: 'Fairfax',
    name: 'Fairfax, VA',
    address: '3975 Fair Ridge Drive, Suite T25S-A',
    addressNote: 'South Building Ground Floor — Level T',
    city: 'Fairfax, VA 22033',
    since: 'Est. 2026',
    isNew: true,
    href: '/locations/fairfax-va',
  },
];

const satelliteOffices = [
  {
    name: 'Alexandria',
    address: '1800 Diagonal Road, Suite 600',
    city: 'Alexandria, VA 22314',
  },
  {
    name: 'Reston',
    address: '1818 Library Street, Suite 500',
    city: 'Reston, VA 20190',
  },
  {
    name: "Tysons Corner",
    address: '1750 Tysons Boulevard, Suite 1500',
    city: 'McLean, VA 22102',
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Find Us
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Our Locations
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Six offices across DC, Maryland & Virginia — close to where you live, work, and buy.
          </p>
        </div>
      </section>

      {/* Main offices */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-10"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Full-Service Offices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainOffices.map((office) => (
              <div
                key={office.label}
                className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-neutral-400)]">
                    {office.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--color-neutral-400)]">{office.since}</span>
                    {office.isNew && (
                      <span className="text-xs font-semibold text-[var(--color-accent-500)] bg-[var(--color-accent-50)] px-2 py-0.5 rounded-full">
                        New!
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-1">
                  {office.name}
                </h3>
                {office.note && (
                  <p className="text-xs text-[var(--color-accent-600)] font-medium mb-2">
                    {office.note}
                  </p>
                )}
                <div className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)] mb-1">
                  <MapPin className="h-4 w-4 text-[var(--color-primary-500)] mt-0.5 shrink-0" />
                  <div>
                    <p>{office.address}</p>
                    {office.addressNote && (
                      <p className="text-xs text-[var(--color-neutral-400)]">{office.addressNote}</p>
                    )}
                    <p>{office.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-600)] mb-5">
                  <Phone className="h-4 w-4 text-[var(--color-primary-500)] shrink-0" />
                  <a href="tel:+12023621500" className="hover:text-[var(--color-primary-600)] transition-colors">
                    (202) 362-1500
                  </a>
                </div>
                <div className="mt-auto">
                  <Link
                    href={office.href}
                    className="text-sm font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                  >
                    Office details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satellite offices */}
      <section className="py-16 bg-white border-t border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-[var(--color-primary-900)] mb-2"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Satellite Closing Locations
          </h2>
          <p className="text-[var(--color-neutral-500)] mb-8">
            We also close at these locations by appointment.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {satelliteOffices.map((office) => (
              <div
                key={office.name}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-6"
              >
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{office.name}</h3>
                <div className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)]">
                  <MapPin className="h-4 w-4 text-[var(--color-primary-400)] mt-0.5 shrink-0" />
                  <div>
                    <p>{office.address}</p>
                    <p>{office.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote closing */}
      <section className="py-16 bg-[var(--color-primary-50)] border-t border-[var(--color-primary-100)]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Can&apos;t make it in person?
          </h2>
          <p className="text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto mb-6">
            Sellers and all-cash buyers — plus borrowers with lender approval — can close remotely
            with Federal Title attorneys from any device, any time.
          </p>
          <Link
            href="/sellers/remote-closing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
          >
            Learn About Remote Closing
          </Link>
        </div>
      </section>

      <CTA
        title="Ready to schedule your closing?"
        description="Get a guaranteed quote online in under 2 minutes. Save up to $750 with REAL Benefits™."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Now', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

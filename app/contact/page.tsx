import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Federal Title & Escrow Company. We serve DC, Maryland & Virginia. Call (202) 362-1500 or email info@federaltitle.com.',
};

const offices = [
  {
    label: 'Uptown',
    name: 'Friendship Heights / Chevy Chase',
    address: '5481 Wisconsin Avenue, Suite D',
    city: 'Chevy Chase, MD 20815',
    phone: '(202) 362-1500',
    href: '/locations/friendship-heights',
  },
  {
    label: 'Downtown',
    name: 'U Street / Logan Circle',
    address: '1803 14th Street, NW, Third Floor',
    city: 'Washington, DC 20009',
    phone: '(202) 362-1500',
    href: '/locations/14th-street',
  },
  {
    label: 'Rockville',
    name: 'Rockville, MD',
    address: '1 Research Court, Suite 450',
    city: 'Rockville, MD 20850',
    phone: '(202) 362-1500',
    href: '/locations/rockville-md',
  },
  {
    label: 'Arlington',
    name: 'Clarendon / Arlington',
    address: '3101 Wilson Blvd, Suite 500',
    city: 'Arlington, VA 22201',
    phone: '(202) 362-1500',
    href: '/locations/arlington-va',
  },
  {
    label: 'Potomac',
    name: 'Potomac, MD',
    address: '10000 Falls Road, Suite 101',
    city: 'Potomac, MD 20854',
    phone: '(202) 362-1500',
    href: '/locations/potomac-md',
  },
  {
    label: 'Fairfax',
    name: 'Fairfax, VA',
    address: '3975 Fair Ridge Drive, Suite T25S-A',
    city: 'Fairfax, VA 22033',
    phone: '(202) 362-1500',
    href: '/locations/fairfax-va',
    isNew: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-5xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Questions about a closing? Need a quote? Our team typically responds within 1
            business hour.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div>
              <h2
                className="text-3xl font-bold text-[var(--color-neutral-900)] mb-8 font-display"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Reach us directly
              </h2>

              <div className="space-y-3 mb-10">
                <a
                  href="tel:+12023621500"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">Main Line</p>
                    <p className="text-[var(--color-primary-600)] text-lg font-medium">
                      (202) 362-1500
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+12029189358"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">Settlement Attorney Services</p>
                    <p className="text-[var(--color-primary-600)] text-lg font-medium">(202) 918-9358</p>
                  </div>
                </a>

                <a
                  href="tel:+12029189359"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">Post-Closing Support</p>
                    <p className="text-[var(--color-primary-600)] text-lg font-medium">(202) 918-9359</p>
                  </div>
                </a>

                <a
                  href="tel:+12022741501"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">REAL Benefits Members</p>
                    <p className="text-[var(--color-primary-600)] text-lg font-medium">(202) 274-1501</p>
                  </div>
                </a>

                <a
                  href="mailto:info@federaltitle.com"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">Email</p>
                    <p className="text-[var(--color-primary-600)] font-medium">info@federaltitle.com</p>
                  </div>
                </a>

                <a
                  href="mailto:order@federaltitle.com"
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-neutral-900)]">New Contract Submissions</p>
                    <p className="text-[var(--color-primary-600)] font-medium">order@federaltitle.com</p>
                  </div>
                </a>
              </div>

              <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] rounded-xl p-6">
                <p className="font-semibold text-[var(--color-accent-900)] mb-1">
                  Ready to get a quote?
                </p>
                <p className="text-sm text-[var(--color-accent-700)] mb-4">
                  Use our online form and receive a guaranteed quote. Order online and save up to $750 with REAL Benefits™.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/quick-quote"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[var(--color-accent-600)] text-[var(--color-accent-700)] font-medium text-sm hover:bg-[var(--color-accent-600)] hover:text-white transition-colors"
                  >
                    Just a Quote, Please »
                  </Link>
                  <Link
                    href="/order"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent-600)] text-white font-medium text-sm hover:bg-[var(--color-accent-700)] transition-colors"
                  >
                    Order Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Office locations */}
            <div>
              <h2
                className="text-3xl font-bold text-[var(--color-neutral-900)] mb-8 font-display"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Our Offices
              </h2>

              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.label}
                    className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-neutral-400)] mr-2">
                          {office.label}
                        </span>
                        {office.isNew && (
                          <span className="text-xs text-[var(--color-accent-500)] font-medium">
                            Est. 2026 · New!
                          </span>
                        )}
                      </div>
                      <Link
                        href={office.href}
                        className="text-xs text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)] transition-colors"
                      >
                        Details →
                      </Link>
                    </div>
                    <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">
                      {office.name}
                    </h3>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2 text-[var(--color-neutral-600)]">
                        <MapPin className="h-4 w-4 text-[var(--color-primary-500)] mt-0.5 shrink-0" />
                        <div>
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--color-neutral-600)]">
                        <Phone className="h-4 w-4 text-[var(--color-primary-500)] shrink-0" />
                        <a
                          href="tel:+12023621500"
                          className="hover:text-[var(--color-primary-600)] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

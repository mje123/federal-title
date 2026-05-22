import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press | Federal Title & Escrow Company',
  description:
    'Federal Title & Escrow Company in the news — press coverage from Washington Post, WTOP, NPR, Bankrate, Fox Business, and more.',
};

const pressItems = [
  {
    pub: 'WTOP',
    date: 'May 19, 2020',
    title: 'Federal Title introduces REAL Safe contactless real estate closing solutions',
    href: '#',
  },
  {
    pub: 'WTOP',
    date: 'Apr 13, 2020',
    title: "Home sale closings can be done remotely for social distancing, but there's a catch",
    href: '#',
  },
  {
    pub: 'Washington Post',
    date: 'Mar 30, 2020',
    title: 'With hand sanitizer and elbow bumps, real estate agents still selling during pandemic',
    href: '#',
  },
  {
    pub: 'Washington Post',
    date: 'Apr 8, 2015',
    title: 'Title insurance protects your biggest investment for not a lot of cost',
    href: '#',
  },
  {
    pub: 'Washington Post',
    date: 'Mar 2, 2015',
    title: 'Save at settlement by cutting your closing costs',
    href: '#',
  },
  {
    pub: 'Urban Turf',
    date: 'May 20, 2013',
    title: 'New app calculates cash outlay for buyer',
    href: '#',
  },
  {
    pub: 'Washington Post',
    date: 'Nov 11, 2011',
    title: "New D.C. title insurance shortcomings",
    href: '#',
  },
];

const publications = [
  'Washington Post',
  'WTOP',
  'NPR',
  'Washington Examiner',
  'Washington Times',
  'Bankrate',
  'Fox Business',
  'Urban Turf',
  'The Title Report',
  'HSH.com',
];

export default function PressPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Media Coverage
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            In the Press
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Federal Title has been featured in leading publications covering DC-area real estate,
            title insurance, and consumer finance.
          </p>
        </div>
      </section>

      {/* Publication logos bar */}
      <section className="py-10 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-[var(--color-neutral-400)] mb-6">
            As seen in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {publications.map((pub) => (
              <span
                key={pub}
                className="px-4 py-2 bg-white border border-[var(--color-neutral-200)] rounded-lg text-sm font-medium text-[var(--color-neutral-600)]"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Recent Coverage
          </h2>
          <div className="space-y-5">
            {pressItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]"
              >
                <div className="min-w-[80px]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary-600)] bg-[var(--color-primary-100)] px-2 py-1 rounded">
                    {item.pub}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[var(--color-neutral-900)] leading-snug mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--color-neutral-400)]">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Media inquiries?"
        description="Contact Federal Title for press inquiries, expert commentary, or media resources."
        primaryAction={{ text: 'Contact Us', href: '/contact' }}
        secondaryAction={{ text: 'About Federal Title', href: '/about-us' }}
        background="gradient"
      />
    </>
  );
}

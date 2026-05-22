import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Federal Title & Escrow Company',
  description: 'Complete sitemap for Federal Title & Escrow Company — find every page on our site.',
};

const sections = [
  {
    title: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Get a Quote', href: '/quick-quote' },
      { label: 'Order Services', href: '/order' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Locations', href: '/locations' },
    ],
  },
  {
    title: 'Agents',
    links: [
      { label: 'Agents Overview', href: '/agents' },
      { label: 'REAL Benefits™', href: '/real-benefits' },
      { label: 'REALegal™ Consultation', href: '/realegal' },
      { label: 'Marketing Downloads', href: '/agents/marketing-downloads' },
      { label: 'Member Login', href: 'https://tools.federaltitle.com' },
    ],
  },
  {
    title: 'Consumers',
    links: [
      { label: 'Homebuyers', href: '/homebuyers' },
      { label: 'Homebuying Guide', href: '/homebuying' },
      { label: 'Sellers', href: '/sellers' },
      { label: 'Remote Closing', href: '/sellers/remote-closing' },
      { label: 'Homeowners', href: '/homeowners' },
      { label: 'Refinancing', href: '/homeowners/refinancing' },
      { label: 'Deed Transfers', href: '/homeowners/deed-transfers' },
    ],
  },
  {
    title: 'Lenders',
    links: [
      { label: 'Lenders Overview', href: '/lenders' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Wire Fraud Prevention', href: '/realsafe' },
      { label: 'Utility Providers', href: '/utility-providers' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/about-us/team' },
      { label: 'Careers', href: '/about-us/careers' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Office Locations',
    links: [
      { label: 'Friendship Heights (Chevy Chase)', href: '/locations/friendship-heights' },
      { label: '14th Street / U Street', href: '/locations/14th-street' },
      { label: 'Rockville, MD', href: '/locations/rockville-md' },
      { label: 'Arlington, VA', href: '/locations/arlington-va' },
      { label: 'Potomac, MD', href: '/locations/potomac-md' },
      { label: 'Fairfax, VA', href: '/locations/fairfax-va' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1
            className="text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Sitemap
          </h1>
          <p className="text-white/70 mt-3 text-lg">Every page on federaltitle.com</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-neutral-400)] mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[var(--color-primary-700)] hover:text-[var(--color-accent-600)] transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const locations = [
  { label: 'Uptown', name: 'Friendship Heights / Chevy Chase', href: '/locations/friendship-heights', address: '5481 Wisconsin Ave, Suite D', city: 'Chevy Chase, MD 20815' },
  { label: 'Downtown', name: 'U Street / Logan Circle', href: '/locations/14th-street', address: '1803 14th Street, NW, Third Floor', city: 'Washington, DC 20009' },
  { label: 'Rockville', name: 'Rockville, MD', href: '/locations/rockville-md', address: '1 Research Court, Suite 450', city: 'Rockville, MD 20850' },
  { label: 'Arlington', name: 'Clarendon / Arlington', href: '/locations/arlington-va', address: '3101 Wilson Blvd, Suite 500', city: 'Arlington, VA 22201' },
  { label: 'Potomac', name: 'Potomac, MD', href: '/locations/potomac-md', address: '10000 Falls Road, Suite 101', city: 'Potomac, MD 20854' },
];

const quickLinks = [
  { label: 'REAL Benefits™', href: '/real-benefits' },
  { label: 'Close It!™', href: 'https://closeit.federaltitle.com' },
  { label: 'Blog', href: '/blog' },
  { label: 'Homebuying Guide', href: '/homebuying' },
  { label: 'Utility Providers', href: '/utility-providers' },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main footer — matches live site layout */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: brand + contact + social */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/brand/federaltitleescrow_white-56939da1.png"
                alt="Federal Title & Escrow Company"
                width={220}
                height={60}
                className="h-12 w-auto"
                unoptimized
              />
            </div>

            {/* Social icons — matching live site: X, Facebook, LinkedIn, Instagram */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { label: 'X / Twitter', href: 'https://twitter.com/dcTitleCompany', letter: '𝕏' },
                { label: 'Facebook', href: 'https://www.facebook.com/federaltitle', letter: 'f' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/federal-title-escrow-company', letter: 'in' },
                { label: 'Instagram', href: 'https://www.instagram.com/federaltitle', letter: '◻' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-sm hover:border-white hover:bg-white/10 transition-all"
                >
                  {s.letter}
                </a>
              ))}
            </div>

            <p className="text-white/60 text-sm mb-4">©2025 Federal Title &amp; Escrow Co.</p>

            <div className="space-y-1 text-sm text-white/70 mb-4">
              <p>5481 Wisconsin Avenue, Suite D</p>
              <p>Chevy Chase, MD 20815</p>
            </div>

            <a
              href="mailto:info@federaltitle.com"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <Mail className="h-4 w-4 shrink-0" />
              info@federaltitle.com
            </a>

            {/* Locations list — matches footer on live site */}
            <div className="mb-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">Locations</p>
              <ul className="space-y-1.5">
                {locations.map((loc) => (
                  <li key={loc.label}>
                    <Link
                      href={loc.href}
                      className="text-sm text-white/70 hover:text-white uppercase tracking-wide transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/60"
                    >
                      {loc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/realsafe"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              REALSafe™ Closing Solutions »
            </Link>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: all locations with addresses */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Our Offices</h3>
            <div className="space-y-5">
              {locations.map((loc) => (
                <div key={loc.label}>
                  <Link
                    href={loc.href}
                    className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                  <p className="text-xs text-white/50 mt-0.5">{loc.address}</p>
                  <p className="text-xs text-white/50">{loc.city}</p>
                </div>
              ))}
              <div>
                <p className="text-sm font-semibold text-white/90">Fairfax, VA</p>
                <p className="text-xs text-white/50">3975 Fair Ridge Drive, Suite T25S-A</p>
                <p className="text-xs text-white/50">Fairfax, VA 22033</p>
                <span className="text-xs text-[var(--color-accent-400)]">Est. 2026 · New!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            ®All rights reserved · Federal Title &amp; Escrow Company
          </p>
          <div className="flex items-center gap-5">
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">Sitemap</Link>
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

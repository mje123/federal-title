'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  {
    label: 'Agents',
    href: '/agents',
    children: [
      { label: 'REAL Benefits™', href: '/real-benefits' },
      { label: 'Save Up to $750', href: '/real-benefits#credit' },
      { label: 'REALegal™ Consultation', href: '/realegal' },
      { label: 'Member Login', href: 'https://closeit.federaltitle.com' },
      { label: 'Marketing Downloads', href: '/agents/marketing-downloads' },
    ],
  },
  {
    label: 'Consumers',
    href: '/homebuyers',
    children: [
      { label: 'Homebuyers', href: '/homebuyers' },
      { label: 'Title Fees', href: '/homebuying/fees' },
      { label: 'Title Insurance Premiums', href: '/homebuying/title-insurance' },
      { label: 'Earnest Money Deposit', href: '/homebuyers/earnest-money' },
      { label: 'Sellers', href: '/sellers' },
      { label: 'Calculate Proceeds', href: '/sellers/calculate-proceeds' },
      { label: 'Remote Closing', href: '/sellers/remote-closing' },
      { label: 'Homeowners', href: '/homeowners' },
      { label: 'Refinancing', href: '/homeowners/refinancing' },
      { label: 'Deed Transfers', href: '/homeowners/deed-transfers' },
    ],
  },
  {
    label: 'Lenders',
    href: '/lenders',
    children: [
      { label: 'Best Practices Summary', href: '/lenders/best-practices' },
      { label: 'View Licensing', href: '/lenders/licensing' },
      { label: 'Tax Info for Closing', href: '/lenders/tax-info' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog',
    children: [
      { label: 'Real Estate Blog', href: '/blog' },
      { label: 'What is Title Insurance?', href: '/title-insurance' },
      { label: "Owner's Title Insurance", href: '/title-insurance/owners-protection' },
      { label: 'FIRPTA', href: '/firpta' },
      { label: 'Pre-Closing Guide', href: '/pre-closing-guide' },
      { label: 'Post-Closing Guide', href: '/post-closing-guide' },
      { label: 'DC Tax Abatement', href: '/dc-tax-abatement' },
      { label: 'Homestead Deduction', href: '/dc-homestead-deduction' },
      { label: 'Reduced Recordation', href: '/dc-reduced-recordation' },
      { label: 'First-Time Homebuyer', href: '/dc-first-time-homebuyer' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/about-us/team' },
      { label: 'Careers', href: '/about-us/careers' },
      { label: 'Locations', href: '/locations' },
      { label: 'Reviews', href: '/testimonials' },
    ],
  },
  {
    label: 'Close It!™',
    href: 'https://closeit.federaltitle.com',
    external: true,
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHomePage = pathname === '/';

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--color-primary-900)] text-white text-sm py-2 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-white/70">
            Attorney-Led, Consumer Driven. Trusted by the DMV for 30 years.
          </p>
          <a
            href="tel:+12023621500"
            className="flex items-center gap-2 hover:text-white/90 transition-colors font-medium"
          >
            <Phone className="h-3.5 w-3.5" />
            (202) 362-1500
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-neutral-200',
          isScrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/brand/logo.png"
                alt="Federal Title & Escrow Company"
                width={200}
                height={55}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Quote + Order as inline nav CTAs */}
              <Link
                href="/quick-quote"
                className="px-3 py-2 text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] hover:bg-[var(--color-primary-50)] rounded-lg transition-colors"
              >
                Quote
              </Link>
              <Link
                href="/order"
                className="px-3 py-2 mr-2 text-sm font-semibold text-[var(--color-accent-700)] hover:text-[var(--color-accent-900)] hover:bg-[var(--color-accent-50)] rounded-lg transition-colors"
              >
                Order
              </Link>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                        'text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)]',
                        pathname.startsWith(link.href) &&
                          link.href !== '/' &&
                          'text-[var(--color-primary-700)] bg-[var(--color-primary-50)]'
                      )}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-200',
                            activeDropdown === link.label && 'rotate-180'
                          )}
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-1">
                      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 py-2 min-w-[220px] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'flex items-center px-4 py-2.5 text-sm transition-colors',
                              'text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)]',
                              pathname === child.href &&
                                'text-[var(--color-primary-700)] bg-[var(--color-primary-50)] font-medium'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="container mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-neutral-800)] hover:bg-[var(--color-neutral-50)]"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          activeDropdown === link.label && 'rotate-180'
                        )}
                      />
                    )}
                  </button>
                  {link.children && activeDropdown === link.label && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] rounded-lg hover:bg-[var(--color-primary-50)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
                <Link
                  href="/quick-quote"
                  className="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)]"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/order"
                  className="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg bg-[var(--color-accent-600)] text-white"
                >
                  Order Now · Save $750
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

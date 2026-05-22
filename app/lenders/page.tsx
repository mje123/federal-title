import Link from 'next/link';
import { CheckCircle2, Clock, Shield, DollarSign } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Lenders | Federal Title & Escrow Company',
  description:
    'Federal Title works seamlessly with lenders to ensure timely, compliant closings in DC, Maryland & Virginia. Custom workflow software, competitive pricing, and attorney oversight.',
};

export default function LendersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Lenders
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Lender Services
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            What are some of the reasons lenders choose to work with Federal Title?
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: 'Timely Communication',
                desc: 'The 3-Day Rule means communication between lenders and title companies is more important than ever to ensure timely delivery of disclosures and documents. Federal Title uses custom WorkFlow software to keep all stakeholders informed throughout the process.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Federal Compliance',
                desc: 'The organization maintains strict business procedures to support lenders. Our approach ensures closings meet regulatory requirements without complications.',
              },
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: 'Competitive Pricing',
                desc: 'Fees are published online to prevent unexpected costs. The REAL Credit program helps reduce expenses for homebuyers, making your clients happier at closing.',
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: 'Attorney Oversight',
                desc: 'Every file is handled by licensed real estate attorneys — ensuring accuracy, compliance, and professional oversight from start to finish.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-7"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[var(--color-primary-50)] rounded-2xl border border-[var(--color-primary-200)] p-8">
              <h3
                className="text-2xl font-bold text-[var(--color-primary-900)] mb-4"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Tools for Lenders
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  "Seller's Net Proceeds calculator",
                  "Property Tax Comparison tool",
                  "Buyer's Quick Quote function",
                  "Close It!™ mobile app for Closing Disclosures",
                  "REALSafe™ Closing Solutions for wire fraud prevention",
                  "REAL Benefits™ for borrower savings",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-500)] shrink-0" />
                    <span className="text-sm text-[var(--color-neutral-700)]">{tool}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lenders/best-practices"
                  className="px-5 py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white font-medium text-sm hover:bg-[var(--color-primary-900)] transition-colors"
                >
                  Best Practices Summary
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-medium text-sm hover:bg-[var(--color-primary-50)] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to work together?"
        description="Contact us to discuss how Federal Title can support your lending operations."
        primaryAction={{ text: 'Contact Us', href: '/contact' }}
        secondaryAction={{ text: 'Order Services', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

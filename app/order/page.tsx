import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Closing Services | Federal Title & Escrow Company',
  description:
    'Order title and settlement services online. Receive up to $750 in REAL Credits plus 2 hours of free REALegal™ consultation when you order through Federal Title.',
};

const included = [
  'Up to $750 REAL Credit on settlement fee',
  '2 hours of free REALegal™ consultation',
  'Closing process tracker',
  'Complete cash-to-close picture',
  'Attorney-led closing',
];

export default function OrderPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            REAL Benefits™ Included
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Order Closing Services
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Order online and automatically receive up to $750 in REAL Credits toward your settlement fee — plus 2 hours of free REALegal™ consultation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main CTA */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-8 lg:p-10">
                <h2
                  className="text-2xl font-bold text-[var(--color-primary-900)] mb-4"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Ready to Place Your Order?
                </h2>
                <p className="text-[var(--color-neutral-600)] mb-8 leading-relaxed">
                  Click below to open our secure order form. You&apos;ll receive a confirmation within 1 business hour, and your REAL Credit will be automatically applied at closing.
                </p>

                <a
                  href="https://tools.federaltitle.com/titleagents/orderservicen.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center py-4 px-6 rounded-lg bg-[var(--color-accent-600)] text-white font-semibold text-base hover:bg-[var(--color-accent-700)] transition-colors shadow-sm"
                >
                  Place My Order
                  <ArrowRight className="h-5 w-5" />
                </a>

                <p className="text-xs text-center text-[var(--color-neutral-500)] mt-4">
                  Secure order form. Your REAL Credit will be applied at closing.
                </p>

                <div className="mt-8 pt-8 border-t border-[var(--color-neutral-200)]">
                  <p className="text-sm font-medium text-[var(--color-neutral-700)] mb-3">Prefer to order by phone or email?</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href="tel:+12023621500" className="text-[var(--color-primary-700)] font-semibold hover:text-[var(--color-primary-900)] transition-colors">
                      (202) 362-1500
                    </a>
                    <a href="mailto:order@federaltitle.com" className="text-[var(--color-primary-700)] font-semibold hover:text-[var(--color-primary-900)] transition-colors">
                      order@federaltitle.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[var(--color-accent-50)] rounded-xl border border-[var(--color-accent-200)] p-6">
                <h3 className="font-bold text-[var(--color-accent-900)] mb-3">
                  Included with your order
                </h3>
                <div className="space-y-2.5">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-accent-800)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
                <p className="text-sm font-medium text-[var(--color-neutral-700)] mb-1">Not ready to order?</p>
                <p className="text-xs text-[var(--color-neutral-500)] mb-3">Get a guaranteed quote with no obligation.</p>
                <Link
                  href="/quick-quote"
                  className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
                >
                  Just a Quote, Please »
                </Link>
              </div>

              <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
                <p className="text-sm font-medium text-[var(--color-neutral-900)] mb-1">Questions?</p>
                <a href="tel:+12023621500" className="text-[var(--color-primary-700)] font-semibold text-lg block mb-1 hover:text-[var(--color-primary-900)] transition-colors">
                  (202) 362-1500
                </a>
                <a href="mailto:info@federaltitle.com" className="text-xs text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)] transition-colors">
                  info@federaltitle.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

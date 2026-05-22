'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const transactionTypes = [
  { value: 'purchase-buyer', label: 'Purchase – Buyer Side' },
  { value: 'purchase-seller', label: 'Purchase – Seller Side' },
  { value: 'purchase-both', label: 'Purchase – Both Sides' },
  { value: 'refinance', label: 'Refinance' },
  { value: 'deed-transfer', label: 'Deed Transfer' },
];

const jurisdictions = [
  { value: 'dc', label: 'Washington, DC' },
  { value: 'md', label: 'Maryland' },
  { value: 'va', label: 'Virginia' },
];

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-neutral-50)]">
        <div className="max-w-lg mx-auto text-center px-6">
          <div className="h-16 w-16 rounded-full bg-[var(--color-accent-100)] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-[var(--color-accent-600)]" />
          </div>
          <h2
            className="text-3xl font-bold text-[var(--color-primary-900)] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Order Received!
          </h2>
          <p className="text-[var(--color-neutral-600)] text-lg mb-6">
            Thank you for ordering with Federal Title. Our team will reach out within 1 business hour to confirm your order and next steps.
          </p>
          <p className="text-sm text-[var(--color-neutral-500)] mb-8">
            Questions? Call us at{' '}
            <a href="tel:+12023621500" className="text-[var(--color-primary-700)] font-medium">
              (202) 362-1500
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-8 lg:p-10">
                <h2
                  className="text-2xl font-bold text-[var(--color-primary-900)] mb-8"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Your Closing Order
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      Transaction Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select transaction type</option>
                      {transactionTypes.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        Jurisdiction *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select jurisdiction</option>
                        {jurisdictions.map((j) => (
                          <option key={j.value} value={j.value}>{j.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                        Estimated Closing Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      Property Address
                    </label>
                    <input
                      type="text"
                      placeholder="123 Main Street, Washington, DC 20001"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] placeholder:text-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-[var(--color-accent-600)] text-white font-semibold text-base hover:bg-[var(--color-accent-700)] transition-colors shadow-sm"
                  >
                    Submit Order
                  </button>
                  <p className="text-xs text-center text-[var(--color-neutral-500)]">
                    By submitting, you agree to Federal Title contacting you about your order.
                    Your REAL Credit will be applied at closing.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[var(--color-accent-50)] rounded-xl border border-[var(--color-accent-200)] p-6">
                <h3 className="font-bold text-[var(--color-accent-900)] mb-3">
                  Included with your order
                </h3>
                <div className="space-y-2.5">
                  {[
                    'Up to $750 REAL Credit on settlement fee',
                    '2 hours of free REALegal™ consultation',
                    'Closing process tracker',
                    'Complete cash-to-close picture',
                    'Attorney-led closing',
                  ].map((item) => (
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

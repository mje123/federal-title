'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const subjects = [
  'General Question',
  'New Order / Get Started',
  'Existing Order / Status',
  'Quote Request',
  'REALegal™ Consultation',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement)?.value,
      subject: (form.querySelector('[name="subject"]') as HTMLSelectElement)?.value,
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please call us at (202) 362-1500 or email info@federaltitle.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="h-14 w-14 rounded-full bg-[var(--color-accent-100)] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-7 w-7 text-[var(--color-accent-600)]" />
        </div>
        <h3
          className="text-xl font-bold text-[var(--color-primary-900)] mb-2"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Message Sent!
        </h3>
        <p className="text-[var(--color-neutral-600)] text-sm">
          We typically respond within 1 business hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
            Subject
          </label>
          <select
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] placeholder:text-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 px-6 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold text-base hover:bg-[var(--color-primary-900)] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

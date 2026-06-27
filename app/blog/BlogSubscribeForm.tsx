'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function BlogSubscribeForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
        <p className="font-semibold text-neutral-900 mb-1">You're subscribed!</p>
        <p className="text-sm text-neutral-500">We'll send new articles straight to your inbox.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
      {/* Steal this Content header */}
      <div className="bg-[var(--color-primary-900)] px-6 py-5 text-center">
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Steal this Content!
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          All we ask is that you attribute Federal Title as the source and link back to the original article on our site.
        </p>
      </div>

      <div className="px-6 py-6">
        <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Subscribe</p>
        <p className="text-xs text-neutral-400 mb-4">* indicates required</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
              className="w-full h-9 px-3 text-sm border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.lastName}
              onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
              className="w-full h-9 px-3 text-sm border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full h-9 px-3 text-sm border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full h-9 px-3 text-sm border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent"
            />
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-10 bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-700)] text-white text-sm font-semibold rounded transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing…</> : 'Subscribe'}
          </button>
        </form>

        <a
          href="https://www.federaltitle.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center w-full h-10 bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)] text-white text-sm font-semibold rounded transition-colors"
        >
          Real Estate Blog »
        </a>
      </div>
    </div>
  );
}

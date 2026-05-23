import Link from 'next/link';
import { FileText, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Closing Documents | Federal Title & Escrow Company',
  description:
    'Browse sample closing documents you will encounter at settlement — Closing Disclosure, Deed of Trust, The Note, disclosures, riders, and tax forms.',
};

const BASE = 'https://www.federaltitle.com';

const legalDocs = [
  {
    name: 'Closing Disclosure Form',
    description:
      'Consolidates the final Truth-in-Lending disclosure. Federal law requires this be delivered to the borrower at least three business days before closing.',
    links: [{ label: 'View Sample PDF', href: `${BASE}/documents/CDF_sample.pdf` }],
  },
  {
    name: 'Deed of Trust',
    description:
      'The mortgage document (7–12 pages) that must be signed by all property owners. It establishes a security interest in the property and is recorded as a lien in public land records.',
    links: [{ label: 'View Sample PDF', href: `${BASE}/documents/Deed-of-Trust.pdf` }],
  },
  {
    name: 'The Note',
    description:
      "The borrower's promise to repay the loan. Identifies the loan amount, interest rate, term, payment dates, grace period, late charges, and prepayment provisions.",
    links: [
      { label: 'Fixed Rate', href: `${BASE}/documents/notes/Fixed-Rate.pdf` },
      { label: 'Balloon', href: `${BASE}/documents/notes/Balloon.pdf` },
      { label: '5-1 ARM', href: `${BASE}/documents/notes/5-1ARM.pdf` },
    ],
  },
];

const disclosures = [
  { name: 'Affiliated Business Arrangement', href: `${BASE}/documents/disclosures/AfBa.pdf` },
  { name: 'Borrower Certifications', href: `${BASE}/documents/disclosures/Borrower_Cert.pdf` },
  { name: 'Compliance Agreement', href: `${BASE}/documents/disclosures/Compliance-Agreement.pdf` },
  { name: 'Escrow Reserve Account or Waiver Agreement', href: `${BASE}/documents/disclosures/Escrow-Waiver_Agmt.pdf` },
  { name: 'Hazard Insurance Requirements', href: `${BASE}/documents/disclosures/Hazard-Ins_Recs.pdf` },
  { name: 'Initial Escrow Account Disclosure Statement', href: `${BASE}/documents/disclosures/Initial-Escrow-Disclosure.pdf` },
  { name: 'Servicing Disclosure', href: `${BASE}/documents/disclosures/Servicing-Disclosure.pdf` },
  { name: 'Truth in Lending Disclosure', href: `${BASE}/documents/disclosures/Truth-in-Lending.pdf` },
];

const riders = [
  { name: 'Balloon Rider', href: `${BASE}/documents/riders/Balloon.pdf` },
  { name: 'Condo Rider', href: `${BASE}/documents/riders/Condo.pdf` },
  { name: 'PUD Rider', href: `${BASE}/documents/riders/PUD.pdf` },
  { name: 'Second Home Rider', href: `${BASE}/documents/riders/2ndHome.pdf` },
  { name: '5-1 ARM Rider', href: `${BASE}/documents/riders/5-1ARM.pdf` },
  { name: '1-4 Family Rider', href: `${BASE}/documents/riders/1-4Family.pdf` },
];

const taxForms = [
  { name: 'IRS Form 4506-T', href: `${BASE}/documents/tax-forms/4506T.pdf` },
  { name: 'IRS Form W-9', href: `${BASE}/documents/tax-forms/W9.pdf` },
  { name: 'IRS Form W-8BEN', href: `${BASE}/documents/tax-forms/W8BEN.pdf` },
];

function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] transition-colors"
    >
      <ExternalLink className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

function SimpleDocCard({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-300)] hover:shadow-sm transition-all group"
    >
      <div className="h-9 w-9 rounded-lg bg-[var(--color-primary-50)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-100)] transition-colors">
        <FileText className="h-4 w-4 text-[var(--color-primary-600)]" />
      </div>
      <span className="text-sm font-medium text-[var(--color-neutral-800)] group-hover:text-[var(--color-primary-700)] transition-colors flex-1">
        {name}
      </span>
      <ExternalLink className="h-3.5 w-3.5 text-[var(--color-neutral-400)] shrink-0" />
    </a>
  );
}

export default function ClosingDocsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Know Before You Close
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Closing Documents
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Preview the documents you&apos;ll sign at your settlement. Click any document to open a sample PDF.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">

          {/* Legally Binding */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Legally Binding Documents
            </h2>
            <p className="text-[var(--color-neutral-500)] text-sm mb-6">
              These are the core documents that establish your loan obligation and property interest.
            </p>
            <div className="space-y-4">
              {legalDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[var(--color-primary-50)] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="h-5 w-5 text-[var(--color-primary-600)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-[var(--color-neutral-600)] mb-3 leading-relaxed">
                        {doc.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {doc.links.map((link) => (
                          <DocLink key={link.href} href={link.href} label={link.label} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclosures */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Disclosures
            </h2>
            <p className="text-[var(--color-neutral-500)] text-sm mb-6">
              Federal and state-required disclosures you&apos;ll receive and sign at closing.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {disclosures.map((doc) => (
                <SimpleDocCard key={doc.name} name={doc.name} href={doc.href} />
              ))}
            </div>
          </div>

          {/* Riders */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Riders
            </h2>
            <p className="text-[var(--color-neutral-500)] text-sm mb-6">
              Addenda to the Deed of Trust that apply based on your property type or loan structure.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {riders.map((doc) => (
                <SimpleDocCard key={doc.name} name={doc.name} href={doc.href} />
              ))}
            </div>
          </div>

          {/* Tax Forms */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Tax Forms
            </h2>
            <p className="text-[var(--color-neutral-500)] text-sm mb-6">
              IRS forms required for your real estate transaction.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {taxForms.map((doc) => (
                <SimpleDocCard key={doc.name} name={doc.name} href={doc.href} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[var(--color-primary-900)] rounded-2xl p-8 text-center text-white">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Have questions about what you&apos;re signing?
            </h3>
            <p className="text-white/70 mb-6">
              Our attorneys are available to walk you through every document before and at closing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+12023621500"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-neutral-100)] transition-colors"
              >
                (202) 362-1500
              </a>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent-600)] text-white font-semibold hover:bg-[var(--color-accent-700)] transition-colors"
              >
                Order Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

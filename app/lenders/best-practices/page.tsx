import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALTA Best Practices | Federal Title & Escrow Company',
  description: 'Federal Title adopted ALTA\'s Best Practices framework in 2013. Registered in the ALTA Registry. Compliant with all seven best practices pillars.',
};

const practices = [
  {
    number: '1',
    title: 'Licensing',
    description: 'Federal Title & Escrow and its staff maintain all required licenses and registrations for settlement operations in the District of Columbia, Maryland, and Virginia.',
  },
  {
    number: '2',
    title: 'Escrow / Trust Accounting',
    description: 'The company maintains separate escrow accounts with comprehensive controls including background-checked employee access, monthly third-party reconciliations, and ongoing staff training.',
  },
  {
    number: '3',
    title: 'Privacy and Information Security',
    description: 'Federal Title protects non-public personal information through formal written policies, regular risk assessments, employee training, physical security measures (clean desk policy, document shredding), and network protections (password controls, encrypted emails).',
  },
  {
    number: '4',
    title: 'Document Recordation / Title & Settlement Pricing',
    description: 'Documents are submitted for recordation within 3–4 hours via e-recording when available, or within 2 business days otherwise. Pricing procedures ensure correct rates and discounts are applied to every transaction.',
  },
  {
    number: '5',
    title: 'Title Policy Production / Premium Remittance',
    description: 'Owner policies are delivered same-day at closing; lender policies are issued within 3 business days.',
  },
  {
    number: '6',
    title: 'Professional Liability Insurance and Fidelity Coverage',
    description: 'Coverage meets or exceeds all legal and underwriting requirements, with periodic evaluations to ensure ongoing compliance.',
  },
  {
    number: '7',
    title: 'Consumer Complaints',
    description: 'Written policies establish a single designated contact point, maintain complaint logs, and analyze patterns to identify and implement operational improvements.',
  },
];

export default function BestPracticesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Lenders</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            ALTA Best Practices
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Federal Title & Escrow Company adopted the American Land Title Association's voluntary Best Practices framework in 2013. We are registered in the ALTA Registry.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-neutral-700)] text-lg leading-relaxed mb-12">
            The ALTA Best Practices framework was established to help lenders and their partners demonstrate the safeguards they have in place to ensure closings comply with applicable laws and regulations, and to protect borrowers. Federal Title & Escrow Company is fully compliant with all seven pillars.
          </p>
          <div className="space-y-6">
            {practices.map((p) => (
              <div key={p.number} className="flex gap-6 p-6 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent-600)] text-white flex items-center justify-center font-bold text-sm">
                  {p.number}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">{p.title}</h3>
                  <p className="text-[var(--color-neutral-700)] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Questions About Our Compliance?
          </h2>
          <p className="text-white/70 mb-8">Contact us for documentation or to discuss your lender requirements.</p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

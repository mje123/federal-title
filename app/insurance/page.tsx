import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance & Bonding | Federal Title & Escrow Company',
  description:
    'Federal Title & Escrow Company carries fidelity bond, E&O/PLI, surety bond, commercial liability, and cyber protection coverage. View our current policy details.',
};

const policies = [
  {
    type: 'Fidelity Bond',
    carrier: 'Sentinel Insurance Co.',
    pdfUrl: '/fidelity-bond.pdf',
    limit: '$500,000',
    aggregate: '$500,000',
    deductible: '$100',
    expiration: '9/30/2026',
  },
  {
    type: 'E&O / PLI',
    carrier: 'RLI Insurance Co.',
    pdfUrl: '/eo-pli.pdf',
    limit: '$2,000,000',
    aggregate: '$2,000,000',
    deductible: '$15,000',
    expiration: '10/8/2026',
  },
  {
    type: 'Surety Bond (DC)',
    carrier: 'Hartford Fire Insurance Co.',
    pdfUrl: '/surety-bond-dc.pdf',
    limit: '$200,000',
    aggregate: '$200,000',
    deductible: '—',
    expiration: 'Ends with cancellation of said bond',
  },
  {
    type: 'Surety Bond (Maryland)',
    carrier: 'Hartford Fire Insurance Co.',
    pdfUrl: '/surety-bond-md.pdf',
    limit: '$150,000',
    aggregate: '$150,000',
    deductible: '—',
    expiration: 'Ends with cancellation of said bond',
  },
  {
    type: 'Surety Bond (Virginia)',
    carrier: 'Hartford Fire Insurance Co.',
    pdfUrl: '/surety-bond-va.pdf',
    limit: '$200,000',
    aggregate: '$200,000',
    deductible: '—',
    expiration: 'Ends with cancellation of said bond',
  },
  {
    type: 'Commercial Liability Coverage',
    carrier: 'Sentinel Insurance Co.',
    pdfUrl: '/commercial-liability.pdf',
    limit: '$500,000',
    aggregate: '$500,000',
    deductible: '—',
    expiration: '9/30/2026',
  },
  {
    type: 'Cyber Protection',
    carrier: 'Hartford Fire Insurance Co.',
    pdfUrl: '/cyber-protection.pdf',
    limit: '$2,000,000',
    aggregate: '$2,000,000',
    deductible: '—',
    expiration: '9/30/2026',
  },
];

export default function InsurancePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Insurance &amp; Bonding
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            View Copies of Our Insurance Policies
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Federal Title &amp; Escrow Company maintains the following coverage. Contact us for a copy of any certificate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary-900)] text-white">
                  <th className="text-left p-4 font-semibold">Type of Insurance</th>
                  <th className="text-left p-4 font-semibold">Insurance Carrier</th>
                  <th className="text-left p-4 font-semibold">Coverage Limit per Claim</th>
                  <th className="text-left p-4 font-semibold">Aggregate</th>
                  <th className="text-left p-4 font-semibold">Deductible</th>
                  <th className="text-left p-4 font-semibold">Expiration Date</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((p) => (
                  <tr key={p.type} className="border-b border-[var(--color-neutral-200)]">
                    <td className="p-4 font-semibold text-[var(--color-primary-900)]">{p.type}</td>
                    <td className="p-4 text-[var(--color-neutral-700)]">
                      {p.carrier}{' '}
                      <Link
                        href={p.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent-600)] hover:underline text-xs font-semibold"
                      >
                        (PDF)
                      </Link>
                    </td>
                    <td className="p-4 text-[var(--color-neutral-700)]">{p.limit}</td>
                    <td className="p-4 text-[var(--color-neutral-700)]">{p.aggregate}</td>
                    <td className="p-4 text-[var(--color-neutral-700)]">{p.deductible}</td>
                    <td className="p-4 text-[var(--color-neutral-700)]">{p.expiration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[var(--color-neutral-500)] mt-4">
            For a certificate of insurance for any of the policies above, please{' '}
            <Link href="/contact" className="text-[var(--color-accent-600)] hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

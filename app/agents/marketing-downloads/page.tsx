import Link from 'next/link';
import { Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Downloads | Federal Title & Escrow Company',
  description: 'Free real estate marketing resources for agents. Download brochures, infographics, charts, and more from Federal Title & Escrow Company.',
};

const materials = [
  { title: 'Rent Backs: Perks & Pitfalls', type: 'Digital Brochure', description: 'Everything agents need to know about rent-back agreements.' },
  { title: 'REALSafe™ In-Office Closings', type: 'Digital Flier', description: 'Promote safe, in-office closing options to your clients.' },
  { title: 'REALSafe™ Contactless Closings', type: 'Digital Flier', description: 'Market remote, contactless closing options.' },
  { title: 'DMV Agent\'s Cheat Sheet', type: 'Tri-fold Brochure', description: 'Quick-reference guide for DC, MD & VA real estate agents.' },
  { title: 'Standard v. Enhanced Title Insurance', type: 'Comparison Chart', description: 'Help clients understand their title insurance options.' },
  { title: 'Real Estate Closing Process', type: 'Infographic', description: 'Visual walkthrough of the closing process from contract to keys.' },
  { title: 'Maryland Recording', type: 'Tax/Fee Chart', description: 'Maryland recordation tax and fee reference chart.' },
  { title: 'Real Property Tax Assessment', type: 'Reference Guide', description: 'Understanding real property tax assessments across the DMV.' },
  { title: '10 Things About Closing Costs', type: 'White Paper', description: 'The essential guide to closing costs for homebuyers.' },
  { title: 'FIRPTA Flowchart', type: 'Infographic', description: 'Quick-reference guide to FIRPTA requirements for foreign sellers.' },
  { title: 'Title Company Change Addendum', type: 'Contract Template', description: 'Template addendum for switching title companies mid-transaction.' },
  { title: 'Owner\'s Title Insurance Waiver', type: 'Agent Form', description: 'Form for clients who choose to waive owner\'s title insurance.' },
];

export default function MarketingDownloadsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Agents</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Real Estate Marketing Resources
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Free downloadable materials to help you educate clients and grow your business. REAL Benefits™ members get access to exclusive resources.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6 hover:shadow-md transition-all">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-600)] bg-[var(--color-accent-50)] px-2.5 py-1 rounded-full mb-3">
                  {item.type}
                </span>
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] mb-4 leading-relaxed">{item.description}</p>
                <a
                  href="https://tools.federaltitle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-600)] hover:text-[var(--color-accent-700)] transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download (Member Login)
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[var(--color-primary-900)] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Not a REAL Benefits™ Member Yet?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Sign up for REAL Benefits™ to get full access to all marketing materials, plus $750 closing cost credits for your buyers and free legal consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/real-benefits" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
                Join REAL Benefits™
              </Link>
              <a href="https://tools.federaltitle.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
                Member Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

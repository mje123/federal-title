import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Closing Guide | Federal Title & Escrow Company',
  description: 'Everything you need to know to prepare for your real estate closing in DC, Maryland, or Virginia. Documents, funds, and what to expect.',
};

const faqs = [
  {
    q: 'How do I prepare for closing?',
    a: 'Upon receipt of the ratified contract, Federal Title begins the title search and coordinates with your lender. If closing hasn\'t been scheduled, contact us at (202) 362-1500. Review your REAL Safe closing options and communicate your preferences promptly.',
  },
  {
    q: 'What documents will I sign at closing?',
    a: 'Numerous documents require signatures. While lenders typically deliver documents the day before or day of closing, most are disclosures and non-binding notices. Several documents are legally binding — review sample closing documents ahead of time if possible.',
  },
  {
    q: 'When will I know my final cash to close?',
    a: 'Final cash-to-close amounts may not be available until 1–2 days prior to closing, depending on when your lender provides final instructions. By law, final figures cannot be provided until your lender delivers your final Closing Disclosure. Use the Close It!™ app to estimate your full costs ahead of time.',
  },
  {
    q: 'How do I remit final closing costs?',
    a: 'Bring certified funds or a cashier\'s check to closing, or wire funds to the escrow account. Contact us for wiring instructions well in advance.',
  },
  {
    q: 'Who do I make the check out to?',
    a: 'Make checks payable to Federal Title & Escrow Company.',
  },
];

const utilities = [
  {
    jurisdiction: 'District of Columbia',
    providers: [
      { name: 'PEPCO', phone: '(202) 833-7500', emergency: '1 (877) 737-2662' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'DC Water', phone: '(202) 354-3600', emergency: '(202) 612-3400' },
    ],
    internet: ['DC Access: (202) 546-5898', 'RCN: 1 (800) 746-4726', 'Verizon: 1 (800) 837-4966', 'Comcast/Xfinity: 1 (800) 934-6489'],
  },
  {
    jurisdiction: 'Maryland',
    providers: [
      { name: 'PEPCO', phone: '(202) 833-7500', emergency: '1 (877) 737-2662' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'WSSC Water', phone: '(301) 206-4001', emergency: '(301) 206-4002' },
    ],
    internet: ['Quantum: (410) 239-6920', 'RCN: 1 (800) 746-4726', 'Verizon: 1 (800) 837-4966', 'Comcast/Xfinity: 1 (800) 934-6489'],
  },
  {
    jurisdiction: 'Virginia',
    providers: [
      { name: 'Dominion Power', phone: '1 (866) 366-4357', emergency: '' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'Fairfax Water', phone: '1 (703) 698-5800', emergency: '1 (703) 698-5613' },
      { name: 'Arlington County DES', phone: '(703) 228-6570', emergency: '' },
    ],
    internet: ['Cox Communications: (703) 378-8422', 'RCN: 1 (800) 746-4726', 'Verizon: 1 (800) 837-4966', 'Comcast/Xfinity: 1 (800) 934-6489'],
  },
];

export default function PreClosingGuidePage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Pre-Closing Guide
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Get ready for closing. Everything homebuyers in DC, MD & VA need to know before signing day.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-l-4 border-[var(--color-accent-600)] pl-6">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-2">{q}</h3>
                <p className="text-[var(--color-neutral-700)] leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Utility Providers by Jurisdiction
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {utilities.map(({ jurisdiction, providers, internet }) => (
              <div key={jurisdiction} className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
                <h3 className="font-bold text-[var(--color-primary-900)] mb-4 pb-2 border-b border-[var(--color-neutral-200)]">{jurisdiction}</h3>
                <div className="space-y-3 mb-4">
                  {providers.map(({ name, phone, emergency }) => (
                    <div key={name} className="text-sm">
                      <p className="font-medium text-[var(--color-neutral-900)]">{name}</p>
                      <p className="text-[var(--color-neutral-500)]">{phone}</p>
                      {emergency && <p className="text-[var(--color-neutral-400)] text-xs">Emergency: {emergency}</p>}
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-[var(--color-neutral-100)]">
                  <p className="text-xs font-semibold text-[var(--color-neutral-500)] uppercase tracking-wide mb-2">Internet/Cable</p>
                  {internet.map((item) => <p key={item} className="text-xs text-[var(--color-neutral-500)]">{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Get a Quote Before Your Closing
          </h2>
          <p className="text-white/70 mb-8">Know your exact costs before closing day — guaranteed.</p>
          <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Get a Guaranteed Quote
          </Link>
        </div>
      </section>
    </>
  );
}

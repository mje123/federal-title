import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utility Providers | Federal Title & Escrow Company',
  description: 'Phone numbers and contact information for utility and internet providers in DC, Maryland, and Virginia.',
};

const jurisdictions = [
  {
    name: 'District of Columbia',
    utilities: [
      { name: 'PEPCO (Electric)', phone: '(202) 833-7500', emergency: '1 (877) 737-2662' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'DC Water', phone: '(202) 354-3600', emergency: '(202) 612-3400' },
    ],
    internet: [
      { name: 'DC Access', phone: '(202) 546-5898' },
      { name: 'RCN', phone: '1 (800) 746-4726' },
      { name: 'Verizon', phone: '1 (800) 837-4966' },
      { name: 'Comcast/Xfinity', phone: '1 (800) 934-6489' },
    ],
  },
  {
    name: 'Maryland',
    utilities: [
      { name: 'PEPCO (Electric)', phone: '(202) 833-7500', emergency: '1 (877) 737-2662' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'WSSC Water', phone: '(301) 206-4001', emergency: '(301) 206-4002' },
    ],
    internet: [
      { name: 'Quantum', phone: '(410) 239-6920' },
      { name: 'RCN', phone: '1 (800) 746-4726' },
      { name: 'Verizon', phone: '1 (800) 837-4966' },
      { name: 'Comcast/Xfinity', phone: '1 (800) 934-6489' },
    ],
  },
  {
    name: 'Virginia',
    utilities: [
      { name: 'Dominion Power (Electric)', phone: '1 (866) 366-4357', emergency: '' },
      { name: 'Washington Gas', phone: '(703) 750-1000', emergency: '1 (844) 927-4427' },
      { name: 'Fairfax Water', phone: '1 (703) 698-5800', emergency: '1 (703) 698-5613' },
      { name: 'Arlington County DES', phone: '(703) 228-6570', emergency: '' },
    ],
    internet: [
      { name: 'Cox Communications', phone: '(703) 378-8422' },
      { name: 'RCN', phone: '1 (800) 746-4726' },
      { name: 'Verizon', phone: '1 (800) 837-4966' },
      { name: 'Comcast/Xfinity', phone: '1 (800) 934-6489' },
    ],
  },
];

export default function UtilityProvidersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Utility Providers
          </h1>
          <p className="text-white/70 text-lg">Contact information for utility and internet providers in DC, Maryland, and Virginia.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {jurisdictions.map(({ name, utilities, internet }) => (
              <div key={name}>
                <h2 className="text-xl font-bold text-[var(--color-primary-900)] mb-6 pb-3 border-b-2 border-[var(--color-accent-600)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {name}
                </h2>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-neutral-400)] mb-3">Utilities</h3>
                  <div className="space-y-4">
                    {utilities.map(({ name: uName, phone, emergency }) => (
                      <div key={uName} className="bg-white rounded-lg p-4 border border-[var(--color-neutral-200)]">
                        <p className="font-semibold text-[var(--color-primary-900)] text-sm mb-1">{uName}</p>
                        <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-[var(--color-accent-600)] text-sm hover:underline">{phone}</a>
                        {emergency && <p className="text-[var(--color-neutral-400)] text-xs mt-1">Emergency: {emergency}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-neutral-400)] mb-3">Internet / Cable</h3>
                  <div className="space-y-2">
                    {internet.map(({ name: iName, phone }) => (
                      <div key={iName} className="flex justify-between items-center text-sm bg-white rounded-lg px-4 py-3 border border-[var(--color-neutral-200)]">
                        <span className="font-medium text-[var(--color-neutral-900)]">{iName}</span>
                        <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-[var(--color-accent-600)] hover:underline">{phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

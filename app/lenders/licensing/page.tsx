import Link from 'next/link';
import type { Metadata } from 'next';
import { LicensingTabs } from './LicensingTabs';

export const metadata: Metadata = {
  title: 'Licensing | Federal Title & Escrow Company',
  description: 'Verify title producer and notary licenses for Federal Title & Escrow Company in DC, Maryland, and Virginia.',
};

export default function LicensingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Lenders</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Licensing
          </h1>
          <p className="text-white/70 text-lg">Verify our title producer and notary licenses across DC, Maryland, and Virginia.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-12">
          <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
            <p className="text-sm text-[var(--color-neutral-600)]"><strong>Trade Name:</strong> Federal Title & Escrow Company, a trade name of Close It! Title Services, Inc.</p>
            <p className="text-sm text-[var(--color-neutral-600)] mt-1"><strong>Address:</strong> 5481 Wisconsin Avenue, Suite D, Chevy Chase, MD 20815</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Company Title Producer Licenses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-primary-900)] text-white">
                    <th className="text-left p-3 font-semibold">State</th>
                    <th className="text-left p-3 font-semibold">License #</th>
                    <th className="text-left p-3 font-semibold">National #</th>
                    <th className="text-left p-3 font-semibold">Renewal Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['District of Columbia', '3050890', '17079130', '05/31/2027'],
                    ['Maryland', '2126049', '17079130', '10/23/2025'],
                    ['Virginia', '135029', '17079130', 'Perpetual*'],
                  ].map(([state, lic, nat, renewal]) => (
                    <tr key={state} className="border-b border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-50)]">
                      <td className="p-3 font-medium text-[var(--color-primary-900)]">{state}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{lic}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{nat}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{renewal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-[var(--color-neutral-500)] mt-2">*Virginia license is perpetual unless surrendered, suspended, or revoked.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Individual Title Producer Licenses
            </h2>
            <LicensingTabs />
          </div>

        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Questions?</h2>
          <p className="text-white/70 mb-6">Contact us for additional compliance documentation.</p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

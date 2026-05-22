import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Info for Lenders | Federal Title & Escrow Company',
  description: 'Recordation taxes, transfer taxes, and real estate tax escrow information for lenders closing in DC, Maryland, and Virginia.',
};

export default function LendersTaxInfoPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Lenders</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Tax Information for Closing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Recordation taxes, transfer taxes, and real estate tax escrow reserves for DC, Maryland, and Virginia residential transactions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              DC Recordation & Transfer Taxes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-primary-900)] text-white">
                    <th className="text-left p-3 font-semibold">Transaction Amount</th>
                    <th className="text-left p-3 font-semibold">Recordation Rate</th>
                    <th className="text-left p-3 font-semibold">Transfer Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['$399,999 and under', '1.1%', '1.1%'],
                    ['$400,000 and above', '1.45%', '1.45%'],
                  ].map(([amount, rec, trans]) => (
                    <tr key={amount} className="border-b border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-50)]">
                      <td className="p-3 font-medium text-[var(--color-primary-900)]">{amount}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{rec}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{trans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--color-neutral-500)] mt-2">Buyer and seller each pay their respective tax. Example: $500,000 × 1.45% = $7,250 each.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Real Estate Tax Escrow Reserves
            </h2>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
              Lenders typically require escrow accounts when down payments or equity are less than 20%. Reserves must cover future taxes plus a mandatory 2-month cushion for reassessments.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { state: 'DC', detail: 'Tax periods end 3/31 and 9/30', paid: 'Paid in arrears' },
                { state: 'Maryland', detail: 'Tax periods end 12/31 and 6/30', paid: 'Paid in advance' },
                { state: 'Arlington, VA', detail: 'Tax periods end 6/30 and 12/31', paid: 'Paid in arrears' },
              ].map(({ state, detail, paid }) => (
                <div key={state} className="bg-[var(--color-neutral-50)] rounded-xl p-5 border border-[var(--color-neutral-200)]">
                  <h3 className="font-bold text-[var(--color-primary-900)] mb-2">{state}</h3>
                  <p className="text-sm text-[var(--color-neutral-700)]">{detail}</p>
                  <p className="text-sm text-[var(--color-neutral-500)] mt-1">{paid}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-neutral-50)] rounded-xl p-6 border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-primary-900)] mb-2">Maryland First-Time Homebuyer Exemption</h3>
            <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
              First-time homebuyers in Maryland are exempt from paying their portion of the State Transfer Tax (0.25% of the sales price). All buyers must be first-time homebuyers to qualify. Federal Title provides all required paperwork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Questions?</h2>
          <p className="text-white/70 mb-8">Contact Federal Title for tax information specific to your transaction.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Contact Us
            </Link>
            <Link href="/lenders/best-practices" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              ALTA Best Practices
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

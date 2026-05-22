import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DC First Time Home Buyer Programs | Federal Title & Escrow',
  description: 'DC first-time homebuyer programs offer up to $202,000 in assistance. Learn about HPAP, DC Tax Abatement, Reduced Recordation Tax, EAHP, and more.',
};

const programs = [
  {
    title: 'HPAP – Home Purchase Assistance Program',
    amount: 'Up to $202,000',
    description: 'The HPAP program offers qualifying first-time homebuyers up to $202,000 in assistance (effective October 1, 2022) for down payment, gap financing, and up to $4,000 in closing cost subsidies. Assistance ranges from $70,000–$202,000 on a sliding scale based on income and household size. Low-interest loans are deferrable for up to 5 years.',
    requirements: [
      'Head of household AND first-time homebuyer',
      'Low-to-moderate income per Department standards',
      'No residential real estate ownership in the prior 3 years',
      'Primary residence purchase located in DC',
      'Good credit rating',
    ],
  },
  {
    title: 'DC Tax Abatement',
    amount: 'Thousands in tax savings',
    description: 'Qualifying buyers receive an exemption from DC Recordation Tax, a seller credit equal to DC Transfer Tax, and a property tax exemption for the first 5 years of ownership. Subject to purchase price and income limits.',
    requirements: [],
  },
  {
    title: 'Reduced Recordation Tax Rate',
    amount: '0.725% rate',
    description: 'Recordation tax is reduced to 0.725% for qualifying first-time homebuyers. Requires an application filed at closing.',
    requirements: [],
  },
  {
    title: 'EAHP – Employer Assisted Housing Program',
    amount: 'Up to $25,000',
    description: 'For DC government employees: up to $20,000 no-interest loan plus up to $5,000 matching grant. Enhanced benefits available for first responders.',
    requirements: [],
  },
  {
    title: 'DC Open Doors',
    amount: 'Down payment assistance',
    description: 'Down payment assistance loans with 30-year deferral options, facilitated by the DC Housing Finance Agency.',
    requirements: [],
  },
  {
    title: 'Homestead Deduction',
    amount: 'Up to $74,850 assessed value reduction',
    description: 'Reduces your property\'s assessed value before calculating real estate taxes, plus caps annual assessment increases at 10%.',
    requirements: [],
  },
];

export default function DCFirstTimeHomebuyerPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            DC First Time Home Buyer Programs
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            DC offers up to $202,000 in assistance for qualifying first-time homebuyers. Here's what's available.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="space-y-10">
            {programs.map((program) => (
              <div key={program.title} className="bg-[var(--color-neutral-50)] rounded-xl p-8 border border-[var(--color-neutral-200)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <h2 className="text-xl font-bold text-[var(--color-primary-900)]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {program.title}
                  </h2>
                  <span className="inline-block bg-[var(--color-accent-600)] text-white text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {program.amount}
                  </span>
                </div>
                <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">{program.description}</p>
                {program.requirements.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary-900)] mb-3">Eligibility Requirements:</p>
                    <ul className="space-y-2">
                      {program.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-[var(--color-neutral-700)]">
                          <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-600)] flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Use These Programs?
          </h2>
          <p className="text-white/70 mb-8">Federal Title will guide you through all applicable programs at closing. Get a guaranteed quote to see your total costs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quick-quote" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Get a Guaranteed Quote
            </Link>
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Order Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

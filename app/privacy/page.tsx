import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Federal Title & Escrow Company',
  description:
    'Federal Title & Escrow Company privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--color-neutral-50)] min-h-screen">
      <section className="bg-[var(--color-primary-900)] text-white py-14">
        <div className="container mx-auto px-6">
          <h1
            className="text-4xl font-bold font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-2 text-sm">Federal Title &amp; Escrow Company</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 lg:p-10 prose prose-neutral max-w-none">
            <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Privacy Policy
            </h2>
            <p className="text-[var(--color-neutral-700)] mb-4">
              The organization is dedicated to protecting customer data. To serve you effectively, we may request certain information, recognizing your concerns about personal and financial data handling.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Applicability</h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              This policy covers information you directly provide. It does not govern data obtained from other sources like public records or third parties.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Types of Information Collected</h3>
            <p className="text-[var(--color-neutral-700)] mb-2">
              Depending on services used, non-public personal information may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--color-neutral-700)] mb-4">
              <li>Information we receive from you on applications, forms and in other communications to us, whether in writing, in person, by telephone or any other means</li>
              <li>Information about transactions with the company or mortgage lender</li>
              <li>Information from consumer reporting agencies</li>
            </ul>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Use of Information</h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              The company collects information for legitimate business purposes only. Information won&apos;t be shared with non-affiliated parties except as necessary for us to provide the product or service you have requested, or as permitted by law.
            </p>
            <p className="text-[var(--color-neutral-700)] mb-4">
              Information may be provided to companies involved in transactions, including mortgage lenders, title insurance underwriters, property and casualty insurers and companies involved in real estate services.
            </p>
            <p className="text-[var(--color-neutral-700)] mb-4">
              Marketing service providers will not receive collected information.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Former Customers</h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              This privacy policy will continue to apply to you after the customer relationship ends.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Confidentiality and Security</h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              The company maintains physical, electronic, and procedural safeguards that comply with federal regulations to guard your non-public personal information.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Third Party Links</h3>
            <p className="text-[var(--color-neutral-700)] mb-4">
              This policy applies only to sites displaying this statement. Other websites&apos; privacy policies govern their data collection.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Cookies</h3>
            <p className="text-[var(--color-neutral-700)] mb-2">The company uses three cookie types:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--color-neutral-700)] mb-4">
              <li><strong>Functional:</strong> Required for website operation and security</li>
              <li><strong>Advertising:</strong> Enable Federal Title ad retargeting; users may opt out</li>
              <li><strong>Tracking:</strong> Performance measurement using Google Analytics</li>
            </ul>

            <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mt-6 mb-3">Contact Information</h3>
            <p className="text-[var(--color-neutral-700)]">
              Phone:{' '}
              <a href="tel:+12023621500" className="text-[var(--color-primary-700)]">
                (202) 362-1500
              </a>
              <br />
              Email:{' '}
              <a href="mailto:info@federaltitle.com" className="text-[var(--color-primary-700)]">
                info@federaltitle.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remote Digital Closings | Federal Title & Escrow Company',
  description: 'Close your real estate transaction from anywhere with Federal Title\'s attorney-facilitated remote online closings, powered by Stavvy.',
};

export default function RemoteClosingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Remote, Digital Closings
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Legally close with Federal Title attorneys from any smart device, any time, within minutes — no office visit required.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <Image src="/images/features/real-online-closings.jpg" alt="REAL Online Closings - Powered by Stavvy" width={280} height={80} className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-primary-900)] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Close From Anywhere
              </h2>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                Federal Title's remote online closing platform, powered by Stavvy, allows you to complete your real estate settlement securely from any device — whether you're across town or across the country.
              </p>
              <p className="text-[var(--color-neutral-700)] leading-relaxed">
                Sellers and all-cash buyers can close remotely with Federal Title attorneys today. Borrowers may close remotely with lender approval. As remote closing legislation expands, Federal Title continues to lead the way in digital settlements.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Attorney-Facilitated', desc: 'Every remote closing is conducted by a licensed Federal Title attorney, ensuring legal compliance and protection.' },
                { title: 'Powered by Stavvy', desc: 'Stavvy\'s secure platform handles electronic document signing and notarization, compliant with state laws.' },
                { title: 'Any Device', desc: 'Computer, tablet, or phone — close from wherever you are, on whatever screen you have.' },
                { title: 'Fully Secure', desc: 'Bank-level encryption and identity verification protect every transaction.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent-600)] flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{title}</h3>
                    <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Close Remotely?
          </h2>
          <p className="text-white/70 mb-8">Order your settlement services online and let us know you want a remote closing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors">
              Order Services
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

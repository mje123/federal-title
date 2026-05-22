import Link from 'next/link';
import { CheckCircle2, DollarSign, Scale, Smartphone, Shield } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Real Estate Agents | Federal Title & Escrow Company',
  description:
    'Federal Title\'s REAL Benefits™ program helps agents save homebuyers up to $750 at closing while offering free legal consultation and the Close It!™ app.',
};

export default function AgentsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Agents
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Our perks are the REAL Deal
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Inventing offers designed to help grow your business.
          </p>
        </div>
      </section>

      {/* Why agents choose Federal Title */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-4xl font-bold text-[var(--color-primary-900)] mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Why agents choose Federal Title
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: 'No Conflicts of Interest',
                    desc: 'Federal Title is proudly independent, with no affiliated business arrangements. We serve your clients\' best interests every time.',
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: 'Save Clients Up to $750',
                    desc: 'Every client you refer receives up to a $750 REAL Credit applied to our already low settlement fee.',
                  },
                  {
                    icon: <Scale className="h-5 w-5" />,
                    title: '2 Hours of Free Legal Counsel',
                    desc: 'Clients receive a certificate for 2 hours of free REALegal™ consultation for post-closing issues — property conditions, disclosure disputes, and more.',
                  },
                  {
                    icon: <Smartphone className="h-5 w-5" />,
                    title: 'Close It!™ App',
                    desc: 'Send your buyers and sellers accurate Closing Disclosures from your smart device. Instant cash-to-close estimates with no signup required.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">{item.title}</h3>
                      <p className="text-[var(--color-neutral-600)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-2xl p-8 border border-[var(--color-neutral-200)]">
              <h3
                className="text-2xl font-bold text-[var(--color-primary-900)] mb-4"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                REAL Benefits™ Tools
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  "Seller's Net Proceeds calculator",
                  "Property Tax Comparison tool",
                  "Buyer's Quick Quote",
                  "Close It!™ mobile app for Closing Disclosures",
                  "Member-only discounts on client gifts",
                  "Exclusive agent guides and resources",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-500)] shrink-0" />
                    <span className="text-[var(--color-neutral-700)] text-sm">{tool}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/real-benefits"
                  className="flex items-center justify-center px-5 py-3 rounded-lg bg-[var(--color-primary-700)] text-white font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
                >
                  Become a REAL Benefits™ Partner
                </Link>
                <a
                  href="https://closeit.federaltitle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-5 py-3 rounded-lg border-2 border-[var(--color-primary-300)] text-[var(--color-primary-700)] font-semibold hover:bg-[var(--color-primary-50)] transition-colors"
                >
                  Try Close It!™
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Submit an order for your client"
        description="Order services online and your client automatically receives up to $750 in closing cost credits."
        primaryAction={{ text: 'Order Services', href: '/order' }}
        secondaryAction={{ text: 'Just a Quote, Please »', href: '/quick-quote' }}
        background="gradient"
      />
    </>
  );
}

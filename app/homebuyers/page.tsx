import Link from 'next/link';
import { CheckCircle2, DollarSign, Shield, Smartphone, Clock } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homebuyers | Federal Title & Escrow Company',
  description:
    'Federal Title guides homebuyers through the closing process in DC, Maryland & Virginia. Transparent pricing, attorney-led closings, and up to $750 in savings.',
};

const faqs = [
  {
    question: 'What does a title company do for homebuyers?',
    answer:
      "Your local title insurance company will conduct an extensive search of public records, known as a title search, to verify the seller's legal right to transfer ownership to the homebuyer. The purpose of the title search is to discover title claims or defects (a.k.a. 'clouds') that limit the homeowner's right in transferring the property.\n\nOnce a title company has reviewed the record and confirmed a clean chain of title, it will issue an owner's title insurance policy to the homebuyer. For a one-time fee, this policy protects the homebuyer's down payment along with any mortgage payments made or funds invested into the property should a title matter arise down the road.",
  },
  {
    question: 'Who gets to choose the title company?',
    answer:
      'It is the legal right of the homebuyer to choose the title company in DC, Maryland and Virginia. The custom may vary in other jurisdictions. Homebuyers who shop title fees and service ratings tend to have better experiences at the closing table.',
  },
  {
    question: 'How do I send my earnest money deposit (EMD)?',
    answer:
      'Federal Title offers mobile fund deliveries — send your earnest money checks quickly and securely, directly from your smart phone. We\'ve made it as easy as possible to get your deposit in on time.',
  },
  {
    question: 'Can I close remotely?',
    answer:
      'Sellers and all-cash buyers, plus borrowers with lender approval, can close remotely with Federal Title attorneys from any smart device, any time, within minutes.',
  },
];

export default function HomebuyersPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            For Homebuyers
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Your Closing, Done Right
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Attorney-led closings, transparent pricing, and up to $750 in savings when you order online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quick-quote"
              className="px-6 py-3 rounded-lg bg-white text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-neutral-100)] transition-colors"
            >
              Just a Quote, Please »
            </Link>
            <Link
              href="/order"
              className="px-6 py-3 rounded-lg bg-[var(--color-accent-500)] text-white font-semibold hover:bg-[var(--color-accent-600)] transition-colors"
            >
              Order Services
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[var(--color-primary-900)] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              What homebuyers get with Federal Title
            </h2>
            <p className="text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
              A complete, upfront cash-to-close picture from day one — with no surprises at the closing table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: 'Mobile Fund Deliveries',
                desc: 'Send your earnest money checks quickly and securely, directly from your smart phone.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Owner's Title Insurance",
                desc: 'A one-time fee that protects your down payment and investment if a title issue arises after closing.',
              },
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: 'REAL Credit™ — Up to $750',
                desc: 'Order online and receive up to $750 applied directly to your settlement fee.',
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: 'Closing Process Tracker',
                desc: 'Track every step of your closing in real time — from contract to keys.',
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: 'REALegal™ Consultation',
                desc: 'Up to 2 hours of free legal consultation for post-closing issues, included at no extra charge.',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Wire Fraud Protection',
                desc: 'REALSafe™ closing solutions protect you from wire fraud — one of the fastest-growing real estate scams.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-neutral-200)] p-7"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Homebuyer Questions" faqs={faqs} />

      <CTA
        title="Ready to get started?"
        description="Get a guaranteed quote in under 2 minutes. Order online and save up to $750 with REAL Benefits™."
        primaryAction={{ text: 'Get a Free Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Order Now', href: '/order' }}
        background="gradient"
      />
    </>
  );
}

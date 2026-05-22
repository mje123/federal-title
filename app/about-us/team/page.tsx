import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/content/team';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the responsive, knowledgeable attorneys and staff at Federal Title & Escrow Company. Attorney-led closings across DC, MD & VA.',
};

export default function TeamPage() {
  const attorneys = teamMembers.slice(0, 4);
  const staff = teamMembers.slice(4);

  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Meet Your Closing Team
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Responsive, knowledgeable attorneys and staff ready to guide you through
            every step of your closing.
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[var(--color-neutral-900)] mb-10 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Attorneys
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys.map((member) => (
              <div key={member.slug} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[var(--color-neutral-100)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-[var(--color-neutral-900)] text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-[var(--color-primary-600)] text-sm font-medium mt-1">
                  {member.title}
                </p>
                {member.bio && (
                  <p className="text-[var(--color-neutral-600)] text-sm mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[var(--color-neutral-900)] mb-10 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Settlement & Operations Team
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {staff.map((member) => (
              <div key={member.slug} className="text-center group">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 bg-[var(--color-neutral-100)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-[var(--color-neutral-900)] text-sm leading-tight">
                  {member.name}
                </h3>
                <p className="text-[var(--color-primary-600)] text-xs font-medium mt-0.5">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to meet us in person?"
        description="Visit one of our convenient DC, Maryland, or Virginia offices—or close remotely from anywhere."
        primaryAction={{ text: 'View Our Locations', href: '/locations' }}
        secondaryAction={{ text: 'Contact Us', href: '/contact' }}
        background="gradient"
      />
    </>
  );
}

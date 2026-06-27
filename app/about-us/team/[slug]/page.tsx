import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/content/team';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';
import { Mail, Phone, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: 'Team Member Not Found' };
  return {
    title: `${member.name} | Federal Title & Escrow`,
    description: member.bio ?? `${member.name} — ${member.title} at Federal Title & Escrow Company.`,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const colleagues = teamMembers.filter((m) => m.slug !== slug && m.bio).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] pt-16 pb-0">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <Link
            href="/about-us/team"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-10 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          <div className="flex flex-col md:flex-row md:items-end gap-8 pb-0">
            {/* Photo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 bg-[var(--color-primary-800)] shadow-2xl">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-serif">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Name / title */}
            <div className="pb-10">
              <p className="text-[var(--color-accent-400)] text-sm font-semibold uppercase tracking-widest mb-2">
                {member.title}
              </p>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {member.name}
              </h1>
              <div className="flex flex-wrap gap-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {member.bio ? (
            <div className="prose prose-lg max-w-none prose-headings:text-[var(--color-primary-900)] prose-a:text-[var(--color-accent-600)]">
              <p className="text-[var(--color-neutral-700)] leading-relaxed text-lg">{member.bio}</p>
            </div>
          ) : (
            <p className="text-[var(--color-neutral-500)] italic">Bio coming soon.</p>
          )}
        </div>
      </section>

      {/* Colleagues */}
      {colleagues.length > 0 && (
        <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-8"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Meet the Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {colleagues.map((c) => (
                <Link
                  key={c.slug}
                  href={`/about-us/team/${c.slug}`}
                  className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-[var(--color-neutral-200)] hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-[var(--color-neutral-100)]">
                    {c.image ? (
                      <Image src={c.image} alt={c.name} fill className="object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--color-neutral-400)] font-serif text-xl">
                        {c.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--color-primary-900)] text-sm leading-tight group-hover:text-[var(--color-accent-600)] transition-colors">
                      {c.name}
                    </p>
                    <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">{c.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/about-us/team"
                className="inline-flex items-center gap-2 text-[var(--color-accent-600)] font-medium hover:text-[var(--color-accent-700)] transition-colors text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                View full team
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Ready to Work With Our Team?"
        description="Get a guaranteed quote and experience attorney-led closings in DC, Maryland, and Virginia."
        primaryAction={{ text: 'Get a Guaranteed Quote', href: '/quick-quote' }}
        secondaryAction={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}

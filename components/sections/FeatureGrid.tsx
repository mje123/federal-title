'use client';

import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon?: ReactNode;
  image?: { src: string; alt: string; rounded?: boolean };
  title: string;
  description: string;
  link?: { text: string; href: string };
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  background?: 'white' | 'gray';
}

export function FeatureGrid({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  background = 'gray',
}: FeatureGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className={cn(
        'py-20 lg:py-28',
        background === 'gray' ? 'bg-[var(--color-neutral-50)]' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {subtitle && (
              <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4 font-display"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <div
          className={cn(
            'grid gap-6',
            columns === 2 && 'md:grid-cols-2',
            columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
            columns === 4 && 'md:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-default"
            >
              {feature.image ? (
                <div className={cn("mb-5 flex items-center justify-center", feature.image.rounded ? "h-20 w-20 mx-auto" : "h-14")}>
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.rounded ? 80 : 160}
                    height={feature.image.rounded ? 80 : 56}
                    className={cn("object-contain", feature.image.rounded && "rounded-full")}
                  />
                </div>
              ) : (
                <div className="h-12 w-12 rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              )}

              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2.5">
                {feature.title}
              </h3>

              <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {feature.link && (
                <Link
                  href={feature.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-600)] hover:gap-2 transition-all"
                >
                  {feature.link.text}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

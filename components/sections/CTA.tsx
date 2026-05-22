'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAProps {
  title: string;
  description?: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
  background?: 'gradient' | 'dark' | 'accent';
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  background = 'gradient',
}: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className={cn(
        'py-20 lg:py-28',
        background === 'gradient' &&
          'bg-gradient-to-br from-[var(--color-primary-900)] via-[var(--color-primary-800)] to-[var(--color-primary-600)]',
        background === 'dark' && 'bg-[var(--color-primary-900)]',
        background === 'accent' && 'bg-[var(--color-accent-600)]'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title}
          </h2>

          {description && (
            <p className="text-lg text-white/75 mb-10 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="inline-flex items-center gap-2.5 h-14 px-8 text-lg font-semibold rounded-xl bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-all hover:-translate-y-px shadow-lg group"
              >
                {primaryAction.text}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
              >
                {secondaryAction.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

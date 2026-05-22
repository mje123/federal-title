'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  image?: {
    src: string;
    alt: string;
    position?: 'left' | 'right' | 'background';
  };
  gradient?: boolean;
  overlay?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  image,
  gradient = true,
  overlay = true,
}: HeroProps) {
  const hasBackground = image?.position === 'background';

  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background */}
      {hasBackground ? (
        <div className="absolute inset-0">
          <Image
            src={image!.src}
            alt={image!.alt}
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/90 via-[var(--color-primary-900)]/70 to-[var(--color-primary-900)]/40" />
          )}
        </div>
      ) : gradient ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-900)] via-[var(--color-primary-800)] to-[var(--color-primary-600)]" />
      ) : null}

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 py-20">
        <div
          className={cn(
            'grid items-center gap-12',
            image && image.position !== 'background'
              ? 'lg:grid-cols-2'
              : 'grid-cols-1'
          )}
        >
          <div
            className={cn(
              image && image.position !== 'background'
                ? 'text-center lg:text-left'
                : 'text-center max-w-4xl mx-auto'
            )}
          >
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={cn(
                  'flex flex-col sm:flex-row gap-4',
                  image && image.position !== 'background'
                    ? 'justify-center lg:justify-start'
                    : 'justify-center'
                )}
              >
                {cta.primary && (
                  <Link
                    href={cta.primary.href}
                    className="inline-flex items-center justify-center gap-2.5 h-14 px-8 text-lg font-semibold rounded-xl bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-all hover:-translate-y-px shadow-lg group"
                  >
                    {cta.primary.text}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
                {cta.secondary && (
                  <Link
                    href={cta.secondary.href}
                    className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                  >
                    {cta.secondary.text}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {/* Side image */}
          {image && image.position !== 'background' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}

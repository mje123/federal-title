'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  source?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export function Testimonials({ testimonials, title }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[var(--color-neutral-50)]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title ?? 'Trusted by thousands across DC, MD & VA'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--color-neutral-200)]" />

              {testimonial.rating && (
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < testimonial.rating!
                          ? 'fill-[var(--color-accent-500)] text-[var(--color-accent-500)]'
                          : 'text-[var(--color-neutral-300)]'
                      }`}
                    />
                  ))}
                </div>
              )}

              <blockquote className="text-[var(--color-neutral-700)] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-neutral-100)]">
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-semibold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--color-neutral-900)]">
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className="text-xs text-[var(--color-neutral-500)]">
                      {testimonial.role}
                    </p>
                  )}
                </div>
                {testimonial.source && (
                  <span className="ml-auto text-xs text-[var(--color-neutral-400)] bg-[var(--color-neutral-100)] px-2 py-1 rounded">
                    {testimonial.source}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  label: string;
  value: string;
  description?: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-14 bg-white border-y border-[var(--color-neutral-200)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-4xl lg:text-5xl font-bold text-[var(--color-primary-700)] mb-1 font-display"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-[var(--color-neutral-600)] uppercase tracking-wider">
                {stat.label}
              </p>
              {stat.description && (
                <p className="text-xs text-[var(--color-neutral-500)] mt-1">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

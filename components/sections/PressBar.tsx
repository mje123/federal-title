'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pressItems = [
  { name: 'Redfin', url: '/press' },
  { name: 'Washingtonian', url: '/press' },
  { name: 'The Washington Post', url: '/press' },
  { name: 'Zillow', url: '/press' },
  { name: 'Trulia', url: '/press' },
];

export function PressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-12 bg-white border-b border-[var(--color-neutral-200)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-center text-[var(--color-neutral-400)] mb-8 font-medium">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {pressItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-600)] font-semibold text-lg transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

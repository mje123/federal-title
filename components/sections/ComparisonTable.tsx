'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonRow {
  jurisdiction: string;
  averagePrice: string;
  competitorCost: string;
  federalTitleCost: string;
  savings: string;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  data: ComparisonRow[];
  source?: string;
  cta?: { text: string; href: string };
}

export function ComparisonTable({
  title,
  description,
  data,
  source,
  cta,
}: ComparisonTableProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          {title && (
            <h2
              className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4 font-display"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[var(--color-neutral-600)] text-lg">{description}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-[var(--color-neutral-200)] shadow-[var(--shadow-md)]"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-primary-900)] text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Jurisdiction
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Avg. Home Price
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Competitor Avg.
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold bg-[var(--color-accent-700)]">
                  Federal Title
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold bg-[var(--color-accent-700)]">
                  Your Savings
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={row.jurisdiction}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]'}
                >
                  <td className="px-6 py-4 font-semibold text-[var(--color-neutral-900)]">
                    {row.jurisdiction}
                  </td>
                  <td className="px-6 py-4 text-right text-[var(--color-neutral-600)] text-sm">
                    {row.averagePrice}
                  </td>
                  <td className="px-6 py-4 text-right text-[var(--color-neutral-600)] text-sm">
                    {row.competitorCost}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-[var(--color-primary-700)] bg-[var(--color-accent-50)]">
                    {row.federalTitleCost}
                  </td>
                  <td className="px-6 py-4 text-right bg-[var(--color-accent-50)]">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[var(--color-accent-700)]">
                      <CheckCircle2 className="h-4 w-4" />
                      {row.savings}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4"
        >
          {source && (
            <p className="text-xs text-[var(--color-neutral-500)]">{source}</p>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent-600)] text-white font-medium text-sm hover:bg-[var(--color-accent-700)] transition-colors"
            >
              {cta.text}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[var(--color-neutral-200)] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between p-6 text-left transition-colors',
          isOpen
            ? 'bg-[var(--color-primary-50)]'
            : 'bg-white hover:bg-[var(--color-neutral-50)]'
        )}
      >
        <span
          className={cn(
            'font-semibold text-base pr-4',
            isOpen
              ? 'text-[var(--color-primary-700)]'
              : 'text-[var(--color-neutral-900)]'
          )}
        >
          {faq.question}
        </span>
        <span
          className={cn(
            'shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors',
            isOpen
              ? 'bg-[var(--color-primary-600)] text-white'
              : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]'
          )}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-2 bg-white">
              <p className="text-[var(--color-neutral-600)] leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ({ title, description, faqs }: FAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[var(--color-accent-600)] font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
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
            <p className="text-lg text-[var(--color-neutral-600)]">{description}</p>
          )}
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <FAQItem faq={faq} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

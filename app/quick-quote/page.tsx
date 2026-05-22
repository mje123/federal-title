'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, DollarSign, User, Mail, Phone, ArrowRight, Check, Scale, Shield, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const quoteSchema = z.object({
  transactionType: z.enum(['purchase', 'refinance', 'seller']),
  propertyAddress: z.string().min(3, 'Please enter a property address'),
  city: z.string().min(1, 'City is required'),
  state: z.enum(['DC', 'MD', 'VA']),
  purchasePrice: z.string().min(1, 'Purchase price is required'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  comments: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const transactionTypes = [
  { value: 'purchase', label: 'Buying', desc: "I'm purchasing a home" },
  { value: 'refinance', label: 'Refinancing', desc: 'Refinancing my current home' },
  { value: 'seller', label: 'Selling', desc: "I'm selling a home" },
] as const;

export default function QuickQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { transactionType: 'purchase', state: 'DC' },
  });

  const transactionType = watch('transactionType');

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      {/* Header */}
      <section className="bg-[var(--color-primary-900)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            Free & Instant
          </p>
          <h1
            className="text-5xl font-bold mb-4 font-display"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Get Your Guaranteed Quote
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We&apos;ll email your customized quote within 1 business hour. No obligation, no
            hidden fees.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Scale, label: 'Attorney-Led' },
                { icon: Shield, label: 'No Hidden Fees' },
                { icon: Clock, label: '1-Hour Response' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 py-4 bg-white rounded-xl border border-[var(--color-neutral-200)] text-center"
                >
                  <Icon className="h-5 w-5 text-[var(--color-primary-600)]" />
                  <span className="text-xs font-semibold text-[var(--color-neutral-700)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-8 shadow-[var(--shadow)]"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Transaction type */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-3">
                        I am...
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {transactionTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setValue('transactionType', type.value)}
                            className={cn(
                              'p-4 rounded-xl border-2 text-left transition-all',
                              transactionType === type.value
                                ? 'border-[var(--color-primary-600)] bg-[var(--color-primary-50)]'
                                : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
                            )}
                          >
                            <p
                              className={cn(
                                'font-semibold text-sm',
                                transactionType === type.value
                                  ? 'text-[var(--color-primary-700)]'
                                  : 'text-[var(--color-neutral-900)]'
                              )}
                            >
                              {type.label}
                            </p>
                            <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">
                              {type.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                        Property Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-neutral-400)]" />
                        <input
                          {...register('propertyAddress')}
                          placeholder="123 Main Street"
                          className={cn(
                            'w-full h-11 pl-10 pr-4 rounded-lg border text-sm transition-all',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                            errors.propertyAddress
                              ? 'border-red-500'
                              : 'border-[var(--color-neutral-300)]'
                          )}
                        />
                      </div>
                      {errors.propertyAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.propertyAddress.message}
                        </p>
                      )}
                    </div>

                    {/* City / State */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                          City
                        </label>
                        <input
                          {...register('city')}
                          placeholder="Washington"
                          className={cn(
                            'w-full h-11 px-4 rounded-lg border text-sm transition-all',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                            errors.city ? 'border-red-500' : 'border-[var(--color-neutral-300)]'
                          )}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                          State
                        </label>
                        <select
                          {...register('state')}
                          className="w-full h-11 px-4 rounded-lg border border-[var(--color-neutral-300)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)] transition-all"
                        >
                          <option value="DC">Washington, DC</option>
                          <option value="MD">Maryland</option>
                          <option value="VA">Virginia</option>
                        </select>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                        {transactionType === 'refinance' ? 'Loan Amount' : 'Purchase Price'}
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-neutral-400)]" />
                        <input
                          {...register('purchasePrice')}
                          placeholder="400,000"
                          className={cn(
                            'w-full h-11 pl-10 pr-4 rounded-lg border text-sm transition-all',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                            errors.purchasePrice
                              ? 'border-red-500'
                              : 'border-[var(--color-neutral-300)]'
                          )}
                        />
                      </div>
                      {errors.purchasePrice && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.purchasePrice.message}
                        </p>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[var(--color-neutral-200)]" />

                    {/* Contact info */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-neutral-400)]" />
                        <input
                          {...register('name')}
                          placeholder="Jane Smith"
                          className={cn(
                            'w-full h-11 pl-10 pr-4 rounded-lg border text-sm transition-all',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                            errors.name ? 'border-red-500' : 'border-[var(--color-neutral-300)]'
                          )}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-neutral-400)]" />
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="jane@email.com"
                            className={cn(
                              'w-full h-11 pl-10 pr-4 rounded-lg border text-sm transition-all',
                              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                              errors.email
                                ? 'border-red-500'
                                : 'border-[var(--color-neutral-300)]'
                            )}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-neutral-400)]" />
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="(202) 555-1234"
                            className={cn(
                              'w-full h-11 pl-10 pr-4 rounded-lg border text-sm transition-all',
                              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)]',
                              errors.phone
                                ? 'border-red-500'
                                : 'border-[var(--color-neutral-300)]'
                            )}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Optional comments */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-neutral-800)] mb-2">
                        Additional Comments{' '}
                        <span className="text-[var(--color-neutral-400)] font-normal">(optional)</span>
                      </label>
                      <textarea
                        {...register('comments')}
                        rows={3}
                        placeholder="Any questions or details about your transaction..."
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-neutral-300)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]/20 focus:border-[var(--color-primary-600)] transition-all"
                      />
                    </div>

                    {/* REAL Credit callout */}
                    <div className="bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] rounded-xl p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[var(--color-accent-600)] text-white flex items-center justify-center shrink-0">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-accent-900)] text-sm">
                          Order online and save $750
                        </p>
                        <p className="text-xs text-[var(--color-accent-700)]">
                          Our REAL Credit applies when you order your closing directly through our
                          website.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl bg-[var(--color-accent-600)] text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[var(--color-accent-700)] transition-all hover:-translate-y-px disabled:opacity-50 disabled:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Getting Your Quote...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[var(--color-neutral-500)]">
                      No obligation. We&apos;ll email your quote within 1 business hour.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-12 shadow-[var(--shadow)] text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-[var(--color-accent-500)] text-white flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2
                    className="text-3xl font-bold text-[var(--color-neutral-900)] mb-3 font-display"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    Quote Request Received!
                  </h2>
                  <p className="text-[var(--color-neutral-600)] mb-8 text-lg">
                    We&apos;ll send your customized quote to your email within 1 business hour.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center h-11 px-6 rounded-lg border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] font-medium text-sm hover:bg-[var(--color-primary-50)] transition-colors"
                    >
                      Back to Home
                    </Link>
                    <Link
                      href="/homebuyers"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-[var(--color-primary-600)] text-white font-medium text-sm hover:bg-[var(--color-primary-700)] transition-colors"
                    >
                      Learn About the Process
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

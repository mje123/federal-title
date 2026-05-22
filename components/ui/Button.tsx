import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-600)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] hover:-translate-y-px active:translate-y-0',
        secondary:
          'bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] hover:-translate-y-px active:translate-y-0',
        outline:
          'border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] hover:border-[var(--color-primary-700)]',
        ghost:
          'text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)]',
        link: 'text-[var(--color-primary-600)] underline-offset-4 hover:underline p-0 h-auto',
        white:
          'bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-neutral-100)] hover:-translate-y-px',
        'white-outline':
          'border-2 border-white text-white hover:bg-white/10',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-lg gap-1.5',
        md: 'h-11 px-6 text-base rounded-lg gap-2',
        lg: 'h-13 px-8 text-lg rounded-xl gap-2',
        xl: 'h-14 px-10 text-lg rounded-xl gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
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
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

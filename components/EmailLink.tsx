'use client';

import { useState } from 'react';

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EmailLink({ email, className, children }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Try to copy — if clipboard isn't available, let the mailto: open normally
    if (navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <span className="relative inline-flex items-center gap-1.5">
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        {children ?? email}
      </a>
      {copied && (
        <span className="absolute -top-7 left-0 bg-[var(--color-neutral-900)] text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
          Copied!
        </span>
      )}
    </span>
  );
}

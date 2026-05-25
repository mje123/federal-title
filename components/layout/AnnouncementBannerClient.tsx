'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const BG: Record<string, string> = {
  info: 'bg-blue-600',
  warning: 'bg-amber-500',
  success: 'bg-green-600',
};

export function AnnouncementBannerClient({ message, type }: { message: string; type: 'info' | 'warning' | 'success' }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className={`${BG[type] ?? BG.info} text-white text-sm py-2.5 px-4 relative`}>
      <p className="text-center font-medium pr-8">{message}</p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

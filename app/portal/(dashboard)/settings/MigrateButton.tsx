'use client';

import { useState } from 'react';
import { RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export function MigrateButton() {
  const [status, setStatus] = useState<'idle' | 'running' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function run() {
    setStatus('running');
    setMessage('');
    try {
      const res = await fetch('/api/admin/migrate-wp', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(data.error ?? 'Migration failed.');
      } else {
        setStatus('done');
        setMessage(`Done — ${data.migrated} posts imported from WordPress.`);
      }
    } catch (e) {
      setStatus('error');
      setMessage(String(e));
    }
  }

  return (
    <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
      <h3 className="font-semibold text-[var(--color-primary-900)] mb-1">Import WordPress Blog Posts</h3>
      <p className="text-sm text-[var(--color-neutral-500)] mb-4">
        Pulls all published posts from the current federaltitle.com WordPress site and saves them to the database.
        Safe to run multiple times — existing posts are updated, not duplicated.
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={run}
          disabled={status === 'running'}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${status === 'running' ? 'animate-spin' : ''}`} />
          {status === 'running' ? 'Importing…' : 'Import Now'}
        </button>

        {status === 'done' && (
          <span className="flex items-center gap-1.5 text-sm text-emerald-700 font-medium">
            <CheckCircle2 className="h-4 w-4" />
            {message}
          </span>
        )}
        {status === 'error' && (
          <span className="flex items-center gap-1.5 text-sm text-red-600 font-medium">
            <AlertCircle className="h-4 w-4" />
            {message}
          </span>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Save, Globe, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Post = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: 'draft' | 'published';
  published_at: string | null;
};

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function BlogEditor({ initial }: { initial?: Partial<Post> }) {
  const router = useRouter();
  const isNew = !initial?.id;

  const [title, setTitle] = useState(initial?.title ?? '');
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [status, setStatus] = useState<'draft' | 'published'>(initial?.status ?? 'draft');
  const [slugManual, setSlugManual] = useState(!!initial?.slug);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!slugManual) setSlug(toSlug(val));
  }

  async function save(publish?: boolean) {
    setError('');
    setSaving(true);
    setSaved(false);

    const targetStatus = publish ? 'published' : status;
    const supabase = createClient();

    const payload = {
      title,
      slug,
      excerpt,
      content,
      status: targetStatus,
      published_at: targetStatus === 'published' ? new Date().toISOString() : null,
    };

    let err;
    if (isNew) {
      const { error: e } = await supabase.from('blog_posts').insert(payload);
      err = e;
    } else {
      const { error: e } = await supabase.from('blog_posts').update({ ...payload, updated_at: new Date().toISOString() }).eq('id', initial!.id!);
      err = e;
    }

    setSaving(false);
    if (err) {
      setError(err.message);
      return;
    }

    if (isNew) {
      router.push('/portal/blog');
      router.refresh();
    } else {
      setSaved(true);
      router.refresh();
      if (publish) setStatus('published');
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/portal/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Blog Posts
        </Link>
        <span className="text-[var(--color-neutral-300)]">/</span>
        <span className="text-sm font-medium text-[var(--color-primary-900)]">
          {isNew ? 'New Post' : 'Edit Post'}
        </span>
      </div>

      <div className="grid gap-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {saved && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-700">
            Saved successfully.
          </div>
        )}

        {/* Title */}
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-400)] mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className="w-full text-2xl font-bold text-[var(--color-primary-900)] bg-transparent border-none outline-none placeholder:text-[var(--color-neutral-300)] placeholder:font-normal placeholder:text-xl"
          />
          <div className="mt-3 pt-3 border-t border-[var(--color-neutral-100)]">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-400)] mb-1.5">
              Slug
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--color-neutral-400)]">federaltitle.com/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
                className="flex-1 text-xs px-2.5 py-1.5 rounded-lg border border-[var(--color-neutral-200)] text-[var(--color-neutral-700)] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)]"
              />
            </div>
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-400)] mb-2">
            Excerpt <span className="font-normal text-[var(--color-neutral-400)] normal-case">(shown in listings, optional)</span>
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            placeholder="A short description of the post…"
            className="w-full text-sm text-[var(--color-neutral-700)] bg-transparent border-none outline-none resize-none placeholder:text-[var(--color-neutral-300)]"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-400)] mb-2">
            Content <span className="font-normal text-[var(--color-neutral-400)] normal-case">(HTML or plain text)</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            placeholder="Write your post here…"
            className="w-full text-sm text-[var(--color-neutral-700)] bg-transparent border-none outline-none resize-y placeholder:text-[var(--color-neutral-300)] font-mono leading-relaxed"
          />
        </div>

        {/* Actions */}
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[var(--color-neutral-600)]">Status:</span>
            <div className="flex rounded-lg border border-[var(--color-neutral-200)] overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setStatus('draft')}
                className={`flex items-center gap-1.5 px-3 py-2 transition-colors ${
                  status === 'draft'
                    ? 'bg-[var(--color-neutral-800)] text-white'
                    : 'text-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-50)]'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                Draft
              </button>
              <button
                onClick={() => setStatus('published')}
                className={`flex items-center gap-1.5 px-3 py-2 transition-colors ${
                  status === 'published'
                    ? 'bg-green-600 text-white'
                    : 'text-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-50)]'
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                Published
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => save()}
              disabled={saving || !title || !slug}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm font-semibold text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-50)] transition-colors disabled:opacity-40"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving…' : 'Save Draft'}
            </button>
            {status !== 'published' && (
              <button
                onClick={() => save(true)}
                disabled={saving || !title || !slug || !content}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-40"
              >
                <Globe className="h-4 w-4" />
                {saving ? 'Publishing…' : 'Publish'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

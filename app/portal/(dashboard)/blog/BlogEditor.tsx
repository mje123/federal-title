'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Save, Globe, FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
      const { error: e } = await supabase
        .from('blog_posts')
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq('id', initial!.id!);
      err = e;
    }

    setSaving(false);
    if (err) { setError(err.message); return; }

    if (isNew) {
      router.push('/portal/blog');
    } else {
      setSaved(true);
      if (publish) setStatus('published');
      router.refresh();
    }
  }

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  return (
    <div className="min-h-screen bg-[#f8f9fb] -m-8 lg:-m-10">

      {/* Sticky toolbar */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-neutral-200 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/portal/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Posts
          </Link>
          <span className="text-neutral-200">|</span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
            status === 'published' ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-500'
          }`}>
            {status === 'published' ? <Globe className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
            {status === 'published' ? 'Published' : 'Draft'}
          </span>
          {wordCount > 0 && (
            <span className="text-xs text-neutral-400 hidden sm:block">{wordCount.toLocaleString()} words</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {saved && (
            <span className="text-xs text-green-600 font-medium flex items-center gap-1 mr-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Saved
            </span>
          )}
          {error && <span className="text-xs text-red-500 mr-1">{error}</span>}

          <button
            onClick={() => save()}
            disabled={saving || !title || !slug}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors disabled:opacity-40 shadow-sm"
          >
            <Save className="h-3.5 w-3.5" />
            {saving ? 'Saving…' : 'Save'}
          </button>

          {status !== 'published' ? (
            <button
              onClick={() => save(true)}
              disabled={saving || !title || !slug || !content}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-medium hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-40 shadow-sm"
            >
              <Globe className="h-3.5 w-3.5" />
              Publish
            </button>
          ) : (
            <button
              onClick={() => { setStatus('draft'); save(); }}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors disabled:opacity-40 shadow-sm"
            >
              Unpublish
            </button>
          )}
        </div>
      </div>

      {/* Writing area */}
      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Title */}
        <textarea
          value={title}
          onChange={(e) => {
            handleTitleChange(e.target.value);
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
          placeholder="Post title"
          rows={1}
          className="w-full text-[2.75rem] font-bold leading-tight text-neutral-900 bg-transparent border-none outline-none resize-none placeholder:text-neutral-200 mb-3 overflow-hidden"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        />

        {/* Slug row */}
        <div className="flex items-center gap-2 pb-8 mb-8 border-b border-neutral-200">
          <span className="text-xs text-neutral-400 shrink-0">federaltitle.com/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
            placeholder="post-url-slug"
            className="text-xs px-2.5 py-1.5 rounded-md border border-neutral-200 text-neutral-600 font-mono bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent max-w-xs"
          />
        </div>

        {/* Excerpt */}
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
            Excerpt <span className="font-normal normal-case text-neutral-300">— shown in blog listings</span>
          </p>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            placeholder="A short description of this post…"
            className="w-full text-sm text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-primary-300)] focus:border-transparent resize-none placeholder:text-neutral-300 leading-relaxed"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Content</p>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={30}
            placeholder="Write your post here…"
            className="w-full text-[15px] text-neutral-800 bg-white border border-neutral-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[var(--color-primary-300)] focus:border-transparent resize-y placeholder:text-neutral-300 leading-8 shadow-sm"
          />
          <p className="text-xs text-neutral-300 mt-2 text-right">HTML or plain text</p>
        </div>
      </div>
    </div>
  );
}

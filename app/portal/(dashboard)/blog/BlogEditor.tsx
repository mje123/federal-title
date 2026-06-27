'use client';

import { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import {
  Save, Globe, FileText, ArrowLeft, CheckCircle2,
  Bold, Italic, UnderlineIcon, Link2, List, ListOrdered,
  Heading2, Heading3, AlignLeft, AlignCenter, AlignRight, Quote, Minus,
  ImageIcon, Loader2, Upload, X,
} from 'lucide-react';
import NextLink from 'next/link';

type Post = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
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

function ToolbarButton({
  onClick, active, title, children, disabled,
}: { onClick: () => void; active?: boolean; title: string; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      disabled={disabled}
      className={`h-7 w-7 flex items-center justify-center rounded text-sm transition-colors disabled:opacity-40 ${
        active
          ? 'bg-[var(--color-primary-700)] text-white'
          : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
      }`}
    >
      {children}
    </button>
  );
}

export function BlogEditor({ initial }: { initial?: Partial<Post> }) {
  const router = useRouter();
  const isNew = !initial?.id;

  const [title, setTitle] = useState(initial?.title ?? '');
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '');
  const [status, setStatus] = useState<'draft' | 'published'>(initial?.status ?? 'draft');
  const [slugManual, setSlugManual] = useState(!!initial?.slug);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(initial?.cover_image ?? null);
  const [coverUploading, setCoverUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ inline: false, allowBase64: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[var(--color-accent-600)] underline' } }),
      Placeholder.configure({ placeholder: 'Start writing your post…' }),
    ],
    content: initial?.content ?? '',
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none min-h-[500px] focus:outline-none prose-headings:font-bold prose-headings:text-neutral-900 prose-a:text-[var(--color-accent-600)] prose-strong:text-neutral-900 prose-img:rounded-xl',
      },
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href;
    const url = window.prompt('URL', prev);
    if (url === null) return;
    if (url === '') { editor.chain().focus().unsetLink().run(); return; }
    editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  async function uploadToStorage(file: File, bucket: string): Promise<string | null> {
    const supabase = createClient();
    const ext = file.name.split('.').pop() ?? 'jpg';
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filename, file, { cacheControl: '31536000', upsert: false });
    if (uploadError) { setError(`Upload failed: ${uploadError.message}`); return null; }
    const { data } = supabase.storage.from(bucket).getPublicUrl(filename);
    return data.publicUrl;
  }

  const handleImageFile = useCallback(async (file: File) => {
    if (!editor) return;
    setUploading(true);
    try {
      const url = await uploadToStorage(file, 'blog-images');
      if (url) editor.chain().focus().setImage({ src: url }).run();
    } finally {
      setUploading(false);
    }
  }, [editor]);

  const handleCoverImage = useCallback(async (file: File) => {
    setCoverUploading(true);
    try {
      const url = await uploadToStorage(file, 'blog-images');
      if (url) setCoverImage(url);
    } finally {
      setCoverUploading(false);
    }
  }, []);

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!slugManual) setSlug(toSlug(val));
  }

  async function save(publish?: boolean) {
    setError('');
    setSaving(true);
    setSaved(false);

    const content = editor?.getHTML() ?? '';
    const targetStatus = publish ? 'published' : status;
    const supabase = createClient();

    const payload = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage,
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

  const wordCount = editor ? editor.getText().trim().split(/\s+/).filter(Boolean).length : 0;

  if (!editor) return null;

  return (
    <div className="min-h-screen bg-[#FAFAF8] -m-8 lg:-m-10">

      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <NextLink
              href="/portal/blog"
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Posts</span>
            </NextLink>
            <div className="w-px h-4 bg-neutral-200 shrink-0" />
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
              status === 'published'
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
            }`}>
              {status === 'published' ? <Globe className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
              {status === 'published' ? 'Published' : 'Draft'}
            </span>
            {wordCount > 0 && (
              <span className="text-xs text-neutral-400 hidden md:block">{wordCount.toLocaleString()} words</span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {saved && (
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 mr-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Saved
              </span>
            )}
            {error && <span className="text-xs text-red-500 mr-1 max-w-[200px] truncate">{error}</span>}

            <button
              onClick={() => save()}
              disabled={saving || !title || !slug}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-all disabled:opacity-40 shadow-sm"
            >
              <Save className="h-3.5 w-3.5" />
              {saving ? 'Saving…' : 'Save draft'}
            </button>

            {status !== 'published' ? (
              <button
                onClick={() => save(true)}
                disabled={saving || !title || !slug}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-all disabled:opacity-40 shadow-sm"
              >
                <Globe className="h-3.5 w-3.5" />
                Publish
              </button>
            ) : (
              <button
                onClick={() => { setStatus('draft'); save(); }}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-all disabled:opacity-40 shadow-sm"
              >
                Unpublish
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cover image area */}
      <div className="relative w-full bg-neutral-100 group">
        {coverImage ? (
          <div className="relative">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/90 text-sm font-medium text-neutral-800 shadow hover:bg-white transition-all"
              >
                <Upload className="h-3.5 w-3.5" />
                Change cover
              </button>
              <button
                type="button"
                onClick={() => setCoverImage(null)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/90 text-sm font-medium text-red-600 shadow hover:bg-white transition-all"
              >
                <X className="h-3.5 w-3.5" />
                Remove
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => coverInputRef.current?.click()}
            className="w-full h-24 flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200/60 transition-all border-b border-neutral-200"
          >
            {coverUploading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Uploading…</>
            ) : (
              <><ImageIcon className="h-4 w-4" /> Add cover image</>
            )}
          </button>
        )}
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleCoverImage(file);
            e.target.value = '';
          }}
        />
      </div>

      {/* Writing area */}
      <div className="max-w-2xl mx-auto px-6 py-12">

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
          className="w-full text-[2.75rem] font-bold leading-tight text-neutral-900 bg-transparent border-none outline-none resize-none placeholder:text-neutral-300 mb-4 overflow-hidden"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        />

        {/* Slug row */}
        <div className="flex items-center gap-2 pb-8 mb-8 border-b border-neutral-200">
          <span className="text-xs text-neutral-400 shrink-0 font-mono">federaltitle.com/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
            placeholder="post-url-slug"
            className="text-xs px-2 py-1 rounded border border-neutral-200 text-neutral-600 font-mono bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-300)] focus:border-transparent max-w-xs placeholder:text-neutral-300"
          />
        </div>

        {/* Excerpt */}
        <div className="mb-10">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
            Excerpt <span className="font-normal normal-case text-neutral-300">— shown in blog listings</span>
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            placeholder="A short description of this post…"
            className="w-full text-sm text-neutral-700 bg-white border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-primary-300)] focus:border-transparent resize-none placeholder:text-neutral-300 leading-relaxed shadow-sm"
          />
        </div>

        {/* Rich text editor */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Content</label>

          {/* Formatting toolbar */}
          <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border border-neutral-200 rounded-t-xl bg-white shadow-sm">
            <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold">
              <Bold className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic">
              <Italic className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline">
              <UnderlineIcon className="h-3.5 w-3.5" />
            </ToolbarButton>

            <div className="w-px h-4 bg-neutral-200 mx-1" />

            <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">
              <Heading2 className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">
              <Heading3 className="h-3.5 w-3.5" />
            </ToolbarButton>

            <div className="w-px h-4 bg-neutral-200 mx-1" />

            <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet list">
              <List className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered list">
              <ListOrdered className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Quote">
              <Quote className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} active={false} title="Divider">
              <Minus className="h-3.5 w-3.5" />
            </ToolbarButton>

            <div className="w-px h-4 bg-neutral-200 mx-1" />

            <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align left">
              <AlignLeft className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align center">
              <AlignCenter className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align right">
              <AlignRight className="h-3.5 w-3.5" />
            </ToolbarButton>

            <div className="w-px h-4 bg-neutral-200 mx-1" />

            <ToolbarButton onClick={setLink} active={editor.isActive('link')} title="Add link">
              <Link2 className="h-3.5 w-3.5" />
            </ToolbarButton>

            <div className="w-px h-4 bg-neutral-200 mx-1" />

            <ToolbarButton
              onClick={() => fileInputRef.current?.click()}
              active={false}
              title="Insert image"
              disabled={uploading}
            >
              {uploading
                ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                : <ImageIcon className="h-3.5 w-3.5" />}
            </ToolbarButton>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageFile(file);
                e.target.value = '';
              }}
            />
          </div>

          {/* Editor content */}
          <div className="border border-t-0 border-neutral-200 rounded-b-xl px-6 py-6 bg-white min-h-[500px] shadow-sm">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { PlusCircle, Edit2, Globe, FileText } from 'lucide-react';
import { DeletePostButton } from './DeletePostButton';

export default async function BlogList() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, status, published_at, created_at')
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-primary-900)]">Blog Posts</h1>
          <p className="text-[var(--color-neutral-500)] text-sm mt-1">
            {posts?.length ?? 0} post{posts?.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Link
          href="/portal/blog/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
        >
          <PlusCircle className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-12 text-center">
          <FileText className="h-8 w-8 text-[var(--color-neutral-300)] mx-auto mb-3" />
          <p className="font-medium text-[var(--color-neutral-600)]">No posts yet</p>
          <p className="text-sm text-[var(--color-neutral-400)] mt-1">Create your first blog post.</p>
          <Link
            href="/portal/blog/new"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors"
          >
            <PlusCircle className="h-4 w-4" />
            Write a Post
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl border border-[var(--color-neutral-200)] px-5 py-4 flex items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-500)]'
                    }`}
                  >
                    {post.status === 'published' ? (
                      <><Globe className="h-3 w-3" />Published</>
                    ) : (
                      <><FileText className="h-3 w-3" />Draft</>
                    )}
                  </span>
                </div>
                <p className="font-semibold text-[var(--color-primary-900)] truncate">{post.title}</p>
                <p className="text-xs text-[var(--color-neutral-400)] mt-0.5">
                  /{post.slug} · {new Date(post.published_at ?? post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/portal/blog/${post.id}/edit`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)] transition-colors"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                  Edit
                </Link>
                <DeletePostButton id={post.id} title={post.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

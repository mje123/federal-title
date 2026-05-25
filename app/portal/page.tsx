import { createClient } from '@/lib/supabase/server';

export default async function PortalDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { count: totalPosts } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true });

  const { count: publishedPosts } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-primary-900)]">Dashboard</h1>
        <p className="text-[var(--color-neutral-500)] mt-1 text-sm">
          Welcome back, {user?.email}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-neutral-400)] mb-1">Total Posts</p>
          <p className="text-3xl font-bold text-[var(--color-primary-900)]">{totalPosts ?? 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-neutral-400)] mb-1">Published</p>
          <p className="text-3xl font-bold text-[var(--color-primary-900)]">{publishedPosts ?? 0}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6">
        <h2 className="font-semibold text-[var(--color-primary-900)] mb-1">More tools coming soon</h2>
        <p className="text-sm text-[var(--color-neutral-500)]">
          This portal will expand to include testimonial management, team profiles, and more.
        </p>
      </div>
    </div>
  );
}

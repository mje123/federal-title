import Link from 'next/link';
import type { Metadata } from 'next';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Federal Title & Escrow Company',
  description: 'Expert insights on DC, Maryland & Virginia real estate, title insurance, closing costs, and more from the attorneys at Federal Title.',
};

const WP_API = 'https://www.federaltitle.com/wp-json/wp/v2';
const PER_PAGE = 12;

interface WPPost {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

async function getPosts(page = 1, search = ''): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const params = new URLSearchParams({
      per_page: String(search ? 20 : PER_PAGE),
      page: String(page),
      _embed: 'author,wp:featuredmedia',
    });
    if (search) params.set('search', search);

    const res = await fetch(`${WP_API}/posts?${params}`, { next: { revalidate: 3600 } });
    const total = parseInt(res.headers.get('x-wp-total') ?? '0', 10);
    const totalPages = parseInt(res.headers.get('x-wp-totalpages') ?? '1', 10);
    const posts = await res.json();
    return { posts, total, totalPages };
  } catch {
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const { page: pageParam, search = '' } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));
  const { posts, total, totalPages } = await getPosts(currentPage, search);

  return (
    <>
      <section className="bg-[var(--color-primary-900)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-[var(--color-accent-400)] font-semibold text-sm uppercase tracking-widest mb-3">
            From the Attorneys
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Real Estate Blog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Expert insights on DC, Maryland & Virginia real estate, title insurance, closing costs, and more.{!search && total > 0 && ` ${total} articles and counting.`}
          </p>

          {/* Search bar */}
          <form method="get" action="/blog" className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40 pointer-events-none" />
              <input
                type="text"
                name="search"
                defaultValue={search}
                placeholder="Search articles…"
                className="w-full h-12 pl-12 pr-32 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-4 rounded-md bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)] text-white text-sm font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">

          {/* Search result context */}
          {search && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-[var(--color-neutral-600)] text-sm">
                {total > 0
                  ? <><strong>{total}</strong> result{total !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;</>
                  : <>No results for &ldquo;{search}&rdquo;</>
                }
              </p>
              <Link href="/blog" className="text-sm text-[var(--color-accent-600)] hover:underline">
                Clear search
              </Link>
            </div>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[var(--color-neutral-500)] mb-4">
                {search ? `No articles found for "${search}".` : 'Unable to load posts. Please try again.'}
              </p>
              {search && (
                <Link href="/blog" className="text-sm font-medium text-[var(--color-accent-600)] hover:underline">
                  Browse all articles →
                </Link>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => {
                const title = post.title.rendered.replace(/&#(\d+);/g, (_, c) => String.fromCharCode(parseInt(c)));
                const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim().slice(0, 160);
                const author = post._embedded?.author?.[0]?.name ?? 'Federal Title';
                const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const date = new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric',
                });

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border border-[var(--color-neutral-200)] overflow-hidden hover:border-[var(--color-accent-400)] hover:shadow-md transition-all"
                  >
                    {image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-[var(--color-neutral-500)] mb-3">
                        <time>{date}</time>
                        <span>·</span>
                        <span>{author}</span>
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2 group-hover:text-[var(--color-accent-600)] transition-colors leading-snug line-clamp-2">
                        {title}
                      </h2>
                      <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed line-clamp-3">
                        {excerpt}
                      </p>
                      <span className="inline-block mt-4 text-sm font-medium text-[var(--color-accent-600)] group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {!search && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="h-10 px-4 rounded-lg border border-[var(--color-neutral-300)] text-sm font-medium text-[var(--color-primary-700)] hover:bg-[var(--color-neutral-100)] transition-colors"
                >
                  ← Previous
                </Link>
              )}
              <span className="text-sm text-[var(--color-neutral-500)] px-4">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="h-10 px-4 rounded-lg border border-[var(--color-neutral-300)] text-sm font-medium text-[var(--color-primary-700)] hover:bg-[var(--color-neutral-100)] transition-colors"
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

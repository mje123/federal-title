import Link from 'next/link';
import type { Metadata } from 'next';

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

async function getPosts(page = 1): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=${PER_PAGE}&page=${page}&_embed=author,wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );
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
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));
  const { posts, total, totalPages } = await getPosts(currentPage);

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
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert insights on DC, Maryland & Virginia real estate, title insurance, closing costs, and more.{total > 0 && ` ${total} articles and counting.`}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-neutral-50)]">
        <div className="container mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-[var(--color-neutral-500)]">Unable to load posts. Please try again.</p>
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

          {totalPages > 1 && (
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

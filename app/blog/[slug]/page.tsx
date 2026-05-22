import Link from 'next/link';
import type { Metadata } from 'next';

const WP_API = 'https://www.federaltitle.com/wp-json/wp/v2';

interface WPPost {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
  };
}

async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_embed=author,wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found | Federal Title Blog' };
  const plainExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim();
  return {
    title: `${post.title.rendered.replace(/&#\d+;/g, c => String.fromCharCode(parseInt(c.slice(2, -1))))} | Federal Title Blog`,
    description: plainExcerpt.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--color-primary-900)] mb-4">Post Not Found</h1>
          <p className="text-[var(--color-neutral-600)] mb-6">This article may have moved or been removed.</p>
          <Link href="/blog" className="text-[var(--color-accent-600)] font-medium hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const author = post._embedded?.author?.[0]?.name ?? 'Federal Title';
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  const title = post.title.rendered.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)));

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            ← Back to Blog
          </Link>
          <h1
            className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>By {author}</span>
            <span>·</span>
            <time>{date}</time>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <div className="bg-[var(--color-neutral-100)]">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl py-8">
            <img
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || title}
              className="rounded-xl w-full max-h-[480px] object-cover shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[var(--color-primary-900)] prose-a:text-[var(--color-accent-600)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--color-primary-900)]"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <div className="mt-12 pt-8 border-t border-[var(--color-neutral-200)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--color-accent-600)] font-medium hover:text-[var(--color-accent-700)] transition-colors"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-primary-900)]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8">Get a guaranteed quote from Federal Title — attorney-led, consumer driven since 1996.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quick-quote"
              className="inline-flex items-center justify-center h-12 px-8 font-semibold rounded-lg bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-700)] transition-colors"
            >
              Get a Guaranteed Quote
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Order Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';

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

interface UnifiedPost {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cover_image?: string | null;
}

async function getRelatedPosts(currentSlug: string): Promise<RelatedPost[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug, title, excerpt, published_at, cover_image')
      .eq('status', 'published')
      .neq('slug', currentSlug)
      .order('published_at', { ascending: false })
      .limit(3);
    return (data ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt ?? '',
      date: p.published_at,
      cover_image: p.cover_image,
    }));
  } catch {
    return [];
  }
}

async function getSupabasePost(slug: string): Promise<UnifiedPost | null> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('title, content, excerpt, published_at, created_at, cover_image, author_name')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    if (!data) return null;
    return {
      title: data.title,
      content: data.content,
      excerpt: data.excerpt ?? '',
      date: data.published_at ?? data.created_at,
      author: data.author_name ?? 'Federal Title',
      image: data.cover_image ?? undefined,
    };
  } catch {
    return null;
  }
}

async function getWPPost(slug: string): Promise<UnifiedPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_embed=author,wp:featuredmedia`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    const post = posts[0];
    if (!post) return null;
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    return {
      title: post.title.rendered.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code))),
      content: post.content.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').trim(),
      date: post.date,
      author: post._embedded?.author?.[0]?.name ?? 'Federal Title',
      image: featuredMedia?.source_url,
      imageAlt: featuredMedia?.alt_text,
    };
  } catch {
    return null;
  }
}

const BASE_URL = 'https://www.federaltitle.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getSupabasePost(slug)) ?? (await getWPPost(slug));
  if (!post) return { title: 'Post Not Found | Federal Title Blog' };
  const description = post.excerpt.replace(/<[^>]+>/g, '').slice(0, 160);
  return {
    title: `${post.title} | Federal Title Blog`,
    description,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      siteName: 'Federal Title & Escrow Company',
      ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, related] = await Promise.all([
    getSupabasePost(slug).then((p) => p ?? getWPPost(slug)),
    getRelatedPosts(slug),
  ]);

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

  const { title, content, image, imageAlt, author, date: rawDate } = post;
  const featuredImage = image ? { source_url: image, alt_text: imageAlt ?? title } : null;
  const date = new Date(rawDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: post.excerpt.replace(/<[^>]+>/g, '').slice(0, 160),
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Federal Title & Escrow Company',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished: rawDate,
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
    ...(featuredImage ? { image: { '@type': 'ImageObject', url: featuredImage.source_url } } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="bg-[var(--color-primary-900)] py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            ← Back to Blog
          </Link>
          <h1
            className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title}
          </h1>
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
            dangerouslySetInnerHTML={{ __html: content }}
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

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)]">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2
              className="text-2xl font-bold text-[var(--color-primary-900)] mb-8"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--color-neutral-200)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  {r.cover_image ? (
                    <img
                      src={r.cover_image}
                      alt={r.title}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center">
                      <span className="text-[var(--color-primary-400)] text-4xl font-serif">F</span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <time className="text-xs text-[var(--color-neutral-400)] mb-2">
                      {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h3 className="text-sm font-bold text-[var(--color-primary-900)] leading-snug mb-2 group-hover:text-[var(--color-accent-600)] transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    {r.excerpt && (
                      <p className="text-xs text-[var(--color-neutral-600)] leading-relaxed line-clamp-3 mt-auto">
                        {r.excerpt.replace(/<[^>]+>/g, '').slice(0, 120)}…
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

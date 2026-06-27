import type { MetadataRoute } from 'next';

const BASE = 'https://www.federaltitle.com';

const staticPages: MetadataRoute.Sitemap = [
  { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE}/about-us`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/about-us/team`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/about-us/careers`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/agents`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/agents/marketing-downloads`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/blog`, changeFrequency: 'daily', priority: 0.8 },
  { url: `${BASE}/closing-docs`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/closing-guides`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/contact`, changeFrequency: 'yearly', priority: 0.7 },
  { url: `${BASE}/dc-first-time-homebuyer`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/dc-homestead-deduction`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/dc-reduced-recordation`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/dc-tax-abatement`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/firpta`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/homebuyers`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/homebuyers/earnest-money`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/homebuying`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/homebuying/fees`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/homebuying/title-insurance`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/homeowners`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/homeowners/deed-transfers`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/homeowners/refinancing`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/homeowners/selling`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/lenders`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/lenders/best-practices`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/lenders/licensing`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/locations`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/locations/friendship-heights`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/locations/14th-street`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/locations/rockville-md`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/locations/arlington-va`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/locations/potomac-md`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/locations/fairfax-va`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/order`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/post-closing-guide`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/pre-closing-guide`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/press`, changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE}/quick-quote`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/real-benefits`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/real-credit`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/realegal`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/realsafe`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/remote-closing`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/sellers`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/sellers/calculate-proceeds`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/sellers/remote-closing`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/testimonials`, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE}/title-insurance`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/title-insurance/owners-protection`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/utility-providers`, changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE}/what-does-a-title-company-do`, changeFrequency: 'monthly', priority: 0.7 },
];

interface BlogEntry { slug: string; lastmod: string; }

async function getSupabaseBlogEntries(): Promise<BlogEntry[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_at,updated_at&status=eq.published&order=published_at.desc&limit=500`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`,
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const rows: { slug: string; published_at: string; updated_at?: string }[] = await res.json();
    return rows.map((r) => ({ slug: r.slug, lastmod: r.updated_at ?? r.published_at }));
  } catch {
    return [];
  }
}

async function getWPBlogEntries(): Promise<BlogEntry[]> {
  try {
    const res = await fetch(
      'https://www.federaltitle.com/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified',
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    const posts: { slug: string; modified: string }[] = await res.json();
    return posts.map((p) => ({ slug: p.slug, lastmod: p.modified }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [supabaseEntries, wpEntries] = await Promise.all([
    getSupabaseBlogEntries(),
    getWPBlogEntries(),
  ]);

  // Merge: Supabase is authoritative, WP fills in any slugs not yet migrated
  const seen = new Set(supabaseEntries.map((e) => e.slug));
  const wpOnly = wpEntries.filter((e) => !seen.has(e.slug));
  const allBlog = [...supabaseEntries, ...wpOnly];

  const blogEntries: MetadataRoute.Sitemap = allBlog.map((e) => ({
    url: `${BASE}/blog/${e.slug}`,
    lastModified: e.lastmod,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogEntries];
}

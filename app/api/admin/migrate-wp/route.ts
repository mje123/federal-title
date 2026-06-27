import { NextResponse } from 'next/server';
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

// Protect this route — only authenticated portal users can call it
async function isAuthenticated(): Promise<boolean> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return !!user;
  } catch {
    return false;
  }
}

async function fetchAllWPPosts(): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  while (true) {
    const res = await fetch(
      `${WP_API}/posts?per_page=100&page=${page}&_embed=author,wp:featuredmedia&_fields=slug,title,content,excerpt,date,_embedded,_links`,
      { signal: AbortSignal.timeout(30000) }
    );
    if (!res.ok) break;
    const posts: WPPost[] = await res.json();
    if (!posts.length) break;
    all.push(...posts);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1', 10);
    if (page >= totalPages) break;
    page++;
  }
  return all;
}

export async function POST() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const wpPosts = await fetchAllWPPosts();
    if (!wpPosts.length) {
      return NextResponse.json({ error: 'No posts fetched from WordPress' }, { status: 500 });
    }

    const rows = wpPosts.map((post) => {
      const title = post.title.rendered
        .replace(/&#(\d+);/g, (_, c: string) => String.fromCharCode(parseInt(c)))
        .replace(/<[^>]+>/g, '');
      const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim().slice(0, 500);
      const author = post._embedded?.author?.[0]?.name ?? 'Federal Title';
      const cover_image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
      return {
        slug: post.slug,
        title,
        content: post.content.rendered,
        excerpt,
        author_name: author,
        cover_image,
        status: 'published' as const,
        published_at: post.date,
      };
    });

    const supabase = await createClient();
    const { error } = await supabase
      .from('blog_posts')
      .upsert(rows, { onConflict: 'slug', ignoreDuplicates: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true, migrated: rows.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

import { ExternalLink, Clock } from 'lucide-react';

type NewsItem = {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  category: string;
};

const FEEDS = [
  { label: 'DC Real Estate', query: '"DC real estate" OR "Washington DC housing market"' },
  { label: 'Title Insurance', query: '"title insurance" real estate' },
  { label: 'Mortgage Rates', query: '"mortgage rates" 2026 housing' },
  { label: 'Regulatory', query: 'CFPB "real estate" OR "title company" regulations' },
  { label: 'Federal Title', query: '"Federal Title" OR "federaltitle.com"' },
];

function extractText(xml: string, tag: string): string {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i').exec(xml);
  if (cdata) return cdata[1].trim();
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(xml);
  return plain ? plain[1].replace(/<[^>]+>/g, '').trim() : '';
}

async function fetchFeed(query: string, label: string): Promise<NewsItem[]> {
  try {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];
    return items.slice(0, 6).map((item) => {
      const sourceMatch = item.match(/<source[^>]*>([^<]*)<\/source>/i);
      return {
        title: extractText(item, 'title'),
        link: extractText(item, 'link') || (item.match(/<link>(.*?)<\/link>/i)?.[1] ?? ''),
        source: sourceMatch?.[1] ?? extractText(item, 'source'),
        pubDate: extractText(item, 'pubDate'),
        category: label,
      };
    }).filter((i) => i.title && i.link);
  } catch {
    return [];
  }
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  const diff = Date.now() - date.getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 1) return 'Just now';
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

const CATEGORY_COLORS: Record<string, string> = {
  'DC Real Estate': 'bg-blue-100 text-blue-700',
  'Title Insurance': 'bg-purple-100 text-purple-700',
  'Mortgage Rates': 'bg-amber-100 text-amber-700',
  'Regulatory': 'bg-red-100 text-red-700',
  'Federal Title': 'bg-green-100 text-green-700',
};

export default async function NewsPage() {
  const results = await Promise.all(
    FEEDS.map((f) => fetchFeed(f.query, f.label))
  );

  const all: NewsItem[] = results
    .flat()
    .filter((item, idx, arr) => arr.findIndex((i) => i.title === item.title) === idx)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 30);

  const fedTitle = all.filter((i) => i.category === 'Federal Title');
  const rest = all.filter((i) => i.category !== 'Federal Title');

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-primary-900)]">Industry News</h1>
        <p className="text-[var(--color-neutral-500)] text-sm mt-1">
          Real estate, title insurance, and mortgage news — updated hourly.
        </p>
      </div>

      {fedTitle.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">Federal Title Mentions</h2>
          <div className="space-y-2">
            {fedTitle.map((item) => (
              <NewsCard key={item.link} item={item} />
            ))}
          </div>
        </div>
      )}

      {rest.length === 0 ? (
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-12 text-center">
          <p className="text-[var(--color-neutral-500)] text-sm">No news articles found. Try again later.</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-neutral-400)] mb-3">Latest</h2>
          <div className="space-y-2">
            {rest.map((item) => (
              <NewsCard key={item.link} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 bg-white rounded-xl border border-[var(--color-neutral-200)] px-5 py-4 hover:border-[var(--color-primary-300)] hover:shadow-sm transition-all group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_COLORS[item.category] ?? 'bg-neutral-100 text-neutral-500'}`}>
            {item.category}
          </span>
          {item.pubDate && (
            <span className="flex items-center gap-1 text-[11px] text-[var(--color-neutral-400)]">
              <Clock className="h-3 w-3" />
              {timeAgo(item.pubDate)}
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-[var(--color-primary-900)] leading-snug group-hover:text-[var(--color-primary-700)] line-clamp-2">
          {item.title}
        </p>
        {item.source && (
          <p className="text-xs text-[var(--color-neutral-400)] mt-1">{item.source}</p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 text-[var(--color-neutral-300)] group-hover:text-[var(--color-primary-400)] shrink-0 mt-0.5 transition-colors" />
    </a>
  );
}

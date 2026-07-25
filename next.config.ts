import type { NextConfig } from 'next';

async function getWordPressBlogRedirects() {
  try {
    let allSlugs: string[] = [];
    let page = 1;
    while (true) {
      const res = await fetch(
        `https://www.federaltitle.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { signal: AbortSignal.timeout(10000) }
      );
      if (!res.ok) break;
      const posts: { slug: string }[] = await res.json();
      if (!posts.length) break;
      allSlugs = allSlugs.concat(posts.map((p) => p.slug));
      const total = parseInt(res.headers.get('X-WP-TotalPages') ?? '1', 10);
      if (page >= total) break;
      page++;
    }
    return allSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    const blogRedirects = await getWordPressBlogRedirects();
    return [
      // ── External tools ──────────────────────────────────────────────────
      { source: '/order-settlement-services', destination: '/order', permanent: true },
      { source: '/order-title-services', destination: '/order', permanent: true },

      // ── Old /resources/* WordPress paths ────────────────────────────────
      { source: '/resources/firpta', destination: '/firpta', permanent: true },
      { source: '/resources/post-closing-guide', destination: '/post-closing-guide', permanent: true },
      { source: '/resources/dc-tax-abatement', destination: '/dc-tax-abatement', permanent: true },
      { source: '/resources/homestead-deduction', destination: '/dc-homestead-deduction', permanent: true },
      { source: '/resources/reduced-recordation', destination: '/dc-reduced-recordation', permanent: true },
      { source: '/resources/first-time-homebuyer', destination: '/dc-first-time-homebuyer', permanent: true },

      // ── DC tax / buyer pages ─────────────────────────────────────────────
      { source: '/dc-first-time-home-buyer', destination: '/dc-first-time-homebuyer', permanent: true },
      { source: '/dc-first-time-homebuyer-reduced-tax', destination: '/dc-first-time-homebuyer', permanent: true },

      // ── About / team / careers ───────────────────────────────────────────
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/team', destination: '/about-us/team', permanent: true },
      { source: '/careers/opportunities', destination: '/about-us/careers', permanent: true },
      // Individual team member profile pages → team page
      { source: '/about-us/todd-ewing', destination: '/about-us/team', permanent: true },
      { source: '/about-us/daniel-cox', destination: '/about-us/team', permanent: true },
      { source: '/about-us/dedra-roberts', destination: '/about-us/team', permanent: true },
      { source: '/about-us/evan-habib', destination: '/about-us/team', permanent: true },
      { source: '/about-us/jessica-youngs', destination: '/about-us/team', permanent: true },
      { source: '/about-us/jessika-roberts', destination: '/about-us/team', permanent: true },
      { source: '/about-us/joe-gentile', destination: '/about-us/team', permanent: true },
      { source: '/about-us/luke-bacigalupo', destination: '/about-us/team', permanent: true },
      { source: '/about-us/masandra-ewing', destination: '/about-us/team', permanent: true },
      { source: '/about-us/melina-carroll', destination: '/about-us/team', permanent: true },
      { source: '/about-us/saritta-veronesi', destination: '/about-us/team', permanent: true },
      { source: '/about-us/stephanie-dudley', destination: '/about-us/team', permanent: true },
      { source: '/about-us/tabitha-frenke', destination: '/about-us/team', permanent: true },
      { source: '/about-us/anthea-higgins', destination: '/about-us/team', permanent: true },

      // ── Lenders ──────────────────────────────────────────────────────────
      { source: '/licensing', destination: '/lenders/licensing', permanent: true },
      { source: '/lenders/tax-info', destination: '/lenders', permanent: true },
      { source: '/best-practices', destination: '/lenders/best-practices', permanent: true },
      { source: '/best-practices-summary', destination: '/lenders/best-practices', permanent: true },

      // ── Homebuying / fees ────────────────────────────────────────────────
      { source: '/homebuyers/title-fees', destination: '/homebuying/fees', permanent: true },
      { source: '/homebuyers/title-insurance', destination: '/homebuying/title-insurance', permanent: true },
      { source: '/homebuyers/owners-title-insurance', destination: '/title-insurance/owners-protection', permanent: true },
      { source: '/homebuying/taxes', destination: '/homebuying/fees', permanent: true },
      { source: '/fees', destination: '/homebuying/fees', permanent: true },
      { source: '/title-fees', destination: '/homebuying/fees', permanent: true },
      { source: '/quote', destination: '/quick-quote', permanent: true },

      // ── Earnest money ────────────────────────────────────────────────────
      { source: '/emd-delivery-options', destination: '/homebuyers/earnest-money', permanent: true },

      // ── Sellers / homeowners ─────────────────────────────────────────────
      { source: '/calculate-proceeds', destination: '/sellers/calculate-proceeds', permanent: true },
      { source: '/homeowners/refinancing/fees', destination: '/homeowners/refinancing', permanent: true },
      { source: '/homeowners/refinancing/taxes', destination: '/homeowners/refinancing', permanent: true },
      { source: '/homeowners/refinancing/title-insurance', destination: '/homeowners/refinancing', permanent: true },
      { source: '/homeowners/selling/fees', destination: '/homeowners/selling', permanent: true },
      { source: '/homeowners/selling/taxes', destination: '/homeowners/selling', permanent: true },

      // ── Title insurance / fraud ──────────────────────────────────────────
      { source: '/cyber-fraud', destination: '/realsafe', permanent: true },
      { source: '/real-secure', destination: '/realsafe', permanent: true },

      // ── Privacy / legal ──────────────────────────────────────────────────
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-policy/opt-out', destination: '/privacy', permanent: true },
      { source: '/terms-of-use', destination: '/privacy', permanent: true },

      // ── Utilities ────────────────────────────────────────────────────────
      { source: '/utilities', destination: '/utility-providers', permanent: true },

      // ── Misc old pages ───────────────────────────────────────────────────
      { source: '/washington-dc-title-company', destination: '/what-does-a-title-company-do', permanent: true },
      { source: '/change-title-companies', destination: '/homebuyers', permanent: true },
      { source: '/commercial', destination: '/contact', permanent: true },
      { source: '/econsent', destination: '/remote-closing', permanent: true },
      { source: '/escrow-accounts', destination: '/homebuyers', permanent: true },

      // ── Blog posts that live at root on old WordPress site ───────────────
      { source: '/dcs-new-topa-law-rebalancing-expectations-for-neighbors-tenants-and-landlords-rental-act-effective-december-31-2025', destination: '/blog', permanent: true },
      { source: '/do-they-really-have-authority-understanding-apparent-and-implied-authority-in-real-estate-transactions', destination: '/blog', permanent: true },
      { source: '/estate-sales-in-d-c-a-costly-property-tax-surprise-to-watch', destination: '/blog', permanent: true },
      { source: '/fear-not-you-did-not-just-sell-your-house-for-10', destination: '/blog', permanent: true },
      { source: '/federal-title-featured-by-redfin', destination: '/blog', permanent: true },
      { source: '/3-factors-choose-title-company', destination: '/blog', permanent: true },
      { source: '/press-release-on-federal-titles-inaugural-holiday-giving-campaign', destination: '/press', permanent: true },
      { source: '/nvar-contract-what-day-is-it', destination: '/blog', permanent: true },
      { source: '/title-insurance-vs-homeowners-insurance-why-do-you-need-both-to-protect-your-home', destination: '/blog', permanent: true },
      { source: '/a-revisit-of-marylands-first-time-homebuyer-transfer-tax-exemption', destination: '/blog', permanent: true },
      { source: '/using-a-power-of-attorney-with-a-trust-q-a-for-sellers-and-listing-agents', destination: '/blog', permanent: true },
      // Dynamic WordPress blog post redirects (fetched at build time)
      ...blogRedirects,
    ];
  },
};

export default nextConfig;

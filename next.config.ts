import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // Resources section — old WordPress URLs
      { source: '/resources/firpta', destination: '/firpta', permanent: true },
      { source: '/resources/post-closing-guide', destination: '/post-closing-guide', permanent: true },
      { source: '/resources/dc-tax-abatement', destination: '/dc-tax-abatement', permanent: true },
      { source: '/resources/homestead-deduction', destination: '/dc-homestead-deduction', permanent: true },
      { source: '/resources/reduced-recordation', destination: '/dc-reduced-recordation', permanent: true },
      { source: '/resources/first-time-homebuyer', destination: '/dc-first-time-homebuyer', permanent: true },
      // Homebuyers section — restructured paths
      { source: '/homebuyers/title-fees', destination: '/homebuying/fees', permanent: true },
      { source: '/homebuyers/title-insurance', destination: '/homebuying/title-insurance', permanent: true },
      { source: '/homebuyers/owners-title-insurance', destination: '/title-insurance/owners-protection', permanent: true },
      // Common alternate spellings / old paths
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/team', destination: '/about-us/team', permanent: true },
      { source: '/careers', destination: '/about-us/careers', permanent: true },
      { source: '/fees', destination: '/homebuying/fees', permanent: true },
      { source: '/title-fees', destination: '/homebuying/fees', permanent: true },
    ];
  },
};

export default nextConfig;

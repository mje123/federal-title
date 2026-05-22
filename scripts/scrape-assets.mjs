/**
 * Federal Title Asset Scraper
 * Crawls federaltitle.com and downloads all images, logos, and media
 * with intelligent context classification.
 *
 * Usage: node scripts/scrape-assets.mjs
 */

import { mkdir, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const BASE_URL = 'https://www.federaltitle.com';
const OUTPUT_DIR = './public/images';
const MANIFEST_PATH = './public/images/image-manifest.json';
const CONCURRENCY = 3;
const REQUEST_DELAY = 400; // ms between requests — polite crawling

// Pages to crawl — full site map
const PAGES = [
  '/',
  '/quick-quote',
  '/order',
  '/agents',
  '/agents/why-federal-title',
  '/agents/resources',
  '/agents/refer',
  '/agents/tools',
  '/agents/faq',
  '/homebuyers',
  '/homebuyers/what-to-expect',
  '/homebuyers/title-insurance',
  '/homebuyers/closing-costs',
  '/homebuyers/faq',
  '/sellers',
  '/sellers/guide',
  '/sellers/remote-closing',
  '/sellers/faq',
  '/homeowners',
  '/homeowners/refinancing',
  '/homeowners/home-equity',
  '/homeowners/title-issues',
  '/homeowners/faq',
  '/lenders',
  '/lenders/cpl',
  '/lenders/wire-instructions',
  '/lenders/faq',
  '/about-us',
  '/about-us/team',
  '/about-us/todd-ewing',
  '/about-us/luke-bacigalupo',
  '/locations',
  '/blog',
  '/press',
  '/testimonials',
  '/contact',
  '/privacy',
  '/resources',
  '/resources/title-insurance',
  '/resources/closing-process',
  '/faq',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;

    const req = client.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        timeout: 15000,
      },
      (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, url).href;
          resolve(fetchUrl(redirectUrl));
          return;
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () =>
          resolve({ status: res.statusCode, body: Buffer.concat(chunks), headers: res.headers })
        );
        res.on('error', reject);
      }
    );
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function extractImages(html, pageUrl) {
  const images = new Map();

  // Extract img src and srcset
  const imgRegex = /<img[^>]+>/gi;
  const srcRegex = /src=["']([^"']+)["']/i;
  const srcsetRegex = /srcset=["']([^"']+)["']/i;
  const altRegex = /alt=["']([^"']*)["']/i;
  const classRegex = /class=["']([^"']*)["']/i;

  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const imgTag = match[0];
    const srcMatch = srcRegex.exec(imgTag);
    const altMatch = altRegex.exec(imgTag);
    const classMatch = classRegex.exec(imgTag);
    const srcsetMatch = srcsetRegex.exec(imgTag);

    if (srcMatch) {
      const src = srcMatch[1];
      if (!src.startsWith('data:') && !src.startsWith('//')) {
        try {
          const absoluteUrl = new URL(src, pageUrl).href;
          if (absoluteUrl.includes('federaltitle.com') || src.startsWith('/')) {
            images.set(absoluteUrl, {
              url: absoluteUrl,
              alt: altMatch ? altMatch[1] : '',
              classes: classMatch ? classMatch[1] : '',
              pageUrl,
              srcset: srcsetMatch ? srcsetMatch[1] : null,
            });
          }
        } catch {}
      }
    }

    // Also grab from srcset
    if (srcsetMatch) {
      const srcsetUrls = srcsetMatch[1].split(',').map((s) => s.trim().split(' ')[0]);
      for (const src of srcsetUrls) {
        try {
          const absoluteUrl = new URL(src, pageUrl).href;
          if (absoluteUrl.includes('federaltitle.com')) {
            images.set(absoluteUrl, {
              url: absoluteUrl,
              alt: altMatch ? altMatch[1] : '',
              classes: classMatch ? classMatch[1] : '',
              pageUrl,
            });
          }
        } catch {}
      }
    }
  }

  // Also extract CSS background images
  const bgRegex = /url\(['"]?([^'")\s]+)['"]?\)/g;
  while ((match = bgRegex.exec(html)) !== null) {
    const src = match[1];
    if (!src.startsWith('data:') && (src.includes('.jpg') || src.includes('.png') || src.includes('.webp') || src.includes('.svg'))) {
      try {
        const absoluteUrl = new URL(src, pageUrl).href;
        if (absoluteUrl.includes('federaltitle.com')) {
          images.set(absoluteUrl, {
            url: absoluteUrl,
            alt: '',
            classes: 'background-image',
            pageUrl,
          });
        }
      } catch {}
    }
  }

  // Extract linked images (logo href etc)
  const linkRegex = /<a[^>]+href=["']([^"']*\.(jpg|jpeg|png|webp|svg|gif))["']/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    const src = match[1];
    try {
      const absoluteUrl = new URL(src, pageUrl).href;
      if (absoluteUrl.includes('federaltitle.com')) {
        images.set(absoluteUrl, {
          url: absoluteUrl,
          alt: '',
          classes: 'linked-image',
          pageUrl,
        });
      }
    } catch {}
  }

  return [...images.values()];
}

function classifyImage(imageInfo) {
  const url = imageInfo.url.toLowerCase();
  const alt = (imageInfo.alt || '').toLowerCase();
  const classes = (imageInfo.classes || '').toLowerCase();
  const pageUrl = (imageInfo.pageUrl || '').toLowerCase();

  // Logo detection
  if (url.includes('logo') || alt.includes('logo') || classes.includes('logo')) {
    return 'brand';
  }
  if (alt.includes('federal title') && (url.includes('header') || url.includes('nav'))) {
    return 'brand';
  }

  // Favicon
  if (url.includes('favicon') || url.includes('icon-')) {
    return 'brand';
  }

  // Team member photos
  if (
    url.includes('team') ||
    url.includes('headshot') ||
    url.includes('staff') ||
    alt.includes('esq') ||
    alt.includes('attorney') ||
    alt.includes('president') ||
    pageUrl.includes('/team') ||
    pageUrl.includes('about-us/') && !pageUrl.endsWith('about-us')
  ) {
    return 'team';
  }

  // Hero/hero images
  if (
    url.includes('hero') ||
    url.includes('banner') ||
    url.includes('rowhouse') ||
    url.includes('dc-') ||
    url.includes('washington') ||
    url.includes('capitol') ||
    classes.includes('hero') ||
    classes.includes('banner')
  ) {
    return 'hero';
  }

  // Blog images
  if (url.includes('/blog') || pageUrl.includes('/blog')) {
    return 'blog';
  }

  // Press logos
  if (url.includes('press') || url.includes('media') || url.includes('logo-') || alt.includes('redfin') || alt.includes('washingtonian') || alt.includes('zillow') || alt.includes('washington post')) {
    return 'press';
  }

  // Location images
  if (url.includes('location') || url.includes('office') || pageUrl.includes('location')) {
    return 'locations';
  }

  // Default to general
  return 'general';
}

function getOutputFilename(imageUrl, category) {
  const urlObj = new URL(imageUrl);
  const originalName = path.basename(urlObj.pathname);
  const ext = path.extname(originalName) || '.jpg';
  const baseName = path.basename(originalName, ext);

  // Sanitize filename
  const safeName = baseName
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return `${safeName}${ext}`;
}

async function downloadImage(imageInfo, outputPath) {
  try {
    const result = await fetchUrl(imageInfo.url);

    if (result.status === 200 && result.body.length > 500) {
      const dir = path.dirname(outputPath);
      await mkdir(dir, { recursive: true });
      await writeFile(outputPath, result.body);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

async function crawlPage(pageSlug) {
  const url = `${BASE_URL}${pageSlug}`;
  console.log(`  Crawling ${pageSlug}...`);

  try {
    const result = await fetchUrl(url);
    if (result.status !== 200) {
      console.log(`    → ${result.status} (skipped)`);
      return [];
    }
    const html = result.body.toString('utf-8');
    const images = extractImages(html, url);
    console.log(`    → Found ${images.length} images`);
    return images;
  } catch (err) {
    console.log(`    → Error: ${err.message}`);
    return [];
  }
}

async function processBatch(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
    if (i + concurrency < items.length) await sleep(REQUEST_DELAY);
  }
  return results;
}

async function main() {
  console.log('🔍 Federal Title Asset Scraper\n');
  console.log(`Target: ${BASE_URL}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  // Create output directories
  const dirs = ['brand', 'hero', 'team', 'blog', 'press', 'locations', 'general', 'ui'];
  for (const dir of dirs) {
    await mkdir(path.join(OUTPUT_DIR, dir), { recursive: true });
  }

  // Step 1: Crawl all pages
  console.log('📄 Phase 1: Crawling pages...\n');
  const allImages = new Map();

  for (const page of PAGES) {
    const images = await crawlPage(page);
    for (const img of images) {
      if (!allImages.has(img.url)) {
        allImages.set(img.url, { ...img, usedOn: [page] });
      } else {
        allImages.get(img.url).usedOn.push(page);
      }
    }
    await sleep(REQUEST_DELAY);
  }

  console.log(`\nFound ${allImages.size} unique images total.\n`);

  // Step 2: Download images
  console.log('⬇️  Phase 2: Downloading images...\n');
  const manifest = {};
  let downloaded = 0;
  let skipped = 0;

  const imageList = [...allImages.values()];

  for (let i = 0; i < imageList.length; i += CONCURRENCY) {
    const batch = imageList.slice(i, i + CONCURRENCY);

    await Promise.all(
      batch.map(async (imageInfo) => {
        const category = classifyImage(imageInfo);
        const filename = getOutputFilename(imageInfo.url, category);
        const outputPath = path.join(OUTPUT_DIR, category, filename);
        const publicPath = `/images/${category}/${filename}`;

        // Skip if already downloaded
        if (existsSync(outputPath)) {
          manifest[publicPath] = {
            originalUrl: imageInfo.url,
            usedOn: imageInfo.usedOn,
            altText: imageInfo.alt,
            category,
            status: 'cached',
          };
          skipped++;
          return;
        }

        const success = await downloadImage(imageInfo, outputPath);

        if (success) {
          manifest[publicPath] = {
            originalUrl: imageInfo.url,
            usedOn: imageInfo.usedOn,
            altText: imageInfo.alt,
            category,
            status: 'downloaded',
          };
          console.log(`  ✅ [${category}] ${filename}`);
          downloaded++;
        } else {
          manifest[publicPath] = {
            originalUrl: imageInfo.url,
            usedOn: imageInfo.usedOn,
            altText: imageInfo.alt,
            category,
            status: 'failed',
          };
          skipped++;
        }
      })
    );

    await sleep(200);
  }

  // Step 3: Save manifest
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  console.log('\n✨ Done!\n');
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Skipped/Failed: ${skipped}`);
  console.log(`  Manifest: ${MANIFEST_PATH}`);
  console.log('\nImage breakdown by category:');

  const categoryCounts = {};
  for (const entry of Object.values(manifest)) {
    if (entry.status === 'downloaded') {
      categoryCounts[entry.category] = (categoryCounts[entry.category] || 0) + 1;
    }
  }
  for (const [cat, count] of Object.entries(categoryCounts)) {
    console.log(`  ${cat}: ${count}`);
  }
}

main().catch(console.error);

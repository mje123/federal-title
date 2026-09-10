// The custom domain now points at this Next.js app, so WordPress no longer
// lives at federaltitle.com — it's still running on its original Hostinger
// host, which is the only place blog content/images can be pulled from.
export const WP_API = 'https://darkslateblue-hedgehog-458764.hostingersite.com/wp-json/wp/v2';

const BARE_HOST = 'https://darkslateblue-hedgehog-458764.hostingersite.com';

// WordPress sometimes hands back absolute media/content URLs on hosts that
// don't actually serve them for us: the old federaltitle.com domain (which
// now points at this app, not WordPress), or the "www." Hostinger hostname
// whose TLS cert doesn't cover it (the cert is *.hostingersite.com, one
// label deep — www.<slug>.hostingersite.com is two). Both fail to load.
// Normalize every WP-origin URL to the bare host, which has a valid cert
// and is actually reachable.
const BAD_HOSTS = [
  'https://www.federaltitle.com',
  'https://federaltitle.com',
  'https://www.darkslateblue-hedgehog-458764.hostingersite.com',
];

export function fixWpImageUrl<T extends string | null | undefined>(url: T): T {
  if (!url) return url;
  for (const bad of BAD_HOSTS) {
    if (url.startsWith(bad + '/')) {
      return (BARE_HOST + url.slice(bad.length)) as T;
    }
  }
  return url;
}

// Post content (article body HTML) is rendered via dangerouslySetInnerHTML,
// so any inline <img> pulled from WordPress needs the same host fix — a
// single string swap covers every occurrence without parsing the HTML.
export function fixWpContentImages(html: string): string {
  if (!html) return html;
  let out = html;
  for (const bad of BAD_HOSTS) {
    out = out.split(bad).join(BARE_HOST);
  }
  return out;
}

// The custom domain now points at this Next.js app, so WordPress no longer
// lives at federaltitle.com — it's still running on its original Hostinger
// host, which is the only place blog content/images can be pulled from.
export const WP_API = 'https://darkslateblue-hedgehog-458764.hostingersite.com/wp-json/wp/v2';

// WordPress's Site URL setting has a "www." host whose TLS cert doesn't cover
// it (the cert is *.hostingersite.com, one label deep — www.<slug>.hostingersite.com
// is two), so browsers refuse to load those media URLs. The bare host shares
// the same content with a cert that validates.
const WWW_HOST = 'https://www.darkslateblue-hedgehog-458764.hostingersite.com/';
const BARE_HOST = 'https://darkslateblue-hedgehog-458764.hostingersite.com/';

export function fixWpImageUrl<T extends string | null | undefined>(url: T): T {
  if (!url) return url;
  return url.startsWith(WWW_HOST) ? (BARE_HOST + url.slice(WWW_HOST.length)) as T : url;
}

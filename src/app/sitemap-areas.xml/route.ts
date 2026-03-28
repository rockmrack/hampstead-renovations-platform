const PSEO_BASE = 'https://www.hampsteadrenovations.co.uk/areas';

/**
 * Serves sitemap-areas.xml as a sitemap index that references all pSEO engine
 * sub-sitemaps. This URL is already declared in the live robots.txt, so Google
 * will automatically discover all 12,000+ pSEO pages through it.
 */
export async function GET(): Promise<Response> {
  const now = new Date().toISOString();

  const sitemaps = [
    'sitemap-services.xml',
    'sitemap-locations.xml',
    'sitemap-streets.xml',
    'sitemap-prices.xml',
    'sitemap-reviews.xml',
    'sitemap-blog.xml',
    'sitemap-misc.xml',
    'sitemap-pages.xml',
  ];

  const entries = sitemaps
    .map(
      (name) =>
        `  <sitemap>\n    <loc>${PSEO_BASE}/${name}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

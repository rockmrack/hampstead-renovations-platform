const BASE = 'https://www.hampsteadrenovations.co.uk';

/**
 * Root sitemap index. References the main-site pages sitemap and all pSEO
 * engine sub-sitemaps so Google discovers everything from the single
 * /sitemap.xml URL already declared in robots.txt.
 */
export async function GET(): Promise<Response> {
  const now = new Date().toISOString();

  const sitemaps = [
    // Main-site pages
    `${BASE}/sitemap-main.xml`,
    // pSEO engine sitemaps (served from /areas/ mount)
    `${BASE}/areas/sitemap-services.xml`,
    `${BASE}/areas/sitemap-locations.xml`,
    `${BASE}/areas/sitemap-streets.xml`,
    `${BASE}/areas/sitemap-prices.xml`,
    `${BASE}/areas/sitemap-reviews.xml`,
    `${BASE}/areas/sitemap-blog.xml`,
    `${BASE}/areas/sitemap-misc.xml`,
    `${BASE}/areas/sitemap-pages.xml`,
  ];

  const entries = sitemaps
    .map((loc) => `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

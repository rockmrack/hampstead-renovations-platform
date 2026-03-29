const BASE = 'https://www.hampsteadrenovations.co.uk';

const routes: Array<[string, number]> = [
  ['/', 1.0],
  ['/contact/', 0.9],
  ['/about/', 0.8],
  ['/case-studies/', 0.8],
  ['/how-we-manage-your-project/', 0.7],
  ['/clinic/', 0.7],
  ['/services/full-house-renovation/', 0.9],
  ['/services/extensions/', 0.9],
  ['/services/loft-conversion/', 0.9],
  ['/services/kitchen-renovation/', 0.9],
  ['/services/bathroom-renovation/', 0.9],
  ['/services/painting-decorating/', 0.8],
  ['/services/property-maintenance/', 0.8],
  ['/tools/renovation-cost-calculator/', 0.7],
  ['/tools/camden-planning-risk-checker/', 0.7],
  ['/tools/party-wall-kit/', 0.7],
  ['/tools/period-home-retrofit-planner/', 0.7],
  ['/tools/leasehold-renovation-permissions/', 0.7],
  ['/tools/rightmove-feasibility-report/', 0.7],
  ['/tools/site-logistics-planner/', 0.7],
  ['/journal/', 0.6],
];

export async function GET(): Promise<Response> {
  const now = new Date().toISOString();

  const entries = routes
    .map(
      ([path, priority]) =>
        `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

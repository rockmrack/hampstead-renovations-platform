import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const planningOrigin = process.env.PLANNING_APP_URL;
    if (!planningOrigin) return [];

    return [
      // Proxy /planning/sitemap.xml → planning app /sitemap.xml
      {
        source: "/planning/sitemap.xml",
        destination: `${planningOrigin}/sitemap.xml`,
      },
      // Proxy /planning/robots.txt → planning app /robots.txt
      {
        source: "/planning/robots.txt",
        destination: `${planningOrigin}/robots.txt`,
      },
      // Proxy all other /planning/* traffic → planning app
      {
        source: "/planning/:path*",
        destination: `${planningOrigin}/:path*`,
      },
      {
        source: "/planning",
        destination: `${planningOrigin}/`,
      },
    ];
  },
};

export default nextConfig;

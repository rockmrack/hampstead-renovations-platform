import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const planningOrigin = process.env.PLANNING_APP_URL;
    if (!planningOrigin) return [];

    // Planning app uses basePath '/planning-ai', so all its routes live under that prefix
    const planningBase = "/planning-ai";

    return [
      // Proxy /planning/sitemap.xml → planning app /planning-ai/sitemap.xml
      {
        source: "/planning/sitemap.xml",
        destination: `${planningOrigin}${planningBase}/sitemap.xml`,
      },
      // Proxy /planning/robots.txt → planning app /planning-ai/robots.txt
      {
        source: "/planning/robots.txt",
        destination: `${planningOrigin}${planningBase}/robots.txt`,
      },
      // Proxy all other /planning/* traffic → planning app /planning-ai/*
      {
        source: "/planning/:path*",
        destination: `${planningOrigin}${planningBase}/:path*`,
      },
      {
        source: "/planning",
        destination: `${planningOrigin}${planningBase}`,
      },
    ];
  },
};

export default nextConfig;

import { SITE_SEO } from "../config/siteSeo.config";
import { PUBLIC_ROUTES } from "../config/pagesSeo.config";
import { absoluteUrl } from "../utils/urlBuilder";

export function buildSitemapXml(routes = PUBLIC_ROUTES, baseUrl = SITE_SEO.baseUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => `  <url>\n    <loc>${absoluteUrl(route.path, baseUrl)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq || "weekly"}</changefreq>\n    <priority>${route.priority || 0.8}</priority>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

import { SITE_SEO } from "../config/siteSeo.config";

export function buildRobotsTxt({ sitemapUrl = `${SITE_SEO.baseUrl}/sitemap.xml` } = {}) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
}

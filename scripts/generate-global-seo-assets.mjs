import fs from "node:fs";
import path from "node:path";

const baseUrl = String(process.env.VITE_PUBLIC_SITE_URL || "https://leadyia.com").replace(/\/$/, "");
const publicDir = path.resolve(process.cwd(), "public");
const today = new Date().toISOString().slice(0, 10);

const markets = {
  BR: { language: "pt-BR", basePath: "" },
  US: { language: "en-US", basePath: "/en" },
  CA: { language: "en-CA", basePath: "/en-ca" },
  GB: { language: "en-GB", basePath: "/en-gb" },
  PT: { language: "pt-PT", basePath: "/pt" },
  ES: { language: "es-ES", basePath: "/es" },
  MX: { language: "es-MX", basePath: "/mx" },
  CO: { language: "es-CO", basePath: "/co" },
  CL: { language: "es-CL", basePath: "/cl" },
};

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/playbooks", priority: "0.95", changefreq: "weekly" },
  { path: "/clinica", priority: "0.9", changefreq: "weekly" },
  { path: "/estetica", priority: "0.9", changefreq: "weekly" },
  { path: "/juridico", priority: "0.9", changefreq: "weekly" },
  { path: "/advocacia", priority: "0.85", changefreq: "weekly" },
  { path: "/imobiliaria", priority: "0.9", changefreq: "weekly" },
  { path: "/educacao", priority: "0.9", changefreq: "weekly" },
  { path: "/ecommerce", priority: "0.9", changefreq: "weekly" },
  { path: "/saas", priority: "0.85", changefreq: "weekly" },
  { path: "/pricing", priority: "0.8", changefreq: "weekly" },
  { path: "/register", priority: "0.75", changefreq: "weekly" },
  { path: "/contact", priority: "0.65", changefreq: "monthly" },
];

function urlFor(pathname, basePath = "") {
  const clean = pathname === "/" ? "" : pathname;
  return `${baseUrl}${basePath}${clean}` || baseUrl;
}

function alternates(pathname) {
  const links = Object.values(markets).map((market) => (
    `    <xhtml:link rel="alternate" hreflang="${market.language}" href="${urlFor(pathname, market.basePath)}" />`
  ));
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(pathname)}" />`);
  return links.join("\n");
}

const urlEntries = [];
for (const route of routes) {
  for (const market of Object.values(markets)) {
    const loc = urlFor(route.path, market.basePath);
    urlEntries.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n${alternates(route.path)}\n  </url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries.join("\n")}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nDisallow: /dashboard\nDisallow: /app\nDisallow: /api\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
console.log("[v592][LeadyIA SEO] sitemap.xml/robots.txt globais gerados", {
  routes: routes.length,
  markets: Object.keys(markets).length,
  urls: urlEntries.length,
});

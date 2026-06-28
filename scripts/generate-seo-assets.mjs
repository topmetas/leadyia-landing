import fs from 'node:fs';
import path from 'node:path';

const baseUrl = process.env.VITE_PUBLIC_SITE_URL || 'https://leadyia.com';
const publicDir = path.resolve(process.cwd(), 'public');
const today = new Date().toISOString().slice(0, 10);

const routes = [
  '/', '/playbooks', '/clinica', '/estetica', '/juridico', '/imobiliaria', '/educacao', '/ecommerce', '/register'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => `  <url><loc>${baseUrl}${route === '/' ? '' : route}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.9'}</priority></url>`)
  .join('\n')}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('[LeadyIA SEO] sitemap.xml e robots.txt gerados.');

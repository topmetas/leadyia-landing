import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
function assert(condition, label) {
  if (!condition) throw new Error(`[v592][landing-seo] ${label}`);
}
const read = (file) => fs.readFileSync(path.resolve(root, file), "utf8");

let checks = 0;
assert(fs.existsSync(path.resolve(root, "src/seo/config/globalSeo.config.js")), "global SEO config exists"); checks++;
assert(fs.existsSync(path.resolve(root, "scripts/generate-global-seo-assets.mjs")), "global SEO generator exists"); checks++;
assert(fs.existsSync(path.resolve(root, "public/robots.txt")), "robots exists"); checks++;
assert(fs.existsSync(path.resolve(root, "public/sitemap.xml")), "sitemap exists"); checks++;
const robots = read("public/robots.txt");
assert(robots.includes("Sitemap: https://leadyia.com/sitemap.xml"), "robots references sitemap"); checks++;
const sitemap = read("public/sitemap.xml");
assert(sitemap.includes("xmlns:xhtml"), "sitemap supports hreflang alternates"); checks++;
assert(sitemap.includes("hreflang=\"x-default\""), "sitemap has x-default hreflang"); checks++;
assert(sitemap.includes("https://leadyia.com/imobiliaria"), "sitemap includes real estate landing"); checks++;
assert(sitemap.includes("https://leadyia.com/en/clinica"), "sitemap includes English market path"); checks++;

console.log("[v592][landing-seo] OK", { checks });

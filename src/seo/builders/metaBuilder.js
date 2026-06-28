import { SITE_SEO } from "../config/siteSeo.config";
import { buildKeywords } from "./keywordBuilder";
import { buildCanonical } from "./canonicalBuilder";

export function buildMeta(input = {}) {
  const title = input.title || SITE_SEO.defaultTitle;
  const description = input.description || SITE_SEO.defaultDescription;
  const keywords = buildKeywords({ keywords: input.keywords, niche: input.niche }).join(", ");
  const canonical = input.canonical || buildCanonical(input.path, input.baseUrl);

  return {
    title,
    description,
    keywords,
    canonical,
    robots: input.robots || "index,follow,max-image-preview:large",
    themeColor: input.themeColor || SITE_SEO.themeColor,
    author: input.author || SITE_SEO.author,
    locale: input.locale || SITE_SEO.defaultLocale
  };
}

import { SITE_SEO } from "../config/siteSeo.config";
import { absoluteUrl, currentOrigin } from "../utils/urlBuilder";

export function buildOpenGraph(input = {}, meta = {}) {
  const origin = input.baseUrl || currentOrigin();
  const image = input.image || SITE_SEO.defaultImage;
  return {
    "og:type": input.ogType || "website",
    "og:title": input.ogTitle || meta.title || SITE_SEO.defaultTitle,
    "og:description": input.ogDescription || meta.description || SITE_SEO.defaultDescription,
    "og:url": meta.canonical || absoluteUrl(input.path || "/", origin),
    "og:image": image.startsWith("http") ? image : absoluteUrl(image, origin),
    "og:site_name": SITE_SEO.siteName,
    "og:locale": meta.locale || SITE_SEO.defaultLocale
  };
}

import { SITE_SEO } from "../config/siteSeo.config";
import { absoluteUrl } from "../utils/urlBuilder";

export function buildBreadcrumb(items = []) {
  const normalized = [{ name: "Home", url: "/" }, ...items].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalized.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url?.startsWith("http") ? item.url : absoluteUrl(item.url || "/", SITE_SEO.baseUrl)
    }))
  };
}

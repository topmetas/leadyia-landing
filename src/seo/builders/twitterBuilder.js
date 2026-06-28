import { SITE_SEO } from "../config/siteSeo.config";
import { absoluteUrl, currentOrigin } from "../utils/urlBuilder";

export function buildTwitterCard(input = {}, meta = {}) {
  const image = input.image || SITE_SEO.defaultImage;
  const origin = input.baseUrl || currentOrigin();
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": input.twitterTitle || meta.title || SITE_SEO.defaultTitle,
    "twitter:description": input.twitterDescription || meta.description || SITE_SEO.defaultDescription,
    "twitter:image": image.startsWith("http") ? image : absoluteUrl(image, origin)
  };
}

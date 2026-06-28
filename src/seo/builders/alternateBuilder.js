import { SITE_SEO } from "../config/siteSeo.config";
import { absoluteUrl, currentOrigin } from "../utils/urlBuilder";

export function buildAlternates(path = "/", baseUrl) {
  const origin = baseUrl || currentOrigin();
  return SITE_SEO.languages.map((language) => ({
    hreflang: language.hreflang,
    href: absoluteUrl(`${language.pathPrefix}${path === "/" ? "" : path}`, origin)
  }));
}

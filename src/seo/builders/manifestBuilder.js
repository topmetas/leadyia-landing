import { SITE_SEO } from "../config/siteSeo.config";

export function buildManifest() {
  return {
    name: SITE_SEO.siteName,
    short_name: SITE_SEO.siteName,
    theme_color: SITE_SEO.themeColor,
    background_color: "#0F1021",
    display: "standalone",
    start_url: "/",
    icons: [
      { src: "/192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/512x512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}

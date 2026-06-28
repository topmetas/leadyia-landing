import { SITE_SEO } from "../config/siteSeo.config";

export function normalizePath(path = "/") {
  if (!path) return "/";
  const clean = String(path).split("?")[0].split("#")[0];
  if (clean === "") return "/";
  return clean.startsWith("/") ? clean : `/${clean}`;
}

export function absoluteUrl(path = "/", baseUrl = SITE_SEO.baseUrl) {
  const cleanBase = String(baseUrl || SITE_SEO.baseUrl).replace(/\/$/, "");
  const cleanPath = normalizePath(path);
  return `${cleanBase}${cleanPath === "/" ? "" : cleanPath}`;
}

export function currentPath() {
  if (typeof window === "undefined") return "/";
  return normalizePath(window.location.pathname || "/");
}

export function currentOrigin() {
  if (typeof window === "undefined") return SITE_SEO.baseUrl;
  return window.location.origin || SITE_SEO.baseUrl;
}

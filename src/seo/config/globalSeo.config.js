/** LeadyIA Landing — Global SEO Config v592 */
export const SITE_URL = (import.meta?.env?.VITE_PUBLIC_SITE_URL || "https://leadyia.com").replace(/\/$/, "");

export const SEO_LOCALES = ["pt-BR", "en-US", "es-ES"];

export const SEO_MARKETS = {
  BR: { locale: "pt-BR", language: "pt-BR", currency: "BRL", basePath: "" },
  US: { locale: "en-US", language: "en-US", currency: "USD", basePath: "/en" },
  CA: { locale: "en-US", language: "en-CA", currency: "CAD", basePath: "/en-ca" },
  GB: { locale: "en-US", language: "en-GB", currency: "GBP", basePath: "/en-gb" },
  PT: { locale: "pt-BR", language: "pt-PT", currency: "EUR", basePath: "/pt" },
  ES: { locale: "es-ES", language: "es-ES", currency: "EUR", basePath: "/es" },
  MX: { locale: "es-ES", language: "es-MX", currency: "MXN", basePath: "/mx" },
  CO: { locale: "es-ES", language: "es-CO", currency: "USD", basePath: "/co" },
  CL: { locale: "es-ES", language: "es-CL", currency: "USD", basePath: "/cl" },
};

export const SEO_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly", title: "LeadyIA — IA Comercial para Empresas" },
  { path: "/playbooks", priority: "0.95", changefreq: "weekly", title: "Playbooks LeadyIA" },
  { path: "/clinica", priority: "0.9", changefreq: "weekly", playbook: "clinic" },
  { path: "/estetica", priority: "0.9", changefreq: "weekly", playbook: "aesthetics" },
  { path: "/juridico", priority: "0.9", changefreq: "weekly", playbook: "legal" },
  { path: "/advocacia", priority: "0.85", changefreq: "weekly", canonicalPath: "/juridico", playbook: "legal" },
  { path: "/imobiliaria", priority: "0.9", changefreq: "weekly", playbook: "real_estate" },
  { path: "/educacao", priority: "0.9", changefreq: "weekly", playbook: "education" },
  { path: "/ecommerce", priority: "0.9", changefreq: "weekly", playbook: "ecommerce" },
  { path: "/saas", priority: "0.85", changefreq: "weekly", playbook: "saas_b2b" },
  { path: "/pricing", priority: "0.8", changefreq: "weekly" },
  { path: "/register", priority: "0.75", changefreq: "weekly" },
  { path: "/contact", priority: "0.65", changefreq: "monthly" },
];

export function normalizePath(path = "/") {
  const value = String(path || "/").trim();
  if (!value || value === "/") return "/";
  return `/${value.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

export function canonicalUrl(path = "/") {
  const cleanPath = normalizePath(path);
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}

export function hreflangAlternates(path = "/") {
  const cleanPath = normalizePath(path);
  const alternates = Object.values(SEO_MARKETS).map((market) => {
    const localizedPath = `${market.basePath || ""}${cleanPath === "/" ? "" : cleanPath}` || "/";
    return { hreflang: market.language, href: canonicalUrl(localizedPath) };
  });
  alternates.push({ hreflang: "x-default", href: canonicalUrl(cleanPath) });
  return alternates;
}

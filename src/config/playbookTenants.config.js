/**
 * =========================================================
 * LEADYIA LANDING — TENANTS POR PLAYBOOK
 * =========================================================
 * Onde preencher os tenants reais de cada página/playbook.
 *
 * Troque apenas os campos tenantId e, se seu backend exigir, widgetKey.
 * Não coloque path no allowedDomains do tenant no backend: domínio é domínio.
 * Para páginas em leadyia.com/clinica, registre leadyia.com e www.leadyia.com.
 * Para subdomínios, registre também clinica.leadyia.com, estetica.leadyia.com etc.
 */

export const LEADYIA_WIDGET_LOADER_SRC = "https://widget.leadyia.com/loader.js";
export const LEADYIA_WIDGET_SRC = "https://widget.leadyia.com/v1/widget.js";
export const LEADYIA_API_BASE_URL = String(import.meta.env.VITE_API_URL || "https://api.leadyia.com/api").replace(/\/+$/, "");

const envTenant = (key, fallback) => String(import.meta.env[key] || fallback || "").trim();

export const PLAYBOOK_TENANT_REGISTRY = {
  saas: {
    label: "LeadyIA / SaaS",
    playbook: "leadyia",
    niche: "leadyia",
    tenantId: envTenant("VITE_LEADYIA_TENANT_ID", "TENANT_ID_LEADYIA"),
    widgetKey: "",
    paths: ["/", "/demo", "/playbook", "/playbooks", "/saas", "/ao-vivo"],
    domains: ["leadyia.com", "www.leadyia.com", "demo.leadyia.com", "playbooks.leadyia.com"],
  },

  clinic: {
    label: "Clínica",
    playbook: "clinic",
    niche: "clinic",
    tenantId: envTenant("VITE_CLINIC_TENANT_ID", "TENANT_ID_CLINIC"),
    widgetKey: "",
    paths: ["/clinica", "/clinic"],
    domains: ["leadyia.com", "www.leadyia.com", "clinica.leadyia.com", "clinic.leadyia.com"],
  },

  aesthetics: {
    label: "Estética",
    playbook: "aesthetics",
    niche: "aesthetics",
    tenantId: envTenant("VITE_ESTETICA_TENANT_ID", "TENANT_ID_ESTETICA"),
    widgetKey: "",
    paths: ["/estetica", "/aesthetics"],
    domains: ["leadyia.com", "www.leadyia.com", "estetica.leadyia.com", "aesthetics.leadyia.com"],
  },

  legal: {
    label: "Advocacia / Jurídico",
    playbook: "legal",
    niche: "legal",
    tenantId: envTenant("VITE_LEGAL_TENANT_ID", "TENANT_ID_LEGAL"),
    widgetKey: "",
    paths: ["/juridico", "/advocacia", "/legal"],
    domains: ["leadyia.com", "www.leadyia.com", "juridico.leadyia.com", "advocacia.leadyia.com", "legal.leadyia.com"],
  },

  realestate: {
    label: "Imobiliária",
    playbook: "real_estate",
    niche: "real_estate",
    tenantId: envTenant("VITE_REAL_ESTATE_TENANT_ID", "6a4802ae5258829b2cd61531"),
    widgetKey: "",
    paths: ["/imobiliaria", "/imoveis", "/realestate"],
    domains: ["leadyia.com", "www.leadyia.com", "imobiliaria.leadyia.com", "imoveis.leadyia.com", "realestate.leadyia.com"],
  },

  education: {
    label: "Educação",
    playbook: "education",
    niche: "education",
    tenantId: envTenant("VITE_EDUCATION_TENANT_ID", "TENANT_ID_EDUCATION"),
    widgetKey: "",
    paths: ["/educacao", "/education", "/escola"],
    domains: ["leadyia.com", "www.leadyia.com", "educacao.leadyia.com", "education.leadyia.com", "escola.leadyia.com"],
  },

  ecommerce: {
    label: "E-commerce",
    playbook: "ecommerce",
    niche: "ecommerce",
    tenantId: envTenant("VITE_ECOMMERCE_TENANT_ID", "TENANT_ID_ECOMMERCE"),
    widgetKey: "",
    paths: ["/ecommerce", "/loja", "/shop"],
    domains: ["leadyia.com", "www.leadyia.com", "ecommerce.leadyia.com", "loja.leadyia.com", "shop.leadyia.com"],
  },
};

export function isConfiguredTenant(tenantId) {
  return Boolean(tenantId && !String(tenantId).startsWith("TENANT_ID_"));
}

export function getPlaybookTenantConfig(playbookKey = "saas") {
  return PLAYBOOK_TENANT_REGISTRY[playbookKey] || PLAYBOOK_TENANT_REGISTRY.saas;
}

export function resolvePlaybookKeyFromLocation(locationLike) {
  const hostname = String(locationLike?.hostname || "").toLowerCase();
  const pathname = String(locationLike?.pathname || "/").toLowerCase().replace(/\/$/, "") || "/";

  // Prioridade 1: path da página atual.
  // Em leadyia.com/imobiliaria, leadyia.com é domínio compartilhado, então o path decide o playbook.
  const pathMatch = Object.entries(PLAYBOOK_TENANT_REGISTRY).find(([, cfg]) =>
    cfg.paths.includes(pathname)
  );

  if (pathMatch) return pathMatch[0];

  // Prioridade 2: subdomínio dedicado.
  // Em imobiliaria.leadyia.com, o host decide o playbook.
  const domainMatch = Object.entries(PLAYBOOK_TENANT_REGISTRY).find(([, cfg]) =>
    cfg.domains.some((domain) => hostname === domain)
  );

  return domainMatch?.[0] || "saas";
}

export function getCurrentPlaybookTenantConfig() {
  if (typeof window === "undefined") return PLAYBOOK_TENANT_REGISTRY.saas;
  const key = resolvePlaybookKeyFromLocation(window.location);
  return getPlaybookTenantConfig(key);
}

export function buildLeadyIAWidgetSnippet(playbookKey = "saas") {
  const cfg = getPlaybookTenantConfig(playbookKey);
  const widgetKeyLine = cfg.widgetKey ? `\n  data-widget-key="${cfg.widgetKey}"` : "";

  return `<script\n  src="${LEADYIA_WIDGET_LOADER_SRC}"\n  data-tenant="${cfg.tenantId}"\n  data-tenant-id="${cfg.tenantId}"\n  data-playbook="${cfg.playbook}"\n  data-niche="${cfg.niche}"\n  data-api-base="${LEADYIA_API_BASE_URL}"\n  data-widget-src="${LEADYIA_WIDGET_SRC}"${widgetKeyLine}\n  async\n></script>`;
}

/**
 * =========================================================
 * LEADYIA LANDING — TENANTS POR DOMÍNIO/SUBDOMÍNIO
 * =========================================================
 * Regra v599:
 * - O widget da landing NÃO escolhe tenant por página/path.
 * - O tenant é resolvido somente pelo domínio/subdomínio atual.
 * - Páginas como /imobiliaria podem existir para SEO/conteúdo, mas não trocam
 *   automaticamente o tenant do widget.
 * - Para cada playbook de demonstração, crie um subdomínio dedicado
 *   (ex.: imobiliaria.leadyia.com) ou um domínio próprio e cadastre esse host
 *   no tenant correspondente no backend.
 */

export const LEADYIA_WIDGET_LOADER_SRC = "https://widget.leadyia.com/loader.js";
export const LEADYIA_WIDGET_SRC = "https://widget.leadyia.com/v1/widget.js";
export const LEADYIA_API_BASE_URL = "https://api.leadyia.com/api";

export const PLAYBOOK_TENANT_REGISTRY = {
  saas: {
    label: "LeadyIA / SaaS",
    playbook: "leadyia",
    niche: "leadyia",
    tenantId: "TENANT_ID_LEADYIA",
    widgetKey: "",
    paths: ["/", "/demo", "/playbook", "/playbooks", "/saas", "/ao-vivo"],
    domains: ["leadyia.com", "www.leadyia.com", "demo.leadyia.com", "playbooks.leadyia.com"],
  },

  clinic: {
    label: "Clínica",
    playbook: "clinic",
    niche: "clinic",
    tenantId: "TENANT_ID_CLINIC",
    widgetKey: "",
    paths: ["/clinica", "/clinic"],
    domains: ["leadyia.com", "www.leadyia.com", "clinica.leadyia.com", "clinic.leadyia.com"],
  },

  aesthetics: {
    label: "Estética",
    playbook: "aesthetics",
    niche: "aesthetics",
    tenantId: "TENANT_ID_ESTETICA",
    widgetKey: "",
    paths: ["/estetica", "/aesthetics"],
    domains: ["leadyia.com", "www.leadyia.com", "estetica.leadyia.com", "aesthetics.leadyia.com"],
  },

  legal: {
    label: "Advocacia / Jurídico",
    playbook: "legal",
    niche: "legal",
    tenantId: "TENANT_ID_LEGAL",
    widgetKey: "",
    paths: ["/juridico", "/advocacia", "/legal"],
    domains: ["leadyia.com", "www.leadyia.com", "juridico.leadyia.com", "advocacia.leadyia.com", "legal.leadyia.com"],
  },

  realestate: {
    label: "Imobiliária",
    playbook: "real_estate",
    niche: "real_estate",
    tenantId: "6a4802ae5258829b2cd61531",
    widgetKey: "",
    paths: ["/imobiliaria", "/imoveis", "/realestate"],
    domains: ["leadyia.com", "www.leadyia.com", "imobiliaria.leadyia.com", "imoveis.leadyia.com", "realestate.leadyia.com"],
  },

  education: {
    label: "Educação",
    playbook: "education",
    niche: "education",
    tenantId: "TENANT_ID_EDUCATION",
    widgetKey: "",
    paths: ["/educacao", "/education", "/escola"],
    domains: ["leadyia.com", "www.leadyia.com", "educacao.leadyia.com", "education.leadyia.com", "escola.leadyia.com"],
  },

  ecommerce: {
    label: "E-commerce",
    playbook: "ecommerce",
    niche: "ecommerce",
    tenantId: "TENANT_ID_ECOMMERCE",
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

export function normalizeLandingHost(hostname = "") {
  return String(hostname || "")
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .split(":")[0];
}

export function resolvePlaybookKeyFromLocation(locationLike) {
  const hostname = normalizeLandingHost(locationLike?.hostname || "");

  // v599: tenant/playbook somente por domínio/subdomínio.
  // O path não decide mais o widget para evitar troca acidental em
  // /imobiliaria, /clinica, /playbooks etc.
  const domainMatch = Object.entries(PLAYBOOK_TENANT_REGISTRY).find(([, cfg]) =>
    cfg.domains.some((domain) => normalizeLandingHost(domain) === hostname)
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

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

export const LEADYIA_WIDGET_LOADER_SRC = String(import.meta.env.VITE_LEADYIA_WIDGET_SRC || "https://widget.leadyia.com/v1/widget.js").trim();
export const LEADYIA_WIDGET_SRC = LEADYIA_WIDGET_LOADER_SRC;
export const LEADYIA_API_BASE_URL = String(import.meta.env.VITE_API_URL || "https://api.leadyia.com").replace(/\/+$/, "").replace(/\/api$/, "");

const isTenantPlaceholder = (value) => /^TENANT_ID_/i.test(String(value || "").trim());

const envTenant = (key, fallback) => {
  const value = String(import.meta.env[key] || "").trim();
  if (value && !isTenantPlaceholder(value)) return value;
  return String(fallback || "").trim();
};

const envPlaybook = (key, fallback) => {
  const value = String(import.meta.env[key] || "").trim().toLowerCase();
  return value || fallback;
};

export const PLAYBOOK_TENANT_REGISTRY = {
  leadyia: {
    label: "LeadyIA",
    // A landing institucional possui jornada, RAG, planos e CTAs próprios.
    // O backend só aceita este playbook quando o tenant estiver explicitamente
    // autorizado por metadata.allowLeadyiaPlaybook.
    playbook: envPlaybook("VITE_LEADYIA_PLAYBOOK", "leadyia"),
    niche: envPlaybook("VITE_LEADYIA_PLAYBOOK", "leadyia"),
    tenantId: envTenant("VITE_LEADYIA_TENANT_ID", envTenant("VITE_LEADYIA_LOCAL_TENANT_ID", "69f168938e078fba344fe491")),
    widgetKey: "",
    paths: ["/", "/demo", "/playbook", "/playbooks", "/ao-vivo"],
    domains: ["leadyia.com", "www.leadyia.com", "demo.leadyia.com", "playbooks.leadyia.com"],
  },

  saas: {
    label: "SaaS B2B",
    playbook: "saas_b2b",
    niche: "saas_b2b",
    tenantId: envTenant("VITE_SAAS_TENANT_ID", ""),
    widgetKey: "",
    paths: ["/saas"],
    domains: ["saas.leadyia.com"],
  },

  clinic: {
    label: "Clínica",
    playbook: "clinic",
    niche: "clinic",
    tenantId: envTenant("VITE_CLINIC_TENANT_ID", "6a48125e0b6fcd419b86524a"),
    widgetKey: "",
    paths: ["/clinica", "/clinic"],
    domains: ["leadyia.com", "www.leadyia.com", "clinica.leadyia.com", "clinic.leadyia.com"],
  },

  aesthetics: {
    label: "Estética",
    playbook: "aesthetics",
    niche: "aesthetics",
    tenantId: envTenant("VITE_ESTETICA_TENANT_ID", "6a480bba5258829b2cd61b33"),
    widgetKey: "",
    paths: ["/estetica", "/aesthetics"],
    domains: ["leadyia.com", "www.leadyia.com", "estetica.leadyia.com", "aesthetics.leadyia.com"],
  },

  legal: {
    label: "Advocacia / Jurídico",
    playbook: "legal",
    niche: "legal",
    tenantId: envTenant("VITE_LEGAL_TENANT_ID", "6a480ca95258829b2cd61bb1"),
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
    tenantId: envTenant("VITE_EDUCATION_TENANT_ID", "6a480d0c5258829b2cd61c3d"),
    widgetKey: "",
    paths: ["/educacao", "/education", "/escola"],
    domains: ["leadyia.com", "www.leadyia.com", "educacao.leadyia.com", "education.leadyia.com", "escola.leadyia.com"],
  },

  ecommerce: {
    label: "E-commerce",
    playbook: "ecommerce",
    niche: "ecommerce",
    tenantId: envTenant("VITE_ECOMMERCE_TENANT_ID", "6a4813e60b6fcd419b865483"),
    widgetKey: "",
    paths: ["/ecommerce", "/loja", "/shop"],
    domains: ["leadyia.com", "www.leadyia.com", "ecommerce.leadyia.com", "loja.leadyia.com", "shop.leadyia.com"],
  },

  dentistry: {
    label: "Odontologia",
    playbook: "dentistry",
    niche: "dentistry",
    tenantId: envTenant("VITE_DENTISTRY_TENANT_ID", "6a78d3c022f2475bcebfaa60"),
    widgetKey: "",
    paths: ["/dentista", "/odontologia", "/dentistry"],
    domains: ["leadyia.com", "www.leadyia.com", "dentista.leadyia.com", "odontologia.leadyia.com", "dentistry.leadyia.com"],
  },

  veterinary: {
    label: "Veterinária",
    playbook: "veterinary",
    niche: "veterinary",
    tenantId: envTenant("VITE_VETERINARY_TENANT_ID", envTenant("VITE_VETERINARIA_TENANT_ID", "")),
    widgetKey: "",
    paths: ["/veterinaria", "/veterinary", "/pet"],
    domains: ["leadyia.com", "www.leadyia.com", "veterinaria.leadyia.com", "veterinary.leadyia.com", "pet.leadyia.com"],
  },

  accounting: {
    label: "Contabilidade",
    playbook: "accounting",
    niche: "accounting",
    tenantId: envTenant("VITE_ACCOUNTING_TENANT_ID", envTenant("VITE_CONTABILIDADE_TENANT_ID", "")),
    widgetKey: "",
    paths: ["/contabilidade", "/accounting", "/contador"],
    domains: ["leadyia.com", "www.leadyia.com", "contabilidade.leadyia.com", "accounting.leadyia.com", "contador.leadyia.com"],
  },

  automotive: {
    label: "Automotivo",
    playbook: "automotive",
    niche: "automotive",
    tenantId: envTenant("VITE_AUTOMOTIVE_TENANT_ID", envTenant("VITE_AUTOMOTIVO_TENANT_ID", "")),
    widgetKey: "",
    paths: ["/automotivo", "/automotive", "/oficina"],
    domains: ["leadyia.com", "www.leadyia.com", "automotivo.leadyia.com", "automotive.leadyia.com", "oficina.leadyia.com"],
  },

  restaurant: {
    label: "Restaurantes",
    playbook: "restaurant",
    niche: "restaurant",
    tenantId: envTenant("VITE_RESTAURANT_TENANT_ID", envTenant("VITE_RESTAURANTE_TENANT_ID", "")),
    widgetKey: "",
    paths: ["/restaurante", "/restaurant", "/gastronomia"],
    domains: ["leadyia.com", "www.leadyia.com", "restaurante.leadyia.com", "restaurant.leadyia.com", "gastronomia.leadyia.com"],
  },

  fitness: {
    label: "Academias e Fitness",
    playbook: "fitness",
    niche: "fitness",
    tenantId: envTenant("VITE_FITNESS_TENANT_ID", ""),
    widgetKey: "",
    paths: ["/fitness", "/academia", "/personal"],
    domains: ["leadyia.com", "www.leadyia.com", "fitness.leadyia.com", "academia.leadyia.com", "personal.leadyia.com"],
  },

  home_services: {
    label: "Serviços Residenciais",
    playbook: "home_services",
    niche: "home_services",
    tenantId: envTenant("VITE_HOME_SERVICES_TENANT_ID", envTenant("VITE_SERVICOS_RESIDENCIAIS_TENANT_ID", "")),
    widgetKey: "",
    paths: ["/servicos-residenciais", "/home-services", "/servicos"],
    domains: ["leadyia.com", "www.leadyia.com", "servicos.leadyia.com", "home-services.leadyia.com"],
  },
};

export function isConfiguredTenant(tenantId) {
  return Boolean(tenantId && !isTenantPlaceholder(tenantId));
}

export function getPlaybookTenantConfig(playbookKey = "leadyia") {
  return PLAYBOOK_TENANT_REGISTRY[playbookKey] || PLAYBOOK_TENANT_REGISTRY.leadyia;
}

export function resolvePlaybookKeyFromLocation(locationLike) {
  const hostname = String(locationLike?.hostname || "").toLowerCase();
  const pathname = String(locationLike?.pathname || "/").toLowerCase().replace(/\/$/, "") || "/";

  // Prioridade 1: path da página atual.
  // Em leadyia.com/imobiliaria, leadyia.com é domínio compartilhado, então o path decide o playbook.
  const pathMatch = Object.entries(PLAYBOOK_TENANT_REGISTRY).find(([, cfg]) =>
    cfg.paths.some((path) => pathname === path || pathname.startsWith(`${path}/`))
  );

  if (pathMatch) return pathMatch[0];

  // Prioridade 2: subdomínio dedicado.
  // Em imobiliaria.leadyia.com, o host decide o playbook.
  const domainMatch = Object.entries(PLAYBOOK_TENANT_REGISTRY).find(([, cfg]) =>
    cfg.domains.some((domain) => hostname === domain)
  );

  return domainMatch?.[0] || "leadyia";
}

export function getCurrentPlaybookTenantConfig() {
  if (typeof window === "undefined") return PLAYBOOK_TENANT_REGISTRY.leadyia;
  const key = resolvePlaybookKeyFromLocation(window.location);
  return getPlaybookTenantConfig(key);
}

export function buildLeadyIAWidgetSnippet(playbookKey = "saas") {
  const cfg = getPlaybookTenantConfig(playbookKey);
  const widgetKeyLine = cfg.widgetKey ? `\n  data-widget-key="${cfg.widgetKey}"` : "";

  return `<script\n  src="${LEADYIA_WIDGET_LOADER_SRC}"\n  data-tenant="${cfg.tenantId}"\n  data-tenant-id="${cfg.tenantId}"\n  data-playbook="${cfg.playbook}"\n  data-niche="${cfg.niche}"\n  data-api-base="${LEADYIA_API_BASE_URL}"\n  data-widget-src="${LEADYIA_WIDGET_SRC}"${widgetKeyLine}\n  async\n></script>`;
}

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

export const LEADYIA_WIDGET_LOADER_SRC = String(
  import.meta.env.VITE_LEADYIA_WIDGET_LOADER_SRC ||
    import.meta.env.VITE_WIDGET_LOADER_SRC ||
    "https://widget.leadyia.com/loader.js"
).trim();

export const LEADYIA_WIDGET_SRC = String(
  import.meta.env.VITE_LEADYIA_WIDGET_SRC ||
    import.meta.env.VITE_WIDGET_SRC ||
    "https://widget.leadyia.com/v1/widget.js"
).trim();

export const LEADYIA_API_BASE_URL = String(import.meta.env.VITE_API_URL || "https://api.leadyia.com/api").replace(/\/+$/, "");

const envTenant = (key, fallback) => String(import.meta.env[key] || fallback || "").trim();

function isLocalHost(value = "") {
  const host = normalizeHostForTenant(value);
  return host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0";
}

function getLocalTenantOverride(playbook = "leadyia") {
  const normalized = String(playbook || "leadyia").toUpperCase().replace(/[^A-Z0-9]+/g, "_");
  return String(
    import.meta.env[`VITE_${normalized}_LOCAL_TENANT_ID`] ||
      import.meta.env.VITE_LEADYIA_LOCAL_TENANT_ID ||
      import.meta.env.VITE_LOCAL_TENANT_ID ||
      ""
  ).trim();
}

function getLocalHostAlias(playbook = "leadyia") {
  const normalized = String(playbook || "leadyia").toUpperCase().replace(/[^A-Z0-9]+/g, "_");
  return String(
    import.meta.env[`VITE_${normalized}_LOCAL_HOST_ALIAS`] ||
      import.meta.env.VITE_LEADYIA_LOCAL_HOST_ALIAS ||
      import.meta.env.VITE_LOCAL_HOST_ALIAS ||
      "www.leadyia.com"
  ).trim();
}

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

export function normalizeHostForTenant(value = "") {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return "";

  try {
    const url = raw.startsWith("http://") || raw.startsWith("https://")
      ? new URL(raw)
      : new URL(`https://${raw}`);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return raw
      .replace(/^https?:\/\//, "")
      .split("/")[0]
      .split("?")[0]
      .split("#")[0]
      .replace(/^www\./, "");
  }
}

export function buildPublicTenantResolveUrl({ host, playbook, slug } = {}) {
  const params = new URLSearchParams();

  if (slug) params.set("slug", slug);
  if (host) params.set("host", normalizeHostForTenant(host));
  if (playbook) params.set("playbook", playbook);

  return `${LEADYIA_API_BASE_URL}/public/tenant/resolve?${params.toString()}`;
}

export async function resolveConfiguredPlaybookTenantConfig(locationLike, options = {}) {
  const baseCfg = getCurrentPlaybookTenantConfig();
  const rawHost = locationLike?.hostname || (typeof window !== "undefined" ? window.location.hostname : "");
  const playbook = baseCfg.playbook || "leadyia";

  // Local dev: permite testar a landing em localhost usando o tenant real via env,
  // sem commitar ObjectId no código e sem depender do domínio localhost no cadastro.
  if (!isConfiguredTenant(baseCfg.tenantId) && isLocalHost(rawHost)) {
    const localTenantId = getLocalTenantOverride(playbook);
    if (isConfiguredTenant(localTenantId)) {
      return {
        ...baseCfg,
        tenantId: localTenantId,
        resolvedFrom: "local-env",
      };
    }
  }

  if (isConfiguredTenant(baseCfg.tenantId)) return baseCfg;

  const host = isLocalHost(rawHost) ? getLocalHostAlias(playbook) : rawHost;
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeout = setTimeout(() => controller?.abort?.(), options.timeoutMs || 3500);

  try {
    const response = await fetch(buildPublicTenantResolveUrl({ host, playbook }), {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller?.signal,
    });

    if (!response.ok) throw new Error(`TENANT_RESOLVE_HTTP_${response.status}`);

    const payload = await response.json();
    const tenant = payload?.tenant || payload?.data?.tenant || null;
    const tenantId = tenant?._id || tenant?.id || tenant?.tenantId;

    if (!isConfiguredTenant(tenantId)) throw new Error("TENANT_RESOLVE_EMPTY");

    return {
      ...baseCfg,
      tenantId,
      playbook: tenant.playbook || baseCfg.playbook,
      niche: tenant.niche || baseCfg.niche || tenant.playbook || baseCfg.playbook,
      label: tenant.name || baseCfg.label,
      branding: tenant.branding || baseCfg.branding,
      resolvedFrom: payload?.tenant?.meta?.source || "public-tenant-resolver",
    };
  } catch (error) {
    if (options.silent !== true) {
      console.info("[LeadyIA][Landing] Tenant público não resolvido", {
        host,
        playbook,
        reason: error?.message || String(error),
      });
    }
    return baseCfg;
  } finally {
    clearTimeout(timeout);
  }
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

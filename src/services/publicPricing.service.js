/**
 * LeadyIA Landing — Public Pricing v1103.35
 * - Consome o contrato comercial oficial do backend.
 * - Mantém fallback internacional local.
 * - Registra eventos de marketing e checkout em soft-fail.
 */

import {
  buildLocalPlans,
  getPlanCode,
  normalizeCurrency,
  resolveCountryFromCurrency,
  resolveInitialCountry,
} from "../config/international.config";

const API_ROOT_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "https://api.leadyia.com"
).replace(/\/+$/, "").replace(/\/api$/, "");

const API_BASE_URL = `${API_ROOT_URL}/api`;
const REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";
const CHECKOUT_HANDOFF_ENDPOINT = `${API_BASE_URL}/public/pricing/checkout-handoff`;
const PRICING_EVENTS_ENDPOINT = `${API_BASE_URL}/public/pricing/events`;
const PLAN_ORDER = ["starter", "pro", "business", "enterprise", "agency"];

function getTier(value = "") {
  const raw = String(value || "").toLowerCase();
  return PLAN_ORDER.find((tier) => raw.includes(tier)) || raw.split("_")[0];
}

function dedupePlans(plans = [], { currency } = {}) {
  const map = new Map();
  for (const plan of Array.isArray(plans) ? plans : []) {
    const tier = getTier(plan.tier || plan.code || plan.id || plan.name);
    if (!PLAN_ORDER.includes(tier)) continue;
    const planCurrency = normalizeCurrency(plan.currency || currency);
    if (currency && planCurrency !== normalizeCurrency(currency)) continue;
    if (!map.has(tier)) map.set(tier, { ...plan, tier });
  }
  return PLAN_ORDER.map((tier) => map.get(tier)).filter(Boolean);
}

function normalizePlan(plan = {}, context = {}) {
  const country = context.country || resolveInitialCountry();
  const currency = normalizeCurrency(plan.currency || context.currency || country.currency);
  const tier = getTier(plan.tier || plan.code || plan.id || "");
  const code = plan.code || getPlanCode(tier, currency);
  const provider = plan.provider || context.provider || country.provider;
  const locale = plan.locale || context.locale || country.locale;
  const commercial = plan.commercial || {};
  const includedConversations = commercial.includedConversations ?? plan?.limits?.messagesPerMonth ?? plan?.limits?.messages ?? null;

  return {
    ...plan,
    code,
    tier,
    name: plan.name || plan.label || commercial.name || tier,
    currency,
    country: country.code,
    locale,
    provider,
    priceFormatted: plan.priceFormatted || plan.formattedPrice || "Sob consulta",
    setupFeeFormatted: plan.setupFeeFormatted || plan.setupFee || null,
    interval: plan.interval || plan.billingCycle || (locale?.startsWith("en") ? "month" : locale?.startsWith("es") ? "mes" : "mês"),
    features: Array.isArray(commercial.benefits) && commercial.benefits.length ? commercial.benefits : (Array.isArray(plan.features) ? plan.features : []),
    exclusions: Array.isArray(commercial.exclusions) ? commercial.exclusions : [],
    limits: { ...(plan.limits || {}), messagesPerMonth: includedConversations },
    commercial: {
      headline: commercial.headline || plan.tagline || plan.description,
      audience: commercial.audience || plan.idealFor || null,
      includedConversations,
      assistants: commercial.assistants ?? null,
      users: commercial.users ?? null,
      channels: Array.isArray(commercial.channels) ? commercial.channels : [],
      benefits: Array.isArray(commercial.benefits) ? commercial.benefits : [],
      exclusions: Array.isArray(commercial.exclusions) ? commercial.exclusions : [],
      dashboardPitch: commercial.dashboardPitch || null,
      presentation: commercial.presentation || null,
      contractVersion: commercial.contractVersion || plan.commercialContractVersion || null,
    },
    recommended: Boolean(plan.recommended || plan.highlight || plan.isRecommended || tier === "pro"),
    badge: plan.badge || commercial.badge || (tier === "pro" ? "Mais popular" : null),
    ctaLabel: plan.ctaLabel || commercial.ctaLabel || null,
    checkoutUrl: plan.checkoutUrl || plan.initPoint || plan.mercadoPagoUrl || `${REGISTER_URL}?plan=${encodeURIComponent(code)}&country=${country.code}&currency=${currency}&provider=${provider}&locale=${locale}`,
  };
}

export async function trackPricingEvent(event, payload = {}) {
  try {
    const body = {
      event,
      plan: payload.plan || null,
      source: payload.source || "landing",
      page: payload.page || window.location.pathname,
      sessionId: payload.sessionId || window.sessionStorage?.getItem("leadyia_pricing_session") || null,
      utmSource: new URLSearchParams(window.location.search).get("utm_source"),
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium"),
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      metadata: payload.metadata || {},
    };
    await fetch(PRICING_EVENTS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
  } catch (error) {
    console.warn("[Landing][PricingAttribution] soft-fail", error?.message);
  }
}

export async function getPublicPricingPlans(options = {}) {
  const country = options.country || resolveInitialCountry();
  const currency = normalizeCurrency(options.currency || country.currency);
  const locale = options.locale || country.locale || "pt-BR";
  const provider = options.provider || country.provider;
  const query = new URLSearchParams({ country: country.code, currency, locale, provider });

  try {
    const response = await fetch(`${API_BASE_URL}/public/pricing/plans?${query.toString()}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`PUBLIC_PRICING_HTTP_${response.status}`);
    const payload = await response.json();
    const rawPlans = payload?.data?.plans || payload?.plans || [];
    if (!Array.isArray(rawPlans) || rawPlans.length === 0) throw new Error("PUBLIC_PRICING_EMPTY");
    const normalized = rawPlans.map((plan) => normalizePlan(plan, { country, currency, locale, provider }));
    const result = {
      plans: dedupePlans(normalized, { currency }),
      source: payload?.meta?.source || "backend",
      loadedAt: payload?.meta?.loadedAt || new Date().toISOString(),
      country,
      currency,
      locale,
      provider,
      commercialExperience: payload?.data?.commercialExperience || null,
    };
    trackPricingEvent("PRICING_VIEWED", { metadata: { currency, locale, provider } });
    return result;
  } catch (error) {
    console.warn("[Landing][Pricing] Usando fallback internacional local", error?.message);
    const fallbackPlans = buildLocalPlans({ currency, locale }).map((plan) => normalizePlan(plan, { country, currency, locale, provider }));
    return {
      plans: dedupePlans(fallbackPlans, { currency }),
      source: "fallback",
      loadedAt: new Date().toISOString(),
      country,
      currency,
      locale,
      provider,
      commercialExperience: null,
    };
  }
}

export async function createPublicCheckout(plan, context = {}) {
  const country = context.country || resolveCountryFromCurrency(plan.currency);
  const currency = normalizeCurrency(context.currency || plan.currency || country.currency);
  const provider = context.provider || plan.provider || country.provider;
  const locale = context.locale || plan.locale || country.locale;
  const payload = {
    planCode: plan.code,
    tier: plan.tier,
    provider,
    country: country.code,
    currency,
    locale,
    source: "landing_pricing_v1103_37",
    utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign"),
  };

  trackPricingEvent("PLAN_SELECTED", { plan: plan.tier, metadata: { currency, provider } });

  try {
    const response = await fetch(CHECKOUT_HANDOFF_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`CHECKOUT_HANDOFF_HTTP_${response.status}`);
    const data = await response.json();
    const url = data?.data?.nextUrl || data?.data?.url;
    if (!url) throw new Error("CHECKOUT_HANDOFF_URL_EMPTY");
    return { ok: true, url, loginUrl: data?.data?.loginUrl || null, provider, mode: data?.data?.mode, handoffId: data?.data?.handoffId };
  } catch (error) {
    console.warn("[Landing][CheckoutHandoff] Fallback seguro para cadastro", error?.message);
    const fallback = new URL(REGISTER_URL);
    fallback.searchParams.set("plan", plan.tier || plan.code);
    fallback.searchParams.set("currency", currency);
    fallback.searchParams.set("provider", provider);
    fallback.searchParams.set("source", "landing_pricing_v1103_37_fallback");
    return { ok: false, url: fallback.toString(), provider, error };
  }
}

/**
 * LeadyIA Landing — Public Pricing v503 FINAL HOTFIX
 * - Deduplica planos por tier/moeda.
 * - Remove plano internal/trial da grade comercial.
 * - Mantém fallback local com os mesmos valores.
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

const CHECKOUT_ENDPOINT = `${API_BASE_URL}/billing/checkout`;

const PLAN_ORDER = ["starter", "pro", "business", "enterprise", "agency"];

function getTier(value = "") {
  const raw = String(value || "").toLowerCase();
  if (raw.includes("starter")) return "starter";
  if (raw.includes("pro")) return "pro";
  if (raw.includes("business")) return "business";
  if (raw.includes("enterprise")) return "enterprise";
  if (raw.includes("agency")) return "agency";
  if (raw.includes("internal")) return "internal";
  if (raw.includes("trial")) return "trial";
  return raw.split("_")[0];
}

function dedupePlans(plans = [], { currency } = {}) {
  const map = new Map();

  for (const plan of Array.isArray(plans) ? plans : []) {
    const tier = getTier(plan.tier || plan.code || plan.id || plan.name);

    if (!PLAN_ORDER.includes(tier)) continue;

    const planCurrency = normalizeCurrency(plan.currency || currency);
    if (currency && planCurrency !== normalizeCurrency(currency)) continue;

    if (!map.has(tier)) {
      map.set(tier, {
        ...plan,
        tier,
      });
    }
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

  return {
    ...plan,
    code,
    tier,
    name: plan.name || plan.label || tier,
    currency,
    country: country.code,
    locale,
    provider,
    priceFormatted: plan.priceFormatted || plan.formattedPrice || "Sob consulta",
    setupFeeFormatted: plan.setupFeeFormatted || plan.setupFee || null,
    interval:
      plan.interval ||
      plan.billingCycle ||
      (locale?.startsWith("en") ? "month" : locale?.startsWith("es") ? "mes" : "mês"),
    features: Array.isArray(plan.features) ? plan.features : [],
    limits: plan.limits || {},
    recommended: Boolean(plan.recommended || plan.highlight || plan.isRecommended || tier === "pro"),
    checkoutUrl:
      plan.checkoutUrl ||
      plan.initPoint ||
      plan.mercadoPagoUrl ||
      `${REGISTER_URL}?plan=${encodeURIComponent(code)}&country=${country.code}&currency=${currency}&provider=${provider}&locale=${locale}`,
  };
}

export async function getPublicPricingPlans(options = {}) {
  const country = options.country || resolveInitialCountry();
  const currency = normalizeCurrency(options.currency || country.currency);
  const locale = options.locale || country.locale || "pt-BR";
  const provider = options.provider || country.provider;

  const query = new URLSearchParams({ country: country.code, currency, locale, provider });

  try {
    const endpoints = [
      `${API_BASE_URL}/public/pricing/plans?${query.toString()}`,
    ];

    let response;
    let lastStatus = 0;
    for (const endpoint of endpoints) {
      response = await fetch(endpoint, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      lastStatus = response.status;
      if (response.ok) break;
    }

    if (!response?.ok) throw new Error(`PUBLIC_PRICING_HTTP_${lastStatus}`);

    const payload = await response.json();
    const rawPlans = payload?.data?.plans || payload?.data?.plans?.plans || payload?.plans || [];
    if (!Array.isArray(rawPlans) || rawPlans.length === 0) throw new Error("PUBLIC_PRICING_EMPTY");

    const normalized = rawPlans.map((plan) =>
      normalizePlan(plan, { country, currency, locale, provider })
    );

    return {
      plans: dedupePlans(normalized, { currency }),
      source: payload?.meta?.source || "backend",
      loadedAt: payload?.meta?.loadedAt || new Date().toISOString(),
      country,
      currency,
      locale,
      provider,
    };
  } catch (error) {
    console.warn("[Landing][Pricing] Usando fallback internacional local", error?.message);

    const fallbackPlans = buildLocalPlans({ currency, locale }).map((plan) =>
      normalizePlan(plan, { country, currency, locale, provider })
    );

    return {
      plans: dedupePlans(fallbackPlans, { currency }),
      source: "fallback",
      loadedAt: new Date().toISOString(),
      country,
      currency,
      locale,
      provider,
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
    source: "landing",
    successUrl: `${window.location.origin}/obrigado?plan=${encodeURIComponent(plan.code)}&provider=${provider}`,
    cancelUrl: `${window.location.origin}/pricing?cancelled=1`,
  };

  try {
    const response = await fetch(CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`CHECKOUT_HTTP_${response.status}`);

    const data = await response.json();
    const url =
      data?.data?.url ||
      data?.data?.checkoutUrl ||
      data?.url ||
      data?.checkoutUrl ||
      data?.initPoint ||
      data?.stripeCheckoutUrl;

    if (!url) throw new Error("CHECKOUT_URL_EMPTY");

    return { ok: true, url, provider };
  } catch (error) {
    console.warn("[Landing][Checkout] Fallback para register URL", error?.message);
    return { ok: false, url: plan.checkoutUrl, provider, error };
  }
}

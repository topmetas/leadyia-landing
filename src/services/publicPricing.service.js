/**
 * LeadyIA Landing — Public Pricing v501 International
 * - Busca catálogo do backend com country/currency/locale/provider.
 * - Mantém fallback local com os mesmos valores do backend.
 */

import {
  buildLocalPlans,
  getPlanCode,
  normalizeCurrency,
  resolveCountryFromCurrency,
  resolveInitialCountry,
} from "../config/international.config";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "https://api.leadyia.com/api"
).replace(/\/+$/, "");

const REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";

const CHECKOUT_ENDPOINT = `${API_BASE_URL}/billing/checkout`;

function normalizePlan(plan = {}, context = {}) {
  const country = context.country || resolveInitialCountry();
  const currency = normalizeCurrency(plan.currency || context.currency || country.currency);
  const tier = String(plan.tier || plan.code || plan.id || "").split("_")[0].toLowerCase();
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
    interval: plan.interval || plan.billingCycle || (locale?.startsWith("en") ? "month" : locale?.startsWith("es") ? "mes" : "mês"),
    features: Array.isArray(plan.features) ? plan.features : [],
    limits: plan.limits || {},
    recommended: Boolean(plan.recommended || plan.highlight || plan.isRecommended),
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
    const response = await fetch(`${API_BASE_URL}/public/pricing/plans?${query.toString()}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`PUBLIC_PRICING_HTTP_${response.status}`);

    const payload = await response.json();
    const plans = payload?.data?.plans || payload?.plans || [];
    if (!Array.isArray(plans) || plans.length === 0) throw new Error("PUBLIC_PRICING_EMPTY");

    return {
      plans: plans.map((plan) => normalizePlan(plan, { country, currency, locale, provider })),
      source: payload?.meta?.source || "backend",
      loadedAt: payload?.meta?.loadedAt || new Date().toISOString(),
      country,
      currency,
      locale,
      provider,
    };
  } catch (error) {
    console.warn("[Landing][Pricing] Usando fallback internacional local", error?.message);
    return {
      plans: buildLocalPlans({ currency, locale }).map((plan) => normalizePlan(plan, { country, currency, locale, provider })),
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
    const url = data?.data?.url || data?.url || data?.checkoutUrl || data?.initPoint || data?.stripeCheckoutUrl;
    if (!url) throw new Error("CHECKOUT_URL_EMPTY");
    return { ok: true, url, provider };
  } catch (error) {
    console.warn("[Landing][Checkout] Fallback para register URL", error?.message);
    return { ok: false, url: plan.checkoutUrl, provider, error };
  }
}

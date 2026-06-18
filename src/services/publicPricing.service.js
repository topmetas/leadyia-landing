/**
 * =========================================================
 * Arquivo: publicPricing.service.js
 * Caminho: landing/src/services/publicPricing.service.js
 * =========================================================
 *
 * Responsabilidade:
 * - Buscar planos públicos da LeadyIA no backend.
 * - Manter a landing alinhada ao catálogo real de planos.
 * - Usar fallback seguro quando a API pública ainda não estiver publicada.
 *
 * O que este módulo NÃO deve fazer:
 * - Não cria checkout diretamente.
 * - Não salva usuário, tenant ou assinatura.
 * - Não acessa dados privados do dashboard.
 *
 * Por quê:
 * A landing precisa vender usando os mesmos planos do backend, evitando
 * divergência entre marketing, MercadoPago e dashboard.
 * =========================================================
 */

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "https://api.leadyia.com/api"
).replace(/\/+$/, "");

const REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";

const FALLBACK_PLANS = [
  {
    code: "starter_br_brl",
    name: "Starter",
    tier: "starter",
    priceFormatted: "R$ 97,00",
    interval: "mês",
    description: "Para começar com IA no site e capturar mais leads.",
    limits: { bots: 2, messagesPerMonth: 10000 },
    features: [
      "2 bots inteligentes",
      "10.000 mensagens por mês",
      "Widget no site",
      "Dashboard básico",
      "Suporte por email",
    ],
    recommended: false,
    checkoutUrl: `${REGISTER_URL}?plan=starter_br_brl`,
  },
  {
    code: "pro_br_brl",
    name: "Pro",
    tier: "pro",
    priceFormatted: "R$ 297,00",
    interval: "mês",
    description: "Para empresas que querem vender e atender com automação.",
    limits: { bots: 5, messagesPerMonth: 50000 },
    features: [
      "5 bots inteligentes",
      "50.000 mensagens por mês",
      "CRM e leads",
      "AI Intelligence",
      "Webhooks",
      "Suporte prioritário",
    ],
    recommended: true,
    checkoutUrl: `${REGISTER_URL}?plan=pro_br_brl`,
  },
  {
    code: "business_br_brl",
    name: "Business",
    tier: "business",
    priceFormatted: "R$ 597,00",
    interval: "mês",
    description: "Para operações com alto volume, canais e governança.",
    limits: { bots: 15, messagesPerMonth: 200000 },
    features: [
      "15 bots inteligentes",
      "200.000 mensagens por mês",
      "Multiusuários",
      "Audit Center",
      "Operations Center",
      "API completa",
    ],
    recommended: false,
    checkoutUrl: `${REGISTER_URL}?plan=business_br_brl`,
  },
  {
    code: "enterprise_br_brl",
    name: "Enterprise",
    tier: "enterprise",
    priceFormatted: "Sob consulta",
    interval: "",
    description: "Para white-label, SLA dedicado e escala enterprise.",
    limits: { bots: -1, messagesPerMonth: -1 },
    features: [
      "Bots ilimitados",
      "Mensagens ilimitadas",
      "White-label",
      "SLA dedicado",
      "Integrações sob medida",
      "Gerente técnico dedicado",
    ],
    recommended: false,
    checkoutUrl: `${REGISTER_URL}?plan=enterprise_br_brl`,
  },
];

function normalizePlan(plan = {}) {
  const code = plan.code || plan.id || plan.slug || "";
  return {
    code,
    name: plan.name || plan.label || "Plano",
    tier: plan.tier || code.replace("_br_brl", ""),
    description: plan.description || "Plano LeadyIA",
    priceFormatted:
      plan.priceFormatted ||
      plan.formattedPrice ||
      (typeof plan.price === "number"
        ? `R$ ${plan.price.toFixed(2).replace(".", ",")}`
        : "Sob consulta"),
    interval: plan.interval || plan.billingCycle || "mês",
    limits: {
      bots: plan?.limits?.bots ?? plan.bots ?? null,
      messagesPerMonth:
        plan?.limits?.messagesPerMonth ??
        plan.messagesPerMonth ??
        plan?.limits?.messages ??
        null,
    },
    features: Array.isArray(plan.features) ? plan.features : [],
    recommended: Boolean(plan.recommended || plan.highlight || plan.isRecommended),
    checkoutUrl:
      plan.checkoutUrl ||
      plan.initPoint ||
      plan.mercadoPagoUrl ||
      `${REGISTER_URL}?plan=${encodeURIComponent(code)}`,
    mpPlanId: plan.mpPlanId || null,
  };
}

export async function getPublicPricingPlans() {
  try {
    console.info("[Landing][Pricing] Carregando planos públicos", {
      endpoint: `${API_BASE_URL}/public/pricing/plans`,
    });

    const response = await fetch(`${API_BASE_URL}/public/pricing/plans`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`PUBLIC_PRICING_HTTP_${response.status}`);
    }

    const payload = await response.json();
    const plans = payload?.data?.plans || payload?.plans || [];

    if (!Array.isArray(plans) || plans.length === 0) {
      throw new Error("PUBLIC_PRICING_EMPTY");
    }

    return {
      plans: plans.map(normalizePlan),
      source: payload?.meta?.source || "backend",
      loadedAt: payload?.meta?.loadedAt || new Date().toISOString(),
    };
  } catch (error) {
    console.warn("[Landing][Pricing] Usando fallback local", {
      message: error?.message,
    });

    return {
      plans: FALLBACK_PLANS,
      source: "fallback",
      loadedAt: new Date().toISOString(),
    };
  }
}

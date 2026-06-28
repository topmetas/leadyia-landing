/**
 * LeadyIA Landing — International Config v501
 * Fonte pública de países, moedas, providers e preços.
 * Mantém paridade com backend internationalPlans.catalog.js.
 */

export const SUPPORTED_COUNTRIES = [
  { code: "BR", label: "Brasil", currency: "BRL", locale: "pt-BR", provider: "mercadopago", flag: "🇧🇷" },
  { code: "US", label: "United States", currency: "USD", locale: "en-US", provider: "stripe", flag: "🇺🇸" },
  { code: "EU", label: "Europe", currency: "EUR", locale: "en-US", provider: "stripe", flag: "🇪🇺" },
  { code: "GB", label: "United Kingdom", currency: "GBP", locale: "en-US", provider: "stripe", flag: "🇬🇧" },
  { code: "CA", label: "Canada", currency: "CAD", locale: "en-US", provider: "stripe", flag: "🇨🇦" },
  { code: "MX", label: "México", currency: "MXN", locale: "es-MX", provider: "stripe", flag: "🇲🇽" },
];

export const SUPPORTED_CURRENCIES = ["BRL", "USD", "EUR", "GBP", "CAD", "MXN"];

export const PLAN_TIERS = ["starter", "pro", "business", "enterprise", "agency"];

export const PLAN_LABELS = {
  starter: "Starter",
  pro: "Pro",
  business: "Business",
  enterprise: "Enterprise",
  agency: "Agency",
};

export const PLAN_DESCRIPTIONS = {
  pt: {
    starter: "Ideal para começar e parar de perder leads.",
    pro: "Automação inteligente para priorizar leads e escalar vendas.",
    business: "Previsibilidade, controle avançado e automação estratégica.",
    enterprise: "Alta escala, personalização completa e suporte prioritário.",
    agency: "Plano reseller para agências gerenciarem clientes, white-label e receita recorrente.",
  },
  en: {
    starter: "Ideal to start capturing leads with AI.",
    pro: "Smart automation to qualify leads and scale sales.",
    business: "Advanced control, scheduling, payments and automation.",
    enterprise: "Enterprise scale, white-label, SLA and strategic support.",
    agency: "Reseller plan for agencies managing clients and recurring revenue.",
  },
  es: {
    starter: "Ideal para empezar a captar leads con IA.",
    pro: "Automatización inteligente para calificar leads y escalar ventas.",
    business: "Control avanzado, agenda, pagos y automatización.",
    enterprise: "Alta escala, marca blanca, SLA y soporte estratégico.",
    agency: "Plan reseller para agencias con clientes y ingresos recurrentes.",
  },
};

export const PLAN_FEATURES = {
  pt: {
    starter: ["Widget de IA para site", "Atendimento automático básico", "Captura de leads", "Histórico de conversas", "1 bot ativo"],
    pro: ["Tudo do Starter", "Playbooks por nicho", "WhatsApp e canais sociais", "RAG com documentos", "Lead scoring", "Automações comerciais"],
    business: ["Tudo do Pro", "Agendamento inteligente", "Pix/checkout quando aplicável", "Multiusuários", "Analytics avançado", "API e webhooks"],
    enterprise: ["Tudo do Business", "White-label", "IA e RAG dedicados", "SLA prioritário", "Suporte estratégico", "Customizações avançadas"],
    agency: ["Tudo do Enterprise", "Agency Center", "Clientes da agência", "Branding reseller", "Equipe e permissões", "Receita recorrente de clientes"],
  },
  en: {
    starter: ["AI website widget", "Basic automated support", "Lead capture", "Conversation history", "1 active bot"],
    pro: ["Everything in Starter", "Niche playbooks", "WhatsApp and social channels", "RAG with documents", "Lead scoring", "Sales automations"],
    business: ["Everything in Pro", "Smart scheduling", "Payment/checkout when needed", "Multi-user workspace", "Advanced analytics", "API and webhooks"],
    enterprise: ["Everything in Business", "White-label", "Dedicated AI and RAG", "Priority SLA", "Strategic support", "Advanced customization"],
    agency: ["Everything in Enterprise", "Agency Center", "Agency clients", "Reseller branding", "Team and permissions", "Recurring client revenue"],
  },
  es: {
    starter: ["Widget de IA para sitio", "Atención automática básica", "Captura de leads", "Historial de conversaciones", "1 bot activo"],
    pro: ["Todo Starter", "Playbooks por nicho", "WhatsApp y canales sociales", "RAG con documentos", "Lead scoring", "Automatizaciones comerciales"],
    business: ["Todo Pro", "Agenda inteligente", "Pagos/checkout cuando aplique", "Multiusuarios", "Analytics avanzado", "API y webhooks"],
    enterprise: ["Todo Business", "White-label", "IA y RAG dedicados", "SLA prioritario", "Soporte estratégico", "Personalizaciones avanzadas"],
    agency: ["Todo Enterprise", "Agency Center", "Clientes de agencia", "Branding reseller", "Equipo y permisos", "Ingresos recurrentes"],
  },
};

export const PLAN_PRICE_MATRIX = {
  starter: {
    BRL: { priceCents: 9700, setupFeeCents: 0 }, USD: { priceCents: 1900, setupFeeCents: 0 }, EUR: { priceCents: 1800, setupFeeCents: 0 }, GBP: { priceCents: 1500, setupFeeCents: 0 }, CAD: { priceCents: 2600, setupFeeCents: 0 }, MXN: { priceCents: 34900, setupFeeCents: 0 },
  },
  pro: {
    BRL: { priceCents: 29700, setupFeeCents: 49700 }, USD: { priceCents: 5900, setupFeeCents: 9900 }, EUR: { priceCents: 5500, setupFeeCents: 8900 }, GBP: { priceCents: 4900, setupFeeCents: 7900 }, CAD: { priceCents: 8000, setupFeeCents: 13900 }, MXN: { priceCents: 106900, setupFeeCents: 178900 },
  },
  business: {
    BRL: { priceCents: 59700, setupFeeCents: 99700 }, USD: { priceCents: 11900, setupFeeCents: 19900 }, EUR: { priceCents: 11000, setupFeeCents: 18900 }, GBP: { priceCents: 9500, setupFeeCents: 15900 }, CAD: { priceCents: 16000, setupFeeCents: 26900 }, MXN: { priceCents: 214900, setupFeeCents: 358900 },
  },
  enterprise: {
    BRL: { priceCents: 99700, setupFeeCents: 250000 }, USD: { priceCents: 19900, setupFeeCents: 39900 }, EUR: { priceCents: 18500, setupFeeCents: 37900 }, GBP: { priceCents: 15900, setupFeeCents: 32900 }, CAD: { priceCents: 26900, setupFeeCents: 53900 }, MXN: { priceCents: 358900, setupFeeCents: 718900 },
  },
  agency: {
    BRL: { priceCents: 149700, setupFeeCents: 299700 }, USD: { priceCents: 29900, setupFeeCents: 59900 }, EUR: { priceCents: 27900, setupFeeCents: 55900 }, GBP: { priceCents: 23900, setupFeeCents: 47900 }, CAD: { priceCents: 39900, setupFeeCents: 79900 }, MXN: { priceCents: 539900, setupFeeCents: 1079900 },
  },
};

export function normalizeCurrency(currency = "BRL") {
  const c = String(currency || "").toUpperCase();
  return SUPPORTED_CURRENCIES.includes(c) ? c : "BRL";
}

export function resolveCountryFromCurrency(currency = "BRL") {
  const c = normalizeCurrency(currency);
  return SUPPORTED_COUNTRIES.find((country) => country.currency === c) || SUPPORTED_COUNTRIES[0];
}

export function resolveInitialCountry() {
  if (typeof window === "undefined") return SUPPORTED_COUNTRIES[0];
  const params = new URLSearchParams(window.location.search);
  const byQuery = params.get("country") || params.get("pais");
  const byCurrency = params.get("currency") || params.get("moeda");
  if (byQuery) {
    const found = SUPPORTED_COUNTRIES.find((c) => c.code.toLowerCase() === byQuery.toLowerCase());
    if (found) return found;
  }
  if (byCurrency) return resolveCountryFromCurrency(byCurrency);
  const locale = navigator.language || "pt-BR";
  if (locale.startsWith("en-GB")) return SUPPORTED_COUNTRIES.find((c) => c.code === "GB");
  if (locale.startsWith("en-CA")) return SUPPORTED_COUNTRIES.find((c) => c.code === "CA");
  if (locale.startsWith("en")) return SUPPORTED_COUNTRIES.find((c) => c.code === "US");
  if (locale.startsWith("es")) return SUPPORTED_COUNTRIES.find((c) => c.code === "MX");
  return SUPPORTED_COUNTRIES[0];
}

export function formatMoneyCents(cents, currency = "BRL", locale = "pt-BR") {
  const value = Number(cents || 0) / 100;
  return new Intl.NumberFormat(locale || "pt-BR", {
    style: "currency",
    currency: normalizeCurrency(currency),
    maximumFractionDigits: 2,
  }).format(value);
}

export function getPlanCode(tier, currency = "BRL") {
  const c = normalizeCurrency(currency).toLowerCase();
  const normalizedTier = String(tier || "").toLowerCase();
  if (c === "brl") return `${normalizedTier}_br_brl`;
  return `${normalizedTier}_intl_${c}`;
}

export function buildLocalPlans({ currency = "BRL", locale = "pt-BR" } = {}) {
  const normalizedCurrency = normalizeCurrency(currency);
  const language = String(locale || "pt-BR").startsWith("es") ? "es" : String(locale || "pt-BR").startsWith("en") ? "en" : "pt";

  return PLAN_TIERS.map((tier) => {
    const price = PLAN_PRICE_MATRIX[tier][normalizedCurrency];
    const country = resolveCountryFromCurrency(normalizedCurrency);
    return {
      code: getPlanCode(tier, normalizedCurrency),
      tier,
      name: PLAN_LABELS[tier],
      currency: normalizedCurrency,
      provider: country.provider,
      country: country.code,
      locale: country.locale || locale,
      priceCents: price.priceCents,
      setupFeeCents: price.setupFeeCents,
      priceFormatted: formatMoneyCents(price.priceCents, normalizedCurrency, country.locale || locale),
      setupFeeFormatted: price.setupFeeCents ? formatMoneyCents(price.setupFeeCents, normalizedCurrency, country.locale || locale) : null,
      interval: language === "en" ? "month" : language === "es" ? "mes" : "mês",
      description: PLAN_DESCRIPTIONS[language][tier],
      features: PLAN_FEATURES[language][tier],
      limits: tier === "starter" ? { bots: 1, messagesPerMonth: 5000 } : tier === "pro" ? { bots: 3, messagesPerMonth: 25000 } : tier === "business" ? { bots: 10, messagesPerMonth: 150000 } : { bots: -1, messagesPerMonth: -1 },
      recommended: tier === "pro",
      isRecommended: tier === "pro",
    };
  });
}

export const INTERNATIONAL_TEXT = {
  pt: {
    title: "Planos globais para vender e atender com IA",
    subtitle: "Brasil usa Mercado Pago/Pix. Internacional usa Stripe com moeda local.",
    countryLabel: "País/moeda",
    checkoutWith: "Checkout com",
    setupFee: "Implantação",
    sourceBackend: "Catálogo oficial carregado do backend",
    sourceFallback: "Preços locais exibidos até a API pública estar disponível",
    note: "Escolha o país para ver moeda, checkout e valores corretos.",
  },
  en: {
    title: "Global plans to sell and support with AI",
    subtitle: "Brazil uses Mercado Pago/Pix. International markets use Stripe in local currency.",
    countryLabel: "Country/currency",
    checkoutWith: "Checkout with",
    setupFee: "Setup fee",
    sourceBackend: "Official backend catalog loaded",
    sourceFallback: "Local fallback prices shown until public API is available",
    note: "Choose the country to see the right currency, checkout and prices.",
  },
  es: {
    title: "Planes globales para vender y atender con IA",
    subtitle: "Brasil usa Mercado Pago/Pix. Internacional usa Stripe con moneda local.",
    countryLabel: "País/moneda",
    checkoutWith: "Checkout con",
    setupFee: "Implementación",
    sourceBackend: "Catálogo oficial cargado desde backend",
    sourceFallback: "Precios locales hasta que la API pública esté disponible",
    note: "Elige el país para ver moneda, checkout y precios correctos.",
  },
};

export function getLanguage(locale = "pt-BR") {
  if (String(locale).startsWith("en")) return "en";
  if (String(locale).startsWith("es")) return "es";
  return "pt";
}

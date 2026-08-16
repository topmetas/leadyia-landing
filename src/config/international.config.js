/**
 * LeadyIA Landing — International Config v501
 * Fonte pública de países, moedas, providers e preços.
 * Mantém paridade com backend internationalPlans.catalog.js.
 */

export const SUPPORTED_COUNTRIES = [
  { code: "BR", label: "Brasil", currency: "BRL", locale: "pt-BR", provider: "mercadopago", flag: "🇧🇷" },
  { code: "US", label: "United States", currency: "USD", locale: "en-US", provider: "stripe", flag: "🇺🇸" },
  { code: "PT", label: "Portugal", currency: "EUR", locale: "pt-PT", provider: "stripe", flag: "🇵🇹" },
  { code: "ES", label: "España", currency: "EUR", locale: "es-ES", provider: "stripe", flag: "🇪🇸" },
  { code: "IE", label: "Ireland", currency: "EUR", locale: "en-IE", provider: "stripe", flag: "🇮🇪" },
  { code: "FR", label: "France", currency: "EUR", locale: "fr-FR", provider: "stripe", flag: "🇫🇷" },
  { code: "DE", label: "Deutschland", currency: "EUR", locale: "de-DE", provider: "stripe", flag: "🇩🇪" },
  { code: "IT", label: "Italia", currency: "EUR", locale: "it-IT", provider: "stripe", flag: "🇮🇹" },
  { code: "GB", label: "United Kingdom", currency: "GBP", locale: "en-GB", provider: "stripe", flag: "🇬🇧" },
  { code: "CA", label: "Canada", currency: "CAD", locale: "en-CA", provider: "stripe", flag: "🇨🇦" },
  { code: "MX", label: "México", currency: "MXN", locale: "es-MX", provider: "stripe", flag: "🇲🇽" },
  { code: "CL", label: "Chile", currency: "USD", locale: "es-CL", provider: "stripe", flag: "🇨🇱" },
  { code: "CO", label: "Colombia", currency: "USD", locale: "es-CO", provider: "stripe", flag: "🇨🇴" },
  { code: "AR", label: "Argentina", currency: "USD", locale: "es-AR", provider: "stripe", flag: "🇦🇷" },
  { code: "PE", label: "Perú", currency: "USD", locale: "es-PE", provider: "stripe", flag: "🇵🇪" },
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
  starter: ["Widget de IA para site", "WhatsApp Essencial via QR", "Pré-agendamento", "Captura de leads", "Histórico de conversas"],
  pro: ["Tudo do Starter", "WhatsApp API Oficial da Meta", "Instagram", "CRM e pipeline", "Agendamentos inteligentes", "Automações comerciais"],
    business: ["Tudo do Pro", "Agendamento inteligente", "Pix/checkout quando aplicável", "Multiusuários", "Analytics avançado", "API e webhooks"],
    enterprise: ["Tudo do Business", "White-label", "IA e RAG dedicados", "SLA prioritário", "Suporte estratégico", "Customizações avançadas"],
    agency: ["Tudo do Enterprise", "Agency Center", "Clientes da agência", "Branding reseller", "Equipe e permissões", "Receita recorrente de clientes"],
  },
  en: {
    starter: ["AI website widget", "Essential WhatsApp via QR", "Pre-scheduling", "Lead capture", "Conversation history"],
    pro: ["Everything in Starter", "Official Meta WhatsApp API", "Instagram", "CRM and pipeline", "Smart scheduling", "Sales automations"],
    business: ["Everything in Pro", "Smart scheduling", "Payment/checkout when needed", "Multi-user workspace", "Advanced analytics", "API and webhooks"],
    enterprise: ["Everything in Business", "White-label", "Dedicated AI and RAG", "Priority SLA", "Strategic support", "Advanced customization"],
    agency: ["Everything in Enterprise", "Agency Center", "Agency clients", "Reseller branding", "Team and permissions", "Recurring client revenue"],
  },
  es: {
    starter: ["Widget de IA para sitio", "WhatsApp esencial vía QR", "Preagendamiento", "Captura de leads", "Historial de conversaciones"],
    pro: ["Todo Starter", "API oficial de WhatsApp de Meta", "Instagram", "CRM y pipeline", "Agenda inteligente", "Automatizaciones comerciales"],
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
    BRL: { priceCents: 29700, setupFeeCents: 0 }, USD: { priceCents: 5900, setupFeeCents: 0 }, EUR: { priceCents: 5500, setupFeeCents: 0 }, GBP: { priceCents: 4900, setupFeeCents: 0 }, CAD: { priceCents: 8000, setupFeeCents: 0 }, MXN: { priceCents: 106900, setupFeeCents: 0 },
  },
  business: {
    BRL: { priceCents: 59700, setupFeeCents: 29700 }, USD: { priceCents: 11900, setupFeeCents: 5900 }, EUR: { priceCents: 11000, setupFeeCents: 5500 }, GBP: { priceCents: 9500, setupFeeCents: 4900 }, CAD: { priceCents: 16000, setupFeeCents: 8000 }, MXN: { priceCents: 214900, setupFeeCents: 106900 },
  },
  enterprise: {
    BRL: { priceCents: 99700, setupFeeCents: 0 }, USD: { priceCents: 19900, setupFeeCents: 0 }, EUR: { priceCents: 18500, setupFeeCents: 0 }, GBP: { priceCents: 15900, setupFeeCents: 0 }, CAD: { priceCents: 26900, setupFeeCents: 0 }, MXN: { priceCents: 358900, setupFeeCents: 0 },
  },
  agency: {
    BRL: { priceCents: 149700, setupFeeCents: 0 }, USD: { priceCents: 29900, setupFeeCents: 0 }, EUR: { priceCents: 27900, setupFeeCents: 0 }, GBP: { priceCents: 23900, setupFeeCents: 0 }, CAD: { priceCents: 39900, setupFeeCents: 0 }, MXN: { priceCents: 539900, setupFeeCents: 0 },
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
  const exactLocale = SUPPORTED_COUNTRIES.find((c) => c.locale.toLowerCase() === locale.toLowerCase());
  if (exactLocale) return exactLocale;
  if (locale.toLowerCase().startsWith("pt-pt")) return SUPPORTED_COUNTRIES.find((c) => c.code === "PT");
  if (locale.toLowerCase().startsWith("en")) return SUPPORTED_COUNTRIES.find((c) => c.code === "US");
  if (locale.toLowerCase().startsWith("es")) return SUPPORTED_COUNTRIES.find((c) => c.code === "ES");
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
    const monthlyBRL = PLAN_PRICE_MATRIX[tier].BRL.priceCents / 100;
    const channelMap = {
      starter: ["Website", "WhatsApp Essencial via QR"],
      pro: ["Website", "WhatsApp API Oficial da Meta", "Instagram"],
      business: ["Omnichannel"],
      enterprise: ["Omnichannel"],
      agency: ["Omnichannel", "Multi-tenant"],
    };
    const presentationMetrics = {
      starter: ["1 assistente IA", "1 usuário", "Site + WhatsApp QR"],
      pro: ["3 assistentes IA", "5 usuários", "WhatsApp API Oficial Meta"],
      business: ["10 assistentes IA", "20 usuários", "Omnichannel"],
      enterprise: ["Escala sob consulta", "Ambiente isolado", "SLA prioritário"],
      agency: ["Multi-tenant", "White label completo", "Subcontas"],
    };
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
      limits: tier === "starter" ? { bots: 1, users: 1, messagesPerMonth: 1000 } : tier === "pro" ? { bots: 3, users: 5, messagesPerMonth: 10000 } : tier === "business" ? { bots: 10, users: 20, messagesPerMonth: 50000 } : tier === "enterprise" ? { bots: -1, users: -1, messagesPerMonth: 200000 } : { bots: -1, users: -1, messagesPerMonth: 500000 },
      recommended: tier === "pro",
      isRecommended: tier === "pro",
      badge: tier === "pro" ? "Mais popular" : tier === "business" ? "Mais completo" : null,
      commercial: {
        includedConversations: tier === "starter" ? 1000 : tier === "pro" ? 10000 : tier === "business" ? 50000 : tier === "enterprise" ? 200000 : 500000,
        channels: channelMap[tier],
        annualPriceBRL: monthlyBRL * 10,
        annualSavingsMonths: 2,
        startingAt: tier === "enterprise" || tier === "agency",
        benefits: PLAN_FEATURES[language][tier],
        exclusions: tier === "starter" ? ["WhatsApp API Oficial da Meta", "Campanhas e templates", "CRM completo", "Instagram", "API e webhooks"] : [],
        presentation: { badge: tier === "pro" ? "Mais popular" : tier === "business" ? "Mais completo" : null, cta: tier === "enterprise" ? "Falar com especialista" : tier === "agency" ? "Quero revender" : `Escolher ${PLAN_LABELS[tier]}`, promise: PLAN_DESCRIPTIONS[language][tier], metrics: presentationMetrics[tier] },
      },
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

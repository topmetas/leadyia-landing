export const PREMIUM_PLAN_PRESENTATION_V1103_41_1 = {
  starter: { badge: null, cta: "Começar com Starter", promise: "Atenda melhor e pare de perder oportunidades.", metrics: ["1 assistente IA", "1 usuário", "Website"] },
  pro: { badge: "Mais popular", cta: "Assinar Pro", promise: "Qualifique, agende e acompanhe cada oportunidade.", metrics: ["3 assistentes IA", "5 usuários", "Website + WhatsApp"] },
  business: { badge: "Mais completo", cta: "Escalar para Business", promise: "Orquestre equipes e canais com previsibilidade.", metrics: ["10 assistentes IA", "20 usuários", "Omnichannel"] },
  enterprise: { badge: "Corporativo", cta: "Falar com especialista", promise: "Governança, segurança e personalização para operações críticas.", metrics: ["Escala sob consulta", "Ambiente isolado", "SLA prioritário"] },
  agency: { badge: "Para revenda", cta: "Quero revender a LeadyIA", promise: "Opere sua própria oferta SaaS com marca e clientes centralizados.", metrics: ["Multi-tenant", "White label completo", "Subcontas"] },
};

export function getPremiumPlanPresentationV1103_41_1(tier = "starter") {
  return PREMIUM_PLAN_PRESENTATION_V1103_41_1[String(tier || "starter").toLowerCase()] || PREMIUM_PLAN_PRESENTATION_V1103_41_1.starter;
}

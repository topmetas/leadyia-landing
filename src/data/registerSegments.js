/**
 * =========================================================
 * Arquivo: registerSegments.js
 * Caminho: landing/src/data/registerSegments.js
 * =========================================================
 *
 * Responsabilidade:
 * - Centralizar os segmentos usados no cadastro público da landing.
 * - Mapear segmento comercial para playbook inicial do tenant.
 * - Manter landing, dashboard, backend e widget falando a mesma língua.
 *
 * O que este arquivo NÃO deve fazer:
 * - Não cria tenant.
 * - Não decide cobrança.
 * - Não substitui a resolução soberana do backend.
 *
 * Por quê:
 * Quando uma empresa cria conta, o segmento escolhido precisa alimentar o
 * onboarding, o playbook padrão e a experiência white-label do widget.
 * =========================================================
 */

export const REGISTER_SEGMENTS = [
  {
    id: "education",
    label: "Educação",
    playbook: "education",
    headline: "Materiais, cursos, escolas e produtos pedagógicos.",
    example: "Quero encontrar materiais por idade, série ou objetivo.",
  },
  {
    id: "clinic",
    label: "Clínicas",
    playbook: "clinic",
    headline: "Recepção, agendamento, horários e dúvidas recorrentes.",
    example: "Quero agendar uma consulta ou falar com a recepção.",
  },
  {
    id: "beauty",
    label: "Estética",
    playbook: "beauty",
    headline: "Procedimentos, avaliações, pacotes e atendimento comercial.",
    example: "Quero conhecer valores e horários disponíveis.",
  },
  {
    id: "legal",
    label: "Advocacia / Jurídico",
    playbook: "legal",
    headline: "Triagem inicial, áreas de atuação e agendamento jurídico.",
    example: "Quero explicar meu caso e falar com um advogado.",
  },
  {
    id: "real_estate",
    label: "Imobiliárias",
    playbook: "real_estate",
    headline: "Captação de leads, visitas, imóveis e financiamento.",
    example: "Quero encontrar um imóvel ou agendar visita.",
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    playbook: "ecommerce",
    headline: "Produtos, ofertas, checkout, pós-venda e suporte.",
    example: "Quero comprar, ver ofertas ou acompanhar pedido.",
  },
  {
    id: "saas",
    label: "SaaS / Serviços B2B",
    playbook: "saas_b2b",
    headline: "Demonstrações, qualificação de leads e suporte comercial.",
    example: "Quero entender os planos e falar com especialista.",
  },
  {
    id: "support",
    label: "Suporte / Atendimento",
    playbook: "support",
    headline: "FAQ, tickets, dúvidas operacionais e handoff humano.",
    example: "Preciso resolver uma dúvida ou falar com atendimento.",
  },
  {
    id: "leadyia",
    label: "LeadyIA / IA para negócios",
    playbook: "leadyia",
    headline: "Venda, atendimento e automação com IA no site.",
    example: "Quero testar a IA e escolher um plano.",
  },
];

export function getRegisterSegmentById(segmentId) {
  return (
    REGISTER_SEGMENTS.find((segment) => segment.id === segmentId) ||
    REGISTER_SEGMENTS[0]
  );
}

export function getPlaybookBySegment(segmentId) {
  return getRegisterSegmentById(segmentId).playbook;
}

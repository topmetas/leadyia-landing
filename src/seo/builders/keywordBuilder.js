import { SITE_SEO } from "../config/siteSeo.config";

const NICHE_KEYWORDS = {
  clinic: ["IA para clínicas", "recepcionista virtual", "agendamento consulta", "chatbot clínica", "atendimento médico"],
  aesthetics: ["IA para estética", "chatbot estética", "agendamento avaliação", "botox", "harmonização facial"],
  legal: ["IA para advocacia", "chatbot jurídico", "triagem jurídica", "consulta jurídica", "atendimento jurídico"],
  realestate: ["IA para imobiliárias", "chatbot imobiliária", "visitas imóveis", "leads imobiliários", "corretor virtual"],
  education: ["IA para educação", "chatbot escola", "matrículas", "atendimento educacional", "cursos online"],
  ecommerce: ["IA para ecommerce", "chatbot ecommerce", "recomendação de produtos", "checkout", "vendas online"],
  saas: ["SaaS IA", "automação comercial", "CRM com IA", "chatbot para empresas", "LeadyIA"]
};

export function buildKeywords({ keywords = [], niche = "saas" } = {}) {
  const merged = [
    ...SITE_SEO.defaultKeywords,
    ...(NICHE_KEYWORDS[niche] || []),
    ...keywords
  ];
  return Array.from(new Set(merged.map((item) => String(item).trim()).filter(Boolean)));
}

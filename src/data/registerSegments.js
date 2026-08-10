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
  { id:"clinic", label:"Clínicas", playbook:"clinic", headline:"Recepção, triagem e agendamentos.", example:"Quero agendar uma consulta." },
  { id:"aesthetics", label:"Estética", playbook:"aesthetics", headline:"Procedimentos, avaliações e atendimento comercial.", example:"Quero agendar uma avaliação." },
  { id:"real_estate", label:"Imobiliárias", playbook:"real_estate", headline:"Imóveis, visitas e qualificação de interessados.", example:"Quero encontrar um imóvel." },
  { id:"legal", label:"Advocacia / Jurídico", playbook:"legal", headline:"Triagem responsável e consultas jurídicas.", example:"Quero explicar meu caso." },
  { id:"education", label:"Educação", playbook:"education", headline:"Matrículas, cursos, escolas e materiais.", example:"Quero conhecer cursos ou materiais." },
  { id:"ecommerce", label:"E-commerce", playbook:"ecommerce", headline:"Produtos, ofertas, checkout e pedidos.", example:"Quero encontrar um produto." },
  { id:"saas_b2b", label:"SaaS / Serviços B2B", playbook:"saas_b2b", headline:"Demonstrações, trials e qualificação comercial.", example:"Quero entender os planos." },
  { id:"dentistry", label:"Odontologia", playbook:"dentistry", headline:"Avaliações, urgências e especialidades odontológicas.", example:"Quero agendar uma avaliação." },
  { id:"veterinary", label:"Veterinária", playbook:"veterinary", headline:"Atendimento ao tutor, consultas e retornos.", example:"Quero atendimento para meu pet." },
  { id:"accounting", label:"Contabilidade", playbook:"accounting", headline:"Abertura, fiscal, folha e consultoria contábil.", example:"Quero abrir uma empresa." },
  { id:"automotive", label:"Automotivo", playbook:"automotive", headline:"Orçamentos, serviços e agenda da oficina.", example:"Meu carro precisa de avaliação." },
  { id:"restaurant", label:"Restaurantes", playbook:"restaurant", headline:"Reservas, cardápio, pedidos e atendimento.", example:"Quero reservar uma mesa." },
  { id:"fitness", label:"Fitness", playbook:"fitness", headline:"Modalidades, aulas experimentais e matrículas.", example:"Quero uma aula experimental." },
  { id:"home_services", label:"Serviços Residenciais", playbook:"home_services", headline:"Orçamentos, urgências e visitas técnicas.", example:"Preciso solicitar um orçamento." },
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

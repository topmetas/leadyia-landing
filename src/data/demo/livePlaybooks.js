/**
 * ==========================================================
 * Arquivo: livePlaybooks.js
 * Caminho: src/data/demo/livePlaybooks.js
 * Responsabilidade: centralizar os nichos exibidos no Hub de Playbooks ao vivo.
 *
 * Importante:
 * - Estes links podem apontar para rotas locais durante desenvolvimento.
 * - Em produção, os subdomínios podem ser configurados na Vercel/One.com.
 * - Os TENANT_ID reais continuam fora daqui; esta fase é apenas visual/navegação.
 * ==========================================================
 */

export const LIVE_PLAYBOOKS = [
  {
    id: 'clinic',
    icon: '🏥',
    label: 'Clínica',
    title: 'IA para clínicas',
    subtitle: 'Agenda consultas, tira dúvidas e encaminha para recepção.',
    route: 'https://clinica.leadyia.com',
    domain: 'clinica.leadyia.com',
    accent: '#0891b2',
    metrics: ['Agendamento', 'Convênios', 'Recepção'],
  },
  {
    id: 'aesthetics',
    icon: '💆',
    label: 'Estética',
    title: 'IA para estética',
    subtitle: 'Qualifica interesse, apresenta procedimentos e leva para avaliação.',
    route: 'https://estetica.leadyia.com',
    domain: 'estetica.leadyia.com',
    accent: '#db2777',
    metrics: ['Avaliação', 'Procedimentos', 'WhatsApp'],
  },
  {
    id: 'legal',
    icon: '⚖️',
    label: 'Jurídico',
    title: 'IA para advocacia',
    subtitle: 'Faz triagem segura, identifica área e organiza o atendimento.',
    route: 'https://advocacia.leadyia.com',
    domain: 'advocacia.leadyia.com',
    accent: '#475569',
    metrics: ['Triagem', 'Consulta', 'Resumo'],
  },
  {
    id: 'realestate',
    icon: '🏠',
    label: 'Imobiliária',
    title: 'IA para imóveis',
    subtitle: 'Capta interessados, qualifica perfil e agenda visitas.',
    route: 'https://imobiliaria.leadyia.com',
    domain: 'imobiliaria.leadyia.com',
    accent: '#059669',
    metrics: ['Visitas', 'Corretores', 'Propostas'],
  },
  {
    id: 'education',
    icon: '🎓',
    label: 'Educação',
    title: 'IA para educação',
    subtitle: 'Orienta matrículas, cursos, materiais, aulas e atendimento pedagógico.',
    route: 'https://escola.leadyia.com',
    domain: 'escola.leadyia.com',
    accent: '#7c3aed',
    metrics: ['Matrícula', 'Cursos', 'Secretaria'],
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    label: 'E-commerce',
    title: 'IA para lojas',
    subtitle: 'Recomenda produtos, responde dúvidas e direciona para compra.',
    route: 'https://ecommerce.leadyia.com',
    domain: 'ecommerce.leadyia.com',
    accent: '#ea580c',
    metrics: ['Catálogo', 'Checkout', 'Pedidos'],
  },
  {
    id: 'saas',
    icon: '🚀',
    label: 'SaaS',
    title: 'IA para SaaS',
    subtitle: 'Explica planos, qualifica leads e conduz para teste ou demonstração.',
    route: 'https://saas.leadyia.com',
    domain: 'saas.leadyia.com',
    accent: '#2563eb',
    metrics: ['Planos', 'Trials', 'Demo'],
  },
];

export const getLivePlaybookById = (id) =>
  LIVE_PLAYBOOKS.find((item) => item.id === id) || LIVE_PLAYBOOKS[0];

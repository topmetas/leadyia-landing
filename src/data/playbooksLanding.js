/**
 * ==========================================================
 * Arquivo: playbooksLanding.js
 * Caminho: landing/src/data/playbooksLanding.js
 * Responsabilidade: centralizar o conteúdo comercial dos playbooks
 * exibidos na landing page pública da LeadyIA.
 *
 * O que este módulo NÃO deve fazer:
 * - Não deve decidir playbook real do tenant.
 * - Não deve criar tenant, usuário ou assinatura.
 * - Não deve conter preço oficial dos planos; isso pertence ao backend.
 *
 * Por quê:
 * A landing precisa vender por nicho, mas a fonte soberana de operação
 * continua sendo backend + dashboard. Aqui mantemos apenas copywriting,
 * exemplos e posicionamento comercial para aumentar conversão.
 * ==========================================================
 */

export const PLAYBOOKS_LANDING = [
  {
    id: 'educacao',
    label: 'Educação',
    badge: 'Materiais pedagógicos',
    icon: 'book',
    accent: '#7c3aed',
    pain: 'Pais, professores e coordenadores perguntam por idade, série, tema e objetivo pedagógico — e a equipe perde vendas respondendo manualmente.',
    solution: 'A IA orienta por alfabetização, leitura, matemática, BNCC, idade/série e direciona para produtos reais quando integrado ao catálogo.',
    benefit: 'Mais vendas consultivas e menos dúvidas repetidas no atendimento.',
    examples: [
      'Quero materiais para alfabetização',
      'Tem atividade para 5 anos?',
      'Quero algo para matemática',
    ],
    ctas: ['Ver materiais', 'Indicação por idade', 'Falar com atendimento'],
    metric: '+ vendas consultivas',
  },
  {
    id: 'clinic',
    label: 'Clínicas',
    badge: 'Agendamento',
    icon: 'calendar',
    accent: '#0891b2',
    pain: 'A recepção perde tempo respondendo horários, localização, convênios e dúvidas simples antes de agendar.',
    solution: 'A IA acolhe o paciente, orienta próximos passos e encaminha para agendamento ou recepção humana quando necessário.',
    benefit: 'Mais horários preenchidos e menos sobrecarga na recepção.',
    examples: [
      'Quero agendar uma consulta',
      'Quais horários disponíveis?',
      'Atende convênio?',
    ],
    ctas: ['Agendar consulta', 'Ver horários', 'Falar com recepção'],
    metric: '+ agendamentos',
  },
  {
    id: 'estetica',
    label: 'Estética',
    badge: 'Conversão de procedimentos',
    icon: 'spark',
    accent: '#db2777',
    pain: 'Clientes perguntam sobre procedimentos, valores, resultados esperados e disponibilidade antes de decidir.',
    solution: 'A IA apresenta serviços, tira dúvidas iniciais, coleta intenção e encaminha para avaliação ou atendimento humano.',
    benefit: 'Mais leads qualificados para avaliação e fechamento.',
    examples: [
      'Quero saber sobre limpeza de pele',
      'Tem avaliação?',
      'Quais procedimentos vocês fazem?',
    ],
    ctas: ['Agendar avaliação', 'Ver procedimentos', 'Falar no WhatsApp'],
    metric: '+ leads qualificados',
  },
  {
    id: 'legal',
    label: 'Advocacia',
    badge: 'Triagem jurídica',
    icon: 'shield',
    accent: '#334155',
    pain: 'O escritório recebe casos sem triagem, mensagens incompletas e perguntas que precisam ser encaminhadas com cuidado.',
    solution: 'A IA faz uma triagem inicial profissional, informa áreas de atuação e direciona para a equipe jurídica sem prometer resultado.',
    benefit: 'Atendimento mais organizado e leads jurídicos melhor qualificados.',
    examples: [
      'Quero falar com um advogado',
      'Vocês atendem direito trabalhista?',
      'Como envio meu caso?',
    ],
    ctas: ['Agendar consulta', 'Áreas de atuação', 'Enviar caso'],
    metric: '+ triagem segura',
  },
  {
    id: 'real-estate',
    label: 'Imobiliárias',
    badge: 'Captação e visitas',
    icon: 'home',
    accent: '#059669',
    pain: 'Interessados perguntam preço, localização, aluguel, compra e visita em horários fora do expediente.',
    solution: 'A IA coleta perfil, tipo de imóvel, faixa de preço e encaminha para corretor ou agenda de visita.',
    benefit: 'Mais oportunidades imobiliárias capturadas 24h por dia.',
    examples: [
      'Procuro apartamento para alugar',
      'Quero agendar uma visita',
      'Tem imóvel até R$ 2.000?',
    ],
    ctas: ['Buscar imóveis', 'Agendar visita', 'Falar com corretor'],
    metric: '+ visitas agendadas',
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce',
    badge: 'Vendas e catálogo',
    icon: 'bag',
    accent: '#ea580c',
    pain: 'Clientes querem produto, preço, oferta, link de compra e suporte de pedido — tudo rápido.',
    solution: 'A IA recomenda produtos, resolve links reais do catálogo, mostra CTAs de compra e reduz dúvidas repetidas.',
    benefit: 'Mais conversões com menos abandono no atendimento.',
    examples: [
      'Quais são as ofertas?',
      'Quero comprar este produto',
      'Onde acompanho meu pedido?',
    ],
    ctas: ['Ver ofertas', 'Comprar agora', 'Acompanhar pedido'],
    metric: '+ conversões',
  },
  {
    id: 'saas',
    label: 'SaaS',
    badge: 'Pré-vendas e suporte',
    icon: 'grid',
    accent: '#2563eb',
    pain: 'Visitantes querem preço, recursos, demonstração e ajuda técnica antes de criar conta.',
    solution: 'A IA explica recursos, qualifica intenção, direciona para plano ideal e abre caminho para teste ou reunião.',
    benefit: 'Mais trials qualificados e menos fricção no funil.',
    examples: [
      'Quais planos vocês têm?',
      'Como funciona a integração?',
      'Quero testar agora',
    ],
    ctas: ['Ver planos', 'Testar agora', 'Falar com especialista'],
    metric: '+ trials qualificados',
  },
  {
    id: 'support',
    label: 'Suporte',
    badge: 'Atendimento 24h',
    icon: 'headset',
    accent: '#0f766e',
    pain: 'Times gastam horas respondendo as mesmas dúvidas sobre acesso, pedido, prazo, suporte e processos.',
    solution: 'A IA responde dúvidas frequentes com RAG, abre handoff quando precisa e registra histórico no dashboard.',
    benefit: 'Menos tickets repetidos e melhor experiência do cliente.',
    examples: [
      'Não consigo acessar',
      'Como acompanho meu pedido?',
      'Preciso falar com suporte',
    ],
    ctas: ['Abrir suporte', 'Ver ajuda', 'Falar com humano'],
    metric: '- tickets repetidos',
  },
  {
    id: 'leadyia',
    label: 'LeadyIA',
    badge: 'Sistema completo',
    icon: 'bot',
    accent: '#4f46e5',
    pain: 'Empresas querem IA no site, mas precisam de painel, RAG, CRM, billing, auditoria, playbooks e controle real.',
    solution: 'A LeadyIA entrega widget + dashboard + multi-tenant + playbooks + integrações em uma única plataforma.',
    benefit: 'Uma estrutura SaaS completa para vender, atender e escalar atendimento com IA.',
    examples: [
      'Quero ver planos',
      'Como instalo no site?',
      'Posso usar em vários nichos?',
    ],
    ctas: ['Ver planos', 'Testar IA', 'Criar conta'],
    metric: 'plataforma completa',
  },
];

export const getPlaybookById = (id) =>
  PLAYBOOKS_LANDING.find((playbook) => playbook.id === id) || PLAYBOOKS_LANDING[0];

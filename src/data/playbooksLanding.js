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
    id: 'education',
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
    id: 'aesthetics',
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
    id: 'real_estate',
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
    id: 'saas_b2b',
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
  { id:'dentistry', label:'Odontologia', badge:'Avaliações e urgências', icon:'calendar', accent:'#0f766e', pain:'Pacientes precisam de respostas seguras, especialidades e avaliação sem repetir o contexto.', solution:'A IA acolhe, diferencia urgência, organiza o pré-agendamento e entrega resumo à recepção.', benefit:'Mais avaliações organizadas e continuidade após o agendamento.', examples:['Quero agendar avaliação','Estou com dor de dente','Quais convênios atendem?'], ctas:['Agendar avaliação','Ver especialidades','Falar com recepção'], metric:'+ avaliações' },
  { id:'veterinary', label:'Veterinária', badge:'Atendimento ao tutor', icon:'calendar', accent:'#16a34a', pain:'Tutores procuram ajuda, horários e orientação administrativa em qualquer momento.', solution:'A IA identifica pet, necessidade e sinais relatados, conduzindo para consulta ou equipe humana.', benefit:'Mais consultas organizadas com contexto do tutor e do pet.', examples:['Meu cachorro está sem comer','Quero marcar consulta','Atende emergência?'], ctas:['Agendar consulta','Informar sintomas','Falar com recepção'], metric:'+ consultas' },
  { id:'accounting', label:'Contabilidade', badge:'Triagem empresarial', icon:'grid', accent:'#0369a1', pain:'Empresas chegam com dúvidas dispersas sobre abertura, fiscal, folha e troca de contador.', solution:'A IA organiza porte, atividade, necessidade e momento para o contador assumir com contexto.', benefit:'Mais diagnósticos comerciais qualificados.', examples:['Quero abrir empresa','Preciso trocar de contador','Tenho dúvida sobre impostos'], ctas:['Solicitar diagnóstico','Ver serviços','Falar com contador'], metric:'+ oportunidades' },
  { id:'automotive', label:'Automotivo', badge:'Oficina e serviços', icon:'grid', accent:'#dc2626', pain:'Clientes descrevem sintomas sem dados do veículo e a equipe perde tempo antes do orçamento.', solution:'A IA coleta veículo, serviço e sinais relatados e conduz para avaliação ou agenda.', benefit:'Orçamentos e atendimentos técnicos mais organizados.', examples:['Meu carro faz barulho','Quero uma revisão','Preciso de alinhamento'], ctas:['Pedir orçamento','Agendar avaliação','Falar com oficina'], metric:'+ orçamentos' },
  { id:'restaurant', label:'Restaurantes', badge:'Reservas e pedidos', icon:'bag', accent:'#b45309', pain:'Clientes perguntam cardápio, horário, reserva e pedido no instante da decisão.', solution:'A IA responde com dados oficiais e organiza reserva ou direciona ao canal de pedido.', benefit:'Mais reservas e menos abandono.', examples:['Quero reservar mesa','Tem opção sem glúten?','Como faço um pedido?'], ctas:['Reservar mesa','Ver cardápio','Fazer pedido'], metric:'+ reservas' },
  { id:'fitness', label:'Fitness', badge:'Aulas e matrículas', icon:'spark', accent:'#7c3aed', pain:'Interessados querem modalidade, plano e horário antes de aceitar uma aula experimental.', solution:'A IA entende objetivo, unidade e disponibilidade e conduz para avaliação ou matrícula.', benefit:'Mais aulas experimentais qualificadas.', examples:['Quero uma aula experimental','Qual plano combina comigo?','Tem horário à noite?'], ctas:['Agendar aula','Ver modalidades','Falar com consultor'], metric:'+ matrículas' },
  { id:'home_services', label:'Serviços Residenciais', badge:'Orçamento e visita', icon:'home', accent:'#0f766e', pain:'Pedidos chegam sem endereço, categoria, urgência ou detalhes suficientes para o técnico.', solution:'A IA organiza o problema, região, disponibilidade e evidências antes do orçamento.', benefit:'Mais visitas produtivas e menos retrabalho.', examples:['Preciso de eletricista','Está vazando água','Quero orçamento de instalação'], ctas:['Pedir orçamento','Agendar visita','Falar com técnico'], metric:'+ visitas' },
];

export const getPlaybookById = (id) =>
  PLAYBOOKS_LANDING.find((playbook) => playbook.id === id) || PLAYBOOKS_LANDING[0];

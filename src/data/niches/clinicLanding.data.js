import { buildLeadyIAWidgetSnippet } from "../../config/playbookTenants.config";

/**
 * =========================================================
 * CLINIC LANDING DATA — LEADYIA
 * =========================================================
 * Conteúdo público da landing demo para clínicas.
 * Este arquivo também serve como referência para RAG/FAQ.
 */

export const clinicLanding = {
  tenantId: "TENANT_ID_CLINIC",
  niche: "clinic",
  brand: {
    name: "Clínica Vitalis",
    poweredBy: "LeadyIA",
    headline: "IA para clínicas atenderem, qualificarem e agendarem pacientes automaticamente.",
    subheadline:
      "Uma experiência premium para recepção digital: a IA tira dúvidas, identifica a necessidade do paciente, orienta próximos passos, pré-agenda consultas e pode gerar Pix de sinal quando configurado.",
  },
  hero: {
    badge: "Demo clínica • Atendimento com IA 24h",
    title: "Recepção inteligente para clínicas que não querem perder pacientes.",
    description:
      "Transforme visitantes do site em pacientes qualificados com uma IA treinada para responder dúvidas, explicar serviços, coletar dados, sugerir agendamento e encaminhar para a equipe quando necessário.",
    primaryCta: "Testar a IA da clínica",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "atendimento automático" },
      { value: "+ rápido", label: "triagem e agendamento" },
      { value: "Pix", label: "sinal opcional" },
    ],
  },
  pains: [
    {
      title: "Pacientes perguntam e somem",
      text:
        "A IA responde no momento em que o paciente está interessado, reduzindo abandono por demora no atendimento.",
    },
    {
      title: "Recepção sobrecarregada",
      text:
        "Perguntas repetidas sobre horários, valores, preparo e localização podem ser automatizadas sem perder o tom humano.",
    },
    {
      title: "Agendamento espalhado",
      text:
        "A LeadyIA coleta dados, entende o interesse e organiza o pedido de agendamento antes de acionar a equipe.",
    },
  ],
  services: [
    "Consulta clínica",
    "Avaliação inicial",
    "Retorno médico",
    "Exames e preparo",
    "Procedimentos ambulatoriais",
    "Teleconsulta",
    "Check-up preventivo",
    "Encaminhamento para especialista",
  ],
  flow: [
    {
      step: "01",
      title: "Entende a necessidade",
      text:
        "A IA identifica se o paciente quer consulta, exame, retorno, preparo, valor, convênio ou urgência.",
    },
    {
      step: "02",
      title: "Qualifica com cuidado",
      text:
        "Coleta nome, telefone, serviço desejado, preferência de data e canal de contato, sem parecer formulário frio.",
    },
    {
      step: "03",
      title: "Agenda ou pré-reserva",
      text:
        "Quando a clínica usa agenda integrada, a IA direciona para horários disponíveis. Sem integração, gera uma solicitação organizada para a equipe.",
    },
    {
      step: "04",
      title: "Pix quando necessário",
      text:
        "Se a clínica trabalha com sinal de consulta, avaliação ou reserva, o fluxo pode gerar Pix e marcar como pagamento pendente.",
    },
  ],
  conversations: [
    {
      user: "Quero marcar uma consulta para amanhã.",
      assistant:
        "Claro. Para te ajudar melhor, qual especialidade ou tipo de atendimento você precisa? Depois eu peço seu nome e melhor horário para pré-reservar.",
      tag: "Agendamento",
    },
    {
      user: "Vocês atendem por convênio?",
      assistant:
        "Atendemos alguns convênios conforme a especialidade. Me diga qual convênio você usa e o tipo de consulta que procura para eu verificar o melhor caminho.",
      tag: "Convênio",
    },
    {
      user: "Tem que pagar sinal?",
      assistant:
        "Alguns horários podem exigir sinal para confirmar a reserva. Quando isso for necessário, a IA envia o Pix de forma segura e identifica o pagamento pendente para a equipe acompanhar.",
      tag: "Pix",
    },
  ],
  benefits: [
    "Responde dúvidas frequentes sem sobrecarregar a recepção.",
    "Qualifica pacientes antes de encaminhar para atendimento humano.",
    "Ajuda a reduzir faltas quando há pré-reserva e sinal configurado.",
    "Organiza leads por interesse: consulta, exame, retorno, urgência ou convênio.",
    "Funciona no site e pode ser expandida para WhatsApp e Instagram.",
  ],
  faq: [
    {
      question: "A IA substitui a recepção da clínica?",
      answer:
        "Não. A IA atua como uma primeira camada de atendimento, respondendo dúvidas, coletando dados e organizando solicitações. A equipe continua responsável por decisões, confirmações e atendimento sensível.",
    },
    {
      question: "A IA pode agendar consultas automaticamente?",
      answer:
        "Sim, quando a clínica possui agenda configurada ou integração disponível. Quando não há integração, a IA cria uma pré-solicitação estruturada para a equipe confirmar.",
    },
    {
      question: "A IA pode gerar Pix para sinal de consulta?",
      answer:
        "Sim. Quando o Pix estiver habilitado no painel e o serviço exigir sinal, a IA pode gerar uma cobrança de reserva e deixar o status como pagamento pendente.",
    },
    {
      question: "A IA responde dúvidas médicas?",
      answer:
        "A IA pode responder dúvidas administrativas e orientações gerais da clínica, mas não substitui consulta médica, diagnóstico ou conduta profissional.",
    },
    {
      question: "Funciona para clínicas pequenas?",
      answer:
        "Sim. A LeadyIA é útil tanto para clínicas pequenas que querem parar de perder contatos quanto para operações maiores que precisam qualificar e organizar muitos atendimentos.",
    },
    {
      question: "Precisa instalar algo complexo?",
      answer:
        "Não. O widget pode ser instalado com um pequeno script no site, parecido com uma tag de analytics. A configuração do atendimento é feita no dashboard.",
    },
  ],
  widget: {
    title: "Teste a experiência como paciente",
    description:
      "O widget desta página deve simular uma assistente de clínica: atendimento acolhedor, triagem objetiva, agendamento e Pix quando fizer sentido.",
    script: buildLeadyIAWidgetSnippet("clinic"),
  },
};

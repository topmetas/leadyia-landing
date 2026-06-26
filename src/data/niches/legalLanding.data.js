export const legalLanding = {
  brand: {
    name: "Almeida & Associados",
    headline: "Demonstração LeadyIA para advocacia e escritórios jurídicos.",
    subheadline:
      "Uma landing de escritório jurídico fictício, criada para o lead testar atendimento, triagem, agendamento e encaminhamento para advogado em um contexto realista."
  },
  hero: {
    badge: "LeadyIA para Advocacia",
    title: "Atendimento jurídico com IA para qualificar casos, orientar próximos passos e agendar consultas.",
    description:
      "Mostre na prática como a LeadyIA atende visitantes de um escritório de advocacia, entende a área do direito, organiza a triagem e encaminha o lead para uma consulta com segurança e linguagem profissional.",
    primaryCta: "Testar assistente jurídica",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "triagem online" },
      { value: "5+", label: "áreas jurídicas" },
      { value: "Pix", label: "consulta opcional" }
    ]
  },
  pains: [
    {
      title: "Leads jurídicos chegam sem contexto",
      text: "A IA coleta área do direito, urgência, documentos citados e melhor canal de contato antes de encaminhar ao escritório."
    },
    {
      title: "Recepção demora e perde oportunidade",
      text: "O visitante recebe resposta imediata, entende como funciona a consulta e pode seguir para agendamento sem esperar atendimento humano."
    },
    {
      title: "Perguntas sensíveis precisam de limite",
      text: "O atendimento orienta de forma informativa, sem prometer resultado, sem substituir advogado e sem criar aconselhamento jurídico definitivo."
    }
  ],
  flow: [
    {
      step: "01",
      title: "Entende a área jurídica",
      text: "A IA identifica se o caso é trabalhista, previdenciário, família, consumidor, empresarial ou outra área."
    },
    {
      step: "02",
      title: "Faz triagem responsável",
      text: "Coleta contexto essencial, urgência, documentos mencionados, cidade, nome e melhor contato."
    },
    {
      step: "03",
      title: "Agenda consulta",
      text: "Quando o lead demonstra intenção, a IA conduz para agendamento com o advogado ou equipe responsável."
    },
    {
      step: "04",
      title: "Gera Pix se necessário",
      text: "Se o escritório cobrar consulta inicial ou sinal, a IA pode gerar cobrança Pix e manter o status como aguardando pagamento."
    }
  ],
  areas: [
    "Direito Trabalhista: demissão, rescisão, FGTS, horas extras e verbas trabalhistas.",
    "Direito Previdenciário: aposentadoria, INSS, auxílio-doença, BPC/LOAS e benefícios negados.",
    "Direito de Família: divórcio, pensão alimentícia, guarda, inventário e união estável.",
    "Direito do Consumidor: cobranças indevidas, plano de saúde, negativação e indenizações.",
    "Direito Empresarial: contratos, cobranças, societário, consultoria preventiva e compliance.",
    "Atendimento inicial: consulta, documentos, prazos, urgência e encaminhamento para especialista."
  ],
  safety: [
    "Não promete ganho de causa.",
    "Não substitui análise de advogado.",
    "Não define estratégia jurídica sem consulta.",
    "Não calcula valores definitivos sem documentos.",
    "Encaminha urgências e situações sensíveis para atendimento humano."
  ],
  widget: {
    description:
      "Use esta landing como demonstração pública para o nicho jurídico. O visitante conversa com a IA como se estivesse no site de um escritório real.",
    script: `<script\n  src="https://widget.leadyia.com/loader.js"\n  data-tenant-id="TENANT_ID_LEGAL"\n  data-segment="legal"\n  async\n></script>`
  },
  conversations: [
    {
      tag: "Trabalhista",
      user: "Fui demitido e quero saber se tenho direitos.",
      assistant:
        "Entendi. Posso fazer uma triagem inicial. Você recebeu aviso prévio, FGTS e termo de rescisão? Também posso agendar uma consulta trabalhista."
    },
    {
      tag: "Previdenciário",
      user: "Meu benefício do INSS foi negado. O que faço?",
      assistant:
        "Posso ajudar a organizar as informações. Você tem a carta de indeferimento e sabe a data da negativa? Um advogado pode avaliar recurso ou nova solicitação."
    },
    {
      tag: "Família",
      user: "Quero iniciar um divórcio.",
      assistant:
        "Certo. O divórcio pode ser consensual ou litigioso. Há filhos menores ou bens a partilhar? Posso encaminhar para uma consulta com especialista."
    }
  ],
  benefits: [
    "Triagem jurídica antes da consulta.",
    "Resumo automático para o advogado.",
    "Agendamento de consulta inicial.",
    "Pix opcional para consulta paga.",
    "Atendimento seguro, sem prometer resultado.",
    "Base pronta para indexação RAG."
  ],
  faq: [
    {
      question: "A IA pode dar orientação jurídica definitiva?",
      answer:
        "Não. A IA faz atendimento inicial, coleta informações e orienta próximos passos de forma informativa. A análise jurídica definitiva deve ser feita por advogado."
    },
    {
      question: "A IA pode agendar consulta com advogado?",
      answer:
        "Sim. Quando o visitante demonstra intenção, a IA coleta dados essenciais e encaminha para agendamento conforme a disponibilidade configurada."
    },
    {
      question: "É possível cobrar consulta por Pix?",
      answer:
        "Sim. Se o escritório configurar cobrança de consulta inicial, a IA pode gerar Pix e manter a consulta como pré-reservada até confirmação de pagamento."
    },
    {
      question: "Quais áreas jurídicas a IA pode atender?",
      answer:
        "A IA pode fazer triagem em áreas como trabalhista, previdenciário, família, consumidor, empresarial e outras áreas configuradas pelo escritório."
    },
    {
      question: "A IA pode prometer ganho de causa?",
      answer:
        "Não. O atendimento jurídico responsável nunca deve prometer resultado. A IA pode explicar que cada caso depende de análise documental e avaliação profissional."
    },
    {
      question: "Como o advogado recebe o caso?",
      answer:
        "O advogado pode receber um resumo com área jurídica, urgência, relato do lead, documentos mencionados, contato e próxima ação sugerida."
    },
    {
      question: "A IA substitui a secretária do escritório?",
      answer:
        "Ela automatiza o primeiro atendimento, responde dúvidas frequentes, qualifica leads e ajuda no agendamento. A equipe continua assumindo casos estratégicos e atendimentos sensíveis."
    },
    {
      question: "A IA pode atender fora do horário comercial?",
      answer:
        "Sim. O atendimento fica disponível 24 horas por dia para recepcionar visitantes e organizar solicitações para a equipe."
    }
  ]
};

export const legalRagKnowledge = {
  niche: "legal",
  site: "juridico.leadyia.com",
  tenantPlaceholder: "TENANT_ID_LEGAL",
  purpose:
    "Landing demonstrativa da LeadyIA para advocacia, funcionando como portfólio e base de conhecimento RAG.",
  rules: [
    "Não oferecer aconselhamento jurídico definitivo.",
    "Não prometer resultado ou ganho de causa.",
    "Coletar contexto antes de sugerir consulta.",
    "Encaminhar urgências e dúvidas sensíveis para advogado humano.",
    "Usar linguagem clara, profissional e segura."
  ],
  intents: [
    "agendar_consulta_juridica",
    "triagem_trabalhista",
    "triagem_previdenciaria",
    "triagem_familia",
    "triagem_consumidor",
    "triagem_empresarial",
    "pix_consulta_juridica",
    "falar_com_advogado"
  ],
  ctas: [
    "Agendar consulta",
    "Falar com advogado",
    "Enviar documentos",
    "Pagar consulta por Pix",
    "Receber resumo do caso"
  ],
  faq: legalLanding.faq
};

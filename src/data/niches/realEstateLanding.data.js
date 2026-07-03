import { buildLeadyIAWidgetSnippet } from "../../config/playbookTenants.config";

export const realEstateLanding = {
  brand: {
    name: "Prime House Imóveis",
    headline: "Demonstração LeadyIA para imobiliárias, corretores e incorporadoras.",
    subheadline:
      "Uma landing imobiliária fictícia, criada para o lead testar atendimento, qualificação, recomendação de imóveis, agendamento de visitas e encaminhamento para corretor em um contexto realista."
  },
  hero: {
    badge: "LeadyIA para Imobiliárias",
    title: "Atendimento imobiliário com IA para captar leads, qualificar interesse e agendar visitas automaticamente.",
    description:
      "Mostre na prática como a LeadyIA conversa com compradores, locatários e proprietários, entende o perfil do imóvel desejado, organiza o lead e conduz para visita, WhatsApp ou corretor.",
    primaryCta: "Testar assistente imobiliária",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "captação online" },
      { value: "3", label: "compra, aluguel e venda" },
      { value: "Pix", label: "reserva opcional" }
    ]
  },
  pains: [
    {
      title: "Leads perguntam por imóveis sem perfil definido",
      text: "A IA coleta cidade, bairro, tipo de imóvel, faixa de preço, dormitórios, objetivo e urgência antes de encaminhar ao corretor."
    },
    {
      title: "Corretores perdem tempo com curiosos",
      text: "A assistente diferencia pesquisa inicial, interesse real, lead quente e solicitação de visita, ajudando a priorizar atendimento humano."
    },
    {
      title: "Visitas precisam de confirmação e contexto",
      text: "A LeadyIA organiza data, horário, imóvel de interesse, dados do lead e pode gerar Pix de reserva quando a imobiliária exigir sinal."
    }
  ],
  flow: [
    {
      step: "01",
      title: "Entende o objetivo",
      text: "A IA identifica se o visitante quer comprar, alugar, vender, anunciar imóvel, financiar ou agendar uma visita."
    },
    {
      step: "02",
      title: "Qualifica o perfil",
      text: "Coleta região, tipo de imóvel, orçamento, quartos, garagem, prazo, forma de pagamento e melhor contato."
    },
    {
      step: "03",
      title: "Recomenda imóveis ou categoria",
      text: "Quando há catálogo integrado, a IA pode indicar imóveis ou categorias compatíveis com a intenção do lead."
    },
    {
      step: "04",
      title: "Agenda visita e aciona corretor",
      text: "Se o lead quiser visitar, a IA pré-agenda o horário, envia dados ao corretor e gera Pix de reserva se configurado."
    }
  ],
  segments: [
    "Compra de imóveis: apartamentos, casas, studios, terrenos, lançamentos e imóveis prontos.",
    "Aluguel residencial: busca por cidade, bairro, valor, dormitórios, vagas e prazo de mudança.",
    "Venda e captação: proprietários que desejam anunciar, avaliar ou vender um imóvel.",
    "Lançamentos: interessados em plantas, condições, entrada, financiamento e visita ao decorado.",
    "Visitas: agendamento presencial, tour online, confirmação de horário e dados do visitante.",
    "Financiamento: triagem inicial sobre entrada, renda, simulação e encaminhamento para consultor."
  ],
  safety: [
    "Não promete aprovação de financiamento.",
    "Não garante disponibilidade do imóvel sem confirmação do corretor.",
    "Não informa valores definitivos quando dependerem de atualização do catálogo.",
    "Encaminha negociação, proposta e documentos para atendimento humano.",
    "Deixa claro quando uma visita está pré-agendada ou aguardando confirmação."
  ],
  widget: {
    description:
      "Use esta landing como demonstração pública para imobiliárias. O visitante conversa com a IA como se estivesse no site de uma imobiliária real, buscando imóveis, tirando dúvidas e agendando visitas.",
    script: buildLeadyIAWidgetSnippet("realestate")
  },
  conversations: [
    {
      tag: "Compra",
      user: "Procuro apartamento em Goiânia até R$ 450 mil.",
      assistant:
        "Perfeito. Você prefere quais bairros? Quantos quartos e vagas precisa? Posso separar opções compatíveis e agendar uma visita."
    },
    {
      tag: "Aluguel",
      user: "Tem casa para alugar com 3 quartos?",
      assistant:
        "Tenho como ajudar. Qual cidade ou bairro você procura e qual faixa de aluguel mensal deseja manter? Assim filtro as melhores opções."
    },
    {
      tag: "Visita",
      user: "Quero visitar esse apartamento amanhã.",
      assistant:
        "Claro. Posso pré-agendar a visita. Me informe seu nome, WhatsApp e melhor período para confirmar com o corretor responsável."
    }
  ],
  benefits: [
    "Qualificação imobiliária antes do corretor assumir.",
    "Agendamento de visitas presenciais ou online.",
    "Resumo automático do perfil do lead.",
    "Pix opcional para reserva de visita, se configurado.",
    "Encaminhamento para corretor por intenção e região.",
    "Base pronta para indexação RAG."
  ],
  faq: [
    {
      question: "A IA pode recomendar imóveis específicos?",
      answer:
        "Sim, quando a imobiliária possui catálogo integrado ou base de imóveis indexada. A IA pode sugerir opções compatíveis com localização, valor, tipo de imóvel e perfil do lead."
    },
    {
      question: "A IA pode agendar visita ao imóvel?",
      answer:
        "Sim. Quando o visitante demonstra intenção de visitar, a IA coleta imóvel de interesse, nome, WhatsApp, data e período desejado, criando uma pré-reserva para confirmação."
    },
    {
      question: "É possível cobrar Pix para reserva de visita?",
      answer:
        "Sim. Se a imobiliária configurar cobrança de reserva ou sinal, a IA pode gerar Pix e manter a visita como aguardando pagamento até confirmação."
    },
    {
      question: "A IA atende compra, aluguel e venda?",
      answer:
        "Sim. A IA pode identificar se o lead deseja comprar, alugar, vender, anunciar imóvel ou falar com corretor, conduzindo cada fluxo com perguntas adequadas."
    },
    {
      question: "A IA substitui o corretor?",
      answer:
        "Não. Ela automatiza o primeiro atendimento, responde dúvidas frequentes, qualifica leads e agenda visitas. A negociação, proposta e fechamento continuam com o corretor."
    },
    {
      question: "A IA pode captar imóveis de proprietários?",
      answer:
        "Sim. Ela pode coletar tipo do imóvel, endereço aproximado, valor pretendido, fotos, nome e contato do proprietário, encaminhando para avaliação da equipe."
    },
    {
      question: "A IA pode explicar financiamento?",
      answer:
        "Pode explicar de forma inicial, coletar informações básicas e encaminhar para simulação ou consultor. Ela não deve prometer aprovação de crédito."
    },
    {
      question: "Como o corretor recebe o lead?",
      answer:
        "O corretor pode receber um resumo com objetivo do lead, região desejada, orçamento, imóvel de interesse, urgência, contato e próxima ação sugerida."
    }
  ]
};

export const realEstateRagKnowledge = {
  niche: "realestate",
  site: "imobiliaria.leadyia.com",
  tenantPlaceholder: "TENANT_ID_REALESTATE",
  purpose:
    "Landing demonstrativa da LeadyIA para imobiliárias, corretores e incorporadoras, funcionando como portfólio e base de conhecimento RAG.",
  rules: [
    "Não prometer aprovação de financiamento.",
    "Não garantir disponibilidade sem confirmação do catálogo ou corretor.",
    "Coletar localização, tipo, orçamento e objetivo antes de sugerir imóvel.",
    "Encaminhar negociação e proposta para corretor humano.",
    "Diferenciar pré-agendamento de visita confirmada."
  ],
  intents: [
    "comprar_imovel",
    "alugar_imovel",
    "vender_imovel",
    "agendar_visita",
    "falar_com_corretor",
    "captar_imovel",
    "financiamento_imobiliario",
    "pix_reserva_visita"
  ],
  ctas: [
    "Ver imóveis",
    "Agendar visita",
    "Falar com corretor",
    "Simular financiamento",
    "Anunciar meu imóvel",
    "Pagar reserva por Pix"
  ],
  faq: realEstateLanding.faq
};

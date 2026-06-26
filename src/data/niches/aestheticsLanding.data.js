/**
 * =========================================================
 * AESTHETICS LANDING DATA — LEADYIA
 * =========================================================
 * Conteúdo público da landing demo para clínicas de estética.
 * Este arquivo também serve como referência para RAG/FAQ.
 */

export const aestheticsLanding = {
  tenantId: "TENANT_ID_ESTETICA",
  niche: "aesthetics",
  brand: {
    name: "Essenza Estética Avançada",
    poweredBy: "LeadyIA",
    headline: "IA para clínicas de estética venderem procedimentos, qualificarem leads e agendarem avaliações automaticamente.",
    subheadline:
      "Uma experiência premium para atendimento estético: a IA responde dúvidas, entende o objetivo do cliente, explica procedimentos, coleta dados, agenda avaliação e pode gerar Pix de sinal quando configurado.",
  },
  hero: {
    badge: "Demo estética • Atendimento com IA 24h",
    title: "Atendimento inteligente para estética vender mais avaliações e procedimentos.",
    description:
      "Transforme visitantes do site em leads qualificados com uma IA treinada para acolher dúvidas sobre estética facial, corporal, harmonização, protocolos, valores, agenda e reserva com Pix.",
    primaryCta: "Testar a IA da estética",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "captação automática" },
      { value: "+ leads", label: "avaliações agendadas" },
      { value: "Pix", label: "sinal opcional" },
    ],
  },
  pains: [
    {
      title: "Leads perguntam preço e desaparecem",
      text:
        "A IA responde na hora, explica que o melhor protocolo depende da avaliação e conduz o lead para o próximo passo sem parecer robô.",
    },
    {
      title: "Equipe perde tempo com perguntas repetidas",
      text:
        "Dúvidas sobre botox, limpeza de pele, peeling, depilação, drenagem, horários, preparo e formas de pagamento podem ser automatizadas.",
    },
    {
      title: "Agenda e sinais ficam desorganizados",
      text:
        "A LeadyIA coleta dados, identifica o procedimento desejado e pode gerar pré-reserva com Pix quando a clínica exige sinal para avaliação ou horário.",
    },
  ],
  services: [
    "Avaliação estética",
    "Botox e toxina botulínica",
    "Limpeza de pele",
    "Peeling facial",
    "Harmonização facial",
    "Preenchimento",
    "Drenagem linfática",
    "Tratamentos corporais",
    "Depilação a laser",
    "Protocolos personalizados",
  ],
  flow: [
    {
      step: "01",
      title: "Entende o objetivo do lead",
      text:
        "A IA identifica se a pessoa quer rejuvenescimento, manchas, acne, gordura localizada, flacidez, depilação, avaliação ou pacote.",
    },
    {
      step: "02",
      title: "Qualifica sem parecer formulário",
      text:
        "Coleta nome, telefone, procedimento de interesse, melhor período, histórico básico e expectativa do lead com linguagem acolhedora.",
    },
    {
      step: "03",
      title: "Conduz para avaliação",
      text:
        "Quando o procedimento exige análise profissional, a IA explica com clareza e direciona para avaliação presencial ou online.",
    },
    {
      step: "04",
      title: "Pix para sinal ou reserva",
      text:
        "Se a estética usa sinal para reservar horário, avaliação ou pacote, o fluxo pode gerar Pix e registrar o pagamento como pendente até confirmação.",
    },
  ],
  conversations: [
    {
      user: "Quero saber o valor do botox.",
      assistant:
        "Claro. O valor pode variar conforme avaliação, regiões tratadas e quantidade necessária. Posso te ajudar a agendar uma avaliação para indicar o melhor protocolo?",
      tag: "Botox",
    },
    {
      user: "Vocês fazem limpeza de pele?",
      assistant:
        "Sim. A limpeza de pele pode ajudar na renovação, remoção de impurezas e preparo para outros cuidados. Qual melhor período para você fazer uma avaliação ou agendar?",
      tag: "Limpeza de pele",
    },
    {
      user: "Precisa pagar sinal para reservar?",
      assistant:
        "Alguns horários e avaliações podem exigir sinal para confirmação. Quando necessário, eu envio o Pix de forma segura e deixo sua reserva identificada para a equipe acompanhar.",
      tag: "Pix",
    },
  ],
  benefits: [
    "Responde dúvidas sobre procedimentos sem prometer resultado estético.",
    "Qualifica leads antes de encaminhar para consultora ou profissional responsável.",
    "Ajuda a transformar curiosos em avaliações agendadas.",
    "Organiza interesses por procedimento: botox, limpeza de pele, harmonização, corporal, laser ou pacote.",
    "Funciona no site e pode ser expandida para WhatsApp e Instagram.",
  ],
  faq: [
    {
      question: "A IA pode informar valores de procedimentos estéticos?",
      answer:
        "Sim, quando a estética cadastrar valores ou faixas no painel. Para procedimentos que dependem de avaliação, a IA deve explicar que o valor final varia conforme necessidade, protocolo e análise profissional.",
    },
    {
      question: "A IA pode prometer resultado antes da avaliação?",
      answer:
        "Não. A IA deve orientar com responsabilidade, explicar benefícios gerais e direcionar para avaliação profissional. Ela não deve prometer resultado, diagnóstico ou indicação definitiva sem avaliação.",
    },
    {
      question: "A IA pode agendar avaliação estética?",
      answer:
        "Sim. Quando a agenda estiver configurada, a IA pode coletar dados e sugerir horários. Sem integração, ela cria uma solicitação estruturada para a equipe confirmar.",
    },
    {
      question: "A IA pode gerar Pix para sinal de avaliação?",
      answer:
        "Sim. Se o Pix estiver habilitado e a estética exigir sinal para reservar avaliação, procedimento ou pacote, a IA pode gerar a cobrança e marcar o status como pagamento pendente.",
    },
    {
      question: "Funciona para estética pequena?",
      answer:
        "Sim. A LeadyIA ajuda estéticas pequenas a responderem leads rapidamente, reduzirem abandono e organizarem solicitações de avaliação sem depender de atendimento manual o tempo todo.",
    },
    {
      question: "Quais canais podem usar essa IA?",
      answer:
        "A experiência pode começar no site com widget e ser expandida para WhatsApp, Instagram e outros canais conforme a configuração da LeadyIA.",
    },
  ],
  widget: {
    title: "Teste a experiência como cliente de estética",
    description:
      "O widget desta página deve simular uma consultora de estética: acolhedora, comercial, cuidadosa com promessas e focada em avaliação, agenda e reserva quando fizer sentido.",
    script: `<script\n  src="https://widget.leadyia.com/loader.js"\n  data-tenant-id="TENANT_ID_ESTETICA"\n  data-niche="aesthetics"\n  async\n></script>`,
  },
};

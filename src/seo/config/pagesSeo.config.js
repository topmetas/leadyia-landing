export const PAGE_SEO = {
  home: {
    path: "/",
    title: "LeadyIA | IA para Atendimento, Vendas e Automação Comercial",
    description:
      "Automatize atendimento, vendas e qualificação de leads com a LeadyIA. IA integrada ao site, WhatsApp e Instagram. Agendamentos, Pix, RAG, CRM e automação comercial em uma única plataforma.",
    h1: "Transforme seu atendimento em uma máquina de vendas com Inteligência Artificial",
    schemaType: "SoftwareApplication",
    keywords: ["IA para atendimento", "chatbot para empresas", "assistente virtual IA", "automação de vendas", "CRM com IA"],
    image: "/preview-leadyia-v500.png"
  },
  clinic: {
    path: "/clinica",
    title: "IA para Clínicas | Agendamento e Recepção Virtual",
    description:
      "Veja como a LeadyIA atende pacientes, tira dúvidas, agenda consultas e qualifica leads para clínicas com recepção virtual inteligente.",
    schemaType: "MedicalBusiness",
    keywords: ["IA para clínicas", "chatbot clínica", "agendamento de consultas", "recepção virtual", "secretária virtual clínica"],
    image: "/preview-leadyia-v500.png"
  },
  aesthetics: {
    path: "/estetica",
    title: "IA para Estética | Atendimento, Avaliação e Agendamento",
    description:
      "Demonstração da LeadyIA para clínicas de estética: qualificação de leads, dúvidas sobre procedimentos, agendamento de avaliação e Pix de reserva.",
    schemaType: "HealthAndBeautyBusiness",
    keywords: ["IA para estética", "chatbot estética", "botox", "harmonização facial", "agendamento estético"],
    image: "/preview-leadyia-v500.png"
  },
  legal: {
    path: "/juridico",
    title: "IA para Advocacia | Triagem Jurídica e Agendamento",
    description:
      "Veja a LeadyIA fazendo triagem inicial, qualificando casos e agendando consultas para escritórios de advocacia sem prometer resultado jurídico.",
    schemaType: "LegalService",
    keywords: ["IA para advocacia", "chatbot jurídico", "atendimento jurídico", "triagem jurídica", "qualificação de clientes advocacia"],
    image: "/preview-leadyia-v500.png"
  },
  realestate: {
    path: "/imobiliaria",
    title: "IA para Imobiliárias | Leads, Imóveis e Visitas",
    description:
      "Demonstração da LeadyIA para imobiliárias: qualificação de compradores, indicação de imóveis, agendamento de visitas e atendimento com corretores.",
    schemaType: "RealEstateAgent",
    keywords: ["IA para imobiliárias", "chatbot imobiliária", "atendimento imobiliário", "agendamento de visitas", "leads imobiliários"],
    image: "/preview-leadyia-v500.png"
  },
  education: {
    path: "/educacao",
    title: "IA para Educação | Matrículas, Cursos e Atendimento",
    description:
      "A LeadyIA ajuda escolas, cursos e mentorias a atender interessados, qualificar alunos, tirar dúvidas e conduzir matrículas automaticamente.",
    schemaType: "EducationalOrganization",
    keywords: ["IA para escolas", "chatbot educação", "atendimento educacional", "matrículas online", "IA para cursos"],
    image: "/preview-leadyia-v500.png"
  },
  ecommerce: {
    path: "/ecommerce",
    title: "IA para E-commerce | Produtos, Categorias e Vendas",
    description:
      "Veja como a LeadyIA recomenda produtos, responde dúvidas, direciona categorias e melhora a conversão em lojas virtuais e e-commerces.",
    schemaType: "Store",
    keywords: ["IA para ecommerce", "chatbot ecommerce", "recomendação de produtos", "recuperação de carrinho", "vendas online"],
    image: "/preview-leadyia-v500.png"
  }
};

export const PUBLIC_ROUTES = [
  { path: "/", key: "home", priority: 1.0 },
  { path: "/planos", key: "home", priority: 0.8 },
  { path: "/playbooks", key: "home", priority: 0.9 },
  { path: "/clinica", key: "clinic", priority: 0.9 },
  { path: "/estetica", key: "aesthetics", priority: 0.9 },
  { path: "/juridico", key: "legal", priority: 0.9 },
  { path: "/imobiliaria", key: "realestate", priority: 0.9 },
  { path: "/educacao", key: "education", priority: 0.9 },
  { path: "/ecommerce", key: "ecommerce", priority: 0.9 },
  { path: "/register", key: "home", priority: 0.7 },
  { path: "/contato", key: "home", priority: 0.7 }
];

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "LeadyIA — IA Comercial para Empresas | Chatbot com IA, WhatsApp, Agenda e Vendas",
    description:
      "Automatize atendimento, vendas e captação de clientes com IA. Chatbot inteligente para clínicas, imobiliárias, advocacia, educação, estética, e-commerce e empresas. Agende consultas, gere Pix, qualifique leads e aumente suas conversões.",
    h1: "Transforme seu atendimento em uma máquina de vendas com Inteligência Artificial",
    schemaType: "SoftwareApplication",
    keywords: ["chatbot IA", "inteligência artificial", "chatbot para empresas", "chatbot whatsapp", "assistente virtual", "automação comercial", "geração de leads", "qualificação de leads", "agenda automática", "pix automático", "IA para vendas", "CRM IA", "automação atendimento"],
    image: "/og-image.png"
  },
  clinic: {
    path: "/clinica",
    title: "IA para Clínicas | Agendamento e Recepção Virtual",
    description:
      "Veja como a LeadyIA atende pacientes, tira dúvidas, agenda consultas e qualifica leads para clínicas com recepção virtual inteligente.",
    schemaType: "MedicalBusiness",
    keywords: ["IA para clínicas", "chatbot clínica", "agendamento de consultas", "recepção virtual", "secretária virtual clínica"],
    image: "/og-image.png"
  },
  aesthetics: {
    path: "/estetica",
    title: "IA para Estética | Atendimento, Avaliação e Agendamento",
    description:
      "Demonstração da LeadyIA para clínicas de estética: qualificação de leads, dúvidas sobre procedimentos, agendamento de avaliação e Pix de reserva.",
    schemaType: "HealthAndBeautyBusiness",
    keywords: ["IA para estética", "chatbot estética", "botox", "harmonização facial", "agendamento estético"],
    image: "/og-image.png"
  },
  legal: {
    path: "/juridico",
    title: "IA para Advocacia | Triagem Jurídica e Agendamento",
    description:
      "Veja a LeadyIA fazendo triagem inicial, qualificando casos e agendando consultas para escritórios de advocacia sem prometer resultado jurídico.",
    schemaType: "LegalService",
    keywords: ["IA para advocacia", "chatbot jurídico", "atendimento jurídico", "triagem jurídica", "qualificação de clientes advocacia"],
    image: "/og-image.png"
  },
  realestate: {
    path: "/imobiliaria",
    title: "IA para Imobiliárias | Leads, Imóveis e Visitas",
    description:
      "Demonstração da LeadyIA para imobiliárias: qualificação de compradores, indicação de imóveis, agendamento de visitas e atendimento com corretores.",
    schemaType: "RealEstateAgent",
    keywords: ["IA para imobiliárias", "chatbot imobiliária", "atendimento imobiliário", "agendamento de visitas", "leads imobiliários"],
    image: "/og-image.png"
  },
  education: {
    path: "/educacao",
    title: "IA para Educação | Matrículas, Cursos e Atendimento",
    description:
      "A LeadyIA ajuda escolas, cursos e mentorias a atender interessados, qualificar alunos, tirar dúvidas e conduzir matrículas automaticamente.",
    schemaType: "EducationalOrganization",
    keywords: ["IA para escolas", "chatbot educação", "atendimento educacional", "matrículas online", "IA para cursos"],
    image: "/og-image.png"
  },
  ecommerce: {
    path: "/ecommerce",
    title: "IA para E-commerce | Produtos, Categorias e Vendas",
    description:
      "Veja como a LeadyIA recomenda produtos, responde dúvidas, direciona categorias e melhora a conversão em lojas virtuais e e-commerces.",
    schemaType: "Store",
    keywords: ["IA para ecommerce", "chatbot ecommerce", "recomendação de produtos", "recuperação de carrinho", "vendas online"],
    image: "/og-image.png"
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
  { path: "/saas", key: "home", priority: 0.85 },
  { path: "/dentista", key: "home", priority: 0.9 },
  { path: "/veterinaria", key: "home", priority: 0.9 },
  { path: "/contabilidade", key: "home", priority: 0.85 },
  { path: "/automotivo", key: "home", priority: 0.85 },
  { path: "/restaurante", key: "home", priority: 0.85 },
  { path: "/fitness", key: "home", priority: 0.85 },
  { path: "/servicos-residenciais", key: "home", priority: 0.85 },
  { path: "/pricing", key: "home", priority: 0.8 },
  { path: "/register", key: "home", priority: 0.7 },
  { path: "/contato", key: "home", priority: 0.7 }
];

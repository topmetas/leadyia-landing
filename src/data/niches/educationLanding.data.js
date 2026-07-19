export const educationLanding = {
  version: "v1088",
  slug: "education",
  brand: {
    name: "LeadyIA Educação",
    headline: "Atendimento educacional inteligente, acolhedor e disponível 24 horas.",
    subheadline: "Qualifique responsáveis e alunos, organize matrículas, avaliações e aulas experimentais sem perder o contexto da conversa."
  },
  hero: {
    badge: "Playbook Education Enterprise v1088",
    title: "Transforme dúvidas de famílias e alunos em matrículas, avaliações e aulas experimentais.",
    description: "A LeadyIA entende o perfil do aluno, identifica o objetivo educacional, orienta sobre unidades, turnos e documentos e conduz o atendimento até a secretaria.",
    primaryCta: "Testar atendimento educacional",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24/7", label: "atendimento disponível" },
      { value: "2026.9", label: "contrato Enterprise" },
      { value: "100%", label: "isolamento vertical" }
    ]
  },
  pains: [
    { title: "Famílias sem resposta", text: "Atendimentos demorados fazem responsáveis desistirem antes de conhecer a proposta pedagógica." },
    { title: "Triagem desorganizada", text: "Informações de idade, série, objetivo, turno e unidade ficam espalhadas e precisam ser perguntadas novamente." },
    { title: "Agenda e secretaria sobrecarregadas", text: "Matrículas, avaliações e aulas experimentais consomem tempo da equipe quando não existe automação." }
  ],
  flow: [
    { step: "01", title: "Entende o perfil", text: "Identifica responsável, aluno, idade, série e modalidade desejada." },
    { step: "02", title: "Classifica o objetivo", text: "Reconhece matrícula, avaliação pedagógica, reforço, curso livre ou aula experimental." },
    { step: "03", title: "Organiza o agendamento", text: "Consulta unidade, turno, data e período e evita duplicidade de solicitações." },
    { step: "04", title: "Entrega o resumo", text: "Encaminha o contexto completo para a secretaria e mantém o follow-up ativo." }
  ],
  segments: [
    "Educação infantil",
    "Alfabetização",
    "Ensino fundamental",
    "Reforço escolar",
    "Cursos livres",
    "Avaliação pedagógica",
    "Aula experimental",
    "Matrícula escolar",
    "Atendimento da secretaria"
  ],
  safety: [
    "Não realiza diagnóstico pedagógico ou clínico.",
    "Classifica necessidades apenas para organizar o atendimento.",
    "Preserva o contexto por tenant e por vertical.",
    "Transfere casos sensíveis para atendimento humano.",
    "Mantém histórico, auditoria e recuperação de estado."
  ],
  widget: {
    description: "Demonstração do playbook educacional com identificação do aluno, objetivo, unidade, agenda, documentos e transferência para a secretaria.",
    script: '<script src="https://widget.leadyia.com/v1/widget.js" data-tenant="SEU_TENANT_ID" data-playbook="education" data-locale="pt-BR" async></script>'
  },
  conversations: [
    { tag: "Matrícula", user: "Quero matricular minha filha no 2º ano.", assistant: "Claro. Qual a idade dela, a cidade e o turno de preferência?" },
    { tag: "Avaliação", user: "Meu filho está com dificuldade para ler.", assistant: "Posso ajudar a agendar uma avaliação pedagógica. Essa classificação é apenas informativa e não representa diagnóstico." },
    { tag: "Aula experimental", user: "Quero conhecer o curso antes de matricular.", assistant: "Ótimo. Vou verificar unidade, modalidade, data e período disponíveis para uma aula experimental." }
  ],
  benefits: [
    "Perfil completo de responsável e aluno",
    "Objetivo educacional e necessidade de aprendizagem",
    "Unidade, cidade, turno e modalidade",
    "Matrícula, avaliação e aula experimental",
    "Checklist de documentos",
    "WhatsApp com resumo do atendimento",
    "Transferência para secretaria",
    "Follow-up, deduplicação e recuperação de estado",
    "Analytics, health e audit trail"
  ],
  faq: [
    { question: "Quais modalidades a instituição oferece?", answer: "A assistente pode apresentar educação infantil, alfabetização, ensino fundamental, reforço escolar, cursos livres e outras modalidades configuradas pela instituição." },
    { question: "Como funciona a matrícula?", answer: "A LeadyIA coleta os dados essenciais, identifica unidade e turno, informa os documentos e encaminha o resumo para a secretaria." },
    { question: "É possível agendar uma avaliação pedagógica?", answer: "Sim. A assistente organiza data, período, unidade e dados do aluno, sempre deixando claro que a triagem não substitui avaliação profissional." },
    { question: "Posso marcar uma aula experimental?", answer: "Sim. O fluxo consulta disponibilidade, evita agendamentos duplicados e envia a confirmação com o próximo passo." },
    { question: "Quais documentos são necessários?", answer: "O checklist pode incluir documentos do responsável e do aluno, comprovante de residência e relatórios escolares anteriores, conforme o serviço." },
    { question: "Posso falar com a secretaria?", answer: "Sim. O handoff envia para a secretaria um resumo com aluno, objetivo, unidade, turno e dados já informados, evitando repetição." }
  ]
};

// Alias mantido para compatibilidade com módulos gerados no v1088.
export const educationLandingData = educationLanding;

export default educationLanding;

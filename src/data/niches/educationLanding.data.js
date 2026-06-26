export const educationLanding = {
  brand: {
    name: "Leady Education Demo",
    headline: "Demonstração LeadyIA para escolas, cursos, mentorias e negócios educacionais.",
    subheadline:
      "Uma landing educacional fictícia, criada para o lead testar matrícula, dúvidas de cursos, diagnóstico pedagógico, agendamento de atendimento e cobrança de sinal em um contexto realista."
  },
  hero: {
    badge: "LeadyIA para Educação",
    title: "Atendimento com IA para captar alunos, responder famílias e aumentar matrículas todos os dias.",
    description:
      "Mostre na prática como a LeadyIA conversa com pais, responsáveis, alunos e interessados, explica cursos, qualifica intenção, agenda atendimento pedagógico e conduz para matrícula ou consultoria.",
    primaryCta: "Testar assistente educacional",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "captação ativa" },
      { value: "Pix", label: "matrícula/sinal opcional" },
      { value: "RAG", label: "FAQ pedagógico" }
    ]
  },
  pains: [
    {
      title: "Pais perguntam e ninguém responde rápido",
      text: "A IA acolhe responsáveis, responde dúvidas sobre turma, metodologia, valores, horários, matrícula e encaminha para atendimento humano quando necessário."
    },
    {
      title: "Leads chegam sem qualificação",
      text: "A assistente identifica idade, série, necessidade, objetivo, cidade, canal de interesse e urgência antes de enviar o lead para a equipe."
    },
    {
      title: "Matrículas e diagnósticos precisam de condução",
      text: "A LeadyIA organiza a conversa, sugere o próximo passo, agenda reunião, diagnóstico pedagógico, aula experimental ou envia CTA de matrícula."
    }
  ],
  flow: [
    {
      step: "01",
      title: "Entende o objetivo educacional",
      text: "A IA identifica se o visitante busca escola, reforço, curso, mentoria, alfabetização, inclusão, psicopedagogia, aula experimental ou matrícula."
    },
    {
      step: "02",
      title: "Qualifica aluno e responsável",
      text: "Coleta dados essenciais como nome, idade, ano escolar, dificuldade, disponibilidade, contato e melhor canal de retorno."
    },
    {
      step: "03",
      title: "Orienta com linguagem pedagógica",
      text: "Responde com clareza, sem prometer resultados irreais, explicando metodologia, acompanhamento, rotina, avaliação e próximos passos."
    },
    {
      step: "04",
      title: "Agenda ou conduz para matrícula",
      text: "Se houver interesse, agenda diagnóstico, reunião, visita, aula experimental ou gera Pix de sinal/matrícula quando configurado."
    }
  ],
  segments: [
    "Escolas: matrícula, visita, turmas, horários, proposta pedagógica e documentação.",
    "Cursos livres: inscrição, módulos, duração, certificado, valores e turmas disponíveis.",
    "Reforço escolar: série, disciplina, dificuldade, disponibilidade e plano de acompanhamento.",
    "Psicopedagogia: triagem inicial, queixa principal, idade, histórico escolar e agendamento de avaliação.",
    "Mentorias: qualificação do objetivo, perfil do aluno, expectativa e chamada de diagnóstico.",
    "Produtos educacionais: indicação de materiais, apostilas, jogos pedagógicos, PDFs e kits por faixa etária."
  ],
  safety: [
    "Não promete cura, aprovação, alfabetização garantida ou resultado pedagógico absoluto.",
    "Não substitui avaliação profissional quando houver queixas de aprendizagem, desenvolvimento ou comportamento.",
    "Não coleta dados sensíveis de crianças sem finalidade clara e consentimento do responsável.",
    "Encaminha casos complexos para coordenação, professor, psicopedagogo ou equipe humana.",
    "Mantém linguagem acolhedora, pedagógica, objetiva e adequada para famílias."
  ],
  widget: {
    description:
      "Use esta landing como demonstração pública para negócios educacionais. O visitante testa a IA como se estivesse conversando com uma escola, curso, mentoria ou atendimento pedagógico real.",
    script: `<script\n  src="https://widget.leadyia.com/loader.js"\n  data-tenant-id="TENANT_ID_EDUCATION"\n  data-segment="education"\n  async\n></script>`
  },
  conversations: [
    {
      tag: "Matrícula",
      user: "Quero saber sobre matrícula para meu filho.",
      assistant:
        "Claro. Posso te ajudar. Qual a idade dele e para qual ano ou etapa escolar você está buscando vaga?"
    },
    {
      tag: "Diagnóstico",
      user: "Minha filha troca letras e tem dificuldade para ler.",
      assistant:
        "Entendi. Posso coletar algumas informações iniciais e agendar uma conversa de diagnóstico pedagógico para entender melhor a necessidade dela."
    },
    {
      tag: "Curso",
      user: "Vocês têm curso de alfabetização?",
      assistant:
        "Temos uma trilha voltada para alfabetização, consciência fonológica, leitura e escrita. Posso te mostrar como funciona e verificar a melhor turma."
    }
  ],
  benefits: [
    "Captação de leads educacionais com perguntas certas.",
    "Agendamento de diagnóstico, reunião, visita ou aula experimental.",
    "Pix opcional para matrícula, sinal, reserva de vaga ou avaliação.",
    "FAQ pronto para metodologia, valores, horários, documentos e turmas.",
    "Triagem segura para dificuldades de aprendizagem e encaminhamento humano.",
    "Base pronta para indexação RAG e demonstração comercial por nicho."
  ],
  faq: [
    {
      question: "A IA pode atender pais interessados em matrícula?",
      answer:
        "Sim. A IA pode explicar etapas de matrícula, coletar idade, série, turno desejado, contato do responsável e encaminhar para visita, reunião ou inscrição."
    },
    {
      question: "A IA pode agendar uma visita à escola ou aula experimental?",
      answer:
        "Sim. Quando o módulo de agenda está configurado, a IA pode sugerir horários, criar pré-agendamento e enviar confirmação para a equipe."
    },
    {
      question: "A IA pode cobrar Pix de matrícula ou reserva?",
      answer:
        "Sim, se o tenant tiver pagamento habilitado. O Pix pode ser usado para sinal, matrícula, reserva de vaga, avaliação ou aula experimental, conforme regra da instituição."
    },
    {
      question: "A IA pode responder dúvidas pedagógicas?",
      answer:
        "Sim, desde que a base de conhecimento esteja configurada. Ela pode explicar metodologia, rotina, avaliação, acompanhamento, material e objetivos de aprendizagem."
    },
    {
      question: "A IA pode falar sobre dificuldades de aprendizagem?",
      answer:
        "Sim, com cuidado. Ela pode acolher a dúvida, coletar informações básicas e orientar o agendamento com profissional, sem diagnosticar ou prometer resultado."
    },
    {
      question: "A IA substitui professor, coordenação ou psicopedagogo?",
      answer:
        "Não. Ela automatiza o primeiro atendimento, organiza informações e encaminha casos importantes para a equipe educacional responsável."
    },
    {
      question: "A IA pode indicar curso ou turma ideal?",
      answer:
        "Sim. Com base em idade, objetivo, nível, disponibilidade e interesse, ela pode sugerir curso, turma, trilha ou atendimento mais adequado."
    },
    {
      question: "A IA pode informar valores e horários?",
      answer:
        "Sim, desde que essas informações estejam cadastradas no RAG ou nas configurações. Ela pode explicar planos, mensalidades, turmas e condições."
    },
    {
      question: "A IA pode atender escola, curso online e mentoria?",
      answer:
        "Sim. O playbook educacional pode ser adaptado para escolas, cursos livres, reforço, mentorias, psicopedagogia e produtos educacionais digitais."
    },
    {
      question: "O que acontece quando a IA não sabe responder?",
      answer:
        "Ela deve reconhecer a limitação, coletar contato e encaminhar para coordenação, secretaria, professor ou atendimento humano."
    }
  ]
};

export const educationRagKnowledge = {
  niche: "education",
  site: "educacao.leadyia.com",
  tenantPlaceholder: "TENANT_ID_EDUCATION",
  purpose:
    "Landing demonstrativa da LeadyIA para educação, escolas, cursos, mentorias e atendimento pedagógico, funcionando como portfólio comercial e base de conhecimento RAG.",
  rules: [
    "Atender com linguagem acolhedora, pedagógica e objetiva.",
    "Não prometer resultados educacionais absolutos.",
    "Não diagnosticar dificuldades de aprendizagem.",
    "Agendar diagnóstico, visita, reunião ou aula experimental quando houver intenção clara.",
    "Gerar Pix apenas quando matrícula, sinal, avaliação ou reserva estiverem configurados.",
    "Encaminhar casos sensíveis para equipe humana."
  ],
  intents: [
    "matricula",
    "visita_escolar",
    "aula_experimental",
    "diagnostico_pedagogico",
    "curso",
    "reforco_escolar",
    "psicopedagogia",
    "valores_horarios",
    "documentos_matricula",
    "produtos_educacionais"
  ],
  ctas: [
    "Agendar visita",
    "Agendar diagnóstico",
    "Ver cursos",
    "Fazer matrícula",
    "Reservar vaga",
    "Falar com coordenação",
    "Tirar dúvidas"
  ],
  faq: educationLanding.faq
};

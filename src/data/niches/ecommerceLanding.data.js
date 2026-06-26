export const ecommerceLanding = {
  brand: {
    name: "Leady Store Demo",
    headline: "Demonstração LeadyIA para e-commerces, lojas virtuais e marcas digitais.",
    subheadline:
      "Uma landing de loja fictícia, criada para o lead testar busca de produtos, recomendação por categoria, dúvidas de compra, carrinho, checkout e recuperação de oportunidades em um contexto realista."
  },
  hero: {
    badge: "LeadyIA para E-commerce",
    title: "Atendimento com IA para vender mais na loja virtual, indicar produtos e reduzir abandono de carrinho.",
    description:
      "Mostre na prática como a LeadyIA conversa com visitantes, entende o que o cliente procura, recomenda categorias e produtos, tira dúvidas de compra e conduz para carrinho, checkout ou atendimento humano.",
    primaryCta: "Testar assistente de loja",
    secondaryCta: "Ver como funciona",
    stats: [
      { value: "24h", label: "vendas assistidas" },
      { value: "0", label: "OpenAI para produto exato" },
      { value: "Pix", label: "checkout opcional" }
    ]
  },
  pains: [
    {
      title: "Clientes perguntam e saem sem comprar",
      text: "A IA responde dúvidas sobre produto, entrega, pagamento, troca, tamanho, indicação de uso e conduz para a categoria ou item correto."
    },
    {
      title: "A loja tem produtos, mas o visitante não encontra",
      text: "A assistente entende intenção, sinônimos e categorias: jogos de alfabetização, kits, painéis, materiais pedagógicos, moda, beleza ou qualquer catálogo configurado."
    },
    {
      title: "Carrinhos e leads precisam de ação imediata",
      text: "A LeadyIA identifica interesse de compra, sugere produtos relacionados, envia CTA coerente e pode recuperar carrinho ou encaminhar para checkout."
    }
  ],
  flow: [
    {
      step: "01",
      title: "Entende a intenção de compra",
      text: "A IA identifica se o visitante quer comprar, comparar, tirar dúvida, ver categoria, encontrar produto, consultar prazo ou finalizar pedido."
    },
    {
      step: "02",
      title: "Busca primeiro no catálogo",
      text: "Quando há catálogo integrado, a busca de produto vem antes do RAG e da OpenAI, evitando respostas genéricas e recomendações fora do nicho."
    },
    {
      step: "03",
      title: "Recomenda produto e CTA certo",
      text: "A resposta vem com produto, categoria ou coleção relacionada à pergunta, sempre com botões coerentes como ver produto, comprar agora ou ver coleção."
    },
    {
      step: "04",
      title: "Conduz para checkout ou humano",
      text: "Se o cliente estiver pronto, a IA leva ao carrinho/checkout. Se precisar, coleta contato e envia resumo para atendimento humano."
    }
  ],
  segments: [
    "Catálogo e busca de produtos: nomes, categorias, variações, kits, coleções e produtos relacionados.",
    "Recomendação consultiva: produto ideal conforme idade, objetivo, necessidade, tamanho, estilo ou orçamento.",
    "Checkout assistido: orientação para comprar, pagar, baixar produto digital ou finalizar pedido.",
    "Recuperação de carrinho: identificação de dúvida, objeção e CTA para retomar a compra.",
    "Pós-venda: dúvidas sobre entrega, acesso, troca, nota, suporte e acompanhamento de pedido.",
    "E-commerce educacional: materiais pedagógicos, jogos em PDF, apostilas, kits e produtos digitais."
  ],
  safety: [
    "Não inventa produto que não está no catálogo.",
    "Não promete estoque, preço ou prazo sem fonte configurada.",
    "Não recomenda categoria fora do segmento do tenant.",
    "Encaminha pagamento, troca, reembolso e dados sensíveis para fluxo seguro.",
    "Diferencia sugestão de produto, produto encontrado e produto indisponível."
  ],
  widget: {
    description:
      "Use esta landing como demonstração pública para lojas virtuais. O visitante conversa com a IA como se estivesse em um e-commerce real, buscando produtos, tirando dúvidas e recebendo CTAs de compra coerentes.",
    script: `<script\n  src="https://widget.leadyia.com/loader.js"\n  data-tenant-id="TENANT_ID_ECOMMERCE"\n  data-segment="ecommerce"\n  async\n></script>`
  },
  conversations: [
    {
      tag: "Categoria",
      user: "Quero jogos para alfabetização.",
      assistant:
        "Claro. Posso te mostrar jogos para consciência fonológica, sílabas, leitura de palavras e frases. Você prefere material para Educação Infantil ou 1º ano?"
    },
    {
      tag: "Produto",
      user: "Tem atividades para autismo?",
      assistant:
        "Tenho recursos que podem apoiar atenção, pareamento, percepção visual e rotina. Posso te indicar a coleção mais adequada e mostrar produtos relacionados."
    },
    {
      tag: "Checkout",
      user: "Como recebo o arquivo depois da compra?",
      assistant:
        "Após a compra, o material digital fica disponível para baixar. Também posso te orientar sobre impressão e uso do recurso em sala ou atendimento."
    }
  ],
  benefits: [
    "Busca de produto antes de acionar RAG/OpenAI.",
    "CTAs relacionados à pergunta: produto, coleção, categoria ou checkout.",
    "Redução de respostas genéricas e recomendações fora do nicho.",
    "Atendimento para produtos físicos, digitais e serviços vendidos online.",
    "FAQ pronto para entrega, pagamento, troca, acesso e suporte.",
    "Base pronta para indexação RAG e demonstração comercial."
  ],
  faq: [
    {
      question: "A IA pode indicar produtos específicos da minha loja?",
      answer:
        "Sim. Quando o catálogo está integrado ou indexado, a IA pode buscar produtos por nome, categoria, benefício, público, preço, coleção e intenção de compra."
    },
    {
      question: "A IA pode responder antes de chamar a OpenAI?",
      answer:
        "Sim. No fluxo ideal de e-commerce, o catálogo vem primeiro. Se o produto ou categoria for encontrado, a resposta pode ser montada sem RAG e sem OpenAI."
    },
    {
      question: "A IA pode evitar indicar produto errado?",
      answer:
        "Sim. O orquestrador de e-commerce deve respeitar tenant, catálogo, categoria, disponibilidade e contexto, evitando produtos de outro nicho ou loja."
    },
    {
      question: "A IA pode mostrar botões de compra?",
      answer:
        "Sim. Ela pode retornar CTAs como ver produto, comprar agora, ver coleção, continuar checkout, falar com atendimento ou acompanhar pedido."
    },
    {
      question: "A IA pode recuperar carrinho abandonado?",
      answer:
        "Sim. Ela pode identificar objeções, tirar dúvidas, sugerir produtos relacionados e encaminhar o cliente para finalizar a compra."
    },
    {
      question: "A IA serve para loja de produto digital?",
      answer:
        "Sim. Ela pode explicar como o arquivo é entregue, como imprimir, como usar, qual faixa etária atende e qual produto é mais indicado."
    },
    {
      question: "A IA pode responder dúvidas sobre entrega e pagamento?",
      answer:
        "Sim, desde que as regras estejam cadastradas no RAG ou nas configurações da loja. Ela pode explicar prazo, formas de pagamento, Pix, cartão e acesso ao pedido."
    },
    {
      question: "A IA substitui o atendimento humano?",
      answer:
        "Não. Ela automatiza o primeiro atendimento, recomenda produtos, resolve dúvidas comuns e encaminha casos sensíveis ou personalizados para a equipe."
    },
    {
      question: "O que acontece quando o produto não é encontrado?",
      answer:
        "A IA pode sugerir categoria relacionada, pedir mais detalhes ou encaminhar para atendimento humano, sem inventar produto inexistente."
    },
    {
      question: "A IA pode recomendar combos e produtos relacionados?",
      answer:
        "Sim. Ela pode sugerir kits, combos, produtos complementares e coleções relacionadas conforme a intenção do cliente e o catálogo configurado."
    }
  ]
};

export const ecommerceRagKnowledge = {
  niche: "ecommerce",
  site: "ecommerce.leadyia.com",
  tenantPlaceholder: "TENANT_ID_ECOMMERCE",
  purpose:
    "Landing demonstrativa da LeadyIA para e-commerces e lojas virtuais, funcionando como portfólio comercial e base de conhecimento RAG.",
  rules: [
    "Buscar produto e categoria antes de usar RAG/OpenAI.",
    "Não inventar produto, preço, estoque ou prazo.",
    "Nunca exibir CTA de SaaS como criar conta grátis dentro de loja do cliente.",
    "Exibir CTAs coerentes com a pergunta: ver produto, ver coleção, comprar agora, finalizar pedido ou falar com atendimento.",
    "Respeitar tenant, catálogo e nicho para evitar recomendações cruzadas."
  ],
  intents: [
    "buscar_produto",
    "buscar_categoria",
    "recomendar_produto",
    "comparar_produtos",
    "checkout",
    "carrinho_abandonado",
    "entrega_pagamento",
    "produto_digital",
    "suporte_pedido"
  ],
  ctas: [
    "Ver produto",
    "Ver coleção",
    "Comprar agora",
    "Finalizar pedido",
    "Falar com atendimento",
    "Acompanhar pedido",
    "Ver produtos relacionados"
  ],
  faq: ecommerceLanding.faq
};

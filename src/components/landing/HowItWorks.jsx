/**
 * =========================================================
 * Arquivo: HowItWorks.jsx
 * Caminho: landing/src/components/landing/HowItWorks.jsx
 * Responsabilidade: explicar o fluxo operacional premium do LeadyIA de forma
 * simples, visual e orientada a decisão.
 * O que este módulo NÃO deve fazer: não simula IA real e não cria lead. A seção
 * apenas demonstra o processo para aumentar confiança e conversão.
 * =========================================================
 */

import React from "react";

const STEPS = [
  {
    number: "01",
    title: "O visitante chega com uma intenção",
    description:
      "Ele pergunta sobre preço, produto, serviço, agenda, suporte ou simplesmente começa uma conversa no site.",
    signal: "Entrada",
  },
  {
    number: "02",
    title: "A IA entende o contexto do negócio",
    description:
      "O playbook, a base RAG, o histórico e o segmento do tenant orientam a resposta sem perder a identidade da marca.",
    signal: "Contexto",
  },
  {
    number: "03",
    title: "A conversa vira lead qualificado",
    description:
      "O LeadyIA identifica interesse, urgência, objeção e estágio comercial para priorizar quem merece atenção.",
    signal: "Qualificação",
  },
  {
    number: "04",
    title: "A próxima ação aparece no momento certo",
    description:
      "Comprar, agendar, ver planos, falar no WhatsApp ou chamar humano: a ação vem com CTA rastreável e sem improviso.",
    signal: "Conversão",
  },
  {
    number: "05",
    title: "Tudo aparece no dashboard",
    description:
      "Conversas, leads, revenue, operações, RAG, integrações e auditoria ficam organizados para o tenant decidir melhor.",
    signal: "Controle",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="leadyia-flow-section">
      <div className="leadyia-conversion-container">
        <div className="leadyia-flow-header">
          <span className="leadyia-section-kicker">Como funciona na prática</span>
          <h2>Da primeira mensagem ao próximo passo comercial.</h2>
          <p>
            Um fluxo simples para o cliente, mas poderoso para a empresa: atendimento,
            inteligência e conversão trabalhando juntos em tempo real.
          </p>
        </div>

        <div className="leadyia-flow-board">
          {STEPS.map((step, index) => (
            <FlowStep key={step.number} step={step} isLast={index === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ step, isLast }) {
  return (
    <article className="leadyia-flow-step">
      <div className="leadyia-flow-number">{step.number}</div>
      <div className="leadyia-flow-content">
        <span>{step.signal}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      {!isLast && <div className="leadyia-flow-connector" aria-hidden />}
    </article>
  );
}

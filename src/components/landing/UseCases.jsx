/**
 * =========================================================
 * Arquivo: UseCases.jsx
 * Caminho: landing/src/components/landing/UseCases.jsx
 * Responsabilidade: mostrar casos de uso de alto valor, conectando dor, solução
 * e resultado para diferentes tipos de operação.
 * O que este módulo NÃO deve fazer: não decide playbook real do tenant e não busca
 * dados externos. O objetivo é conversão e clareza comercial.
 * =========================================================
 */

import React from "react";

const USE_CASES = [
  {
    title: "Sites com muito tráfego e pouca conversão",
    audience: "Marketing & Growth",
    pain: "Visitantes entram, olham e vão embora sem deixar contato.",
    solution: "O widget inicia conversa, entende intenção e captura oportunidade antes da saída.",
    result: "Mais leads sem aumentar mídia",
  },
  {
    title: "Empresas que perdem vendas fora do horário",
    audience: "Vendas 24/7",
    pain: "O cliente chama à noite, no fim de semana ou durante pico de atendimento.",
    solution: "A IA responde, qualifica, coleta contexto e encaminha o próximo passo automaticamente.",
    result: "Menos oportunidade perdida",
  },
  {
    title: "Equipes comerciais sobrecarregadas",
    audience: "Operação & CRM",
    pain: "O time responde curiosos, perde tempo e deixa leads quentes esperando.",
    solution: "Leads são classificados por intenção, canal, estágio e probabilidade de conversão.",
    result: "Time focado no que fecha",
  },
  {
    title: "Negócios com atendimento repetitivo",
    audience: "Suporte & Recepção",
    pain: "Perguntas sobre preço, localização, horário, produto, prazo e processo se repetem todo dia.",
    solution: "RAG e playbooks respondem com consistência, mantendo atendimento humano para casos importantes.",
    result: "Mais escala com menos retrabalho",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="leadyia-usecase-section">
      <div className="leadyia-conversion-container">
        <div className="leadyia-conversion-headline-grid">
          <div>
            <span className="leadyia-section-kicker">Casos de uso</span>
            <h2>Onde o LeadyIA muda o resultado da operação.</h2>
          </div>
          <p>
            A plataforma atua onde existe intenção: antes do lead abandonar, antes do time perder tempo e antes da oportunidade esfriar.
          </p>
        </div>

        <div className="leadyia-usecase-grid">
          {USE_CASES.map((item) => (
            <UseCaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ item }) {
  return (
    <article className="leadyia-usecase-card">
      <div className="leadyia-usecase-tag">{item.audience}</div>
      <h3>{item.title}</h3>
      <div className="leadyia-usecase-lines">
        <p><strong>Dor:</strong> {item.pain}</p>
        <p><strong>LeadyIA:</strong> {item.solution}</p>
      </div>
      <div className="leadyia-usecase-result">{item.result}</div>
    </article>
  );
}

/**
 * =========================================================
 * Arquivo: SocialProofPremium.jsx
 * Caminho: landing/src/components/SocialProofPremium.jsx
 * Responsabilidade:
 * - Reforçar confiança, maturidade e prova social da LeadyIA.
 * - Mostrar números e depoimentos de forma premium e verificável pelo produto.
 *
 * O que este módulo NÃO deve fazer:
 * - Não inventar clientes reais com nomes não autorizados.
 * - Não prometer métricas garantidas.
 * - Não substituir estudos de caso completos, que entram em fase posterior.
 * =========================================================
 */

import React from "react";

const METRICS = [
  { label: "Mensagens processadas", value: "+50k" },
  { label: "Playbooks por nicho", value: "8+" },
  { label: "Operação", value: "24h" },
  { label: "Dashboard premium", value: "18+ módulos" },
];

const TESTIMONIALS = [
  {
    quote:
      "A LeadyIA organiza atendimento, conhecimento e vendas em uma experiência única. O dashboard virou nosso centro operacional.",
    author: "Operação comercial",
    role: "Empresa de serviços",
  },
  {
    quote:
      "O grande diferencial é a IA responder com contexto do negócio e registrar tudo para acompanhamento do time.",
    author: "Gestão de atendimento",
    role: "Negócio local",
  },
  {
    quote:
      "A instalação no site e a visão de conversas ajudaram a transformar visitas em oportunidades reais.",
    author: "Marketing e vendas",
    role: "Ecommerce",
  },
];

export default function SocialProofPremium() {
  return (
    <section className="ly-social-premium" id="prova-social">
      <div className="ly-social-premium__container">
        <div className="ly-social-premium__header">
          <span>Confiança para operação real</span>
          <h2>Uma plataforma criada para empresas que querem atender e vender melhor.</h2>
        </div>

        <div className="ly-social-premium__metrics">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="ly-social-premium__testimonials">
          {TESTIMONIALS.map((item) => (
            <article key={item.quote}>
              <p>“{item.quote}”</p>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

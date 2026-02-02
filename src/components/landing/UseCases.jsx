/**
 * =========================================================
 * 🧠 USE CASES — LEADYIA WEBSITE
 * =========================================================
 *
 * 🎯 Função:
 * - Demonstrar aplicabilidade real do produto
 * - Conectar IA → vendas → operação
 * - Ajudar o decisor a se enxergar no produto
 *
 * 🧠 Design:
 * - Institucional, estratégico
 * - Mesmo sistema visual do Hero
 * - Cards leves, rápidos e previsíveis
 */

import React from "react";

const USE_CASES = [
  {
    title: "SaaS B2B",
    highlight: "Conversão previsível",
    description:
      "Qualificação automática de leads, ativação inteligente de trials e handoff para vendas apenas quando há intenção real.",
  },
  {
    title: "Agências",
    highlight: "Filtro de intenção",
    description:
      "Identificação de decisores, separação entre curiosos e compradores e priorização de oportunidades de alto ticket.",
  },
  {
    title: "Enterprise & B2B Complexo",
    highlight: "Vendas assistidas",
    description:
      "Educação progressiva do lead, redução de fricção técnica e ativação automática de vendas humanas no momento certo.",
  },
  {
    title: "Startups em Escala",
    highlight: "Escala sem headcount",
    description:
      "Um único bot operando como SDR, pré-vendas e qualificador 24/7, sem aumentar custo operacional.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden py-28 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE (PADRÃO LANDING)
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Casos de uso reais,
            <br />
            sem scripts engessados
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            O LeadyIA se adapta ao modelo de negócio, ao ciclo de vendas
            e à maturidade do lead — não o contrário.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item) => (
            <UseCaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 USE CASE CARD
 * =========================================================
 */
function UseCaseCard({ item }) {
  const { title, highlight, description } = item;

  return (
    <div
      className="
        flex flex-col rounded-2xl p-6
        transition hover:-translate-y-1
      "
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Tag estratégica */}
      <span className="mb-4 w-fit rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
        {highlight}
      </span>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>
    </div>
  );
}

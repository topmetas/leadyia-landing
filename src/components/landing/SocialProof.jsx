/**
 * =========================================================
 * 📊 SOCIAL PROOF — LEADYIA (ENTERPRISE)
 * =========================================================
 *
 * 📁 Caminho:
 * src/components/landing/SocialProof.jsx
 *
 * 🎯 Responsabilidade:
 * - Provar impacto com métricas claras
 * - Reduzir risco percebido por decisores
 * - Reforçar autoridade antes de Pricing / CTA
 *
 * 🧠 Leitura-alvo:
 * - CEOs, CTOs, Heads de Vendas e Produto
 *
 * 📐 Decisão de design:
 * - Métrica como dado, não marketing
 * - Silencioso, escaneável, institucional
 */

import React from "react";

/**
 * =========================================================
 * 📈 MÉTRICAS DE IMPACTO (AGREGADAS)
 * =========================================================
 *
 * - Valores focados em benefício de negócio
 * - Linguagem objetiva, sem exagero
 */
const METRICS = [
  {
    value: "+38%",
    label: "Aumento na conversão de leads",
    description: "Mais intenção convertida em pipeline real.",
  },
  {
    value: "-52%",
    label: "Redução no tempo de qualificação",
    description: "Menos esforço humano, mais velocidade.",
  },
  {
    value: "24/7",
    label: "Atendimento contínuo",
    description: "Cobertura total sem custo marginal.",
  },
  {
    value: "100%",
    label: "Rastreabilidade do funil",
    description: "Decisões explicáveis, dados auditáveis.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="results"
      className="
        relative
        overflow-hidden
        bg-white
        text-slate-900
        py-32
        px-6
      "
    >
      {/* =====================================================
          Fundo sutil para separação sem ruído visual
         ===================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-linear-to-b
          from-slate-50
          to-white
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue/80">
            Prova de valor
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Resultados mensuráveis,
            <br className="hidden md:block" />
            impacto real no funil
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            O LeadyIA elimina ruído operacional,
            acelera decisões e transforma intenção
            em ação com previsibilidade.
          </p>
        </div>

        {/* ================= METRICS GRID ================= */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-slate-500">
          * Métricas observadas em operações com automação ativa,
          comparando períodos pré e pós implementação.
          Resultados podem variar conforme contexto e volume.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔢 METRIC CARD — ENTERPRISE
 * =========================================================
 *
 * 🎯 Função:
 * - Exibir UMA métrica clara
 * - Permitir leitura em até 2 segundos
 *
 * 🧠 Microinteração:
 * - Hover discreto = feedback de solidez
 * - Sem exagero visual
 */
function MetricCard({ value, label, description }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-8
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Valor */}
      <div
        className="
          text-4xl
          font-extrabold
          tracking-tight
          text-brand-blue
        "
      >
        {value}
      </div>

      {/* Label */}
      <div className="mt-3 text-sm font-semibold text-slate-700">
        {label}
      </div>

      {/* Descrição */}
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}

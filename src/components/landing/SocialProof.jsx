/**
 * =========================================================
 * 📊 SOCIAL PROOF — LEADYIA (ENTERPRISE)
 * =========================================================
 *
 * 📁 Caminho:
 * src/components/landing/SocialProof.jsx
 *
 * 🎯 Objetivo:
 * - Provar valor com métricas claras e escaneáveis
 * - Reduzir risco percebido pelo decisor
 * - Reforçar autoridade antes da conversão
 *
 * 🧠 Contexto:
 * - Seção estratégica da landing
 * - Entra após Features / HowItWorks
 * - Prepara o terreno para Pricing e CTA
 */

import React from "react";

/**
 * =========================================================
 * 📈 MÉTRICAS DE IMPACTO
 * =========================================================
 *
 * - Valores agregados e facilmente escaneáveis
 * - Linguagem orientada a benefício de negócio
 */
const METRICS = [
  { value: "+38%", label: "Aumento na conversão de leads" },
  { value: "-52%", label: "Redução no tempo de qualificação" },
  { value: "24/7", label: "Atendimento contínuo" },
  { value: "100%", label: "Rastreabilidade do funil" },
];

export default function SocialProof() {
  return (
    <section
      id="results"
      className="
        relative
        bg-white
        text-slate-900
        py-28
        px-6
        overflow-hidden
      "
    >
      {/* Background decorativo sutil (Tailwind v4 canonical) */}
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
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Prova de valor
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Resultados mensuráveis
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            O Leadyia acelera decisões, elimina ruído no funil de vendas
            e transforma intenção em ação com previsibilidade.
          </p>
        </div>

        {/* ================= METRICS GRID ================= */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-14 max-w-3xl text-sm text-slate-500">
          * Métricas observadas em operações com automação ativa,
          comparando períodos pré e pós implementação do Leadyia.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔢 METRIC CARD
 * =========================================================
 *
 * 🎯 Responsabilidade:
 * - Exibir UMA métrica de impacto
 * - Ser escaneável em até 2 segundos
 *
 * 🧱 Design rationale:
 * - Valor com alto contraste
 * - Texto claro e direto ao benefício
 * - Animação sutil para feedback visual
 */
function MetricCard({ value, label }) {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-slate-200
        bg-slate-50
        p-8
        text-center
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          text-4xl
          font-extrabold
          text-brand-blue
          transition
          group-hover:scale-105
        "
      >
        {value}
      </div>

      <div className="mt-3 text-sm font-medium text-slate-600">
        {label}
      </div>
    </div>
  );
}

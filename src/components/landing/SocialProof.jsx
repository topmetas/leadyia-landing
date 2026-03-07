/**
 * =========================================================
 * 📊 RESULTADOS REAIS — LEADYIA
 * =========================================================
 *
 * Seção otimizada para conversão.
 * Inspirada em landing pages de Big Tech SaaS.
 */

import React from "react";

/**
 * =========================================================
 * 📈 MÉTRICAS PRINCIPAIS
 * =========================================================
 */

const METRICS = [
  {
    value: "+38%",
    label: "Mais vendas convertidas",
    description:
      "Mais visitantes avançando até o momento de compra.",
  },
  {
    value: "-52%",
    label: "Menos tempo perdido",
    description:
      "Seu time conversa apenas com quem realmente quer comprar.",
  },
  {
    value: "24/7",
    label: "Atendimento contínuo",
    description:
      "Seu negócio responde clientes mesmo fora do horário comercial.",
  },
  {
    value: "100%",
    label: "Controle sobre conversas",
    description:
      "Você entende exatamente como cada lead foi atendido.",
  },
];

/**
 * =========================================================
 * 📊 SOCIAL PROOF SECTION
 * =========================================================
 */

export default function SocialProof() {
  return (
    <section
      id="results"
      className="relative overflow-hidden py-36 px-6 text-slate-900"
    >
      {/* =====================================================
          BACKGROUND SISTÊMICO
         ===================================================== */}

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg,#f8fafc 0%,#ffffff 55%,#f1f5f9 100%)",
        }}
      />

      {/* glow superior */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-40"
        style={{
          width: 600,
          height: 400,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Resultados reais
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Menos conversa perdida.
            <br />
            Mais vendas acontecendo.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            O LeadyIA responde visitantes, identifica quem realmente quer comprar
            e conduz cada lead até o próximo passo certo.
          </p>

        </div>

        {/* ================= MÉTRICAS ================= */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard
              key={metric.label}
              {...metric}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}

        <p className="mt-20 max-w-3xl text-sm leading-relaxed text-slate-500">
          * Resultados observados em operações reais usando o LeadyIA.
          Os ganhos variam conforme volume de leads, mercado e estratégia,
          mas a melhoria de eficiência é consistente.
        </p>

      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔢 METRIC CARD
 * =========================================================
 */

function MetricCard({ value, label, description }) {
  return (
    <div
      className="
        group relative flex flex-col
        rounded-3xl
        p-10
        transition-all duration-300
        hover:-translate-y-2
      "
      style={{
        background: "white",
        border: "1px solid rgba(15,23,42,0.08)",
        boxShadow:
          "0 10px 40px rgba(15,23,42,0.06)",
      }}
    >
      {/* glow hover */}

      <div
        aria-hidden
        className="
          absolute inset-0 -z-10 rounded-3xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.2), transparent 70%)",
        }}
      />

      {/* número */}

      <div className="text-5xl font-extrabold tracking-tight text-brand-blue">
        {value}
      </div>

      {/* divider */}

      <div className="mt-6 h-px w-full bg-slate-200" />

      {/* label */}

      <div className="mt-6 text-base font-semibold text-slate-900">
        {label}
      </div>

      {/* description */}

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

    </div>
  );
}
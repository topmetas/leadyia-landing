/**
 * =========================================================
 * 📊 RESULTADOS REAIS — LEADYIA
 * =========================================================
 *
 * 📁 Caminho:
 * src/components/landing/SocialProof.jsx
 *
 * 🎯 Responsabilidade:
 * - Mostrar impacto real no negócio
 * - Deixar claro o ganho financeiro e operacional
 * - Tirar o medo de “ser mais uma ferramenta”
 *
 * 🧠 Regra de ouro:
 * Se o visitante não entende em 5 segundos,
 * este componente falhou.
 */

import React from "react";

/**
 * =========================================================
 * 📈 RESULTADOS QUE O CLIENTE SENTE
 * =========================================================
 *
 * Linguagem simples:
 * - Mais vendas
 * - Menos tempo perdido
 * - Atendimento que não para
 * - Controle total
 */
const METRICS = [
  {
    value: "+38%",
    label: "Mais vendas convertidas",
    description:
      "Mais pessoas certas chegando até o final do funil.",
  },
  {
    value: "-52%",
    label: "Menos tempo perdido com leads frios",
    description:
      "O time fala só com quem realmente quer comprar.",
  },
  {
    value: "24/7",
    label: "Atendimento que nunca para",
    description:
      "Seu negócio vende mesmo fora do horário comercial.",
  },
  {
    value: "100%",
    label: "Visibilidade sobre cada conversa",
    description:
      "Você sabe por que cada decisão foi tomada.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="results"
      className="
        relative
        overflow-hidden
        py-32
        px-6
        text-slate-900
      "
    >
      {/* =====================================================
          FUNDO MAIS VIVO, MAS LIMPO
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Resultados na prática
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Menos conversa perdida.
            <br className="hidden md:block" />
            Mais dinheiro entrando.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            O LeadyIA trabalha para que sua empresa
            responda mais rápido,
            foque nos clientes certos
            e venda mais sem aumentar o time.
          </p>
        </div>

        {/* ================= MÉTRICAS ================= */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard
              key={metric.label}
              {...metric}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-slate-500">
          * Resultados observados em operações reais usando o LeadyIA.
          Os números variam conforme volume, mercado e estratégia,
          mas o ganho de eficiência é consistente.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔢 METRIC CARD — CLARO E DIRETO
 * =========================================================
 *
 * Princípio:
 * - Um número
 * - Uma frase simples
 * - Um benefício óbvio
 */
function MetricCard({ value, label, description }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
      style={{
        border: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      {/* Glow sutil */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />

      {/* Valor */}
      <div className="text-4xl font-extrabold tracking-tight text-brand-blue">
        {value}
      </div>

      {/* Label */}
      <div className="mt-3 text-sm font-semibold text-slate-800">
        {label}
      </div>

      {/* Descrição */}
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

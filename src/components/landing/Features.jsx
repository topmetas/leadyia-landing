/**
 * =========================================================
 * ✨ FEATURES — LEADYIA WEBSITE
 * =========================================================
 *
 * 🎯 Função:
 * - Explicar o produto sem vender demais
 * - Transformar complexidade em clareza
 * - Reforçar autoridade técnica
 *
 * 🧠 Design:
 * - Mesmo DNA visual do Hero
 * - Cards leves, sem efeitos caros
 * - Pronto para escala
 */

import React from "react";

const FEATURES = [
  {
    title: "Qualificação Inteligente",
    description:
      "O LeadyIA interpreta intenção real, elimina curiosos e prioriza leads prontos para compra.",
    tag: "Lead Scoring",
  },
  {
    title: "Decision Engine",
    description:
      "Fluxos conversacionais adaptativos baseados em comportamento, contexto e histórico.",
    tag: "IA aplicada",
  },
  {
    title: "Auto-Sales & Handoff",
    description:
      "Encaminhamento automático para vendas, CRM ou WhatsApp no momento exato.",
    tag: "Conversão",
  },
  {
    title: "Auditoria & Controle",
    description:
      "Cada decisão é rastreável, auditável e ajustável — sem caixa-preta.",
    tag: "Governança",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE (MESMO DO HERO)
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* =====================================================
          CONTEÚDO
         ===================================================== */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Automação que entende contexto,
            <br />
            não apenas respostas
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            O LeadyIA opera como um motor de decisão — não como um chatbot
            roteirizado.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 FEATURE CARD
 * =========================================================
 */
function FeatureCard({ title, description, tag }) {
  return (
    <div
      className="
        relative flex flex-col
        rounded-2xl p-6
        transition hover:-translate-y-1
      "
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Tag */}
      <span className="
        mb-4 w-fit rounded-full
        bg-brand-blue/15
        px-3 py-1
        text-xs font-semibold
        text-brand-blue
      ">
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>
    </div>
  );
}

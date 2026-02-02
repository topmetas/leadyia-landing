/**
 * =========================================================
 * 🛡️ TRUST & ENTERPRISE READINESS — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo: Trust.jsx
 * 📁 Caminho: src/components/landing/Trust.jsx
 *
 * 🎯 Responsabilidade:
 * - Construir confiança técnica e estratégica
 * - Comunicar robustez, previsibilidade e controle
 * - Reduzir risco percebido por decisores enterprise
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Prometer features específicas de planos
 * - Substituir documentação técnica
 * - Executar lógica de negócio
 *
 * 🧠 Contexto Enterprise:
 * - Seção crítica da landing
 * - Consumida por CTOs, Heads de Produto e Vendas
 * - Ponte entre Social Proof → Pricing
 */

import React from "react";

const TRUST_POINTS = [
  "Arquitetura determinística e auditável",
  "Separação clara entre decisão, IA e execução",
  "Multi-tenant e white-label",
  "Logs, métricas e histórico por conversa",
  "Integração nativa com CRM, APIs e WhatsApp",
  "Pronto para escala enterprise",
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="
        relative
        bg-neutral-900
        text-white
        py-28
        px-6
        overflow-hidden
      "
    >
      {/* Gradiente de fundo sutil para profundidade */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-linear-to-b
          from-neutral-900
          via-neutral-900
          to-black
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Enterprise-grade
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Construído para escala e controle
          </h2>

          <p className="mt-5 text-lg text-neutral-400">
            O Leadyia foi projetado como infraestrutura de vendas,
            não como um experimento de IA.
          </p>
        </div>

        {/* ================= TRUST GRID ================= */}
        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {TRUST_POINTS.map((item) => (
            <TrustItem key={item} text={item} />
          ))}
        </ul>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-14 max-w-3xl text-sm text-neutral-500">
          Arquitetura pensada para ambientes regulados,
          times grandes e decisões orientadas por dados —
          sem abrir mão de performance ou flexibilidade.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔐 TRUST ITEM
 * =========================================================
 *
 * 🎯 Responsabilidade:
 * - Representar um pilar de confiança técnica
 * - Ser facilmente escaneável por decisores
 *
 * 🧱 Design rationale:
 * - Card escuro para reforçar robustez
 * - Destaque visual sutil, sem marketing exagerado
 */
function TrustItem({ text }) {
  return (
    <li
      className="
        group
        flex items-start gap-4
        rounded-2xl
        bg-neutral-800/80
        p-6
        transition
        hover:bg-neutral-800
        hover:translate-x-1
      "
    >
      {/* Indicador visual */}
      <span
        className="
          mt-2
          h-2.5
          w-2.5
          rounded-full
          bg-brand-blue
          shrink-0
        "
      />

      {/* Conteúdo */}
      <span className="text-neutral-200 leading-relaxed">
        {text}
      </span>
    </li>
  );
}

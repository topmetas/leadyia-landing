/**
 * =========================================================
 * 🛡️ TRUST & ENTERPRISE READINESS — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo:
 * src/components/landing/Trust.jsx
 *
 * 🎯 Responsabilidade:
 * - Construir confiança técnica e estratégica
 * - Reduzir risco percebido por decisores enterprise
 * - Posicionar Leadyia como infraestrutura, não ferramenta
 *
 * 🧠 Leitura-alvo:
 * - CTOs, Heads de Produto, RevOps, Vendas
 *
 * 📐 Decisão de design:
 * - Dark section = robustez + previsibilidade
 * - Cards silenciosos, sem hype
 * - Microinterações como feedback de controle
 */

import React from "react";

/**
 * =========================================================
 * 🔐 PILARES DE CONFIANÇA
 * =========================================================
 */
const TRUST_PILLARS = [
  {
    title: "Arquitetura determinística",
    description:
      "Cada decisão é rastreável, auditável e previsível — sem comportamento emergente fora de controle.",
  },
  {
    title: "Separação clara de responsabilidades",
    description:
      "IA, decisão e execução são camadas independentes, evitando acoplamento e risco sistêmico.",
  },
  {
    title: "Multi-tenant & white-label",
    description:
      "Projetado desde o núcleo para múltiplos clientes, marcas e ambientes isolados.",
  },
  {
    title: "Observabilidade completa",
    description:
      "Logs, métricas e histórico por conversa para análise, compliance e melhoria contínua.",
  },
  {
    title: "Integração enterprise-ready",
    description:
      "APIs, CRMs, WhatsApp e fluxos existentes sem fricção ou dependência proprietária.",
  },
  {
    title: "Escala previsível",
    description:
      "Infraestrutura preparada para alto volume sem degradação de decisão ou latência.",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="
        relative
        overflow-hidden
        bg-neutral-900
        text-white
        py-32
        px-6
      "
    >
      {/* =====================================================
          Fundo com profundidade (silencioso e institucional)
         ===================================================== */}
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
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue/80">
            Trust & Enterprise Readiness
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Construído para controle,
            <br className="hidden md:block" />
            escala e previsibilidade
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            O Leadyia não é um chatbot.
            É uma camada de decisão projetada como infraestrutura
            para times que não podem errar.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {TRUST_PILLARS.map((pillar) => (
            <TrustCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-neutral-500">
          Arquitetura pensada para ambientes regulados,
          múltiplos stakeholders e decisões orientadas por dados —
          sem comprometer performance, segurança ou flexibilidade.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 TRUST CARD — ENTERPRISE
 * =========================================================
 *
 * 🎯 Função:
 * - Comunicar solidez técnica
 * - Ser escaneável em segundos
 *
 * 🧠 Microinteração:
 * - Hover sutil = sensação de controle
 * - Nada agressivo ou “marketing”
 */
function TrustCard({ title, description }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        border
        border-white/5
        bg-neutral-800/70
        p-6
        transition
        duration-300
        hover:border-brand-blue/40
        hover:bg-neutral-800
      "
    >
      {/* Indicador lateral */}
      <div
        aria-hidden
        className="
          absolute
          left-0
          top-6
          h-12
          w-1
          rounded-full
          bg-brand-blue/60
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}

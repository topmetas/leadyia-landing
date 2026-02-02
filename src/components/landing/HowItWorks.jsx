/**
 * =========================================================
 * 🔄 HOW IT WORKS — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo:
 * src/components/landing/HowItWorks.jsx
 *
 * 🎯 Responsabilidade:
 * - Explicar o funcionamento do Leadyia de forma sequencial
 * - Reduzir carga cognitiva com um fluxo claro e auditável
 * - Conectar tecnologia → valor → conversão
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Implementar lógica de negócio
 * - Controlar estado global
 * - Conhecer detalhes de integração externa
 *
 * 🧠 Contexto Enterprise:
 * - Seção interna da landing page
 * - Comunicação técnica traduzida para negócio
 * - Preparado para evolução visual (animações, métricas, A/B)
 *
 * 📌 Decisão técnica:
 * - Uso exclusivo de utilitários CANÔNICOS do Tailwind v4
 * - Gradiente decorativo sem impacto funcional
 */

import React from "react";

/**
 * =========================================================
 * 📘 ETAPAS DO FLUXO
 * =========================================================
 */
const STEPS = [
  {
    step: "01",
    title: "Mensagem do usuário",
    description:
      "O visitante conversa naturalmente via widget, API ou WhatsApp.",
  },
  {
    step: "02",
    title: "Detecção de intenção",
    description:
      "Identificação de intenção, estágio do funil e sinais reais de conversão.",
  },
  {
    step: "03",
    title: "Decision Engine",
    description:
      "Motor determinístico decide responder, vender, escalar ou chamar humano.",
  },
  {
    step: "04",
    title: "Lead Scoring",
    description:
      "Pontuação evolui em tempo real baseada em comportamento e contexto.",
  },
  {
    step: "05",
    title: "Auto-Sales ou Handoff",
    description:
      "Venda automática ou handoff para vendas com contexto completo.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        bg-slate-50
        text-slate-900
        py-28
        px-6
        overflow-hidden
      "
    >
      {/* =====================================================
          Gradiente decorativo sutil (Tailwind v4 canonical)
         ===================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-linear-to-b
          from-white
          via-transparent
          to-transparent
        "
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Como o Leadyia funciona
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Um fluxo determinístico, auditável e projetado como sistema.
          </p>
        </div>

        {/* ================= STEPS =================
            Fluxo visual sequencial para leitura natural */}
        <div className="relative mt-20 grid gap-10 md:grid-cols-5">
          {/* Linha de conexão (desktop only) */}
          <div
            aria-hidden="true"
            className="
              absolute
              top-6
              left-0
              right-0
              hidden
              h-px
              bg-slate-200
              md:block
            "
          />

          {STEPS.map((item) => (
            <Step
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔹 STEP CARD — ENTERPRISE
 * =========================================================
 *
 * 🎯 Responsabilidade:
 * - Representar uma etapa do fluxo
 * - Manter clareza e progressão cognitiva
 *
 * 🧠 Nota arquitetural:
 * - Componente local por simplicidade
 * - Fácil evolução para animações, métricas ou tracking
 */
function Step({ step, title, description }) {
  return (
    <div
      className="
        relative
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      {/* Número da etapa */}
      <div
        className="
          mb-4
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-brand-blue/10
          px-3
          py-1
          text-sm
          font-semibold
          text-brand-blue
        "
      >
        {step}
      </div>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Indicador visual inferior */}
      <div
        aria-hidden="true"
        className="
          mt-6
          h-1
          w-10
          rounded-full
          bg-brand-blue/30
        "
      />
    </div>
  );
}

/**
 * =========================================================
 * 🔄 HOW IT WORKS — LEADYIA (ENTERPRISE FLOW)
 * =========================================================
 *
 * Este módulo explica o Leadyia como SISTEMA,
 * não como ferramenta.
 */

import React from "react";

/**
 * =========================================================
 * 📘 PIPELINE COGNITIVO
 * =========================================================
 */
const STEPS = [
  {
    step: "01",
    title: "Entrada de sinal",
    description:
      "O lead interage de forma natural via site, WhatsApp ou API — sem fricção ou formulários.",
  },
  {
    step: "02",
    title: "Leitura de intenção",
    description:
      "O sistema interpreta contexto, urgência e maturidade com base em sinais reais.",
  },
  {
    step: "03",
    title: "Decision Engine",
    description:
      "Um motor determinístico decide a melhor ação: educar, vender, escalar ou pausar.",
  },
  {
    step: "04",
    title: "Score dinâmico",
    description:
      "A pontuação evolui em tempo real conforme comportamento, linguagem e contexto.",
  },
  {
    step: "05",
    title: "Conversão ou handoff",
    description:
      "Venda automática ou entrega para o time humano com contexto completo e auditável.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative overflow-hidden
        bg-slate-50 text-slate-900
        py-32 px-6
      "
    >
      {/* =====================================================
          FUNDO INSTITUCIONAL (LIMPO, NÃO DECORATIVO)
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Como o LeadyIA opera
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Um pipeline de decisão projetado como sistema — auditável,
            previsível e orientado a conversão real.
          </p>
        </div>

        {/* ================= PIPELINE ================= */}
        <div className="relative mt-24">
          {/* Linha de progressão (desktop) */}
          <div
            aria-hidden
            className="
              absolute top-10 left-0 right-0
              hidden h-px bg-slate-200 md:block
            "
          />

          <div className="grid gap-12 md:grid-cols-5">
            {STEPS.map((item) => (
              <Step key={item.step} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 STEP — SISTEMA
 * =========================================================
 */
function Step({ step, title, description }) {
  return (
    <div
      className="
        relative flex flex-col
        rounded-2xl bg-white
        p-8
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Número */}
      <span
        className="
          mb-6 inline-flex w-fit
          rounded-full
          bg-brand-blue/10
          px-4 py-1
          text-sm font-semibold
          text-brand-blue
        "
      >
        {step}
      </span>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Indicador de progressão */}
      <div
        aria-hidden
        className="
          mt-8 h-1 w-12
          rounded-full
          bg-brand-blue/30
        "
      />
    </div>
  );
}

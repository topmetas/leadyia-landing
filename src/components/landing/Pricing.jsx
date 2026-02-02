/**
 * =========================================================
 * 💰 PRICING — LEADYIA (ENTERPRISE GRADE)
 * =========================================================
 *
 * 📁 src/components/landing/Pricing.jsx
 *
 * ✔ Sem utilitários experimentais
 * ✔ Gradiente via Design System
 * ✔ Performance-first
 * ✔ Produção ready
 */

import React from "react";

/* =========================================================
 * 📦 DEFINIÇÃO DE PLANOS
 * ======================================================= */
const plans = [
  {
    name: "Starter",
    price: "R$ 97/mês",
    scoreLimit: "Até 30 pontos",
    description: "Validação inicial e captura de leads",
    features: [
      "Widget básico",
      "Lead scoring simples",
      "Dashboard básico",
      "Suporte community",
    ],
    cta: "Começar agora",
  },
  {
    name: "Growth",
    price: "R$ 297/mês",
    scoreLimit: "Até 70 pontos",
    description: "Automação de vendas orientada por IA",
    features: [
      "Decision Engine completo",
      "Lead Qualification avançado",
      "Auto-handoff (CRM / WhatsApp)",
      "Auto-Sales Engine",
      "Suporte prioritário",
    ],
    highlight: true,
    cta: "Ativar crescimento",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    scoreLimit: "Ilimitado",
    description: "Escala máxima e white-label",
    features: [
      "FSM conversacional customizada",
      "RAG + IA privada",
      "White-label completo",
      "SLA e suporte dedicado",
      "Integrações sob medida",
    ],
    cta: "Falar com vendas",
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* =====================================================
          BACKGROUND PREMIUM — DESIGN SYSTEM
          -----------------------------------------------------
          ✔ Um único gradiente
          ✔ Zero utilitário experimental
          ✔ Zero conflito
      ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0f172a 0%, #020617 50%, #000000 100%)",
        }}
      />

      {/* ================= HEADER ================= */}
      <div className="px-6 pt-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Planos alinhados ao seu pipeline de vendas
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
          Você paga conforme a maturidade real dos seus leads — não por volume
          vazio.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="px-6 pb-36 pt-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
 * 🧱 PLAN CARD — OTIMIZADO
 * ======================================================= */
function PlanCard({ plan }) {
  const {
    name,
    price,
    scoreLimit,
    description,
    features,
    highlight,
    cta,
  } = plan;

  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl p-8 border transition",
        "bg-neutral-900/80 backdrop-blur-sm",
        "hover:-translate-y-1 hover:border-neutral-500",
        highlight
          ? "border-brand-blue shadow-lg shadow-brand-blue/20"
          : "border-neutral-800",
      ].join(" ")}
    >
      {/* Badge */}
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-xs font-bold text-black">
          Mais popular
        </span>
      )}

      {/* Header */}
      <h3 className="text-xl font-bold">{name}</h3>

      <p className="mt-4 text-3xl font-extrabold">{price}</p>

      <p className="mt-1 text-sm text-neutral-400">
        Lead Score: {scoreLimit}
      </p>

      <p className="mt-4 text-sm text-neutral-300">{description}</p>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 text-neutral-200">
            <span className="text-brand-blue">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="mt-10 w-full rounded-xl bg-brand-blue py-3 font-semibold text-black transition hover:opacity-90"
        type="button"
      >
        {cta}
      </button>
    </div>
  );
}

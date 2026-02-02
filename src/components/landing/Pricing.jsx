/**
 * =========================================================
 * 💰 PRICING — LEADYIA WEBSITE (FINAL)
 * =========================================================
 *
 * ✔ Sem framer-motion
 * ✔ Microinterações via CSS
 * ✔ CTA com glow ativo
 * ✔ Visual institucional premium
 */

import React from "react";

const PLANS = [
  {
    name: "Starter",
    price: "R$ 97 / mês",
    subtitle: "Para validar e estruturar",
    description:
      "Ideal para iniciar automação de leads e entender padrões reais de intenção.",
    features: [
      "Widget inteligente",
      "Lead scoring essencial",
      "Dashboard operacional",
      "Suporte community",
    ],
    cta: "Solicitar demo",
    variant: "secondary",
  },
  {
    name: "Growth",
    price: "R$ 297 / mês",
    subtitle: "Para escalar conversão",
    description:
      "IA aplicada à qualificação, priorização e aceleração do funil comercial.",
    features: [
      "Decision Engine completo",
      "Qualificação avançada",
      "Auto-handoff (CRM / WhatsApp)",
      "Auto-Sales Engine",
      "Suporte prioritário",
    ],
    highlight: true,
    cta: "Ativar crescimento",
    variant: "primary",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    subtitle: "Para operação em larga escala",
    description:
      "Arquitetura sob medida para ambientes complexos e multi-tenant.",
    features: [
      "FSM conversacional customizada",
      "IA privada + RAG",
      "White-label completo",
      "SLA dedicado",
      "Integrações customizadas",
    ],
    cta: "Falar com vendas",
    variant: "outline",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-32"
    >
      {/* Background herdado do Hero */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Planos que evoluem com
            <br />
            a maturidade do seu funil
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            Você não paga por volume.
            <br />
            Paga por inteligência aplicada.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
 * 🧱 PLAN CARD
 * ========================================================= */

function PlanCard({ plan }) {
  const {
    name,
    price,
    subtitle,
    description,
    features,
    cta,
    highlight,
    variant,
  } = plan;

  return (
    <div
      className={`
        group relative flex flex-col rounded-2xl p-8
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        ${highlight ? "ring-1 ring-brand-blue/50" : ""}
      `}
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      {/* Glow hover */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: "var(--gradient-glow)",
          filter: "blur(80px)",
        }}
      />

      {/* Badge */}
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-xs font-semibold text-black">
          Mais escolhido
        </span>
      )}

      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>

      <p className="mt-6 text-3xl font-extrabold text-white">{price}</p>
      <p className="mt-4 text-sm text-neutral-300">{description}</p>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-neutral-200">
            <span className="text-brand-blue">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-10">
        {variant === "primary" && (
          <button
            className="
              relative w-full rounded-xl py-3 font-semibold text-black
              transition-all duration-300
              hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-brand-blue/60
            "
            style={{
              background: "var(--cta-primary-bg)",
              boxShadow: "var(--cta-primary-shadow)",
            }}
          >
            {/* Glow fix (não apagado) */}
            <span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-xl"
              style={{
                background: "var(--cta-primary-glow)",
                filter: "blur(32px)",
                opacity: 1,
              }}
            />
            {cta}
          </button>
        )}

        {variant === "secondary" && (
          <button
            className="
              w-full rounded-xl py-3 font-semibold text-white
              transition hover:bg-white/20
            "
            style={{ background: "var(--cta-secondary-bg)" }}
          >
            {cta}
          </button>
        )}

        {variant === "outline" && (
          <button
            className="
              w-full rounded-xl border py-3 font-semibold text-white
              transition hover:bg-white/10
            "
            style={{ borderColor: "var(--cta-outline-border)" }}
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
}

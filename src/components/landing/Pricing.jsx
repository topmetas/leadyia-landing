/**
 * =========================================================
 * 💰 PRICING — LEADYIA (REFINED / ENTERPRISE)
 * =========================================================
 */

import React from "react";

const PLANS = [
  {
    name: "Starter",
    price: "R$ 97 / mês",
    subtitle: "Para quem decidiu parar de perder oportunidades",
    description:
      "Ideal para empresas que já entenderam que responder rápido não basta. Aqui você começa a transformar conversas em decisão.",
    features: [
      "Widget conversacional inteligente",
      "Identificação básica de intenção",
      "Lead scoring essencial",
      "Visão clara no dashboard",
      "Suporte via comunidade",
    ],
    cta: "Solicitar demonstração",
    variant: "secondary",
  },
  {
    name: "Growth",
    price: "R$ 297 / mês",
    subtitle: "Onde empresas sérias evoluem",
    description:
      "Escolhido por times que não aceitam mais perder leads qualificados por falta de contexto, prioridade ou timing.",
    features: [
      "Decision Engine completo",
      "Qualificação avançada por intenção",
      "Auto-handoff para CRM e WhatsApp",
      "Auto-Sales Engine ativo",
      "Prioridade no suporte",
    ],
    highlight: true,
    cta: "Ativar crescimento",
    variant: "primary",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    subtitle: "Quando vendas viram sistema crítico",
    description:
      "Para organizações que tratam aquisição, decisão e conversão como infraestrutura estratégica.",
    features: [
      "Fluxos conversacionais sob medida",
      "IA privada com RAG dedicado",
      "White-label completo",
      "SLA enterprise",
      "Integrações estratégicas",
    ],
    cta: "Falar com especialistas",
    variant: "outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      {/* Fundo alinhado ao Hero */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Empresas líderes
            <br />
            não escolhem soluções comuns
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            O LeadyIA não é sobre volume.
            <br />
            É sobre decidir antes do concorrente.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Nota racional */}
        <p className="mt-16 text-center text-sm text-neutral-400">
          Empresas que demoram para estruturar decisão perdem até{" "}
          <span className="font-semibold text-white">
            38% dos leads qualificados
          </span>.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
 * 🧱 PLAN CARD — REFINADO
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
        transition-all duration-300
        hover:-translate-y-1
        ${highlight ? "scale-[1.03]" : ""}
      `}
      style={{
        background: "rgba(255,255,255,0.06)",
        border: highlight
          ? "1px solid rgba(59,130,246,0.45)"
          : "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Glow só no plano principal */}
      {highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: "var(--gradient-glow)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
        />
      )}

      {/* Badge */}
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-xs font-semibold text-black">
          Mais escolhido
        </span>
      )}

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>

      <p className="mt-6 text-3xl font-extrabold text-white">{price}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>

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
            className="relative w-full rounded-xl py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--cta-primary-bg)",
              boxShadow: "var(--cta-primary-shadow)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-xl"
              style={{
                background: "var(--cta-primary-glow)",
                filter: "blur(28px)",
                opacity: 0.9,
              }}
            />
            {cta}
          </button>
        )}

        {variant === "secondary" && (
          <button
            className="w-full rounded-xl py-3 text-sm font-medium text-white transition hover:bg-white/15"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {cta}
          </button>
        )}

        {variant === "outline" && (
          <button
            className="w-full rounded-xl border py-3 text-sm font-medium text-white transition hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
}

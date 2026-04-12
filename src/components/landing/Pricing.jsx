/**
 * =========================================================
 * 💰 PRICING — LEADYIA (REFINADO VISUAL + CONVERSÃO)
 * =========================================================
 */

import React from "react";

const REGISTER_URL = "https://dashboard.leadyia.com/auth/register";

const PLANS = [
  {
    name: "Starter",
    price: "R$ 97",
    period: "/mês",
    bots: "1 bot",
    messages: "5.000 mensagens/mês",
    features: [
      "Widget conversacional inteligente",
      "Identificação básica de intenção",
      "Lead scoring essencial",
      "Captura automática de leads",
      "Histórico completo de conversas",
      "Integração com WhatsApp",
      "Respostas automatizadas",
    ],
    variant: "secondary",
  },
  {
    name: "Pro",
    price: "R$ 297",
    period: "/mês",
    bots: "5 bots",
    messages: "20.000 mensagens/mês",
    features: [
      "Tudo do Starter",
      "Decision Engine completo",
      "Qualificação avançada por intenção",
      "Auto-handoff para CRM e WhatsApp",
      "Automações avançadas",
      "Segmentação inteligente de leads",
    ],
    highlight: true,
    badge: "Mais Popular",
    variant: "primary",
  },
  {
    name: "Business",
    price: "R$ 597",
    period: "/mês",
    bots: "15 bots",
    messages: "50.000 mensagens/mês",
    features: [
      "Tudo do Pro",
      "Fluxos conversacionais sob medida",
      "Playbooks personalizados",
      "Roteamento inteligente de leads",
      "Analytics avançado",
      "Controle granular de permissões",
    ],
    variant: "secondary",
  },
  {
    name: "Enterprise",
    price: "R$ 997",
    period: "/mês",
    bots: "Bots ilimitados",
    messages: "Mensagens ilimitadas",
    features: [
      "Tudo do Business",
      "IA privada com RAG dedicado",
      "Infraestrutura dedicada",
      "SLA enterprise 99.9%",
      "Integrações estratégicas",
      "Gerente técnico dedicado",
    ],
    variant: "outline",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-36 px-6 text-slate-900"
    >
      {/* BACKGROUND MAIS LEVE */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg,#0f172a 0%,#111827 40%,#0f172a 100%)",
        }}
      />

      {/* OVERLAY MAIS SUAVE */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "rgba(15,23,42,0.25)",
        }}
      />

      {/* GLOW */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30"
        style={{
          width: 800,
          height: 400,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-semibold">
            Planos
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
            Escale sua operação
            <br />
            com previsibilidade
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Escolha o plano ideal e comece a converter mais leads hoje.
          </p>
        </div>

        {/* GRID */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================================================
 * PLAN CARD
 * ========================================================= */

function PlanCard({ plan }) {
  const {
    name,
    price,
    period,
    bots,
    messages,
    features,
    highlight,
    badge,
    variant,
  } = plan;

  return (
    <div
      className={`
        group relative flex flex-col
        rounded-2xl p-8
        transition-all duration-300
        hover:-translate-y-2
        ${highlight ? "scale-[1.05]" : ""}
      `}
      style={{
        background: highlight
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0.08)",
        border: highlight
          ? "1px solid rgba(59,130,246,0.6)"
          : "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(16px)",
      }}
    >
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-white">{name}</h3>

      <p className="mt-6 text-3xl font-extrabold text-white">
        {price}
        <span className="text-sm text-slate-300 ml-1">{period}</span>
      </p>

      <p className="mt-4 text-sm text-slate-300">🤖 {bots}</p>
      <p className="text-sm text-slate-300">💬 {messages}</p>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-slate-200">
            <span className="text-brand-blue">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <a href={REGISTER_URL} className="mt-10 block">
        {variant === "primary" && (
          <button
            className="
              relative w-full rounded-xl py-3 text-sm font-semibold
              text-white transition-all hover:-translate-y-0.5
            "
            style={{
              background: "var(--cta-primary-bg)",
              boxShadow: "var(--cta-primary-shadow)",
            }}
          >
            Criar conta
          </button>
        )}

        {variant === "secondary" && (
          <button
            className="
              w-full rounded-xl py-3 text-sm font-medium
              text-white transition hover:bg-white/20
            "
            style={{
              background: "rgba(255,255,255,0.12)",
            }}
          >
            Criar conta
          </button>
        )}

        {variant === "outline" && (
          <button
            className="
              w-full rounded-xl border py-3 text-sm font-medium
              text-white transition hover:bg-white/10
            "
            style={{
              borderColor: "rgba(255,255,255,0.35)",
            }}
          >
            Falar com vendas
          </button>
        )}
      </a>
    </div>
  );
}
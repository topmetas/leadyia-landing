/**
 * =========================================================
 * ✨ FEATURES — LEADYIA WEBSITE (BIG TECH SaaS)
 * =========================================================
 *
 * Mostra como o LeadyIA transforma visitantes
 * em oportunidades de venda automaticamente.
 */

import React from "react";

const DASHBOARD_REGISTER = "https://dashboard.leadyia.com/register";

const FEATURES = [
  {
    title: "Capture leads automaticamente",
    description:
      "O widget LeadyIA inicia conversas com visitantes no momento certo e captura oportunidades antes que elas abandonem seu site.",
    tag: "Aquisição",
  },
  {
    title: "Identifique quem realmente quer comprar",
    description:
      "O LeadyIA analisa o comportamento do visitante e identifica quais leads têm maior probabilidade de conversão.",
    tag: "Qualificação",
  },
  {
    title: "Converse como um vendedor experiente",
    description:
      "Cada resposta muda o caminho da conversa. A IA se adapta ao contexto do cliente e conduz a interação naturalmente.",
    tag: "Inteligência",
  },
  {
    title: "Encaminhe leads no momento certo",
    description:
      "Quando o visitante está pronto para avançar, o LeadyIA envia automaticamente para vendas, CRM ou WhatsApp.",
    tag: "Conversão",
  },
  {
    title: "Integre com seu fluxo de vendas",
    description:
      "Sincronize leads com seu CRM, ferramentas de marketing e equipes comerciais sem processos manuais.",
    tag: "Integração",
  },
  {
    title: "Controle total do processo",
    description:
      "Você acompanha cada interação, entende o comportamento dos leads e ajusta o fluxo conforme seu negócio evolui.",
    tag: "Controle",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-32 text-white"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Automação inteligente de vendas
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight">
            Seu site começa a vender
            <br />
            mesmo quando você não está online
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            O LeadyIA transforma visitantes em oportunidades reais de negócio.
            Ele conversa, entende o interesse do cliente e conduz cada lead
            para o próximo passo automaticamente.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        {/* CTA secundário */}
        <div className="mt-20 text-center">
          <a
            href={DASHBOARD_REGISTER}
            className="
              inline-flex items-center justify-center
              rounded-xl px-8 py-4
              text-sm font-semibold
              transition hover:-translate-y-0.5
            "
            style={{
              background: "var(--cta-primary-bg)",
              boxShadow: "var(--cta-primary-shadow)",
              color: "#000",
            }}
          >
            Criar conta gratuita
          </a>
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
        group relative flex flex-col
        rounded-2xl p-7
        transition-all duration-300
        hover:-translate-y-1
      "
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.12)",
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
          background:
            "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 70%)",
        }}
      />

      {/* Tag */}
      <span
        className="
          mb-5 w-fit rounded-full
          bg-brand-blue/10
          px-3 py-1
          text-xs font-semibold
          tracking-wide
          text-brand-blue
        "
      >
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>

      {/* Divider */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-px
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />
    </div>
  );
}
/**
 * =========================================================
 * 🚀 HERO — LEADYIA WEBSITE (BIG TECH SaaS 2026)
 * =========================================================
 *
 * Produto: LeadyIA
 * Posicionamento: Infraestrutura de conversão e decisão
 *
 * Público:
 * - SaaS
 * - Agências
 * - Ecommerce
 * - Infoprodutores
 * - Clínicas
 * - Advogados
 * - Imobiliárias
 * - Educação
 *
 * Referência visual:
 * - Vercel
 * - Stripe
 * - Linear
 */

import React from "react";

const DASHBOARD_REGISTER = "https://dashboard.leadyia.com/register";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-32 text-white"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background: "var(--gradient-hero)",
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background: "rgba(0,0,0,0.22)",
        }}
      />

      {/* Glow Top */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(59,130,246,0.25), transparent 70%)",
        }}
      />

      {/* Glow Side */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 60% at 85% 45%, rgba(99,102,241,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-24 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Tagline */}
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-300">
            Infraestrutura de conversão para empresas digitais
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Transforme visitantes
            <br />
            <span className="text-brand-blue">
              em clientes automaticamente
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-200">
            O LeadyIA analisa intenção, responde visitantes em tempo real
            e transforma cada conversa em oportunidades de venda —
            com inteligência artificial treinada para negócios.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-wrap gap-5">

            {/* PRIMARY CTA */}
            <a
              href={DASHBOARD_REGISTER}
              className="relative inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--cta-primary-bg)",
                boxShadow: "var(--cta-primary-shadow)",
                color: "#000",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  background: "var(--cta-primary-glow)",
                  filter: "blur(32px)",
                  opacity: 0.85,
                }}
              />

              Criar conta grátis
            </a>

            {/* PRODUCT CTA */}
            <a
              href="#product-preview"
              className="inline-flex items-center justify-center rounded-xl border px-10 py-4 text-base font-medium transition hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "#fff",
              }}
            >
              Ver produto em ação
            </a>

            {/* TECH CTA */}
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-xl border px-10 py-4 text-base font-medium transition hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "#fff",
              }}
            >
              Explorar arquitetura
            </a>
          </div>

          {/* Micro proof */}
          <p className="mt-6 text-xs text-neutral-300">
            Comece grátis • Instalação em 30 segundos • Sem cartão
          </p>

          {/* Technical trust */}
          <p className="mt-4 text-xs text-neutral-300">
            1 linha de código • Widget inteligente • Automação de vendas 24/7
          </p>
        </div>

        {/* PRODUCT DEMO */}
        <div
          className="relative rounded-2xl p-6 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between text-xs text-neutral-300">
            <span>LeadyIA — Assistente comercial ativo</span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Online
            </span>
          </div>

          {/* Conversation */}
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3">
              Cliente: Gostaria de entender qual plano é ideal para minha empresa.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              LeadyIA: Posso analisar seu cenário e recomendar o plano ideal para
              o seu volume de leads e equipe.
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              Cliente: Temos cerca de 800 visitantes por dia.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              LeadyIA: Entendido. Vou priorizar leads com alta intenção e enviar
              automaticamente para seu time de vendas.
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-4 text-[11px] text-neutral-300">
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">
              94
            </span>{" "}
            • Intenção alta • Resposta em 12s • CRM sincronizado
          </div>
        </div>
      </div>
    </section>
  );
}
/**
 * =========================================================
 * 🚀 HERO — LEADYIA WEBSITE (ULTRA-PREMIUM ENTERPRISE)
 * =========================================================
 *
 * Posicionamento: Infraestrutura de decisão e receita.
 * Objetivo: Transmitir previsibilidade, controle e escala.
 * Referência visual: Stripe / Linear / Vercel.
 *
 * Diretrizes:
 * - Linguagem estratégica e enxuta
 * - Zero exagero de marketing
 * - Autoridade > Emoção
 * - Estrutura limpa e escalável
 */

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-32 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE — GRADIENT CONTROLADO
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background: "var(--gradient-hero)",
        }}
      />

      {/* Overlay para legibilidade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "rgba(0,0,0,0.22)" }}
      />

      {/* Glow superior estratégico */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(59,130,246,0.25), transparent 70%)",
        }}
      />

      {/* Glow lateral para profundidade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 60% at 85% 45%, rgba(99,102,241,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-24 md:grid-cols-2 items-center">
        {/* =====================================================
            BLOCO DE VALOR E POSICIONAMENTO
           ===================================================== */}
        <div>
          {/* Tagline Estratégica */}
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-300">
            Infraestrutura de decisão para empresas digitais
          </p>

          {/* Headline Principal */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Transforme cada conversa
            <br />
            <span className="text-brand-blue">
              em crescimento previsível
            </span>
          </h1>

          {/* Subheadline Estratégica */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-200">
            O LeadyIA identifica intenção real, prioriza oportunidades e conduz
            cada interação até a decisão — com inteligência, contexto e escala.
          </p>

          {/* =====================================================
              CALL TO ACTIONS
             ===================================================== */}
          <div className="mt-14 flex flex-wrap gap-5">
            {/* CTA Primário */}
            <a
              href="#cta"
              className="
                relative inline-flex items-center justify-center
                rounded-xl px-10 py-4 text-base font-semibold
                transition-all duration-300
                hover:-translate-y-0.5
              "
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
              Ver produto em ação
            </a>

            {/* CTA Secundário */}
            <a
              href="/features"
              className="
                inline-flex items-center justify-center
                rounded-xl border px-10 py-4
                text-base font-medium
                transition hover:bg-white/10
              "
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "#fff",
              }}
            >
              Explorar arquitetura
            </a>
          </div>

          {/* Microproof */}
          <p className="mt-6 text-xs text-neutral-300">
            Sem cartão • Implementação guiada • Controle total de dados
          </p>

          {/* Benefícios estratégicos */}
          <p className="mt-4 text-xs text-neutral-300">
            Qualificação automática. Priorização inteligente. Escala sem fricção.
          </p>
        </div>

        {/* =====================================================
            DEMO VISUAL — ENTERPRISE GLASS CARD
           ===================================================== */}
        <div
          className="relative rounded-2xl p-6 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* Header do Card */}
          <div className="mb-4 flex items-center justify-between text-xs text-neutral-300">
            <span>LeadyIA — Ambiente ativo</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Operacional
            </span>
          </div>

          {/* Conversa Simulada */}
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3">
              Cliente: Preciso decidir rapidamente qual plano atende melhor meu cenário.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              LeadyIA: Vou analisar seu contexto e indicar a melhor opção com base no seu perfil e objetivo.
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              Cliente: Perfeito.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              LeadyIA: Plano recomendado. Lead priorizado. Time notificado.
            </div>
          </div>

          {/* Indicadores Técnicos */}
          <div className="mt-4 text-[11px] text-neutral-300">
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">94</span>
            {" "}• Intenção alta • Resposta em 18s • Sincronizado com CRM
          </div>
        </div>
      </div>
    </section>
  );
}

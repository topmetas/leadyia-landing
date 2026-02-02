/**
 * =========================================================
 * 🚀 HERO — LEADYIA WEBSITE (VERSÃO MÃE)
 * =========================================================
 *
 * ✔ SaaS B2B premium
 * ✔ Conversão acima da dobra
 * ✔ Performance first
 * ✔ 100% alinhado ao Design System
 */

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        hero relative overflow-hidden
        pt-32 pb-28 text-white
      "
    >
      {/* =====================================================
          BACKGROUND BASE — HERDADO DO DESIGN SYSTEM
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Glow principal (controlado, não agressivo) */}
      <div
        aria-hidden
        className="glow -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, rgba(59,130,246,0.30), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-20 md:grid-cols-2 items-center">
        {/* =====================================================
            BLOCO DE VALOR
           ===================================================== */}
        <div>
          {/* Pré-headline */}
          <p
            className="mb-4 text-sm uppercase tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            Plataforma de vendas conversacionais B2B
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Transforme conversas em{" "}
            <span className="text-brand-blue">
              receita previsível
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="mt-6 max-w-xl text-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            Qualifique leads, tome decisões e direcione vendas automaticamente —
            com clareza, velocidade e controle total do funil.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            {/* CTA Primário */}
            <a
              href="#cta"
              className="
                relative inline-flex items-center justify-center
                rounded-xl px-8 py-4 text-lg font-semibold
                transition-all duration-300
                hover:-translate-y-0.5
                focus:outline-none
              "
              style={{
                background: "var(--cta-primary-bg)",
                boxShadow: "var(--cta-primary-shadow)",
                color: "black",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  background: "var(--cta-primary-glow)",
                  filter: "blur(32px)",
                  opacity: 1,
                }}
              />
              Solicitar demo
            </a>

            {/* CTA Secundário */}
            <a
              href="/features"
              className="
                inline-flex items-center justify-center
                rounded-xl border px-8 py-4 text-lg font-semibold
                transition hover:bg-white/10
              "
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "var(--color-text)",
              }}
            >
              Ver recursos
            </a>
          </div>

          {/* Microcopy */}
          <p
            className="mt-4 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Sem cartão de crédito • Setup guiado • Sem compromisso
          </p>

          {/* Confiança */}
          <p
            className="mt-6 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            ✔️ Fluxos auditáveis • ✔️ Score em tempo real • ✔️ Pronto para escala
          </p>
        </div>

        {/* =====================================================
            DEMO VISUAL
           ===================================================== */}
        <div className="card relative shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Leadyia em ação
            </span>
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3">
              👤 Quero contratar ainda hoje. Dá pra decidir rápido?
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🤖 Sim. Vou entender seu cenário e te levar direto
              para a melhor decisão.
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              👤 Ótimo.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🔥 Lead qualificado e enviado para vendas automaticamente.
            </div>
          </div>

          <div
            className="mt-4 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">
              92
            </span>{" "}
            • Intenção: Muito alta • Tempo: 28s
          </div>
        </div>
      </div>
    </section>
  );
}

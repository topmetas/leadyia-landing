/**
 * =========================================================
 * 🚀 HERO — LEADYIA WEBSITE (ENTERPRISE / HIGH-END)
 * =========================================================
 */

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-32 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE — MAIS ESCURO PARA CONTRASTE
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Overlay de contraste — deixa texto mais nítido */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "rgba(0,0,0,0.35)" }}
      />

      {/* Glow superior — mais contido */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 40% at 50% 0%, rgba(59,130,246,0.22), transparent 70%)",
        }}
      />

      {/* Glow lateral — sutil, não compete com conteúdo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(35% 55% at 85% 45%, rgba(99,102,241,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-24 md:grid-cols-2 items-center">
        {/* =====================================================
            BLOCO DE VALOR
           ===================================================== */}
        <div>
          {/* Pré-headline */}
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Vendas inteligentes para empresas que querem crescer
          </p>

          {/* Headline — mais elegante */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Transforme visitantes
            <br />
            <span className="text-brand-blue">
              em decisões de compra
            </span>
          </h1>

          {/* Subheadline — mais leve e legível */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300">
            O LeadyIA conversa com seus visitantes, entende o que eles querem
            e conduz cada lead para o próximo passo certo —
            no tempo certo, sem esforço humano.
          </p>

          {/* CTAs */}
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
                color: "black",
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
              Ver o LeadyIA em ação
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
                borderColor: "rgba(255,255,255,0.3)",
                color: "#ffffff",
              }}
            >
              Entender como funciona
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-6 text-xs text-neutral-400">
            Sem cartão de crédito • Setup guiado • Controle total desde o primeiro dia
          </p>

          <p className="mt-4 text-xs text-neutral-400">
            ✔️ Leads qualificados • ✔️ Decisões claras • ✔️ Pronto para escalar
          </p>
        </div>

        {/* =====================================================
            DEMO VISUAL — MAIS CLEAN
           ===================================================== */}
        <div
          className="relative rounded-2xl p-6 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
            <span>LeadyIA em produção</span>
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/5 p-3">
              👤 Preciso decidir rápido. Dá pra ajudar?
            </div>

            <div className="rounded-lg bg-brand-blue/15 p-3">
              🤖 Claro. Vou entender sua necessidade
              e te levar direto para a melhor decisão.
            </div>

            <div className="rounded-lg bg-white/5 p-3">
              👤 Perfeito.
            </div>

            <div className="rounded-lg bg-brand-blue/15 p-3">
              🔥 Lead priorizado e enviado para o time certo.
            </div>
          </div>

          <div className="mt-4 text-[11px] text-neutral-400">
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">94</span>
            {" "}• Intenção alta • Resposta em 21s
          </div>
        </div>
      </div>
    </section>
  );
}

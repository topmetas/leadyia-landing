/**
 * =========================================================
 * 🚀 HERO — LEADYIA WEBSITE (GLOBAL / INSANE MODE)
 * =========================================================
 *
 * 📄 Arquivo:
 * src/components/landing/Hero.jsx
 *
 * 🎯 Função estratégica:
 * - Criar desejo imediato (não curiosidade)
 * - Posicionar Leadyia como padrão global de mercado
 * - Tornar a NÃO-adoção uma desvantagem competitiva
 *
 * 🧠 Princípio-mãe:
 * Não vendemos automação.
 * Vendemos controle do tempo, da decisão e da receita.
 */

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        pt-36
        pb-32
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND BASE — SISTEMA GLOBAL
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Glow superior — atração imediata */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(59,130,246,0.32), transparent 70%)",
        }}
      />

      {/* Glow lateral — profundidade premium */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 60% at 85% 40%, rgba(99,102,241,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-24 md:grid-cols-2 items-center">
        {/* =====================================================
            BLOCO DE VALOR — DESEJO GLOBAL
           ===================================================== */}
        <div>
          {/* Pré-headline */}
          <p
            className="mb-5 text-sm uppercase tracking-widest"
            style={{ color: "var(--color-text-muted)" }}
          >
            O novo padrão global em vendas conversacionais
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Quem decide mais rápido
            <br />
            <span className="text-brand-blue">
              domina o mercado
            </span>
          </h1>

          {/* Subheadline — por que ninguém pode ficar de fora */}
          <p
            className="mt-8 max-w-xl text-xl leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            O Leadyia garante que cada conversa relevante
            vire uma decisão no tempo certo —
            antes que seu concorrente responda.
          </p>

          {/* CTAs */}
          <div className="mt-14 flex flex-wrap gap-5">
            {/* CTA Primário — inevitável */}
            <a
              href="#cta"
              className="
                relative
                inline-flex
                items-center
                justify-center
                rounded-xl
                px-10
                py-4
                text-lg
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-0.5
                focus:outline-none
              "
              style={{
                background: "var(--cta-primary-bg)",
                boxShadow: "var(--cta-primary-shadow)",
                color: "black",
              }}
            >
              {/* Glow do CTA */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  background: "var(--cta-primary-glow)",
                  filter: "blur(36px)",
                  opacity: 1,
                }}
              />
              Solicitar demonstração
            </a>

            {/* CTA Secundário — racional */}
            <a
              href="/features"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                px-10
                py-4
                text-lg
                font-semibold
                transition
                hover:bg-white/10
              "
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "var(--color-text)",
              }}
            >
              Entender como funciona
            </a>
          </div>

          {/* Microcopy — redução de risco */}
          <p
            className="mt-6 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Sem cartão de crédito • Setup guiado • Controle total desde o primeiro dia
          </p>

          {/* Confiança */}
          <p
            className="mt-6 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            ✔️ IA auditável • ✔️ Decisão determinística • ✔️ Pronto para escala global
          </p>
        </div>

        {/* =====================================================
            DEMO VISUAL — PROVA SILENCIOSA
           ===================================================== */}
        <div className="card relative shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Leadyia em produção
            </span>
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3">
              👤 Preciso decidir rápido. Vocês conseguem?
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🤖 Sim. Vou analisar sua intenção
              e te levar direto à melhor decisão.
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              👤 Perfeito.
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🔥 Lead qualificado, priorizado e entregue ao time certo.
            </div>
          </div>

          <div
            className="mt-4 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">
              94
            </span>{" "}
            • Intenção: Crítica • Tempo: 21s
          </div>
        </div>
      </div>
    </section>
  );
}

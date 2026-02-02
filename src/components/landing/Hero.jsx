/**
 * =========================================================
 * 🚀 HERO SECTION — LEADYIA WEBSITE
 * =========================================================
 *
 * 📄 Arquivo: Hero.jsx
 * 📁 Caminho completo: src/components/landing/Hero.jsx
 *
 * 🎯 Objetivo visual:
 * - Hero premium SaaS
 * - Profundidade, luz e contraste
 * - ZERO preto chapado
 * - 100% integrado ao Gradient Design System
 */

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        hero
        relative
        text-white
        pt-32
        pb-28
        overflow-hidden
      "
    >
      {/* =====================================================
          CAMADA 1 — GLOW SUPERIOR (FOCO / LUXO)
         ===================================================== */}
      <div
        aria-hidden="true"
        className="glow"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />

      {/* =====================================================
          CAMADA 2 — GLOW LATERAL (PROFUNDIDADE)
         ===================================================== */}
      <div
        aria-hidden="true"
        className="glow"
        style={{
          background:
            "radial-gradient(40% 60% at 85% 40%, rgba(99,102,241,0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-20 md:grid-cols-2 items-center">
        
        {/* ================= TEXTO PRINCIPAL ================= */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Transforme conversas em{" "}
            <span className="text-brand-blue">
              vendas reais
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            O Leadyia é um motor de decisão, qualificação e auto-vendas
            que opera 24/7 para aumentar previsibilidade e conversão.
          </p>

          {/* CTAs principais */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="
                inline-flex items-center justify-center
                rounded-xl bg-brand-blue
                px-8 py-4 text-lg font-semibold
                text-white transition hover:opacity-90
              "
            >
              Solicitar demo
            </a>

            <a
              href="/features"
              className="
                inline-flex items-center justify-center
                rounded-xl border
                px-8 py-4 text-lg font-semibold
                transition hover:bg-white/5
              "
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "var(--color-text)",
              }}
            >
              Ver recursos
            </a>
          </div>

          {/* Prova de confiança */}
          <p
            className="mt-8 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            ✔️ Fluxos auditáveis • ✔️ Score em tempo real • ✔️ Pronto para escala
          </p>
        </div>

        {/* ================= DEMO VISUAL ================= */}
        <div className="card relative shadow-2xl">
          {/* Cabeçalho fake */}
          <div className="mb-4 flex items-center justify-between">
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Demonstração do Leadyia
            </span>
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          {/* Conversa simulada */}
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white/10 p-3">
              👤 Oi, gostaria de saber o preço
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🤖 Claro! Você está avaliando agora ou comparando soluções?
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              👤 Quero contratar ainda hoje
            </div>

            <div className="rounded-lg bg-brand-blue/20 p-3">
              🔥 Perfeito! Posso te direcionar direto para vendas.
            </div>
          </div>

          {/* Rodapé */}
          <div
            className="mt-4 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Lead Score:{" "}
            <span className="font-semibold text-brand-blue">
              87
            </span>{" "}
            • Intenção: Alta
          </div>
        </div>
      </div>
    </section>
  );
}

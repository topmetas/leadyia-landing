/**
 * =========================================================
 * 🎯 FINAL CTA — LEADYIA WEBSITE (ENTERPRISE)
 * =========================================================
 *
 * 📄 Arquivo:
 * src/components/landing/CTA.jsx
 *
 * 🎯 Função:
 * - Encerrar a landing com autoridade estratégica
 * - Tornar a decisão óbvia para o decisor
 * - Mostrar o custo de NÃO agir
 *
 * 🧠 Princípio:
 * - Sem pressão artificial
 * - Sem urgência falsa
 * - Apenas lógica de negócio clara
 */

import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        py-36
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND — CONTINUIDADE DO HERO
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Glow inferior (encerramento visual) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 100%, rgba(59,130,246,0.22), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* =====================================================
            HEADLINE — DECISÃO FINAL
           ===================================================== */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Enquanto você decide,
          <br className="hidden md:block" />
          seus leads já estão decidindo
        </h2>

        {/* =====================================================
            SUBHEADLINE — POR QUE NÃO FICAR DE FORA
           ===================================================== */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300">
          Cada conversa não qualificada é uma oportunidade perdida.
          Cada atraso na resposta reduz intenção.
          O Leadyia garante que nenhuma decisão importante
          aconteça tarde demais.
        </p>

        {/* =====================================================
            CTAs
           ===================================================== */}
        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {/* CTA Primário */}
          <a
            href="#demo"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-brand-blue
              px-12
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:opacity-90
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-blue
              focus-visible:ring-offset-2
              focus-visible:ring-offset-neutral-900
            "
          >
            Solicitar demonstração
          </a>

          {/* CTA Secundário */}
          <a
            href="#pricing"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              px-12
              py-4
              text-lg
              font-semibold
              transition
              hover:bg-white/5
            "
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "var(--color-text)",
            }}
          >
            Avaliar planos
          </a>
        </div>

        {/* =====================================================
            MICROCOPY — REDUÇÃO DE RISCO
           ===================================================== */}
        <p className="mt-14 text-sm text-neutral-400">
          ✔️ Sem compromisso • ✔️ Setup guiado • ✔️ IA auditável e controlável
        </p>
      </div>
    </section>
  );
}

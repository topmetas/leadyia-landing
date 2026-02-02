/**
 * =========================================================
 * 🎯 FINAL CTA — LEADYIA WEBSITE
 * =========================================================
 *
 * 🎯 Função:
 * - Encerrar a landing com clareza e autoridade
 * - Reforçar valor percebido
 * - Direcionar para conversão sem pressão artificial
 *
 * 🧠 Estratégia:
 * - Copy institucional
 * - Visual premium
 * - Sem contraste agressivo
 * - Mesmo sistema visual do Hero
 */

import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32 text-white"
    >
      {/* =====================================================
          BACKGROUND FINAL (CONTINUIDADE VISUAL)
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Glow sutil de encerramento */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 100%, rgba(59,130,246,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Um sistema de vendas
          <br />
          que decide no tempo certo
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300">
          O LeadyIA não substitui seu time.
          Ele elimina ruído, acelera decisões
          e entrega leads prontos para fechar.
        </p>

        {/* CTAs */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* CTA primário */}
          <a
            href="#demo"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-brand-blue
              px-10 py-4 text-lg font-semibold
              text-white transition hover:opacity-90
            "
          >
            Solicitar demonstração
          </a>

          {/* CTA secundário */}
          <a
            href="#pricing"
            className="
              inline-flex items-center justify-center
              rounded-xl border
              px-10 py-4 text-lg font-semibold
              transition hover:bg-white/5
            "
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "var(--color-text)",
            }}
          >
            Ver planos
          </a>
        </div>

        {/* Reforço de confiança */}
        <p className="mt-12 text-sm text-neutral-400">
          ✔️ IA auditável • ✔️ Score em tempo real • ✔️ Pronto para escala enterprise
        </p>
      </div>
    </section>
  );
}

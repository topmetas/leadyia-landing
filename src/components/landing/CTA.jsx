/**
 * =========================================================
 * 🎯 CALL TO ACTION — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo: CTA.jsx
 * 📁 Caminho completo: src/components/landing/CTA.jsx
 *
 * 🎯 Responsabilidade:
 * - Encerrar a landing page com CTA forte
 * - Reforçar proposta de valor
 * - Direcionar para conversão ou planos
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Gerenciar estado global
 * - Implementar lógica de vendas
 *
 * 🧠 Contexto Enterprise:
 * - Copy orientada à conversão
 * - Visual forte para fechamento
 * - Preparado para testes A/B
 */

import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative
        bg-black
        text-white
        py-32
        px-6
        overflow-hidden
      "
    >
      {/* Gradiente de encerramento */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-linear-to-t
          from-brand-blue/20
          via-transparent
          to-transparent
        "
      />

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Transforme conversas em{" "}
          <span className="text-brand-blue">
            vendas automáticas
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-neutral-400">
          Qualifique, pontue, decida e venda em tempo real — sem fricção.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-brand-blue
              px-10 py-4 text-lg font-semibold
              transition hover:opacity-90
            "
          >
            🚀 Ver o bot em ação
          </a>

          <a
            href="#pricing"
            className="
              inline-flex items-center justify-center
              rounded-xl border border-neutral-700
              px-10 py-4 text-lg font-semibold
              transition hover:bg-neutral-800
            "
          >
            💼 Ver planos
          </a>
        </div>

        <p className="mt-12 text-sm text-neutral-400">
          ✔️ Score inteligente • ✔️ Auto-handoff • ✔️ IA focada em conversão
        </p>
      </div>
    </section>
  );
}

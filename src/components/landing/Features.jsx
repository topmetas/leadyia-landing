/**
 * =========================================================
 * 🧩 FEATURES SECTION — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo:
 * src/components/landing/Features.jsx
 *
 * 🎯 Responsabilidade:
 * - Exibir os principais diferenciais do produto
 * - Comunicar valor técnico de forma clara, escaneável e hierárquica
 * - Apoiar a conversão dentro da landing page
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Definir rotas
 * - Controlar navegação
 * - Gerenciar estado global
 *
 * 🧠 Contexto Enterprise:
 * - Seção interna da Home (âncora #features)
 * - Conteúdo estático, previsível e performático
 * - Preparado para expansão, A/B tests e personalização futura
 *
 * 📌 Decisão técnica:
 * - Uso exclusivo de utilitários CANÔNICOS do Tailwind v4
 * - Gradiente decorativo com fallback inline
 */

import React from "react";

export default function Features() {
  return (
    <section
      id="features"
      className="
        relative
        bg-white
        text-slate-900
        py-28
        px-6
        overflow-hidden
      "
    >
      {/* =====================================================
          Gradiente decorativo superior (não funcional)
          Tailwind v4 canonical + fallback inline
         ===================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-linear-to-b
          from-slate-100
          via-transparent
          to-transparent
        "
        style={{
          background:
            "linear-gradient(to bottom, #f1f5f9 0%, rgba(241,245,249,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER DA SEÇÃO ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Um motor completo de conversão
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600">
            Cada módulo do Leadyia foi projetado para operar como parte
            de um sistema de vendas inteligente, previsível e escalável.
          </p>
        </div>

        {/* ================= GRID DE FEATURES =================
            Estrutura previsível, fácil de manter e expandir */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Feature
            index="01"
            title="Decision Engine (FSM)"
            desc="Controle determinístico da conversa baseado em intenção, contexto e estágio do funil."
          />

          <Feature
            index="02"
            title="Lead Scoring em Tempo Real"
            desc="Pontuação progressiva baseada em micro-sinais reais de compra."
          />

          <Feature
            index="03"
            title="Auto-Sales Inteligente"
            desc="O bot vende sozinho quando detecta timing real de decisão."
          />

          <Feature
            index="04"
            title="Auto-Handoff para Vendas"
            desc="Encaminhamento automático com histórico, score e intenção completa."
          />
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🔹 FEATURE CARD — ENTERPRISE
 * =========================================================
 *
 * 🎯 Responsabilidade:
 * - Representar UMA feature individual
 * - Garantir leitura rápida e hierarquia visual clara
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Conhecer layout global
 * - Executar lógica de negócio
 *
 * 🧠 Nota arquitetural:
 * - Componente local por design
 * - Evita abstração prematura
 * - Pronto para promoção a componente global
 */
function Feature({ index, title, desc }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-8
        transition
        hover:border-brand-blue
        hover:shadow-lg
      "
    >
      {/* Índice visual (ordem cognitiva) */}
      <span
        className="
          absolute
          -top-4
          left-6
          rounded-full
          bg-brand-blue
          px-3
          py-1
          text-xs
          font-semibold
          text-white
        "
      >
        {index}
      </span>

      {/* Conteúdo */}
      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {desc}
      </p>

      {/* Linha de reforço visual */}
      <div
        aria-hidden="true"
        className="
          mt-6
          h-1
          w-12
          rounded-full
          bg-brand-blue/30
          transition
          group-hover:bg-brand-blue
        "
      />
    </div>
  );
}

/**
 * =========================================================
 * 🛡️ CONFIANÇA & PRONTO PARA EMPRESAS — LEADYIA
 * =========================================================
 *
 * Objetivo:
 * - Fazer o decisor confiar
 * - Mostrar que não existe risco oculto
 * - Deixar claro que isso é infraestrutura, não experimento
 */

import React from "react";

/**
 * =========================================================
 * 🔐 PILARES DE CONFIANÇA
 * =========================================================
 */
const TRUST_PILLARS = [
  {
    title: "Decisões sob controle total",
    description:
      "Você sabe exatamente por que o LeadyIA respondeu algo, tomou uma ação ou escalou para um humano. Nada é aleatório ou fora do seu controle.",
  },
  {
    title: "IA sem risco operacional",
    description:
      "A inteligência, as regras de negócio e a execução são separadas. Se algo muda, o resto do sistema continua estável.",
  },
  {
    title: "Pronto para múltiplos clientes e marcas",
    description:
      "Ideal para empresas, agências e operações white-label. Cada cliente isolado, seguro e independente.",
  },
  {
    title: "Tudo registrado e auditável",
    description:
      "Cada conversa, decisão e resultado ficam registrados para análise, melhoria e compliance.",
  },
  {
    title: "Integra com o que você já usa",
    description:
      "CRM, WhatsApp, APIs internas e fluxos existentes. O LeadyIA entra na operação sem quebrar nada.",
  },
  {
    title: "Escala sem perder qualidade",
    description:
      "Quanto mais leads entram, mais o sistema prova sua força — sem lentidão, sem decisões ruins.",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="
        relative
        overflow-hidden
        bg-neutral-900
        text-white
        py-32
        px-6
      "
    >
      {/* =====================================================
          FUNDO DARK — SOLIDEZ E CONTROLE
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a 0%, #0f0f0f 60%, #000000 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue/80">
            Confiança para decisões críticas
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            Não é um bot.
            <br className="hidden md:block" />
            É infraestrutura de decisão
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            O LeadyIA foi criado para empresas que não podem
            perder leads, dinheiro ou controle da operação.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {TRUST_PILLARS.map((pillar) => (
            <TrustCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-neutral-500">
          Se sua operação exige previsibilidade, rastreabilidade
          e decisões claras, o LeadyIA foi projetado exatamente
          para esse nível de responsabilidade.
        </p>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 TRUST CARD
 * =========================================================
 */
function TrustCard({ title, description }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        border
        border-white/5
        bg-neutral-800/70
        p-6
        transition-all
        duration-300
        hover:border-brand-blue/40
        hover:bg-neutral-800
      "
    >
      {/* Indicador lateral */}
      <div
        aria-hidden
        className="
          absolute left-0 top-6
          h-12 w-1 rounded-full
          bg-brand-blue/60
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}

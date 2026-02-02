/**
 * =========================================================
 * 🔄 COMO FUNCIONA — LEADYIA
 * =========================================================
 *
 * Aqui o cliente PRECISA entender:
 * - O que acontece com cada lead
 * - Por que isso gera mais vendas
 * - O que ele perde se não usar
 */

import React from "react";

/**
 * =========================================================
 * 📘 PASSO A PASSO SIMPLES
 * =========================================================
 */
const STEPS = [
  {
    step: "01",
    title: "O cliente entra em contato",
    description:
      "O lead fala com sua empresa pelo site, WhatsApp ou canal que você já usa. Sem formulário chato. Sem perder conversa.",
  },
  {
    step: "02",
    title: "O LeadyIA entende o que ele quer",
    description:
      "O sistema entende se a pessoa está só curiosa ou realmente pronta para comprar, analisando o que ela fala e como se comporta.",
  },
  {
    step: "03",
    title: "A melhor ação acontece sozinha",
    description:
      "O LeadyIA decide o que fazer: responder, explicar, qualificar, vender ou chamar um humano — tudo no tempo certo.",
  },
  {
    step: "04",
    title: "Os melhores leads sobem",
    description:
      "Quem tem mais chance de fechar ganha prioridade automaticamente. Seu time foca só no que gera dinheiro.",
  },
  {
    step: "05",
    title: "Venda feita ou lead entregue pronto",
    description:
      "Ou a venda acontece sozinha, ou o lead chega para seu time com histórico, contexto e intenção clara.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative overflow-hidden
        bg-slate-50 text-slate-900
        py-32 px-6
      "
    >
      {/* =====================================================
          FUNDO LIMPO — SISTEMA
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fafc 55%, #f1f5f9 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Como o LeadyIA funciona na prática
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Um sistema que atende seus clientes,
            entende quem quer comprar
            e ajuda sua empresa a vender mais,
            sem depender de resposta humana o tempo todo.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mt-24">
          {/* Linha de progressão (desktop) */}
          <div
            aria-hidden
            className="
              absolute top-10 left-0 right-0
              hidden h-px bg-slate-200 md:block
            "
          />

          <div className="grid gap-12 md:grid-cols-5">
            {STEPS.map((item) => (
              <Step key={item.step} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 STEP — BLOCO CLARO
 * =========================================================
 */
function Step({ step, title, description }) {
  return (
    <div
      className="
        relative flex flex-col
        rounded-2xl bg-white
        p-8
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Número */}
      <span
        className="
          mb-6 inline-flex w-fit
          rounded-full
          bg-brand-blue/10
          px-4 py-1
          text-sm font-semibold
          text-brand-blue
        "
      >
        {step}
      </span>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Indicador */}
      <div
        aria-hidden
        className="
          mt-8 h-1 w-12
          rounded-full
          bg-brand-blue/30
        "
      />
    </div>
  );
}

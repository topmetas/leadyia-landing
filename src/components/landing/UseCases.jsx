/**
 * =========================================================
 * 🧠 USE CASES — LEADYIA WEBSITE
 * =========================================================
 *
 * Objetivo:
 * - Fazer o cliente se enxergar no produto
 * - Mostrar claramente onde ele ganha ou perde dinheiro
 * - Explicar o funcionamento sem termos técnicos
 *
 * Regra:
 * - Se não entender em 20s, está errado
 */

import React from "react";

const USE_CASES = [
  {
    title: "SaaS B2B",
    highlight: "Mais trials que viram clientes",
    description:
      "O LeadyIA conversa com o lead, entende se ele tem perfil de compra e só ativa vendas quando existe interesse real. Menos trial perdido, mais conversão.",
  },
  {
    title: "Agências",
    highlight: "Menos curiosos, mais contratos",
    description:
      "O sistema separa quem só está pesquisando de quem realmente quer contratar. O time foca apenas em oportunidades com potencial de fechar.",
  },
  {
    title: "Enterprise & Vendas Complexas",
    highlight: "Vendas no tempo certo",
    description:
      "O lead recebe explicações, tira dúvidas e amadurece sozinho. Quando está pronto, o LeadyIA chama o vendedor com todo o contexto.",
  },
  {
    title: "Startups em Crescimento",
    highlight: "Vender mais sem contratar mais",
    description:
      "Um único sistema atende, qualifica e organiza os leads 24/7. Você cresce a operação sem inflar o time ou perder controle.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden py-28 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE — gradient.system
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Onde o LeadyIA faz
            <br />
            você ganhar dinheiro
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            Se hoje leads chegam, conversam e somem — aqui está o que muda
            quando existe um sistema decidindo o próximo passo.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item) => (
            <UseCaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 USE CASE CARD
 * =========================================================
 */
function UseCaseCard({ item }) {
  const { title, highlight, description } = item;

  return (
    <div
      className="
        flex flex-col rounded-2xl p-6
        transition-all duration-300
        hover:-translate-y-1
      "
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Tag de impacto */}
      <span className="mb-4 w-fit rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
        {highlight}
      </span>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>
    </div>
  );
}

/**
 * =========================================================
 * ✨ FEATURES — LEADYIA WEBSITE
 * =========================================================
 *
 * 📍 Caminho completo:
 * src/components/landing/Features.jsx
 *
 * 🎯 Responsabilidade:
 * - Mostrar claramente COMO o LeadyIA ajuda o negócio a vender mais
 * - Fazer o cliente entender o valor sem precisar conhecer tecnologia
 * - Criar sensação de “isso deveria estar no meu site agora”
 *
 * ❌ O que este componente NÃO deve fazer:
 * - Não falar de preço
 * - Não usar termos técnicos difíceis
 * - Não explicar arquitetura ou implementação
 *
 * 🧠 Nota estratégica:
 * Aqui o visitante já gostou da ideia.
 * Agora ele precisa entender POR QUE isso é melhor
 * do que continuar atendendo leads manualmente.
 */

import React from "react";

const FEATURES = [
  {
    title: "Leads certos, na hora certa",
    description:
      "O LeadyIA conversa, entende o interesse real do visitante e destaca quem realmente quer comprar — sem você perder tempo com curiosos.",
    tag: "Qualificação",
  },
  {
    title: "Conversas que se adaptam",
    description:
      "Cada resposta muda o caminho da conversa. O LeadyIA se ajusta ao comportamento do cliente, como um vendedor experiente faria.",
    tag: "Inteligência",
  },
  {
    title: "Venda ou encaminhe automaticamente",
    description:
      "Quando o lead está pronto, o LeadyIA age: direciona para vendas, CRM ou WhatsApp no momento certo.",
    tag: "Conversão",
  },
  {
    title: "Controle total do processo",
    description:
      "Você sabe exatamente o que o LeadyIA faz, por que faz e pode ajustar tudo. Sem surpresas, sem decisões escondidas.",
    tag: "Transparência",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-32 text-white"
    >
      {/* =====================================================
          BACKGROUND BASE
          Mesmo gradiente sistêmico do Hero
         ===================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* =====================================================
          CONTEÚDO
         ===================================================== */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Como o LeadyIA ajuda seu negócio
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight">
            Mais leads qualificados.
            <br />
            Menos trabalho manual.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            O LeadyIA atua como um vendedor digital: conversa com seus visitantes,
            entende o que eles querem e leva cada um para o próximo passo certo.
            Tudo isso automaticamente.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * 🧱 FEATURE CARD
 * =========================================================
 *
 * 🎯 Responsabilidade:
 * - Explicar um benefício real e concreto
 * - Mostrar impacto direto no dia a dia do negócio
 *
 * 🧠 Princípio:
 * Se um gestor não entender em 5 segundos,
 * o texto está complexo demais.
 */
function FeatureCard({ title, description, tag }) {
  return (
    <div
      className="
        group relative flex flex-col
        rounded-2xl p-7
        transition-all duration-300
        hover:-translate-y-1
      "
      style={{
        background: "var(--gradient-card)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Tag */}
      <span
        className="
          mb-5 w-fit rounded-full
          bg-brand-blue/10
          px-3 py-1
          text-xs font-semibold
          tracking-wide
          text-brand-blue
        "
      >
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-neutral-300">
        {description}
      </p>

      {/* Divider sistêmico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "var(--gradient-divider, linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent))",
        }}
      />
    </div>
  );
}

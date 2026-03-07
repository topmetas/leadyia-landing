import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-40 text-white">

      {/* BACKGROUND */}

      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(55% 40% at 50% 60%, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* HEADLINE */}

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Enquanto você decide,
          <br className="hidden md:block" />
          <span className="text-brand-blue">
            seus leads já estão decidindo
          </span>
        </h2>

        {/* SUBHEADLINE */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300">
          Cada conversa não qualificada representa oportunidade perdida.
          O <span className="text-white font-semibold">LeadyIA</span> garante
          que intenção, prioridade e decisão aconteçam no momento certo.
        </p>

        {/* STATS */}

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <Stat number="38%" label="menos leads perdidos" />
          <Stat number="3x" label="mais velocidade de resposta" />
          <Stat number="24/7" label="qualificação automática" />
        </div>

        {/* BOTÕES */}

        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">

          {/* BOTÃO AZUL */}

          <a
            href="https://dashboard.leadyia.com/register"
            className="
              relative
              inline-flex
              items-center
              justify-center
              rounded-xl
              px-14
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:-translate-y-0.5
            "
            style={{
              background: "var(--cta-primary-bg)",
              boxShadow: "var(--cta-primary-shadow)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-xl"
              style={{
                background: "var(--cta-primary-glow)",
                filter: "blur(32px)",
                opacity: 0.9,
              }}
            />
            Criar conta agora
          </a>

          {/* BOTÃO OUTLINE */}

          <a
            href="https://dashboard.leadyia.com/register"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              px-14
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-white/10
            "
            style={{
              borderColor: "rgba(255,255,255,0.28)",
            }}
          >
            Começar teste
          </a>

        </div>

        {/* TRUST */}

        <p className="mt-14 text-sm text-neutral-400">
          ✔ Setup guiado • ✔ IA auditável • ✔ Sem contrato obrigatório
        </p>

      </div>
    </section>
  );
}

/* STATS COMPONENT */

function Stat({ number, label }) {
  return (
    <div className="space-y-2">
      <p className="text-3xl font-bold text-white">{number}</p>
      <p className="text-sm text-neutral-400">{label}</p>
    </div>
  );
}
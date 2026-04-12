/**
 * =========================================================
 * 📊 RESULTADOS REAIS — LEADYIA (FIX LAYERING + CONVERSION)
 * =========================================================
 */

import React from "react";

const CTA_LINK = "https://dashboard.leadyia.com/auth/register";

const METRICS = [
  {
    value: "+38%",
    label: "Mais vendas convertidas",
    description: "Mais visitantes avançando até o momento de compra.",
  },
  {
    value: "-52%",
    label: "Menos tempo perdido",
    description: "Seu time fala só com quem realmente quer comprar.",
  },
  {
    value: "24/7",
    label: "Atendimento contínuo",
    description: "Seu negócio responde clientes a qualquer hora.",
  },
  {
    value: "100%",
    label: "Controle das conversas",
    description: "Visibilidade total sobre cada interação com leads.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="results"
      className="relative isolate overflow-hidden py-36 px-6 text-slate-900"
    >
      {/* BACKGROUND BASE */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg,#f8fafc 0%,#ffffff 55%,#eef2ff 100%)",
        }}
      />

      {/* GLOW CONTROLADO */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20 -z-10"
        style={{
          width: 700,
          height: 420,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)",
        }}
      />

      {/* CONTEÚDO PRINCIPAL (PROTEGIDO) */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER + CTA ================= */}

        <div
          className="
            max-w-3xl
            rounded-3xl
            p-10
            backdrop-blur-md
            relative z-20
          "
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(15,23,42,0.06)",
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Resultados reais
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl leading-tight">
            Menos conversa perdida.
            <br />
            Mais vendas acontecendo.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            O LeadyIA responde visitantes, identifica quem realmente quer comprar
            e conduz cada lead até o próximo passo ideal automaticamente.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CTA_LINK}
              className="
                group relative inline-flex items-center
                rounded-xl px-7 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
              "
              style={{
                background: "var(--cta-primary-bg)",
                boxShadow: "var(--cta-primary-shadow)",
              }}
            >
              <span
                aria-hidden
                className="
                  absolute inset-0 -z-10 rounded-xl
                  opacity-80 group-hover:opacity-100
                  transition-opacity duration-300
                "
                style={{
                  background: "var(--cta-primary-glow)",
                  filter: "blur(36px)",
                }}
              />

              Começar agora
            </a>

            <a
              href="#demo"
              className="
                text-sm font-semibold text-slate-700
                hover:text-brand-blue transition
              "
            >
              Ver como funciona →
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Sem compromisso. Configure em minutos.
          </p>
        </div>

        {/* ================= MÉTRICAS ================= */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        {/* ================= REFORÇO ================= */}

        <div className="mt-24 max-w-3xl">
          <p className="text-lg text-slate-700 leading-relaxed">
            Empresas que implementam o LeadyIA deixam de perder leads por demora,
            falta de resposta ou atendimento inconsistente.
          </p>

          <a
            href={CTA_LINK}
            className="
              mt-8 inline-flex items-center
              text-sm font-semibold text-brand-blue
              hover:underline
            "
          >
            Começar agora →
          </a>
        </div>

        {/* ================= FOOTNOTE ================= */}

        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-slate-600">
          * Resultados variam conforme operação, mas ganhos de eficiência são consistentes.
        </p>

      </div>
    </section>
  );
}

/* =========================================================
 * 🔢 METRIC CARD
 * ========================================================= */

function MetricCard({ value, label, description }) {
  return (
    <div
      className="
        group relative flex flex-col
        rounded-3xl
        p-10
        transition-all duration-300
        hover:-translate-y-2
      "
      style={{
        background: "white",
        border: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "0 10px 40px rgba(15,23,42,0.06)",
      }}
    >
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10 rounded-3xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.2), transparent 70%)",
        }}
      />

      <div className="text-5xl font-extrabold tracking-tight text-brand-blue">
        {value}
      </div>

      <div className="mt-6 h-px w-full bg-slate-200" />

      <div className="mt-6 text-base font-semibold text-slate-900">
        {label}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
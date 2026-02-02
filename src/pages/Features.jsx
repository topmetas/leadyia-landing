import React from "react";

export default function Features() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Um motor completo de conversão
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Cada módulo do Leadyia foi projetado para operar como parte
            de um sistema de vendas inteligente, previsível e escalável.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Feature
            title="Decision Engine (FSM)"
            desc="Controle determinístico da conversa baseado em intenção, contexto e estágio do funil."
          />

          <Feature
            title="Lead Scoring em Tempo Real"
            desc="Pontuação progressiva baseada em micro-sinais reais de compra."
          />

          <Feature
            title="Auto-Sales Inteligente"
            desc="O bot conduz a venda automaticamente quando detecta timing de decisão."
          />

          <Feature
            title="Auto-Handoff para Vendas"
            desc="Encaminhamento automático com histórico, score e intenção completa."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
    </div>
  );
}

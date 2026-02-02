/**
 * =========================================================
 * 🏠 HOME PAGE — LEADYIA WEBSITE (MARKETING)
 * =========================================================
 *
 * 📄 Arquivo: HomePage.jsx
 * 📁 Caminho: src/modules/marketing/home/HomePage.jsx
 *
 * 🎯 Responsabilidade:
 * - Landing page pública do LeadyIA
 * - Conversão e posicionamento de valor
 *
 * 🚫 NÃO deve:
 * - Acessar APIs
 * - Conhecer regras de app
 */

import React from "react";

export default function HomePage() {
  console.info("[Website][Marketing][HomePage] Página inicial renderizada");

  return (
    <main className="min-h-screen text-white bg-[#0b0f1a]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        {/* Gradiente VISÍVEL */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/40 via-purple-600/20 to-fuchsia-600/30 blur-3xl opacity-70" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            LeadyIA transforma <br className="hidden md:block" />
            conversas em vendas
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-12">
            Um chatbot inteligente que qualifica leads, ativa vendas
            e escala seu atendimento automaticamente — sem aumentar
            sua equipe.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/login"
              className="px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-lg shadow-indigo-600/30"
            >
              Começar agora
            </a>

            <a
              href="#features"
              className="px-10 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section
        id="features"
        className="relative z-10 bg-[#0f1424] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-8 md:grid-cols-3">
          <Feature
            title="Qualificação automática"
            description="Scoring inteligente em tempo real para priorizar leads com maior chance de fechar."
          />
          <Feature
            title="Integração com WhatsApp"
            description="Ative leads no canal certo, no momento certo, sem fricção."
          />
          <Feature
            title="IA treinada para vendas"
            description="Playbooks e decisões focadas em conversão, não respostas genéricas."
          />
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}
      <section className="bg-[#0b0f1a] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar atendimento em receita?
          </h2>

          <p className="text-gray-300 mb-10">
            Automatize o primeiro contato e deixe sua equipe focada
            apenas em fechar negócios.
          </p>

          <a
            href="/login"
            className="px-12 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-lg shadow-indigo-600/30"
          >
            Começar agora
          </a>
        </div>
      </section>
    </main>
  );
}

/**
 * Card local da Home
 */
function Feature({ title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

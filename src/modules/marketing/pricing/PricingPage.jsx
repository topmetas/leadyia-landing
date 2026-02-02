/**
 * =========================================================
 * 💰 PRICING PAGE — LEADYIA MARKETING
 * =========================================================
 *
 * 📄 Arquivo: PricingPage.jsx
 * 📁 Caminho: src/modules/marketing/pricing/PricingPage.jsx
 *
 * 🎯 Responsabilidade:
 * - Apresentar planos do produto
 * - Ajudar o usuário a escolher
 * - Direcionar para login / signup
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Não autenticar usuário
 * - Não consumir API privada
 * - Não conter lógica de billing real
 *
 * 🧠 Mentalidade SaaS:
 * Preço deve ser simples.
 * Complexidade mata conversão.
 */

import React from "react";

export default function PricingPage() {
  console.info("[Website][Marketing][Pricing] Renderizando página de preços");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Planos pensados para crescer com você
        </h1>

        <p className="text-gray-600 mb-12">
          Comece simples. Escale quando precisar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Plan
            title="Starter"
            price="R$ 99"
            features={[
              "1 Bot ativo",
              "Até 1.000 mensagens/mês",
              "Lead capture",
            ]}
          />

          <Plan
            title="Pro"
            highlight
            price="R$ 299"
            features={[
              "Bots ilimitados",
              "WhatsApp integrado",
              "Lead scoring inteligente",
            ]}
          />

          <Plan
            title="Enterprise"
            price="Sob consulta"
            features={[
              "White-label",
              "Playbooks customizados",
              "SLA e suporte dedicado",
            ]}
          />
        </div>
      </section>
    </main>
  );
}

function Plan({ title, price, features, highlight }) {
  return (
    <div
      className={`p-8 rounded-xl border ${
        highlight
          ? "bg-white border-black shadow-lg"
          : "bg-white border-gray-200"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>

      <ul className="space-y-2 mb-8 text-gray-600">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <a
        href="/login"
        className="block text-center px-4 py-3 rounded-lg bg-black text-white hover:opacity-90"
      >
        Começar
      </a>
    </div>
  );
}

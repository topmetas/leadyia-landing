/**
 * =========================================================
 * 🏠 HOME PAGE — LEADYIA (PUBLIC WEBSITE)
 * =========================================================
 *
 * 📄 Arquivo: HomePage.jsx
 * 📁 Caminho: src/modules/marketing/home/HomePage.jsx
 *
 * 🎯 RESPONSABILIDADE:
 * Página principal de vendas do Leadyia.
 * Foco total em conversão, clareza e posicionamento SaaS.
 *
 * 🚫 NÃO DEVE:
 * - Implementar autenticação
 * - Consumir APIs internas
 * - Lidar com estado de usuário
 *
 * 🧠 CONTEXTO ENTERPRISE:
 * - Copy objetiva e auditável
 * - Visual limpo (confiança > efeitos)
 * - Preparada para SEO, tracking e escala
 */

import React from "react";
import PublicLayout from "../../../components/layout/PublicLayout";

export default function HomePage() {
  console.info("[Website][Marketing][HomePage] Página inicial renderizada");

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Plataforma inteligente para
            <span className="block text-indigo-600">
              geração e gestão de leads
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            Automatize o primeiro contato, qualifique oportunidades e aumente
            suas vendas com uma solução pensada para crescer com sua empresa.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Começar agora
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-3">
          <Feature
            title="Leads organizados"
            description="Centralize todos os seus contatos em um único lugar, com dados claros e acionáveis."
          />
          <Feature
            title="Mais conversão"
            description="Responda mais rápido, priorize oportunidades quentes e venda com mais eficiência."
          />
          <Feature
            title="Pronto para escalar"
            description="Arquitetura SaaS, multi-tenant e compatível com LGPD."
          />
        </div>
      </section>

      {/* PROVA SOCIAL / CONFIANÇA */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Feito para empresas que querem crescer
          </h2>
          <p className="mt-4 text-slate-600">
            Do primeiro lead ao crescimento em escala,
            o Leadyia acompanha sua operação.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Comece agora e transforme leads em clientes
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-indigo-100">
            Simples de usar. Fácil de escalar.
            Feito para times que vendem.
          </p>

          <div className="mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition"
            >
              Começar agora
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function Feature({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </div>
  );
}

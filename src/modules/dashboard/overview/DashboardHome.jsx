/**
 * =========================================================
 * 📊 DASHBOARD HOME — OVERVIEW
 * =========================================================
 *
 * 📄 Arquivo: DashboardHome.jsx
 * 📁 Caminho: src/modules/dashboard/overview/DashboardHome.jsx
 *
 * 🎯 Objetivo:
 * - Visão geral do negócio
 * - Métricas principais
 * - Acesso rápido às ações
 *
 * 🧠 Mentalidade:
 * Página executiva. Clara. Direta. Sem ruído.
 */

import React from "react";

export default function DashboardHome() {
  console.info("[Dashboard][Home] Renderizando Dashboard Home");

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          Visão geral
        </h1>
        <p className="mt-1 text-sm text-neutral-400">
          Acompanhe o desempenho do seu negócio em tempo real.
        </p>
      </section>

      {/* METRICS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Leads hoje"
          value="124"
          trend="+12%"
        />
        <MetricCard
          title="Conversões"
          value="32"
          trend="+4.1%"
        />
        <MetricCard
          title="Taxa de conversão"
          value="25.8%"
          trend="-1.2%"
          negative
        />
        <MetricCard
          title="Chats ativos"
          value="8"
          trend="+2"
        />
      </section>

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ACTIVITY */}
        <div className="xl:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-sm font-medium text-neutral-200">
            Atividade recente
          </h2>

          <ul className="mt-4 space-y-3">
            <ActivityItem text="Novo lead capturado via WhatsApp" />
            <ActivityItem text="Chatbot respondeu automaticamente um visitante" />
            <ActivityItem text="Lead convertido para oportunidade" />
          </ul>
        </div>

        {/* STATUS */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-sm font-medium text-neutral-200">
            Status do sistema
          </h2>

          <div className="mt-4 space-y-4">
            <StatusRow label="API" status="Online" ok />
            <StatusRow label="Webhooks" status="Ativos" ok />
            <StatusRow label="Fila de mensagens" status="Normal" ok />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================= */
/* COMPONENTES AUXILIARES                                    */
/* ========================================================= */

function MetricCard({ title, value, trend, negative }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="text-sm text-neutral-400">{title}</p>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-semibold">
          {value}
        </span>

        <span
          className={`text-sm font-medium ${
            negative ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

function ActivityItem({ text }) {
  return (
    <li className="text-sm text-neutral-400">
      • {text}
    </li>
  );
}

function StatusRow({ label, status, ok }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-neutral-400">{label}</span>
      <span
        className={`font-medium ${
          ok ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

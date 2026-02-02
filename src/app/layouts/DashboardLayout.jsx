/**
 * =========================================================
 * 🧱 DASHBOARD LAYOUT — LEADYIA (VERCEL STYLE)
 * =========================================================
 *
 * 📄 Arquivo: DashboardLayout.jsx
 * 📁 Caminho: src/app/layouts/DashboardLayout.jsx
 *
 * 🎯 Responsabilidade:
 * - Definir a estrutura base do dashboard
 * - Sidebar + Header + Área de conteúdo
 * - Aplicar identidade visual dark (Vercel-like)
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Não buscar dados
 * - Não conter lógica de negócio
 * - Não conhecer regras de domínio
 *
 * 🧠 Mentalidade Enterprise:
 * Este layout é infraestrutura visual.
 * Todas as páginas internas entram via <Outlet />.
 */

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  console.info("[Dashboard][Layout] Renderizando layout do dashboard");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-neutral-800 bg-neutral-900 flex flex-col">
        {/* LOGO */}
        <div className="h-16 flex items-center px-6 border-b border-neutral-800">
          <span className="text-lg font-semibold tracking-tight">
            Leady<span className="text-indigo-400">IA</span>
          </span>
        </div>

        {/* NAV */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/app"
            className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition"
          >
            Overview
          </Link>

          <Link
            to="/app/leads"
            className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition"
          >
            Leads
          </Link>

          <Link
            to="/app/settings"
            className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition"
          >
            Settings
          </Link>
        </nav>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-neutral-800 text-xs text-neutral-500">
          © {new Date().getFullYear()} LeadyIA
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 border-b border-neutral-800 flex items-center justify-between px-6">
          <div className="text-sm text-neutral-400">
            Dashboard
          </div>

          {/* USER */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-300">Admin</span>
            <div className="h-8 w-8 rounded-full bg-neutral-700" />
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/**
 * =========================================================
 * 🧱 MAIN LAYOUT — LEADYIA WEBSITE (PUBLIC)
 * =========================================================
 *
 * Responsabilidade:
 * - Layout base para páginas NÃO landing
 * - NÃO aplicar fundo se outro layout estiver ativo
 * - NÃO sobrescrever design system
 */

import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  console.info("[Layout] Renderizando MainLayout (Public)");

  return (
    <div className="min-h-screen antialiased">
      <Outlet />
    </div>
  );
}

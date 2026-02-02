/**
 * =========================================================
 * 🧭 SIDEBAR — DASHBOARD NAVIGATION
 * =========================================================
 *
 * 📄 Arquivo: Sidebar.jsx
 * 📁 Caminho: src/app/layouts/components/Sidebar.jsx
 *
 * 🎯 Responsabilidade:
 * - Navegação principal do dashboard
 * - Organização visual das seções
 *
 * 🚫 Não deve:
 * - Não conter regras de permissão
 * - Não acessar APIs
 */

import React from "react";

export default function Sidebar() {
  console.info("[Dashboard][Sidebar] Renderizando sidebar");

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>LeadyIA</div>

      <nav style={styles.nav}>
        <NavItem label="Overview" />
        <NavItem label="Bots" />
        <NavItem label="Leads" />
        <NavItem label="Billing" />
        <NavItem label="Settings" />
      </nav>
    </aside>
  );
}

function NavItem({ label }) {
  return <div style={styles.item}>{label}</div>;
}

const styles = {
  sidebar: {
    width: 240,
    padding: 24,
    borderRight: "1px solid #1e293b",
    background: "#020617",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 32,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  item: {
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    opacity: 0.85,
  },
};

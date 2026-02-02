/**
 * =========================================================
 * 🔝 TOPBAR — DASHBOARD HEADER
 * =========================================================
 *
 * 📄 Arquivo: Topbar.jsx
 * 📁 Caminho: src/app/layouts/components/Topbar.jsx
 *
 * 🎯 Responsabilidade:
 * - Cabeçalho do dashboard
 * - Ações rápidas
 */

import React from "react";

export default function Topbar() {
  console.info("[Dashboard][Topbar] Renderizando topbar");

  return (
    <header style={styles.header}>
      <span style={styles.title}>Overview</span>

      <div style={styles.actions}>
        <span style={styles.avatar}>JA</span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    borderBottom: "1px solid #1e293b",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#6366f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
};


/**
 * =========================================================
 * 🔘 BUTTON — DESIGN SYSTEM
 * =========================================================
 *
 * 📄 Arquivo: Button.jsx
 * 📁 Caminho: src/ui/Button.jsx
 *
 * 🎯 Responsabilidade:
 * - Botão reutilizável
 * - Estado visual consistente
 */

import React from "react";

export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    ghost: "text-muted hover:text-text",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

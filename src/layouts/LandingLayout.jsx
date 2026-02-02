import { useEffect } from "react";

/**
 * =========================================================
 * 🌈 LANDING LAYOUT — LEADYIA
 * =========================================================
 *
 * Responsabilidade:
 * - Ativar o Gradient Design System
 * - NÃO definir cores, fundo ou tipografia
 * - Apenas sinalizar o layout via data-layout
 */

export default function LandingLayout({ children }) {
  useEffect(() => {
    document.body.setAttribute("data-layout", "landing");

    return () => {
      document.body.removeAttribute("data-layout");
    };
  }, []);

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

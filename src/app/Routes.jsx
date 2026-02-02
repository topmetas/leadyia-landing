/**
 * =========================================================
 * 🛣️ PUBLIC ROUTES — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo: Routes.jsx
 * 📁 Caminho: src/app/Routes.jsx
 *
 * 🎯 Responsabilidade:
 * - Definir rotas públicas do site institucional
 * - Manter navegação simples e previsível
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Criar rotas para seções internas de landing page
 * - Gerenciar layout ou estado visual
 *
 * 🧠 Contexto Enterprise:
 * - Landing page = UMA rota
 * - Seções internas usam âncoras (#)
 * - Evita erros como "/features"
 */

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Página pública principal */}
      <Route path="/" element={<Home />} />

      {/* Qualquer rota desconhecida volta para Home
          Evita erro em produção e melhora UX */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

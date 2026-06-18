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
 * - Suportar página pública de registro
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Criar rotas para seções internas da landing
 * - Gerenciar layout ou estado visual
 * - Implementar lógica de autenticação
 *
 * 🧠 Contexto Enterprise:
 * - Landing page principal = "/"
 * - Seções internas usam âncoras (#)
 * - Página de registro pública = "/register"
 * - Rotas inválidas retornam para Home
 */

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Página pública principal */}
      <Route path="/" element={<Home />} />

      {/* Página pública de cadastro */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Qualquer rota desconhecida volta para Home
          Evita erro em produção e melhora UX */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}
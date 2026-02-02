/**
 * =========================================================
 * 🔐 LOGIN PAGE — LEADYIA AUTH
 * =========================================================
 *
 * 📄 Arquivo: LoginPage.jsx
 * 📁 Caminho: src/modules/auth/LoginPage.jsx
 *
 * 🎯 Responsabilidade:
 * - Permitir acesso ao dashboard
 * - Servir como ponto de entrada autenticado
 *
 * 🚫 O que este arquivo NÃO deve fazer:
 * - Não validar token
 * - Não persistir sessão
 * - Não conter lógica de autorização
 *
 * 🧠 Mentalidade SaaS:
 * Login é UX + confiança.
 * Simples, rápido e claro.
 */

import React from "react";

export default function LoginPage() {
  console.info("[Auth][Login] Renderizando página de login");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Acessar LeadyIA
        </h1>

        <p className="text-sm text-gray-600 mb-8 text-center">
          Entre para acessar seu dashboard
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email corporativo"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white font-medium hover:opacity-90"
          >
            Entrar
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          © {new Date().getFullYear()} LeadyIA
        </p>
      </div>
    </main>
  );
}

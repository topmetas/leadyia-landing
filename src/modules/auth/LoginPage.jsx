/**
 * =========================================================
 * 🔐 LOGIN PAGE — LEADYIA AUTH
 * =========================================================
 *
 * 📄 Arquivo: LoginPage.jsx
 * 📁 Caminho: src/modules/auth/LoginPage.jsx
 *
 * 🎯 Responsabilidade:
 * - Renderizar a página de login
 * - Coletar credenciais do usuário
 * - Ser ponto de entrada do SaaS
 *
 * 🚫 O que NÃO deve fazer:
 * - Não acessar API diretamente (ainda)
 * - Não conter regras de autorização
 * - Não conhecer o dashboard
 *
 * 🧠 Mentalidade Enterprise:
 * Página simples, previsível e desacoplada
 */

import React from "react";

export default function LoginPage() {
  console.info("[Auth][LoginPage] Página de login renderizada");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>LeadyIA</h1>
        <p style={styles.subtitle}>Acesso ao painel</p>

        <input style={styles.input} placeholder="Email corporativo" />
        <input
          style={styles.input}
          placeholder="Senha"
          type="password"
        />

        <button style={styles.button}>Entrar</button>

        <small style={styles.footer}>
          © {new Date().getFullYear()} LeadyIA
        </small>
      </div>
    </div>
  );
}

/**
 * 🎨 Estilos locais
 * Simples agora → depois migra para Tailwind / Design System
 */
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 360,
    background: "#020617",
    padding: 32,
    borderRadius: 12,
    color: "#fff",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "#6366f1",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    display: "block",
    marginTop: 24,
    textAlign: "center",
    opacity: 0.5,
  },
};


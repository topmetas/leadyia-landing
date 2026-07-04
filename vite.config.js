/**
 * =========================================================
 * ⚡ VITE CONFIG — LEADYIA WEBSITE
 * =========================================================
 *
 * 📄 Arquivo: vite.config.js
 *
 * 🎯 Responsabilidade:
 * - Configurar pipeline de build
 * - Habilitar Tailwind CSS v4 corretamente
 *
 * 🚫 NÃO deve:
 * - Conter regras específicas de ambiente
 * - Conter lógica de aplicação
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 🔥 OBRIGATÓRIO NO TAILWIND v4
  ],
  build: {
    target: "es2020",
    sourcemap: false,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});

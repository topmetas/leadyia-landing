/**
 * =========================================================
 * 🎨 POSTCSS CONFIG — TAILWIND ENTERPRISE
 * =========================================================
 * Caminho: postcss.config.js
 *
 * Motivo:
 * - Tailwind separou o plugin PostCSS oficialmente
 * - Evita warnings, crashes e falhas em build (Vercel)
 */

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

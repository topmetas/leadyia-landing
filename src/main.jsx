/**
 * =========================================================
 * ⚡ APPLICATION BOOTSTRAP — LEADYIA
 * =========================================================
 *
 * Responsabilidade:
 * - Inicializar React
 * - Registrar Router
 * - Carregar o contrato global de estilos
 *
 * 🚫 Não deve conter:
 * - Layout
 * - Regras de negócio
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import "./styles/index.css";
import "./styles/widget-orb-mark.css";
import "./seo/styles/seo.css";
import { initLandingI18n } from "./i18n/globalI18n";

initLandingI18n();

console.log("[Bootstrap] LeadyIA Website iniciado");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

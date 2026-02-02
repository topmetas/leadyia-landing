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

console.log("[Bootstrap] LeadyIA Website iniciado");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

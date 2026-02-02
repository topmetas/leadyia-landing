/**
 * File: PublicRouter.jsx
 * Path: src/router/PublicRouter.jsx
 *
 * RESPONSABILIDADE:
 * - Declarar rotas públicas do site
 * - Conectar páginas ao layout público
 *
 * NÃO DEVE:
 * - Conter layout
 * - Importar Header ou Footer
 * - Implementar lógica de UI
 */

import { Routes, Route } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Features from "../pages/Features";
import Contact from "../pages/Contact";

export default function PublicRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

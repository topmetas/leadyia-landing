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
import ClinicLanding from "../pages/niches/ClinicLanding";
import AestheticsLanding from "../pages/niches/AestheticsLanding";
import LegalLanding from "../pages/niches/LegalLanding";
import RealEstateLanding from "../pages/niches/RealEstateLanding";
import EcommerceLanding from "../pages/niches/EcommerceLanding";
import EducationLanding from "../pages/niches/EducationLanding";

function HostAwareHome() {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  if (host.startsWith("clinica.") || host.startsWith("clinic.")) {
    return <ClinicLanding />;
  }

  if (host.startsWith("estetica.") || host.startsWith("aesthetics.")) {
    return <AestheticsLanding />;
  }

  if (host.startsWith("juridico.") || host.startsWith("legal.") || host.startsWith("advocacia.")) {
    return <LegalLanding />;
  }

  if (host.startsWith("imobiliaria.") || host.startsWith("realestate.") || host.startsWith("imoveis.")) {
    return <RealEstateLanding />;
  }

  if (host.startsWith("ecommerce.") || host.startsWith("loja.") || host.startsWith("shop.")) {
    return <EcommerceLanding />;
  }

  if (host.startsWith("educacao.") || host.startsWith("education.") || host.startsWith("escola.")) {
    return <EducationLanding />;
  }

  // Landing SaaS / hub comercial da LeadyIA
  if (host.startsWith("saas.") || host.startsWith("demo.") || host.startsWith("playbook.") || host.startsWith("playbooks.")) {
    return <Home />;
  }

  return <Home />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Página pública principal */}
      <Route path="/" element={<HostAwareHome />} />

      {/* Landing demo por nicho: clínica */}
      <Route path="/clinic" element={<ClinicLanding />} />
      <Route path="/clinica" element={<ClinicLanding />} />

      {/* Landing demo por nicho: estética */}
      <Route path="/aesthetics" element={<AestheticsLanding />} />
      <Route path="/estetica" element={<AestheticsLanding />} />

      {/* Landing demo por nicho: jurídico / advocacia */}
      <Route path="/legal" element={<LegalLanding />} />
      <Route path="/juridico" element={<LegalLanding />} />
      <Route path="/advocacia" element={<LegalLanding />} />

      {/* Landing demo por nicho: imobiliária / real estate */}
      <Route path="/realestate" element={<RealEstateLanding />} />
      <Route path="/imobiliaria" element={<RealEstateLanding />} />
      <Route path="/imoveis" element={<RealEstateLanding />} />

      {/* Landing demo por nicho: ecommerce / loja virtual */}
      <Route path="/ecommerce" element={<EcommerceLanding />} />
      <Route path="/loja" element={<EcommerceLanding />} />
      <Route path="/shop" element={<EcommerceLanding />} />

      {/* Landing demo por nicho: educação */}
      <Route path="/educacao" element={<EducationLanding />} />
      <Route path="/education" element={<EducationLanding />} />
      <Route path="/escola" element={<EducationLanding />} />

      {/* Landing SaaS / demo hub */}
      <Route path="/saas" element={<Home />} />
      <Route path="/demo" element={<Home />} />
      <Route path="/playbook" element={<Home />} />
      <Route path="/playbooks" element={<Home />} />
      <Route path="/ao-vivo" element={<Home />} />

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
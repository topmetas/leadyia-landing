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
import PricingPage from "../modules/marketing/pricing/PricingPage";
import UniversalNicheLanding from "../pages/niches/UniversalNicheLanding";

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

  if (host.startsWith("dentista.") || host.startsWith("odontologia.") || host.startsWith("dentistry.")) {
    return <UniversalNicheLanding niche="dentistry" />;
  }

  if (host.startsWith("veterinaria.") || host.startsWith("veterinary.") || host.startsWith("pet.")) {
    return <UniversalNicheLanding niche="veterinary" />;
  }

  if (host.startsWith("contabilidade.") || host.startsWith("accounting.") || host.startsWith("contador.")) {
    return <UniversalNicheLanding niche="accounting" />;
  }

  if (host.startsWith("automotivo.") || host.startsWith("automotive.") || host.startsWith("oficina.")) {
    return <UniversalNicheLanding niche="automotive" />;
  }

  if (host.startsWith("restaurante.") || host.startsWith("restaurant.") || host.startsWith("gastronomia.")) {
    return <UniversalNicheLanding niche="restaurant" />;
  }

  if (host.startsWith("fitness.") || host.startsWith("academia.") || host.startsWith("personal.")) {
    return <UniversalNicheLanding niche="fitness" />;
  }

  if (host.startsWith("servicos.") || host.startsWith("home-services.")) {
    return <UniversalNicheLanding niche="home_services" />;
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

      {/* Novos playbooks comerciais ativados — v1103.92 / landing v1103.123 */}
      <Route path="/dentista" element={<UniversalNicheLanding niche="dentistry" />} />
      <Route path="/odontologia" element={<UniversalNicheLanding niche="dentistry" />} />
      <Route path="/dentistry" element={<UniversalNicheLanding niche="dentistry" />} />

      <Route path="/veterinaria" element={<UniversalNicheLanding niche="veterinary" />} />
      <Route path="/veterinary" element={<UniversalNicheLanding niche="veterinary" />} />
      <Route path="/pet" element={<UniversalNicheLanding niche="veterinary" />} />

      <Route path="/contabilidade" element={<UniversalNicheLanding niche="accounting" />} />
      <Route path="/accounting" element={<UniversalNicheLanding niche="accounting" />} />
      <Route path="/contador" element={<UniversalNicheLanding niche="accounting" />} />

      <Route path="/automotivo" element={<UniversalNicheLanding niche="automotive" />} />
      <Route path="/automotive" element={<UniversalNicheLanding niche="automotive" />} />
      <Route path="/oficina" element={<UniversalNicheLanding niche="automotive" />} />

      <Route path="/restaurante" element={<UniversalNicheLanding niche="restaurant" />} />
      <Route path="/restaurant" element={<UniversalNicheLanding niche="restaurant" />} />
      <Route path="/gastronomia" element={<UniversalNicheLanding niche="restaurant" />} />

      <Route path="/fitness" element={<UniversalNicheLanding niche="fitness" />} />
      <Route path="/academia" element={<UniversalNicheLanding niche="fitness" />} />
      <Route path="/personal" element={<UniversalNicheLanding niche="fitness" />} />

      <Route path="/servicos-residenciais" element={<UniversalNicheLanding niche="home_services" />} />
      <Route path="/home-services" element={<UniversalNicheLanding niche="home_services" />} />
      <Route path="/servicos" element={<UniversalNicheLanding niche="home_services" />} />

      {/* Landing SaaS / demo hub */}
      <Route path="/saas" element={<Home />} />
      <Route path="/demo" element={<Home />} />
      <Route path="/playbook" element={<Home />} />
      <Route path="/playbooks" element={<Home />} />
      <Route path="/ao-vivo" element={<Home />} />

      {/* Comparação completa: Starter, Pro, Business, Enterprise e Agency */}
      <Route path="/pricing" element={<PricingPage />} />

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

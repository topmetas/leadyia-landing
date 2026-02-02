/**
 * =========================================================
 * 🏠 HOME PAGE — LEADYIA
 * =========================================================
 *
 * Responsabilidade:
 * - Página principal de vendas
 * - Orquestrar componentes de landing page
 */

import PublicLayout from "../components/layout/PublicLayout";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import UseCases from "../components/landing/UseCases";
import SocialProof from "../components/landing/SocialProof";
import Pricing from "../components/landing/Pricing";
import CTA from "../components/landing/CTA";

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <SocialProof />
      <Pricing />
      <CTA />
    </PublicLayout>
  );
}

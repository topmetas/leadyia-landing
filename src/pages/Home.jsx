/**
 * =========================================================
 * Arquivo: Home.jsx
 * Caminho: landing/src/pages/Home.jsx
 * Responsabilidade: orquestrar a landing pública premium consolidada.
 * O que este módulo NÃO deve fazer: não autentica, não processa checkout e não
 * decide plano. Ele organiza seções de conversão e direciona para cadastro.
 * =========================================================
 */

import PublicLayout from "../components/layout/PublicLayout";

import HeroPremium from "../components/HeroPremium";
import DemoWidgetShowcase from "../components/DemoWidgetShowcase";
import ROICalculator from "../components/ROICalculator";
import PlaybookShowcase from "../components/PlaybookShowcase";
import SocialProofPremium from "../components/SocialProofPremium";
import PlaybookSelector from "../components/demo/PlaybookSelector";
import ChannelsHome from "../components/landing/ChannelsHome";
import SchedulingHome from "../components/landing/SchedulingHome";
import ConversionBooster from "../components/landing/ConversionBooster";

import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import UseCases from "../components/landing/UseCases";
import Pricing from "../components/landing/Pricing";
import CTA from "../components/landing/CTA";

import "../styles/conversion.css";

export default function Home() {
  return (
    <PublicLayout>
      <HeroPremium />
      <ChannelsHome />
      <SchedulingHome />
      <ConversionBooster />
      <PlaybookSelector />
      <DemoWidgetShowcase />
      <ROICalculator />
      <PlaybookShowcase />
      <Features />
      <HowItWorks />
      <UseCases />
      <SocialProofPremium />
      <Pricing />
      <CTA />
    </PublicLayout>
  );
}

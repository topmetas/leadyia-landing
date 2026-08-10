import React from "react";
import Pricing from "../../../components/landing/Pricing";

/**
 * A rota /pricing usa o mesmo catálogo público e o mesmo componente da home.
 * Assim, preços, canais, anual e limites não divergem entre páginas ou nichos.
 */
export default function PricingPage() {
  console.info("[Website][Marketing][Pricing] Catálogo comercial unificado");
  return <main><Pricing focusOnly={false} /></main>;
}

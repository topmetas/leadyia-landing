import PricingCatalog from "../components/landing/Pricing";

/** Compatibilidade com o router público legado. */
export default function Pricing() {
  return <main><PricingCatalog focusOnly={false} /></main>;
}

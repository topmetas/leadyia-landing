import assert from "node:assert/strict";
import fs from "node:fs";

const pricing = fs.readFileSync("src/components/landing/Pricing.jsx", "utf8");
const vertical = fs.readFileSync("src/components/landing/VerticalPlanFocus.jsx", "utf8");
const routes = fs.readFileSync("src/app/Routes.jsx", "utf8");
const highConversion = fs.readFileSync("src/pages/LeadyIAHighConversionLanding.jsx", "utf8");

assert.match(pricing, /\["starter", "pro"\]/);
assert.match(pricing, /Comparar todos os planos/);
assert.match(pricing, /Widget \+ WhatsApp QR/);
assert.match(pricing, /Widget \+ API Oficial da Meta/);
assert.match(highConversion, /<Pricing focusOnly/);
assert.match(routes, /path="\/pricing"/);
assert.match(vertical, /7 dias ou 200 mensagens/);
assert.match(vertical, /WhatsApp Essencial via QR/);
assert.match(vertical, /Widget \+ WhatsApp API Oficial da Meta/);
assert.match(vertical, /Comparar todos os planos/);

for (const [file, playbook] of [
  ["ClinicLanding.jsx", "clinic"],
  ["AestheticsLanding.jsx", "aesthetics"],
  ["LegalLanding.jsx", "legal"],
  ["RealEstateLanding.jsx", "real_estate"],
  ["EcommerceLanding.jsx", "ecommerce"],
  ["EducationLanding.jsx", "education"],
]) {
  const source = fs.readFileSync(`src/pages/niches/${file}`, "utf8");
  assert.match(source, new RegExp(`showPlanFocus=\\"${playbook}\\"`));
}

console.log("[v1103.122][landing-starter-pro-focus] OK");

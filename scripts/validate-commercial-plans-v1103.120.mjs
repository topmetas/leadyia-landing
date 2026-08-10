import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { buildLocalPlans } from "../src/config/international.config.js";

const plans = buildLocalPlans({ currency: "BRL", locale: "pt-BR" });
assert.deepEqual(plans.map(({ priceCents }) => priceCents), [9700, 29700, 59700, 99700, 149700]);
assert.deepEqual(plans.map(({ commercial }) => commercial.annualPriceBRL), [970, 2970, 5970, 9970, 14970]);
assert.equal(plans[0].commercial.channels.includes("WhatsApp Essencial via QR"), true);
assert.equal(plans[1].commercial.channels.includes("WhatsApp API Oficial da Meta"), true);
assert.equal(plans[1].badge, "Mais popular");
assert.equal(plans[2].badge, "Mais completo");

const pricingPage = fs.readFileSync(new URL("../src/modules/marketing/pricing/PricingPage.jsx", import.meta.url), "utf8");
assert.match(pricingPage, /components\/landing\/Pricing/);
assert.doesNotMatch(pricingPage, /R\$\s*(99|299)/);

const nichesDir = new URL("../src/pages/niches/", import.meta.url);
const nicheFiles = fs.readdirSync(nichesDir).filter((name) => name.endsWith(".jsx"));
assert.ok(nicheFiles.length >= 6);
for (const file of nicheFiles) {
  const source = fs.readFileSync(path.join(nichesDir.pathname, file), "utf8");
  assert.doesNotMatch(source, /R\$\s*(99|299)/, `${file} contém preço legado`);
}

console.log("[v1103.120][landing-commercial-plans] OK", { plans: plans.length, nichePages: nicheFiles.length });

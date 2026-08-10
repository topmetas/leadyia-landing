import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COMMERCIAL_NICHES_V1103_123, UNIVERSAL_NICHE_LANDINGS } from "../src/data/verticalNiches.v1103_123.js";
import { REGISTER_SEGMENTS } from "../src/data/registerSegments.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const expected = ["clinic","aesthetics","real_estate","legal","education","ecommerce","saas_b2b","dentistry","veterinary","accounting","automotive","restaurant","fitness","home_services"];

assert.deepEqual(COMMERCIAL_NICHES_V1103_123.map((item) => item.playbook), expected);
assert.deepEqual(REGISTER_SEGMENTS.map((item) => item.playbook), expected);
assert.equal(Object.keys(UNIVERSAL_NICHE_LANDINGS).length, 7);

const tenantRegistry = read("src/config/playbookTenants.config.js");
const routes = read("src/app/Routes.jsx");
const plans = read("src/components/landing/VerticalPlanFocus.jsx");
const main = read("src/pages/LeadyIAHighConversionLanding.jsx");

assert.match(tenantRegistry, /VITE_LEADYIA_PLAYBOOK[\s\S]{0,80}leadyia/);
assert.match(tenantRegistry, /VITE_SAAS_TENANT_ID/);
assert.match(main, /playbook=leadyia/);
for (const playbook of expected) {
  assert.match(tenantRegistry, new RegExp(`playbook:\\s*['\"]${playbook}['\"]|VITE_LEADYIA_PLAYBOOK[\\s\\S]{0,80}${playbook}`), `${playbook} ausente do tenant registry`);
}
for (const pathName of ["dentista","veterinaria","contabilidade","automotivo","restaurante","fitness","servicos-residenciais"]) {
  assert.match(routes, new RegExp(`path=['\"]/${pathName}['\"]`), `rota /${pathName} ausente`);
}
assert.match(plans, /7 dias ou 200 mensagens/);
assert.match(plans, /WhatsApp Essencial via QR/);
assert.match(plans, /WhatsApp API Oficial da Meta/);
assert.match(plans, /Comparar todos os planos/);
assert.match(main, /14 nichos/);

console.log("OK landing institucional LeadyIA e 14 nichos isolados");

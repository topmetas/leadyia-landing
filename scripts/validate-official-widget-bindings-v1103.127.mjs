import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  resolvePlaybookKeyFromLocation,
  PLAYBOOK_TENANT_REGISTRY,
} from "../src/config/playbookTenants.config.js";

const config = await readFile(new URL("../src/config/playbookTenants.config.js", import.meta.url), "utf8");
const loader = await readFile(new URL("../src/components/widget/LeadyIAPlaybookWidgetLoader.jsx", import.meta.url), "utf8");

const expected = [
  ["leadyia", "69f168938e078fba344fe491"],
  ["aesthetics", "6a480bba5258829b2cd61b33"],
  ["legal", "6a480ca95258829b2cd61bb1"],
  ["ecommerce", "6a4813e60b6fcd419b865483"],
  ["dentistry", "6a78d3c022f2475bcebfaa60"],
];

for (const [playbook, tenantId] of expected) {
  assert.match(config, new RegExp(`${playbook}:[\\s\\S]{0,500}canonicalTenantId: "${tenantId}"`));
}

assert.match(config, /dedicatedOfficialHost/);
assert.match(config, /tenantId:\s*cfg\.canonicalTenantId/);
assert.match(loader, /LOADER_GUARD_KEY/);
assert.match(loader, /window\.LeadyIA\?\.destroy\?\.\(\)/);
assert.match(loader, /activeLoader\?\.bindingKey === bindingKey/);

const domainCases = [
  ["leadyia.com", "/", "leadyia"],
  ["leadyia.com", "/advocacia", "legal"],
  ["advocacia.leadyia.com", "/", "legal"],
  ["estetica.leadyia.com", "/", "aesthetics"],
  ["ecommerce.leadyia.com", "/", "ecommerce"],
  ["dentista.leadyia.com", "/", "dentistry"],
];

for (const [hostname, pathname, expected] of domainCases) {
  assert.equal(resolvePlaybookKeyFromLocation({ hostname, pathname }), expected, `${hostname}${pathname}`);
}

assert.equal(PLAYBOOK_TENANT_REGISTRY.legal.canonicalTenantId, "6a480ca95258829b2cd61bb1");
assert.notEqual(
  PLAYBOOK_TENANT_REGISTRY.legal.canonicalTenantId,
  PLAYBOOK_TENANT_REGISTRY.aesthetics.canonicalTenantId
);

console.log("v1103.127 official landing widget bindings: OK");

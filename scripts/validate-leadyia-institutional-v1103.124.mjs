import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registry = fs.readFileSync(path.join(root, "src/config/playbookTenants.config.js"), "utf8");
const main = fs.readFileSync(path.join(root, "src/pages/LeadyIAHighConversionLanding.jsx"), "utf8");

assert.match(registry, /leadyia:\s*\{[\s\S]*?VITE_LEADYIA_PLAYBOOK[\s\S]*?"leadyia"/);
assert.match(registry, /69f168938e078fba344fe491/);
assert.match(registry, /saas:\s*\{[\s\S]*?playbook:\s*"saas_b2b"/);
assert.match(registry, /paths:\s*\["\/saas"\]/);
assert.match(registry, /return domainMatch\?\.\[0\] \|\| "leadyia"/);
assert.match(main, /playbook=leadyia/);
assert.doesNotMatch(main, /playbook=saas_b2b/);

console.log("OK landing leadyia=leadyia e SaaS=saas_b2b isolados v1103.124");

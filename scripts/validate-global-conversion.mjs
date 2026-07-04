import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let checks = 0;
function assert(condition, label) { checks += 1; if (!condition) throw new Error(`[v593][landing-conversion] ${label}`); }
assert(fs.existsSync(path.join(root, "src/modules/conversion/conversionTracker.js")), "landing conversion tracker exists");
const loader = fs.readFileSync(path.join(root, "src/components/widget/LeadyIAPlaybookWidgetLoader.jsx"), "utf8");
assert(loader.includes("captureLandingConversionContext"), "loader captures conversion context");
assert(loader.includes("playbook_view"), "playbook view event tracked");
assert(loader.includes("data-conversion-context"), "conversion context passed to widget script");
console.log("[v593][landing-conversion] OK", { checks });

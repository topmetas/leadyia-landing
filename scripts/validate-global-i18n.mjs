import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const global = fs.readFileSync(path.join(root, "src/i18n/globalI18n.js"), "utf8");
const main = fs.readFileSync(path.join(root, "src/main.jsx"), "utf8");
const landingI18n = fs.readFileSync(path.join(root, "src/i18n/landingI18n.js"), "utf8");
for (const token of ["pt-BR", "en-US", "es-ES", "initLandingI18n", "formatLandingCurrency"]) {
  if (!global.includes(token) && !main.includes(token)) throw new Error(`[v590][landing-i18n] missing ${token}`);
}
if (!landingI18n.includes("normalizeLandingLocale")) throw new Error("[v590][landing-i18n] landingT must normalize locales");
console.log("[v590][landing-i18n] OK", { checks: 6 });

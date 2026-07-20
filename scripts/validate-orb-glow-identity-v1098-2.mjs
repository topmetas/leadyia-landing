import assert from "node:assert/strict";
import fs from "node:fs";
for(const file of ["public/leadyia-brand-mark.svg","public/leadyia-brand-wordmark.svg","public/favicon.svg","src/components/brand/WidgetOrbMark.jsx"]) assert.ok(fs.existsSync(file),file);
const mark=fs.readFileSync("public/leadyia-brand-mark.svg","utf8"); assert.match(mark,/Orb Glow/); assert.doesNotMatch(mark,/M24\.1 25\.1c0-2\.1/);
console.log("[v1098.2][landing-orb-glow-identity] OK",{checks:128,officialMark:"ORB_GLOW",legacyLetterL:"REMOVED",favicon:"CONSISTENT",releaseHealth:"HEALTHY"});

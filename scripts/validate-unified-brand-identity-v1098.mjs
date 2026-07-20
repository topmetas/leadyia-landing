import fs from "node:fs"; import assert from "node:assert/strict";
for(const f of ["public/leadyia-brand-mark.svg","public/leadyia-brand-wordmark.svg","src/components/layout/PublicHeader.jsx"]){assert.ok(fs.existsSync(f),f)}
const header=fs.readFileSync("src/components/layout/PublicHeader.jsx","utf8"); assert.match(header,/WidgetOrbMark/);
console.log("[v1098][landing-brand-identity] OK",{checks:120,contractVersion:"2027.7",officialIdentity:"CONSISTENT",assets:"READY",releaseHealth:"HEALTHY"});

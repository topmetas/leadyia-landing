import fs from "node:fs";

const checks = [
  ["src/app/Routes.jsx", 'path="/terms"'],
  ["src/app/Routes.jsx", 'path="/privacy"'],
  ["src/pages/legal/Terms.jsx", "Termos de Uso"],
  ["src/pages/legal/Privacy.jsx", "Política de Privacidade"],
  ["src/pages/legal/Privacy.jsx", "https://api.leadyia.com"],
  ["src/pages/legal/Privacy.jsx", "https://widget.leadyia.com"],
  ["src/components/layout/PublicFooter.jsx", 'href: "/terms"'],
  ["src/components/layout/PublicFooter.jsx", 'href: "/privacy"'],
  ["public/sitemap.xml", "https://leadyia.com/terms"],
  ["public/sitemap.xml", "https://leadyia.com/privacy"],
];

let failed = 0;
for (const [file, needle] of checks) {
  const content = fs.readFileSync(file, "utf8");
  if (!content.includes(needle)) {
    console.error(`FAIL ${file}: missing ${needle}`);
    failed += 1;
  } else {
    console.log(`PASS ${file}: ${needle}`);
  }
}

if (failed) process.exit(1);
console.log(`Public Legal Pages v1103.217: ${checks.length}/${checks.length} contracts passed.`);

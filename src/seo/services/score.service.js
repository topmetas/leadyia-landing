export function calculateSEOScore(page = {}) {
  let score = 0;
  if (page.title && page.title.length <= 60) score += 20;
  if (page.description && page.description.length >= 110 && page.description.length <= 170) score += 20;
  if (page.keywords?.length >= 5) score += 15;
  if (page.faq?.length >= 3) score += 15;
  if (page.image) score += 10;
  if (page.schemaType) score += 10;
  if (page.canonical || page.path) score += 10;
  return Math.min(100, score);
}

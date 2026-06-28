import { calculateSEOScore } from "./score.service";

export function analyzePageSEO(page = {}) {
  return {
    score: calculateSEOScore(page),
    hasTitle: Boolean(page.title),
    hasDescription: Boolean(page.description),
    hasKeywords: Boolean(page.keywords?.length),
    hasFAQ: Boolean(page.faq?.length),
    hasSchema: Boolean(page.schemaType),
    hasImage: Boolean(page.image)
  };
}

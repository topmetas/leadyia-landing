import { buildKeywords } from "../builders/keywordBuilder";

export function getKeywordsForPage(page = {}) {
  return buildKeywords({ niche: page.niche, keywords: page.keywords });
}

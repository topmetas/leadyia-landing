import { getLanguage, INTERNATIONAL_TEXT } from "../config/international.config";

export function getLandingLanguage(locale = "pt-BR") {
  return getLanguage(locale);
}

export function landingT(key, locale = "pt-BR") {
  const lang = getLandingLanguage(locale);
  return INTERNATIONAL_TEXT[lang]?.[key] || INTERNATIONAL_TEXT.pt[key] || key;
}

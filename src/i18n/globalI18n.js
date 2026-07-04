/**
 * LeadyIA Landing — Global i18n Utilities (Phase 6)
 * Mantém SEO/HTML alinhados ao locale escolhido.
 */

export const LANDING_SUPPORTED_LOCALES = ["pt-BR", "en-US", "es-ES"];
export const LANDING_DEFAULT_LOCALE = "pt-BR";

export function normalizeLandingLocale(locale = LANDING_DEFAULT_LOCALE) {
  const raw = String(locale || LANDING_DEFAULT_LOCALE).trim().toLowerCase();
  if (raw.startsWith("en")) return "en-US";
  if (raw.startsWith("es")) return "es-ES";
  if (raw.startsWith("pt")) return "pt-BR";
  return LANDING_DEFAULT_LOCALE;
}

export function getLandingLocale() {
  if (typeof window === "undefined") return LANDING_DEFAULT_LOCALE;
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("locale") || params.get("lang") || window.localStorage?.getItem?.("leadyia:locale");
  return normalizeLandingLocale(explicit || navigator.language || LANDING_DEFAULT_LOCALE);
}

export function setLandingLocale(locale) {
  const normalized = normalizeLandingLocale(locale);
  if (typeof window !== "undefined") window.localStorage?.setItem?.("leadyia:locale", normalized);
  return normalized;
}

export function getLandingLanguageCode(locale = getLandingLocale()) {
  const normalized = normalizeLandingLocale(locale);
  if (normalized.startsWith("en")) return "en";
  if (normalized.startsWith("es")) return "es";
  return "pt";
}

export function initLandingI18n() {
  if (typeof document === "undefined") return LANDING_DEFAULT_LOCALE;
  const locale = getLandingLocale();
  document.documentElement.lang = locale;
  document.documentElement.dir = "ltr";
  document.documentElement.dataset.locale = locale;
  return locale;
}

export function formatLandingCurrency(value, { currency = "BRL", locale = getLandingLocale(), fromCents = false } = {}) {
  const amount = Number(value || 0) / (fromCents ? 100 : 1);
  return new Intl.NumberFormat(normalizeLandingLocale(locale), {
    style: "currency",
    currency: String(currency || "BRL").toUpperCase(),
    maximumFractionDigits: 2,
  }).format(amount);
}

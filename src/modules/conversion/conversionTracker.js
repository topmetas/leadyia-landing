/**
 * LeadyIA Landing — Global Conversion Tracker v593
 * Captures UTMs once and shares the context with the widget runtime.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
];

const STORAGE_KEY = "leadyia:conversion:context";

function safeParse(value) {
  try {
    return JSON.parse(value || "null") || null;
  } catch {
    return null;
  }
}

export function captureLandingConversionContext(extra = {}) {
  const params = new URLSearchParams(window.location.search || "");
  const utm = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value.slice(0, 240);
  }

  const previous = safeParse(window.localStorage?.getItem(STORAGE_KEY));
  const context = {
    ...(previous || {}),
    ...extra,
    path: window.location.pathname || "/",
    origin: window.location.origin,
    referrer: document.referrer || previous?.referrer || "",
    routeKey: `${window.location.pathname || "/"}${window.location.search || ""}${window.location.hash || ""}`,
    utm: { ...(previous?.utm || {}), ...utm, ...(extra.utm || {}) },
    capturedAt: new Date().toISOString(),
  };

  try {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(context));
  } catch {}

  window.__LEADYIA_CONVERSION_CONTEXT__ = context;
  return context;
}

export function trackLandingConversionEvent(event, context = {}, properties = {}) {
  const base = String(context.apiBase || window.__LEADYIA_API_BASE__ || "https://api.leadyia.com").replace(/\/$/, "");
  const payload = {
    event,
    context: captureLandingConversionContext({
      ...context,
      source: context.source || "landing",
      channel: "landing",
    }),
    properties,
  };

  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(`${base}/api/conversion/events`, blob)) return true;
    }
    fetch(`${base}/api/conversion/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => null);
  } catch {}

  return true;
}

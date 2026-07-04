/**
 * LeadyIA Landing — Global Observability v595
 */

const apiBase = () =>
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  "https://api.leadyia.com/api";

export function captureLandingWebVitals(metric = {}) {
  try {
    const payload = {
      event: "landing_web_vital",
      source: "landing",
      path: typeof location !== "undefined" ? location.pathname : undefined,
      host: typeof location !== "undefined" ? location.host : undefined,
      metric: {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      },
      timestamp: new Date().toISOString(),
    };

    navigator.sendBeacon?.(
      `${apiBase()}/conversion/events`,
      new Blob([JSON.stringify(payload)], { type: "application/json" })
    );
  } catch {
    // Observabilidade não pode bloquear a landing.
  }
}

export default { captureLandingWebVitals };

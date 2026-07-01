/**
 * ==========================================================
 * Landing Analytics Bootstrap — LeadyIA Enterprise
 * ==========================================================
 * Uso opcional na landing pública.
 */

import { loadAnalyticsProviders } from "../../../dashboard/src/modules/analytics/runtime/analyticsLoader";

export async function bootstrapTenantAnalytics({ apiBaseUrl, tenantId }) {
  if (!tenantId || typeof window === "undefined") return null;

  const baseUrl = apiBaseUrl || import.meta.env.VITE_API_URL || "https://api.leadyia.com/api";
  const response = await fetch(`${baseUrl}/public/analytics/${tenantId}`);
  const payload = await response.json();
  const settings = payload?.data || null;

  if (settings) loadAnalyticsProviders(settings);
  return settings;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  resolveConfiguredPlaybookTenantConfig,
  isConfiguredTenant,
  LEADYIA_API_BASE_URL,
  LEADYIA_WIDGET_LOADER_SRC,
  LEADYIA_WIDGET_SRC,
} from "../../config/playbookTenants.config";
import { captureLandingConversionContext, trackLandingConversionEvent } from "../../modules/conversion/conversionTracker";

const SCRIPT_ID = "leadyia-playbook-widget-loader";

function cleanupPreviousWidgetRuntime() {
  const oldScript = document.getElementById(SCRIPT_ID);
  const oldRuntime = document.getElementById("leadyia-widget-js");
  const oldHosts = document.querySelectorAll(
    '[id^="leadyia-widget-root"], [id^="leadyia-widget-host"], [data-leadyia-widget-root]'
  );

  oldScript?.remove();
  oldRuntime?.remove();
  oldHosts.forEach((node) => node?.remove?.());
}

export default function LeadyIAPlaybookWidgetLoader() {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    let cancelled = false;
    const routeKey = `${window.location.hostname}${location.pathname}${location.search}${location.hash}`;

    cleanupPreviousWidgetRuntime();

    async function boot() {
      const cfg = await resolveConfiguredPlaybookTenantConfig(window.location, {
        timeoutMs: 3500,
      });

      if (cancelled) return;

      if (!isConfiguredTenant(cfg.tenantId)) {
        console.info("[LeadyIA][Landing] Widget não carregado: tenant não configurado para este domínio/subdomínio", {
          host: window.location.hostname,
          playbook: cfg.playbook,
          tenantId: cfg.tenantId,
        });
        return;
      }

      const conversionContext = captureLandingConversionContext({
        tenantId: cfg.tenantId,
        playbook: cfg.playbook,
        source: "landing-playbook",
        apiBase: LEADYIA_API_BASE_URL,
      });

      trackLandingConversionEvent("playbook_view", conversionContext, { routeKey });

      window.__LEADYIA_WIDGET_CONTEXT__ = {
        ...(window.__LEADYIA_WIDGET_CONTEXT__ || {}),
        tenantId: cfg.tenantId,
        playbook: cfg.playbook,
        niche: cfg.niche,
        source: "landing-playbook",
        routeKey,
      };

      const existing = document.getElementById(SCRIPT_ID);
      if (existing?.dataset?.tenantId === String(cfg.tenantId) && existing?.dataset?.route === routeKey) {
        return;
      }

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = LEADYIA_WIDGET_LOADER_SRC;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.dataset.tenantId = String(cfg.tenantId);
      script.setAttribute("data-tenant", cfg.tenantId);
      script.setAttribute("data-tenant-id", cfg.tenantId);
      script.setAttribute("data-playbook", cfg.playbook);
      script.setAttribute("data-niche", cfg.niche);
      script.setAttribute("data-api-base", LEADYIA_API_BASE_URL);
      script.setAttribute("data-widget-src", LEADYIA_WIDGET_SRC);
      script.setAttribute("data-route", routeKey);
      script.setAttribute("data-conversion-context", JSON.stringify(conversionContext));

      if (cfg.widgetKey) {
        script.setAttribute("data-key", cfg.widgetKey);
        script.setAttribute("data-widget-key", cfg.widgetKey);
      }

      document.head.appendChild(script);
    }

    boot();

    return () => {
      cancelled = true;
      const script = document.getElementById(SCRIPT_ID);
      script?.remove();
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getCurrentPlaybookTenantConfig,
  isConfiguredTenant,
  LEADYIA_API_BASE_URL,
  LEADYIA_WIDGET_LOADER_SRC,
  LEADYIA_WIDGET_SRC,
} from "../../config/playbookTenants.config";
import { captureLandingConversionContext, trackLandingConversionEvent } from "../../modules/conversion/conversionTracker";

const SCRIPT_ID = "leadyia-playbook-widget-loader";

export default function LeadyIAPlaybookWidgetLoader() {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const cfg = getCurrentPlaybookTenantConfig();
    const routeKey = `${location.pathname}${location.search}${location.hash}`;

    if (!isConfiguredTenant(cfg.tenantId)) {
      console.info("[LeadyIA][Landing] Widget não carregado: tenant placeholder", {
        playbook: cfg.playbook,
        tenantId: cfg.tenantId,
      });
      return undefined;
    }

    const oldScript = document.getElementById(SCRIPT_ID);
    const oldRuntime = document.getElementById("leadyia-widget-js");
    const oldRoot = document.querySelector('[id^="leadyia-widget-root"], [data-leadyia-widget-root]');

    oldScript?.remove();
    oldRuntime?.remove();
    oldRoot?.remove();

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

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = LEADYIA_WIDGET_LOADER_SRC;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
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

    return () => {
      script.remove();
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

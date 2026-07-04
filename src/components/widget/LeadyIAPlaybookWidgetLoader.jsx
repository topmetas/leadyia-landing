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
    const routeKey = `${window.location.hostname}${location.pathname}${location.search}${location.hash}`;

    // Limpa qualquer runtime anterior antes de decidir se carrega de novo.
    // Isso evita que uma rota com tenant placeholder deixe um widget antigo
    // tentando bootstrap e gerando WIDGET_ORIGIN_NOT_ALLOWED.
    const oldScript = document.getElementById(SCRIPT_ID);
    const oldRuntime = document.getElementById("leadyia-widget-js");
    const oldRoot = document.querySelector('[id^="leadyia-widget-root"], [data-leadyia-widget-root]');

    oldScript?.remove();
    oldRuntime?.remove();
    oldRoot?.remove();

    if (!isConfiguredTenant(cfg.tenantId)) {
      console.info("[LeadyIA][Landing] Widget não carregado: tenant não configurado para este domínio/subdomínio", {
        host: window.location.hostname,
        playbook: cfg.playbook,
        tenantId: cfg.tenantId,
      });
      return undefined;
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

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = LEADYIA_WIDGET_LOADER_SRC;
    script.async = true;
    script.defer = true;
    // Não usar crossorigin aqui: alguns CDNs/Vercel não retornam ACAO para JS estático.
    // Script público pode carregar em qualquer site como <script src=".../v1/widget.js" data-tenant="...">.
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

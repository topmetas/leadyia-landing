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
const LOADER_GUARD_KEY = "__LEADYIA_LANDING_WIDGET_LOADER_V1103_127__";

export default function LeadyIAPlaybookWidgetLoader() {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const cfg = getCurrentPlaybookTenantConfig();
    const routeKey = `${window.location.hostname}${location.pathname}${location.search}${location.hash}`;
    const bindingKey = `${window.location.origin}::${cfg.tenantId}::${cfg.playbook}::${routeKey}`;

    if (!isConfiguredTenant(cfg.tenantId)) {
      // v606: em desenvolvimento/preview, não destruir um widget já carregado
      // manualmente por snippet. Apenas não injeta o loader automático.
      if (import.meta.env.DEV) {
        console.info("[LeadyIA][Landing] Widget automático ignorado: tenant não configurado", {
          host: window.location.hostname,
          playbook: cfg.playbook,
        });
      }
      return undefined;
    }

    const activeLoader = window[LOADER_GUARD_KEY];
    if (activeLoader?.bindingKey === bindingKey && ["loading", "active"].includes(activeLoader.status)) {
      return undefined;
    }

    if (activeLoader?.bindingKey && activeLoader.bindingKey !== bindingKey) {
      try { window.LeadyIA?.destroy?.(); } catch {}
    }

    // Limpa apenas o loader automático anterior. Não remove o host/root do CDN:
    // o próprio widget gerencia atualização e cache de sessão.
    const oldScript = document.getElementById(SCRIPT_ID);
    oldScript?.remove();

    const loaderToken = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window[LOADER_GUARD_KEY] = {
      bindingKey,
      loaderToken,
      tenantId: cfg.tenantId,
      playbook: cfg.playbook,
      status: "loading",
    };

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

    script.addEventListener("load", () => {
      if (window[LOADER_GUARD_KEY]?.loaderToken === loaderToken) {
        window[LOADER_GUARD_KEY].status = "active";
      }
    }, { once: true });

    script.addEventListener("error", () => {
      if (window[LOADER_GUARD_KEY]?.loaderToken === loaderToken) {
        delete window[LOADER_GUARD_KEY];
      }
    }, { once: true });

    if (cfg.widgetKey) {
      script.setAttribute("data-key", cfg.widgetKey);
      script.setAttribute("data-widget-key", cfg.widgetKey);
    }

    document.head.appendChild(script);

    // Não remover no cleanup do StrictMode: remover um script pendente não
    // cancela sua execução e permitia uma segunda inicialização com outro
    // contexto. Mudanças reais de rota são tratadas pelo bindingKey acima.
    return undefined;
  }, [location.pathname, location.search, location.hash]);

  return null;
}

/**
 * =========================================================
 * Arquivo: registerIntent.service.js
 * Caminho: landing/src/services/registerIntent.service.js
 * =========================================================
 *
 * Responsabilidade:
 * - Registrar a intenção pública de cadastro quando o backend estiver ativo.
 * - Gerar URL segura para continuar o cadastro no dashboard.
 * - Manter fallback local para não travar conversão se a API pública falhar.
 *
 * O que este módulo NÃO deve fazer:
 * - Não autentica usuário.
 * - Não cria tenant diretamente no browser.
 * - Não recebe senha nem dados sensíveis.
 *
 * Por quê:
 * Landing de alta conversão não pode perder lead. Se o backend estiver fora,
 * o usuário ainda deve conseguir continuar para dashboard.leadyia.com.
 * =========================================================
 */

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "https://api.leadyia.com/api"
).replace(/\/+$/, "");

const DASHBOARD_REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/auth/register";

function buildDashboardRegisterUrl(payload = {}, serverUrl = null) {
  if (serverUrl) return serverUrl;

  const params = new URLSearchParams();
  const allowed = [
    "name",
    "email",
    "company",
    "website",
    "segment",
    "playbook",
    "plan",
    "source",
  ];

  allowed.forEach((key) => {
    if (payload[key]) params.set(key, String(payload[key]));
  });

  params.set("utm_source", payload.utmSource || "landing");
  params.set("utm_medium", payload.utmMedium || "public_register");

  return `${DASHBOARD_REGISTER_URL}?${params.toString()}`;
}

export async function createRegisterIntent(payload = {}) {
  const cleanPayload = {
    name: payload.name?.trim() || "",
    email: payload.email?.trim().toLowerCase() || "",
    company: payload.company?.trim() || "",
    website: payload.website?.trim() || "",
    segment: payload.segment || "education",
    playbook: payload.playbook || "education",
    plan: payload.plan || "pro_br_brl",
    source: "landing_register_premium",
    utmSource: payload.utmSource || "landing",
    utmMedium: payload.utmMedium || "register",
  };

  try {
    console.info("[Landing][Register] Enviando intenção pública", {
      segment: cleanPayload.segment,
      playbook: cleanPayload.playbook,
      plan: cleanPayload.plan,
      hasWebsite: Boolean(cleanPayload.website),
    });

    const response = await fetch(`${API_BASE_URL}/public/register/intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(cleanPayload),
    });

    if (!response.ok) {
      throw new Error(`REGISTER_INTENT_HTTP_${response.status}`);
    }

    const data = await response.json();
    const registerUrl = buildDashboardRegisterUrl(cleanPayload, data?.registerUrl);

    return {
      ok: true,
      registerUrl,
      intentId: data?.intentId || null,
      payload: cleanPayload,
    };
  } catch (error) {
    console.warn("[Landing][Register] Fallback local ativado", {
      message: error?.message,
    });

    return {
      ok: false,
      registerUrl: buildDashboardRegisterUrl(cleanPayload),
      intentId: null,
      payload: cleanPayload,
      error: error?.message,
    };
  }
}

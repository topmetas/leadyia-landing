const CHANNELS = new Set(["website", "whatsapp", "both", "guided"]);

export function normalizeWebsite(value) {
  const raw = String(value || "").trim();
  if (!raw) return { value: null, hostname: null };
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const url = new URL(candidate);
  if (!url.hostname || !url.hostname.includes(".")) throw new Error("INVALID_WEBSITE");
  return { value: url.toString().replace(/\/$/, ""), hostname: url.hostname.toLowerCase() };
}

export function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length >= 10 ? digits : null;
}

export function resolveChannelFirstRegistration(payload = {}) {
  const requested = CHANNELS.has(payload.onboardingChannel) ? payload.onboardingChannel : "guided";
  const website = normalizeWebsite(payload.website);
  const whatsapp = normalizePhone(payload.whatsapp);
  const businessDescription = String(payload.businessDescription || "").trim().slice(0, 2000) || null;

  if (requested === "website" && !website.value) throw new Error("WEBSITE_REQUIRED_FOR_SELECTED_CHANNEL");
  if (requested === "whatsapp" && !whatsapp) throw new Error("WHATSAPP_REQUIRED_FOR_SELECTED_CHANNEL");
  if (requested === "both" && (!website.value || !whatsapp)) throw new Error("WEBSITE_AND_WHATSAPP_REQUIRED_FOR_SELECTED_CHANNEL");

  let effectiveChannel = requested;
  if (requested === "guided") {
    if (website.value && whatsapp) effectiveChannel = "both";
    else if (website.value) effectiveChannel = "website";
    else if (whatsapp) effectiveChannel = "whatsapp";
  }

  return {
    onboardingChannel: effectiveChannel,
    website: website.value,
    hostname: website.hostname,
    whatsapp,
    businessDescription,
    knowledgeBootstrap: website.value ? "website_crawl" : businessDescription ? "guided_business_profile" : "pending_guided_setup",
    whatsappFirst: effectiveChannel === "whatsapp",
  };
}

export const CHANNEL_FIRST_VERSION = "v1103.41.2";

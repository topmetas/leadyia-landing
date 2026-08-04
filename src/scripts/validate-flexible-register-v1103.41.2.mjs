import assert from "node:assert/strict";
import { resolveChannelFirstRegistration } from "../services/onboarding/channelFirstRegister.v1103_41_2.service.js";

const whatsapp = resolveChannelFirstRegistration({ onboardingChannel: "whatsapp", whatsapp: "+55 (11) 99999-0000" });
assert.equal(whatsapp.onboardingChannel, "whatsapp");
assert.equal(whatsapp.website, null);
assert.equal(whatsapp.whatsappFirst, true);

const website = resolveChannelFirstRegistration({ onboardingChannel: "website", website: "example.com" });
assert.equal(website.hostname, "example.com");
assert.equal(website.knowledgeBootstrap, "website_crawl");

const guided = resolveChannelFirstRegistration({ onboardingChannel: "guided", businessDescription: "Clínica de estética" });
assert.equal(guided.knowledgeBootstrap, "guided_business_profile");

assert.throws(() => resolveChannelFirstRegistration({ onboardingChannel: "website" }), /WEBSITE_REQUIRED/);
assert.throws(() => resolveChannelFirstRegistration({ onboardingChannel: "whatsapp", whatsapp: "123" }), /WHATSAPP_REQUIRED/);

console.log('[v1103.41.2][flexible-register] OK', { checks: 5, status: 'HEALTHY', healthScore: 100 });

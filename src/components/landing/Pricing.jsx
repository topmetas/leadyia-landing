import React, { useEffect, useMemo, useState } from "react";
import LanguageCurrencySwitcher from "../international/LanguageCurrencySwitcher";
import { createPublicCheckout, getPublicPricingPlans, trackPricingEvent } from "../../services/publicPricing.service";
import { resolveInitialCountry, getLanguage, INTERNATIONAL_TEXT } from "../../config/international.config";
import { getPremiumPlanPresentationV1103_41_1 } from "../../services/premiumPlanPresentation.v1103_41_1";
import "../../styles/pricing.css";
import "../../styles/international.css";

const PLAN_ORDER = ["starter", "pro", "business", "enterprise", "agency"];
const PLAN_TAGLINES = {
  starter: "Comece a automatizar seu atendimento.",
  pro: "Automatize vendas, agendamentos e relacionamento.",
  business: "Escale equipes, unidades e operações.",
  enterprise: "Governança, segurança e personalização.",
  agency: "Revenda a LeadyIA com sua própria marca.",
};

function formatNumber(value) {
  if (value === null || value === undefined) return null;
  return Number(value).toLocaleString("pt-BR");
}

function resolveCtaLabel(plan) { return getPremiumPlanPresentationV1103_41_1(plan.tier).cta; }

function PlanCard({ plan, onCheckout, loading }) {
  const commercial = plan.commercial || {};
  const conversations = commercial.includedConversations ?? plan?.limits?.messagesPerMonth ?? null;
  const features = commercial.benefits?.length ? commercial.benefits : plan.features || [];
  const exclusions = commercial.exclusions || plan.exclusions || [];
  const presentation = getPremiumPlanPresentationV1103_41_1(plan.tier);

  return (
    <article className={`lp-pricing-card ${plan.recommended ? "lp-pricing-card--featured" : ""} ${plan.tier === "agency" ? "lp-pricing-card--agency" : ""}`}>
      {presentation.badge && <div className={`lp-pricing-badge ${plan.tier === "agency" ? "lp-pricing-badge--agency" : ""}`}>{presentation.badge}</div>}

      <div className="lp-pricing-card-head">
        <div>
          <p className="lp-pricing-tier">{plan.tier}</p>
          <h3>{plan.name}</h3>
        </div>
        <div className="lp-pricing-price"><strong>{plan.priceFormatted}</strong>{plan.interval && <span>/{plan.interval}</span>}</div>
      </div>

      <p className="lp-pricing-headline">{presentation.promise || commercial.headline || PLAN_TAGLINES[plan.tier]}</p>
      <p className="lp-pricing-audience">{commercial.audience || plan.description}</p>

      <div className="lp-pricing-capacity">
        {presentation.metrics.map((metric) => <span key={metric}><strong>{metric}</strong></span>)}
        {conversations != null && <span><strong>{formatNumber(conversations)}</strong> conversas/mês</span>}
      </div>

      {commercial.channels?.length > 0 && <p className="lp-pricing-channels">Canais: {commercial.channels.join(" + ")}</p>}

      <ul className="lp-pricing-features">
        {features.slice(0, 7).map((feature) => <li key={feature}><span aria-hidden>✓</span>{feature}</li>)}
      </ul>

      {exclusions.length > 0 && (
        <details className="lp-pricing-exclusions">
          <summary>O que fica para o próximo plano</summary>
          <ul>{exclusions.slice(0, 5).map((item) => <li key={item}>— {item}</li>)}</ul>
        </details>
      )}

      <button type="button" className={`lp-pricing-cta ${plan.recommended ? "lp-pricing-cta--primary" : ""}`} onClick={() => onCheckout(plan)} disabled={loading}>
        {loading ? "Abrindo..." : resolveCtaLabel(plan)}
      </button>
    </article>
  );
}

function ComparisonTable({ plans }) {
  const rows = [
    ["Website com IA", [true, true, true, true, true]],
    ["WhatsApp integrado", [false, true, true, true, true]],
    ["CRM e pipeline", [false, true, true, true, true]],
    ["Agendamentos", [false, true, true, true, true]],
    ["Instagram integrado", [false, false, true, true, true]],
    ["API e webhooks", [false, false, true, true, true]],
    ["White label", [false, false, false, "Parcial", "Completo"]],
    ["Revenda e subcontas", [false, false, false, false, true]],
  ];

  return (
    <div className="lp-pricing-comparison-wrap">
      <div className="lp-pricing-comparison-heading">
        <span className="lp-section-eyebrow">Compare com clareza</span>
        <h3>Veja exatamente o que muda de um plano para outro</h3>
        <p>Sem recursos escondidos e sem promessas de uso ilimitado.</p>
      </div>
      <div className="lp-pricing-table-scroll">
        <table className="lp-pricing-table">
          <thead><tr><th>Recurso</th>{plans.map((plan) => <th key={plan.tier}>{plan.name}</th>)}</tr></thead>
          <tbody>{rows.map(([label, values]) => <tr key={label}><td>{label}</td>{values.map((value, index) => <td key={`${label}-${index}`}>{value === true ? "✓" : value === false ? "—" : value}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [country, setCountry] = useState(resolveInitialCountry);
  const [state, setState] = useState({ loading: true, plans: [], source: "loading" });
  const [checkoutLoading, setCheckoutLoading] = useState("");
  const [checkoutNotice, setCheckoutNotice] = useState("");
  const lang = getLanguage(country.locale);
  const text = INTERNATIONAL_TEXT[lang] || INTERNATIONAL_TEXT.pt;

  useEffect(() => {
    let active = true;
    getPublicPricingPlans({ country, currency: country.currency, locale: country.locale, provider: country.provider }).then((result) => {
      if (active) setState({ loading: false, plans: result.plans, source: result.source, loadedAt: result.loadedAt, commercialExperience: result.commercialExperience });
    });
    return () => { active = false; };
  }, [country]);

  const plans = useMemo(() => [...(state.plans || [])].sort((a, b) => PLAN_ORDER.indexOf(a.tier) - PLAN_ORDER.indexOf(b.tier)), [state.plans]);

  async function handleCheckout(plan) {
    setCheckoutNotice("");
    setCheckoutLoading(plan.code);
    const result = await createPublicCheckout(plan, { country, currency: country.currency, locale: country.locale, provider: country.provider });
    setCheckoutLoading("");
    if (result?.url) {
      setCheckoutNotice(`Plano ${plan.name} selecionado. Você será direcionado ao cadastro seguro e, após entrar, continuará para o checkout.`);
      window.location.href = result.url;
    }
  }

  return (
    <section id="pricing" className="lp-pricing-section">
      <div className="lp-pricing-bg" aria-hidden />
      <div className="lp-pricing-container">
        <div className="lp-pricing-header">
          <span className="lp-section-eyebrow">Planos LeadyIA</span>
          <h2>{state.commercialExperience?.title || "Escolha a estrutura certa para crescer com IA"}</h2>
          <p>{state.commercialExperience?.subtitle || "Comece com o essencial e evolua conforme seus canais, equipe e volume aumentarem."}</p>
          <LanguageCurrencySwitcher value={country} onChange={setCountry} label={text.countryLabel} />
          <div className="lp-pricing-source">{state.loading ? "Carregando catálogo oficial..." : state.source === "backend" ? "Catálogo comercial oficial" : "Catálogo local de contingência"}<span> · {country.provider === "stripe" ? "Stripe" : "Mercado Pago/Pix"}</span></div>
        </div>

        {checkoutNotice ? <div className="lp-pricing-checkout-notice" role="status">{checkoutNotice}</div> : null}

        <div className="lp-pricing-grid lp-pricing-grid--five">
          {plans.map((plan) => <PlanCard key={`${plan.tier}-${plan.currency}`} plan={plan} onCheckout={handleCheckout} loading={checkoutLoading === plan.code} />)}
        </div>

        <ComparisonTable plans={plans} />

        <div className="lp-pricing-note">
          <strong>Uso justo e previsível.</strong> Conversas adicionais podem ser contratadas sob demanda. Os limites existem para garantir estabilidade, qualidade de atendimento e uso justo da plataforma.
        </div>

        <div className="lp-pricing-specialist">
          <div><strong>Ainda está em dúvida?</strong><p>Faça o diagnóstico gratuito e receba uma recomendação baseada no seu cenário real.</p></div>
          <a href="/#demo-widget" onClick={() => trackPricingEvent("SPECIALIST_REQUESTED", { source: "landing_pricing" })}>Fazer diagnóstico gratuito</a>
        </div>
      </div>
    </section>
  );
}

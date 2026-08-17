import React, { useEffect, useMemo, useState } from "react";
import LanguageCurrencySwitcher from "../international/LanguageCurrencySwitcher";
import { createPublicCheckout, getPublicPricingPlans, trackPricingEvent } from "../../services/publicPricing.service";
import { resolveInitialCountry, getLanguage, INTERNATIONAL_TEXT } from "../../config/international.config";
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

function getPresentation(plan) {
  return plan?.commercial?.presentation || {
    badge: plan?.badge || null,
    cta: plan?.ctaLabel || "Escolher plano",
    promise: plan?.commercial?.headline || plan?.tagline || plan?.description || "",
    metrics: [],
  };
}
function resolveCtaLabel(plan) { return getPresentation(plan).cta; }

function PlanCard({ plan, onCheckout, loading, billingCycle }) {
  const commercial = plan.commercial || {};
  const conversations = commercial.includedConversations ?? plan?.limits?.messagesPerMonth ?? null;
  const features = commercial.benefits?.length ? commercial.benefits : plan.features || [];
  const exclusions = commercial.exclusions || plan.exclusions || [];
  const presentation = getPresentation(plan);
  const setupPolicy = plan?.commercial?.setupPolicy || plan?.setupPolicy || null;
  const monthlyCents = Number(plan.priceCents || 0);
  const annualContractBRL = Number(commercial.annualPriceBRL || 0);
  const annualCents = plan.currency === "BRL" && annualContractBRL > 0 ? annualContractBRL * 100 : monthlyCents * 10;
  const yearlyAvailable = plan.currency !== 'BRL' || plan.yearlyAvailable === true || plan.billingOptions?.yearly?.available === true;
  const cycleAvailable = billingCycle !== 'yearly' || yearlyAvailable;
  const displayedPrice = billingCycle === "yearly"
    ? new Intl.NumberFormat(plan.locale || "pt-BR", { style: "currency", currency: plan.currency || "BRL" }).format(annualCents / 100)
    : plan.priceFormatted;

  return (
    <article className={`lp-pricing-card ${plan.recommended ? "lp-pricing-card--featured" : ""} ${plan.tier === "agency" ? "lp-pricing-card--agency" : ""}`}>
      {presentation.badge && <div className={`lp-pricing-badge ${plan.tier === "agency" ? "lp-pricing-badge--agency" : ""}`}>{presentation.badge}</div>}

      <div className="lp-pricing-card-head">
        <div>
          <p className="lp-pricing-tier">{plan.tier}</p>
          <h3>{plan.name}</h3>
        </div>
        <div className="lp-pricing-price">{commercial.startingAt ? <span>A partir de</span> : null}<strong>{displayedPrice}</strong><span>/{billingCycle === "yearly" ? "ano" : plan.interval || "mês"}</span></div>
      </div>

      <p className="lp-pricing-headline">{presentation.promise || commercial.headline || PLAN_TAGLINES[plan.tier]}</p>
      <p className="lp-pricing-audience">{commercial.audience || plan.description}</p>

      <div className="lp-pricing-capacity">
        {presentation.metrics.map((metric) => <span key={metric}><strong>{metric}</strong></span>)}
        {conversations != null && <span><strong>{formatNumber(conversations)}</strong> conversas/mês</span>}
      </div>

      {commercial.channels?.length > 0 && <p className="lp-pricing-channels">Canais: {commercial.channels.join(" + ")}</p>}
      {billingCycle === "yearly" && cycleAvailable ? <p className="lp-pricing-channels"><strong>2 meses grátis</strong> · equivalente a 10 mensalidades</p> : null}
      {billingCycle === "yearly" && !cycleAvailable ? <p className="lp-pricing-channels"><strong>Anual ainda não disponível neste plano no Brasil.</strong> Selecione Mensal para contratar agora.</p> : null}
      {setupPolicy?.label && (
        <div className={`lp-pricing-setup-policy ${setupPolicy?.promotion ? "lp-pricing-setup-policy--promo" : ""}`}>
          <strong>{setupPolicy.label}</strong>
          {setupPolicy?.promotion && setupPolicy?.regularAmountBRL ? (
            <span>Valor normal: <s>R$ {Number(setupPolicy.regularAmountBRL).toLocaleString("pt-BR")}</s> · {setupPolicy.savingsLabel}</span>
          ) : null}
        </div>
      )}

      <ul className="lp-pricing-features">
        {features.slice(0, 7).map((feature) => <li key={feature}><span aria-hidden>✓</span>{feature}</li>)}
      </ul>

      {exclusions.length > 0 && (
        <details className="lp-pricing-exclusions">
          <summary>O que fica para o próximo plano</summary>
          <ul>{exclusions.slice(0, 5).map((item) => <li key={item}>— {item}</li>)}</ul>
        </details>
      )}

      <button type="button" className={`lp-pricing-cta ${plan.recommended ? "lp-pricing-cta--primary" : ""}`} onClick={() => cycleAvailable && onCheckout(plan)} disabled={loading || !cycleAvailable}>
        {loading ? "Abrindo..." : !cycleAvailable ? "Escolha Mensal para contratar" : resolveCtaLabel(plan)}
      </button>
    </article>
  );
}

function ComparisonTable({ plans, matrix }) {
  const columns = matrix?.columns?.length ? matrix.columns : plans.map((plan) => plan.tier);
  const rows = matrix?.rows?.length
    ? matrix.rows.map((row) => [row.label, columns.map((tier) => row.values?.[tier])])
    : [];

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
          <tbody>{rows.map(([label, values]) => <tr key={label}><td>{label}</td>{values.map((value, index) => <td className={value === true ? "lp-pricing-table-value lp-pricing-table-value--yes" : value === false ? "lp-pricing-table-value lp-pricing-table-value--no" : "lp-pricing-table-value lp-pricing-table-value--text"} key={`${label}-${index}`}>{value === true ? "✓" : value === false ? "—" : value}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default function Pricing({ focusOnly = false }) {
  const [country, setCountry] = useState(resolveInitialCountry);
  const [state, setState] = useState({ loading: true, plans: [], source: "loading" });
  const [checkoutLoading, setCheckoutLoading] = useState("");
  const [checkoutNotice, setCheckoutNotice] = useState("");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [showComparison, setShowComparison] = useState(!focusOnly);
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
  const displayedPlans = useMemo(
    () => focusOnly ? plans.filter((plan) => ["starter", "pro"].includes(plan.tier)) : plans,
    [focusOnly, plans],
  );

  async function handleCheckout(plan) {
    setCheckoutNotice("");
    setCheckoutLoading(plan.code);
    const result = await createPublicCheckout(plan, { country, currency: country.currency, locale: country.locale, provider: country.provider, billingCycle });
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
          <span className="lp-section-eyebrow">{focusOnly ? "Starter e Pro" : "Todos os planos LeadyIA"}</span>
          <h2>{focusOnly ? "Comece grátis e escolha o plano certo para sua operação" : (state.commercialExperience?.title || "Compare toda a estrutura LeadyIA")}</h2>
          <p>{focusOnly ? "Starter para Widget + WhatsApp QR. Pro para Widget + API Oficial da Meta, CRM e automações." : (state.commercialExperience?.subtitle || "Compare recursos, canais, equipe e volume antes de escolher.")}</p>
          <LanguageCurrencySwitcher value={country} onChange={setCountry} label={text.countryLabel} />
          <div className="lp-pricing-cycle" role="group" aria-label="Período de cobrança">
            <button type="button" className={billingCycle === "monthly" ? "is-active" : ""} onClick={() => setBillingCycle("monthly")}>Mensal</button>
            <button type="button" className={billingCycle === "yearly" ? "is-active" : ""} onClick={() => setBillingCycle("yearly")}>Anual · 2 meses grátis</button>
          </div>
          <div className="lp-pricing-source">{state.loading ? "Carregando catálogo oficial..." : state.source === "backend" ? "Catálogo comercial oficial" : "Catálogo local de contingência"}<span> · {country.provider === "stripe" ? "Stripe" : "Mercado Pago/Pix"}</span></div>
        </div>

        {checkoutNotice ? <div className="lp-pricing-checkout-notice" role="status">{checkoutNotice}</div> : null}

        <div className={`lp-pricing-grid ${focusOnly ? "lp-pricing-grid--focus" : "lp-pricing-grid--five"}`}>
          {displayedPlans.map((plan) => <PlanCard key={`${plan.tier}-${plan.currency}`} plan={plan} onCheckout={handleCheckout} loading={checkoutLoading === plan.code} billingCycle={billingCycle} />)}
        </div>

        {focusOnly ? (
          <div className="lp-pricing-compare-action">
            <button type="button" onClick={() => setShowComparison((current) => !current)}>
              {showComparison ? "Fechar comparação" : "Comparar todos os planos"}
            </button>
            <span>Business, Enterprise e Agency continuam disponíveis.</span>
          </div>
        ) : null}

        {showComparison ? <ComparisonTable plans={plans} matrix={state.commercialExperience?.comparisonMatrix} /> : null}

        <div className="lp-pricing-note">
          <strong>Teste grátis por 7 dias ou 200 mensagens, sem cartão.</strong> Conversas contam o total combinado de Site + WhatsApp. Avisamos em 70% e recomendamos upgrade em 85%; ao atingir 100%, seus dados são preservados. Taxas de uso da Meta são cobradas separadamente.
        </div>

        <div className="lp-pricing-specialist">
          <div><strong>Ainda está em dúvida?</strong><p>Faça o diagnóstico gratuito e receba uma recomendação baseada no seu cenário real.</p></div>
          <a href="/#demo-widget" onClick={() => trackPricingEvent("SPECIALIST_REQUESTED", { source: "landing_pricing" })}>Fazer diagnóstico gratuito</a>
        </div>
      </div>
    </section>
  );
}

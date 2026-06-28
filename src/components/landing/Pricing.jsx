import React, { useEffect, useMemo, useState } from "react";
import LanguageCurrencySwitcher from "../international/LanguageCurrencySwitcher";
import { getPublicPricingPlans, createPublicCheckout } from "../../services/publicPricing.service";
import { resolveInitialCountry, getLanguage, INTERNATIONAL_TEXT } from "../../config/international.config";
import "../../styles/pricing.css";
import "../../styles/international.css";

function formatLimit(value, suffix) {
  if (value === -1) return "Ilimitado";
  if (value === null || value === undefined) return "Sob medida";
  return `${Number(value).toLocaleString("pt-BR")} ${suffix}`;
}

function resolveCtaLabel(plan, country) {
  if (plan.tier === "enterprise") return country.locale?.startsWith("en") ? "Talk to sales" : country.locale?.startsWith("es") ? "Hablar con ventas" : "Falar com especialista";
  if (plan.tier === "agency") return country.locale?.startsWith("en") ? "Start Agency" : country.locale?.startsWith("es") ? "Empezar Agency" : "Começar Agency";
  if (plan.provider === "stripe") return country.locale?.startsWith("en") ? "Subscribe with Stripe" : country.locale?.startsWith("es") ? "Suscribirse con Stripe" : "Assinar com Stripe";
  return "Assinar com Mercado Pago";
}

function PlanCard({ plan, country, onCheckout }) {
  return (
    <article className={`lp-pricing-card ${plan.recommended ? "lp-pricing-card--featured" : ""} ${plan.tier === "agency" ? "lp-pricing-card--agency" : ""}`}>
      {plan.recommended && <div className="lp-pricing-badge">Mais escolhido</div>}
      {plan.tier === "agency" && <div className="lp-pricing-badge lp-pricing-badge--agency">Agências</div>}

      <div className="lp-pricing-card-head">
        <div>
          <p className="lp-pricing-tier">{plan.tier}</p>
          <h3>{plan.name}</h3>
        </div>
        <div className="lp-pricing-price">
          <strong>{plan.priceFormatted}</strong>
          {plan.interval && <span>/{plan.interval}</span>}
        </div>
      </div>

      {plan.setupFeeFormatted && (
        <div className="lp-pricing-setup">Implantação: <strong>{plan.setupFeeFormatted}</strong></div>
      )}

      <p className="lp-pricing-description">{plan.description}</p>

      <div className="lp-pricing-limits">
        <span>{formatLimit(plan?.limits?.bots, "bots")}</span>
        <span>{formatLimit(plan?.limits?.messagesPerMonth || plan?.limits?.messages, "mensagens/mês")}</span>
      </div>

      <ul className="lp-pricing-features">
        {(plan.features || []).slice(0, 7).map((feature) => (
          <li key={feature}><span aria-hidden>✓</span>{feature}</li>
        ))}
      </ul>

      <button
        type="button"
        className={`lp-pricing-cta ${plan.recommended ? "lp-pricing-cta--primary" : ""}`}
        onClick={() => onCheckout(plan)}
      >
        {resolveCtaLabel(plan, country)}
      </button>
    </article>
  );
}

export default function Pricing() {
  const [country, setCountry] = useState(resolveInitialCountry);
  const [state, setState] = useState({ loading: true, plans: [], source: "loading" });
  const [checkoutLoading, setCheckoutLoading] = useState("");

  const lang = getLanguage(country.locale);
  const text = INTERNATIONAL_TEXT[lang] || INTERNATIONAL_TEXT.pt;

  useEffect(() => {
    let active = true;
    async function loadPlans() {
      setState((prev) => ({ ...prev, loading: true }));
      const result = await getPublicPricingPlans({ country, currency: country.currency, locale: country.locale, provider: country.provider });
      if (!active) return;
      setState({ loading: false, plans: result.plans, source: result.source, loadedAt: result.loadedAt });
    }
    loadPlans();
    return () => { active = false; };
  }, [country]);

  const plans = useMemo(() => state.plans || [], [state.plans]);

  async function handleCheckout(plan) {
    setCheckoutLoading(plan.code);
    const result = await createPublicCheckout(plan, { country, currency: country.currency, locale: country.locale, provider: country.provider });
    setCheckoutLoading("");
    if (result?.url) window.location.href = result.url;
  }

  return (
    <section id="pricing" className="lp-pricing-section">
      <div className="lp-pricing-bg" aria-hidden />
      <div className="lp-pricing-container">
        <div className="lp-pricing-header">
          <span className="lp-section-eyebrow">International Billing v501</span>
          <h2>{text.title}</h2>
          <p>{text.subtitle}</p>

          <LanguageCurrencySwitcher value={country} onChange={setCountry} label={text.countryLabel} />

          <div className="lp-pricing-source">
            {state.loading ? "Carregando catálogo oficial..." : state.source === "backend" ? text.sourceBackend : text.sourceFallback}
            <span> · {text.checkoutWith} {country.provider === "stripe" ? "Stripe" : "Mercado Pago/Pix"}</span>
          </div>
        </div>

        <div className="lp-pricing-grid lp-pricing-grid--five">
          {plans.map((plan) => (
            <PlanCard key={plan.code || plan.name} plan={{ ...plan, loading: checkoutLoading === plan.code }} country={country} onCheckout={handleCheckout} />
          ))}
        </div>

        <div className="lp-pricing-note">
          <strong>{text.note}</strong> BRL usa Mercado Pago/Pix; moedas internacionais usam Stripe. O plano Agency já está preparado para venda nacional e internacional.
        </div>
      </div>
    </section>
  );
}

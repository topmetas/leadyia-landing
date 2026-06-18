/**
 * =========================================================
 * 💳 PRICING — LEADYIA CONNECTED PREMIUM 19C
 * Caminho: landing/src/components/landing/Pricing.jsx
 * =========================================================
 *
 * Responsabilidade:
 * - Renderizar planos públicos conectados ao backend.
 * - Exibir limites, features, recomendação e CTA por plano.
 * - Direcionar o visitante para criação de conta/checkout.
 *
 * O que este componente NÃO deve fazer:
 * - Não cria tenant.
 * - Não chama checkout privado.
 * - Não ativa plano nem assinatura.
 *
 * Por quê:
 * O backend é a fonte da verdade do catálogo comercial. A landing apenas
 * mostra os planos e envia o visitante para o fluxo seguro de criação/checkout.
 * =========================================================
 */

import React, { useEffect, useMemo, useState } from "react";
import { getPublicPricingPlans } from "../../services/publicPricing.service";
import "../../styles/pricing.css";

const REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";

function formatLimit(value, suffix) {
  if (value === -1) return `Ilimitado`;
  if (value === null || value === undefined) return "Sob medida";
  return `${Number(value).toLocaleString("pt-BR")} ${suffix}`;
}

function resolveCtaLabel(plan) {
  if (plan.tier === "enterprise") return "Falar com especialista";
  if (plan.recommended) return "Começar com Pro";
  return "Começar agora";
}

function buildCtaUrl(plan) {
  if (plan?.checkoutUrl) return plan.checkoutUrl;
  return `${REGISTER_URL}?plan=${encodeURIComponent(plan?.code || "")}`;
}

function PlanCard({ plan }) {
  const ctaUrl = buildCtaUrl(plan);

  return (
    <article
      className={`lp-pricing-card ${plan.recommended ? "lp-pricing-card--featured" : ""}`}
    >
      {plan.recommended && (
        <div className="lp-pricing-badge">Mais escolhido</div>
      )}

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

      <p className="lp-pricing-description">{plan.description}</p>

      <div className="lp-pricing-limits">
        <span>{formatLimit(plan?.limits?.bots, "bots")}</span>
        <span>{formatLimit(plan?.limits?.messagesPerMonth, "mensagens/mês")}</span>
      </div>

      <ul className="lp-pricing-features">
        {(plan.features || []).slice(0, 7).map((feature) => (
          <li key={feature}>
            <span aria-hidden>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        className={`lp-pricing-cta ${plan.recommended ? "lp-pricing-cta--primary" : ""}`}
        href={ctaUrl}
        target={ctaUrl.startsWith("http") ? "_blank" : undefined}
        rel={ctaUrl.startsWith("http") ? "noreferrer" : undefined}
      >
        {resolveCtaLabel(plan)}
      </a>
    </article>
  );
}

export default function Pricing() {
  const [state, setState] = useState({
    loading: true,
    plans: [],
    source: "loading",
  });

  useEffect(() => {
    let active = true;

    async function loadPlans() {
      const result = await getPublicPricingPlans();
      if (!active) return;

      setState({
        loading: false,
        plans: result.plans,
        source: result.source,
        loadedAt: result.loadedAt,
      });
    }

    loadPlans();

    return () => {
      active = false;
    };
  }, []);

  const plans = useMemo(() => state.plans || [], [state.plans]);

  return (
    <section id="pricing" className="lp-pricing-section">
      <div className="lp-pricing-bg" aria-hidden />

      <div className="lp-pricing-container">
        <div className="lp-pricing-header">
          <span className="lp-section-eyebrow">Planos conectados ao backend</span>
          <h2>Escolha o plano para vender e atender com IA todos os dias.</h2>
          <p>
            Planos com limites claros, playbooks por nicho, RAG, CRM, automações,
            governança e upgrade conforme sua operação cresce.
          </p>

          <div className="lp-pricing-source">
            {state.loading
              ? "Carregando catálogo oficial..."
              : state.source === "backend"
              ? "Catálogo oficial carregado do backend"
              : "Exibindo fallback seguro até a API pública estar publicada"}
          </div>
        </div>

        <div className="lp-pricing-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.code || plan.name} plan={plan} />
          ))}
        </div>

        <div className="lp-pricing-note">
          <strong>Fluxo seguro:</strong> escolha o plano, crie sua conta em
          dashboard.leadyia.com e finalize o pagamento pelo MercadoPago quando
          o checkout estiver disponível para seu tenant.
        </div>
      </div>
    </section>
  );
}

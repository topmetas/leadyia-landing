import Header from "../components/layout/PublicHeader";
import Footer from "../components/layout/PublicFooter";

const plans = [
  {
    name: "Starter",
    price: "R$ 97/mês",
    scoreLimit: "Até 30 pontos",
    description: "Validação inicial e captura de leads",
    features: [
      "Widget básico",
      "Lead scoring simples",
      "Dashboard básico",
      "Suporte community",
    ],
    cta: "Começar agora",
  },
  {
    name: "Growth",
    price: "R$ 297/mês",
    scoreLimit: "Até 70 pontos",
    description: "Automação de vendas orientada por IA",
    features: [
      "Decision Engine completo",
      "Lead Qualification avançado",
      "Auto-handoff (CRM / WhatsApp)",
      "Auto-Sales Engine",
      "Suporte prioritário",
    ],
    highlight: true,
    cta: "Ativar crescimento",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    scoreLimit: "Ilimitado",
    description: "Escala máxima, multi-tenant e white-label",
    features: [
      "FSM conversacional customizada",
      "RAG + IA privada",
      "White-label completo",
      "SLA e suporte dedicado",
      "Integrações customizadas",
    ],
    cta: "Falar com vendas",
  },
];

export default function Pricing() {
  return (
    <>
      <Header />

      <main className="pricing-page">
        <section className="pricing-hero">
          <h1>Planos alinhados ao seu pipeline de vendas</h1>
          <p>
            Cada plano evolui conforme o score e a maturidade dos seus leads.
            Você paga pelo crescimento real.
          </p>
        </section>

        <section className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
              <p className="score">Lead Score: {plan.scoreLimit}</p>
              <p className="description">{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <button className="cta-button">{plan.cta}</button>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

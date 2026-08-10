import "../../styles/vertical-plan-focus.css";

const DASHBOARD_REGISTER = "https://dashboard.leadyia.com/auth/register";

const PLANS = [
  {
    tier: "starter",
    name: "Starter",
    price: "R$ 97",
    badge: "Comece aqui",
    description: "Para começar no site e no WhatsApp sem depender da API oficial.",
    features: [
      "Widget com IA para Website",
      "WhatsApp Essencial via QR",
      "1 assistente IA e 1 usuário",
      "1.000 conversas por mês",
      "Pré-agendamento e captura de leads",
    ],
  },
  {
    tier: "pro",
    name: "Pro",
    price: "R$ 297",
    badge: "Mais popular",
    description: "Para integrar canais, organizar oportunidades e automatizar o atendimento.",
    features: [
      "Tudo do Starter",
      "Widget + WhatsApp API Oficial da Meta",
      "Instagram, CRM e pipeline",
      "Campanhas, agendamentos e follow-up",
      "10.000 conversas por mês",
    ],
  },
];

function registerUrl(tier, playbook) {
  const params = new URLSearchParams({ plan: tier, source: `vertical_${playbook}_v1103_122`, playbook });
  return `${DASHBOARD_REGISTER}?${params.toString()}`;
}

export default function VerticalPlanFocus({ playbook = "leadyia" }) {
  return (
    <section className="vpf-section" id="planos">
      <div className="vpf-shell">
        <div className="vpf-heading">
          <span>Teste antes de contratar</span>
          <h2>Comece grátis e escolha entre Starter e Pro.</h2>
          <p>Use a LeadyIA por 7 dias ou 200 mensagens, sem cartão e sem cobrança automática.</p>
        </div>

        <div className="vpf-grid">
          {PLANS.map((plan) => (
            <article key={plan.tier} className={`vpf-card ${plan.tier === "pro" ? "is-pro" : ""}`}>
              <div className="vpf-card-head">
                <span>{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <div className="vpf-price"><strong>{plan.price}</strong><small>/mês</small></div>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a href={registerUrl(plan.tier, playbook)}>Testar {plan.name} grátis</a>
            </article>
          ))}
        </div>

        <div className="vpf-compare">
          <p>Precisa de mais volume, equipes, white label ou revenda?</p>
          <a href="/pricing">Comparar todos os planos</a>
        </div>
      </div>
    </section>
  );
}

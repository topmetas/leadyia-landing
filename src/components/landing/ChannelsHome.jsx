/**
 * =========================================================
 * ChannelsHome.jsx
 * Seção premium da home para apresentar canais: site, WhatsApp,
 * Instagram e atendimento omnichannel.
 * =========================================================
 */

const CHANNELS = [
  {
    icon: "🌐",
    title: "Site",
    tag: "Widget inteligente",
    description:
      "Atenda visitantes no momento de maior intenção, qualifique leads, recomende planos ou produtos e direcione para a próxima ação certa.",
    bullets: ["Widget personalizável", "RAG por negócio", "Histórico no dashboard"],
  },
  {
    icon: "📱",
    title: "WhatsApp",
    tag: "Conversas comerciais",
    description:
      "Centralize contatos, reduza respostas repetitivas e mantenha o contexto do lead entre site e atendimento humano.",
    bullets: ["Pré-atendimento", "Handoff humano", "Follow-up de leads"],
  },
  {
    icon: "📸",
    title: "Instagram",
    tag: "DMs e captação",
    description:
      "Transforme dúvidas de direct em oportunidades, com respostas rápidas, qualificação e direcionamento para compra, agenda ou suporte.",
    bullets: ["Captação de interessados", "Respostas por intenção", "CTAs coerentes"],
  },
  {
    icon: "💬",
    title: "Multiatendimento",
    tag: "Tudo em um lugar",
    description:
      "Acompanhe conversas, origem, estágio, interesse, prioridade e próxima ação recomendada pela IA no mesmo painel.",
    bullets: ["CRM inteligente", "Lead score", "Central de conversas"],
  },
];

export default function ChannelsHome() {
  return (
    <section className="leadyia-channels-section" id="channels">
      <div className="leadyia-channels-bg leadyia-channels-bg--one" aria-hidden="true" />
      <div className="leadyia-channels-bg leadyia-channels-bg--two" aria-hidden="true" />

      <div className="leadyia-channels-container">
        <div className="leadyia-channels-header">
          <span>Canais conectados</span>
          <h2>Atendimento inteligente no site, WhatsApp e Instagram.</h2>
          <p>
            A LeadyIA conversa com o lead onde ele chega, entende a intenção e conduz para venda,
            agendamento, suporte ou atendimento humano sem perder o contexto.
          </p>
        </div>

        <div className="leadyia-channels-grid">
          {CHANNELS.map((channel) => (
            <article className="leadyia-channel-card" key={channel.title}>
              <div className="leadyia-channel-card__top">
                <span className="leadyia-channel-card__icon">{channel.icon}</span>
                <small>{channel.tag}</small>
              </div>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              <div className="leadyia-channel-card__bullets">
                {channel.bullets.map((bullet) => (
                  <span key={bullet}>{bullet}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

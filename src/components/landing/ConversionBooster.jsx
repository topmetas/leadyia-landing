/**
 * =========================================================
 * 🚀 CONVERSION BOOSTER — LEADYIA LANDING
 * =========================================================
 *
 * Seção incremental de alta conversão:
 * - reforça o caminho visitante → conversa → lead → agenda/venda;
 * - destaca canais, playbooks, CRM e próximos passos;
 * - não altera rotas, widget, backend ou checkout.
 * =========================================================
 */

const STEPS = [
  {
    number: "01",
    title: "O visitante chega",
    text: "A LeadyIA aparece no site, WhatsApp ou Instagram com uma abordagem alinhada ao nicho.",
  },
  {
    number: "02",
    title: "A IA entende a intenção",
    text: "Identifica se a pessoa quer preço, agendamento, produto, consulta, visita, matrícula ou suporte.",
  },
  {
    number: "03",
    title: "O lead é qualificado",
    text: "Coleta dados essenciais, resume o contexto e entrega a oportunidade pronta para o time.",
  },
  {
    number: "04",
    title: "A próxima ação acontece",
    text: "Pode agendar, indicar produto, gerar Pix, recomendar plano ou encaminhar para atendimento humano.",
  },
];

const OUTCOMES = [
  { icon: "⚡", label: "Resposta imediata", value: "24h" },
  { icon: "📅", label: "Agenda guiada", value: "menos faltas" },
  { icon: "💬", label: "Canais integrados", value: "site + WhatsApp + Instagram" },
  { icon: "🎯", label: "Playbook por nicho", value: "resposta contextual" },
];

export default function ConversionBooster() {
  return (
    <section className="ly-conversion-booster" aria-label="Fluxo de conversão da LeadyIA">
      <div className="ly-conversion-booster__shell">
        <div className="ly-conversion-booster__header">
          <span>Fluxo de conversão</span>
          <h2>Da primeira mensagem até a próxima ação, sem perder contexto.</h2>
          <p>
            A LeadyIA não é só um chat. Ela conduz a conversa com objetivo: qualificar,
            recomendar, agendar, vender ou encaminhar para o time certo.
          </p>
        </div>

        <div className="ly-conversion-booster__grid">
          {STEPS.map((step) => (
            <article className="ly-conversion-booster__step" key={step.number}>
              <small>{step.number}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="ly-conversion-booster__outcomes">
          {OUTCOMES.map((item) => (
            <div className="ly-conversion-booster__outcome" key={item.label}>
              <span aria-hidden="true">{item.icon}</span>
              <strong>{item.value}</strong>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

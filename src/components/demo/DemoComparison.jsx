export default function DemoComparison() {
  return (
    <div className="live-demo-comparison">
      <div className="live-demo-comparison__card is-muted">
        <span>Atendimento manual</span>
        <strong>Demora, repete perguntas e perde contexto.</strong>
        <p>O visitante espera resposta, a equipe precisa filtrar intenção e a oportunidade pode esfriar.</p>
      </div>
      <div className="live-demo-comparison__divider">vs</div>
      <div className="live-demo-comparison__card is-highlight">
        <span>LeadyIA por playbook</span>
        <strong>Responde com contexto, CTA correto e próxima ação.</strong>
        <p>Cada nicho segue uma lógica própria: agenda, venda, triagem, matrícula, visita ou checkout.</p>
      </div>
    </div>
  );
}

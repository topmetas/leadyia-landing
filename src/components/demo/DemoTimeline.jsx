const STEPS = [
  ['Visitante', 'entra no site'],
  ['IA', 'acolhe e entende a intenção'],
  ['Playbook', 'aplica regras do nicho'],
  ['Ação', 'agenda, vende ou encaminha'],
  ['CRM', 'registra oportunidade'],
];

export default function DemoTimeline() {
  return (
    <div className="live-demo-timeline" aria-label="Fluxo da demonstração">
      {STEPS.map(([title, description], index) => (
        <div className="live-demo-timeline__step" key={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{title}</strong>
          <small>{description}</small>
        </div>
      ))}
    </div>
  );
}

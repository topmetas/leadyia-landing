const STATS = [
  ['24h', 'atendimento disponível'],
  ['7 nichos', 'playbooks demonstráveis'],
  ['1 plataforma', 'widget, RAG, CRM e automação'],
];

export default function DemoStats() {
  return (
    <div className="live-demo-stats" aria-label="Indicadores da LeadyIA">
      {STATS.map(([value, label]) => (
        <div key={value} className="live-demo-stats__item">
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

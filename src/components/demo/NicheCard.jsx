/**
 * Card reutilizável para o Hub de Playbooks ao vivo.
 */
export default function NicheCard({ niche }) {
  return (
    <a
      className="live-niche-card"
      href={niche.route}
      style={{ '--live-accent': niche.accent }}
      aria-label={`Abrir demonstração do nicho ${niche.label}`}
    >
      <span className="live-niche-card__glow" aria-hidden="true" />
      <div className="live-niche-card__top">
        <span className="live-niche-card__icon" aria-hidden="true">{niche.icon}</span>
        <span className="live-niche-card__pill">Ao vivo</span>
      </div>
      <strong>{niche.title}</strong>
      <p>{niche.subtitle}</p>
      <div className="live-niche-card__tags" aria-label="Recursos demonstrados">
        {niche.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
      <small>{niche.domain}</small>
    </a>
  );
}

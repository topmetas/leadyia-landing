/**
 * ==========================================================
 * Arquivo: PlaybookCard.jsx
 * Caminho: landing/src/components/PlaybookCard.jsx
 * Responsabilidade: exibir um card comercial de playbook/nicho na landing.
 *
 * O que este componente NÃO deve fazer:
 * - Não deve chamar API.
 * - Não deve criar conta ou iniciar checkout.
 * - Não deve decidir playbook real do tenant.
 *
 * Por quê:
 * Este card é uma peça de conversão. Ele ajuda o visitante a se reconhecer
 * em um nicho antes de clicar para testar, criar conta ou ver planos.
 * ==========================================================
 */

const ICONS = {
  book: 'M12 6.5c-1.8-1.3-4-2-7-2v12c3 0 5 .9 7 2.5 2-1.6 4-2.5 7-2.5v-12c-3 0-5.2.7-7 2Zm0 0v12',
  calendar: 'M7 3v3m10-3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5V7a2 2 0 0 1 2-2Z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm6 12 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z',
  shield: 'M12 3.5 19 6v5.2c0 4.3-2.8 8.2-7 9.3-4.2-1.1-7-5-7-9.3V6l7-2.5Z',
  home: 'M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z',
  bag: 'M7 8h10l1 12H6L7 8Zm3 0a2 2 0 0 1 4 0',
  grid: 'M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm8 0h6v6h-6v-6Z',
  headset: 'M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2v-6h4M4 17v-4h4v6H6a2 2 0 0 1-2-2Zm8 4h2.5A3.5 3.5 0 0 0 18 17.5',
  bot: 'M8 8h8a4 4 0 0 1 4 4v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3a4 4 0 0 1 4-4Zm4 0V4m-4 9h.01M16 13h.01M9 17h6',
};

export default function PlaybookCard({ playbook, active, onSelect }) {
  const iconPath = ICONS[playbook.icon] || ICONS.bot;

  return (
    <button
      type="button"
      className={`playbook-card ${active ? 'playbook-card--active' : ''}`}
      onClick={() => onSelect(playbook.id)}
      style={{ '--playbook-accent': playbook.accent }}
      aria-pressed={active}
    >
      <span className="playbook-card__glow" aria-hidden="true" />
      <span className="playbook-card__topline">
        <span className="playbook-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={iconPath} />
          </svg>
        </span>
        <span className="playbook-card__badge">{playbook.badge}</span>
      </span>
      <span className="playbook-card__title">{playbook.label}</span>
      <span className="playbook-card__pain">{playbook.pain}</span>
      <span className="playbook-card__metric">{playbook.metric}</span>
    </button>
  );
}

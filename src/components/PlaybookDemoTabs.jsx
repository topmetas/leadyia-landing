/**
 * ==========================================================
 * Arquivo: PlaybookDemoTabs.jsx
 * Caminho: landing/src/components/PlaybookDemoTabs.jsx
 * Responsabilidade: mostrar uma simulação comercial do playbook ativo.
 *
 * O que este componente NÃO deve fazer:
 * - Não deve substituir o widget real.
 * - Não deve simular respostas LLM dinâmicas.
 * - Não deve inventar dados de pagamento ou checkout.
 *
 * Por quê:
 * Na landing, o objetivo é educar e gerar desejo rapidamente. A conversa
 * simulada mostra o tipo de experiência que o tenant poderá configurar no
 * dashboard e entregar pelo widget real.
 * ==========================================================
 */

export default function PlaybookDemoTabs({ playbook }) {
  return (
    <aside className="playbook-demo" style={{ '--playbook-accent': playbook.accent }}>
      <div className="playbook-demo__header">
        <div>
          <span className="playbook-demo__eyebrow">Demo do playbook</span>
          <h3>{playbook.label}</h3>
        </div>
        <span className="playbook-demo__status">Online</span>
      </div>

      <div className="playbook-demo__chat" aria-label={`Exemplo de conversa para ${playbook.label}`}>
        <div className="playbook-demo__message playbook-demo__message--bot">
          <strong>Assistente IA</strong>
          <p>{playbook.solution}</p>
        </div>
        <div className="playbook-demo__message playbook-demo__message--user">
          {playbook.examples[0]}
        </div>
        <div className="playbook-demo__message playbook-demo__message--bot">
          <strong>Resposta orientada</strong>
          <p>{playbook.benefit}</p>
        </div>
      </div>

      <div className="playbook-demo__examples">
        <span>Exemplos de perguntas</span>
        <ul>
          {playbook.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </div>

      <div className="playbook-demo__ctas">
        {playbook.ctas.map((cta) => (
          <a key={cta} href="https://dashboard.leadyia.com/register" className="playbook-demo__cta">
            {cta}
          </a>
        ))}
      </div>
    </aside>
  );
}

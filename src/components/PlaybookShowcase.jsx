/**
 * ==========================================================
 * Arquivo: PlaybookShowcase.jsx
 * Caminho: landing/src/components/PlaybookShowcase.jsx
 * Responsabilidade: seção premium da landing para vender LeadyIA por nicho.
 *
 * O que este componente NÃO deve fazer:
 * - Não deve listar planos oficiais.
 * - Não deve iniciar pagamento MercadoPago.
 * - Não deve substituir a demo real do widget.
 *
 * Por quê:
 * Clientes não compram “IA”; compram solução para dor do próprio nicho.
 * Esta seção aumenta conversão ao mostrar que o LeadyIA nasce preparado para
 * educação, clínica, advocacia, ecommerce e outros segmentos.
 * ==========================================================
 */

import { useMemo, useState } from 'react';
import { PLAYBOOKS_LANDING, getPlaybookById } from '../data/playbooksLanding';
import PlaybookCard from './PlaybookCard';
import PlaybookDemoTabs from './PlaybookDemoTabs';
import '../styles/playbooks.css';

export default function PlaybookShowcase() {
  const [activeId, setActiveId] = useState('educacao');
  const activePlaybook = useMemo(() => getPlaybookById(activeId), [activeId]);

  return (
    <section className="playbook-showcase" id="playbooks">
      <div className="playbook-showcase__halo playbook-showcase__halo--one" aria-hidden="true" />
      <div className="playbook-showcase__halo playbook-showcase__halo--two" aria-hidden="true" />

      <div className="playbook-showcase__container">
        <div className="playbook-showcase__header">
          <span className="playbook-showcase__eyebrow">Multi-playbook por nicho</span>
          <h2>Uma IA preparada para vender e atender do jeito que cada mercado precisa.</h2>
          <p>
            O LeadyIA adapta conversa, atalhos, CTAs e contexto por segmento. A mesma plataforma atende
            educação, clínicas, advocacia, ecommerce, SaaS e suporte sem criar vários sistemas separados.
          </p>
        </div>

        <div className="playbook-showcase__layout">
          <div className="playbook-showcase__grid" aria-label="Playbooks disponíveis na LeadyIA">
            {PLAYBOOKS_LANDING.map((playbook) => (
              <PlaybookCard
                key={playbook.id}
                playbook={playbook}
                active={activePlaybook.id === playbook.id}
                onSelect={setActiveId}
              />
            ))}
          </div>

          <PlaybookDemoTabs playbook={activePlaybook} />
        </div>

        <div className="playbook-showcase__footer">
          <div>
            <strong>Seu segmento não está na lista?</strong>
            <span>O playbook base pode ser personalizado com RAG, branding e fluxos do seu negócio.</span>
          </div>
          <a href="https://dashboard.leadyia.com/register" className="playbook-showcase__primary-cta">
            Criar conta grátis
          </a>
        </div>
      </div>
    </section>
  );
}

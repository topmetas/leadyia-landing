/**
 * ==========================================================
 * PlaybookSelector — Fase 1 do Hub de Playbooks ao vivo.
 * ==========================================================
 *
 * Esta seção é incremental: não substitui landings individuais, não altera
 * backend e não injeta widget. Ela apresenta os nichos e direciona para as
 * rotas/subdomínios que depois receberão TENANT_ID próprios.
 */

import { LIVE_PLAYBOOKS } from '../../data/demo/livePlaybooks';
import NicheCard from './NicheCard';
import LiveDemoBanner from './LiveDemoBanner';
import DemoTimeline from './DemoTimeline';
import DemoStats from './DemoStats';
import DemoComparison from './DemoComparison';
import DemoTestimonials from './DemoTestimonials';
import DemoCTA from './DemoCTA';
import '../../styles/playbook-live.css';

export default function PlaybookSelector() {
  return (
    <section className="live-playbooks" id="playbooks-ao-vivo">
      <div className="live-playbooks__bg live-playbooks__bg--one" aria-hidden="true" />
      <div className="live-playbooks__bg live-playbooks__bg--two" aria-hidden="true" />

      <div className="live-playbooks__shell">
        <LiveDemoBanner />

        <header className="live-playbooks__header">
          <span>Playbooks ao vivo</span>
          <h2>Teste a LeadyIA como se fosse um site real de cada nicho.</h2>
          <p>
            Os 14 nichos usam a mesma plataforma, mas cada playbook mantém conversa, memória,
            botões, ações e próxima etapa totalmente isolados.
          </p>
        </header>

        <div className="live-playbooks__grid">
          {LIVE_PLAYBOOKS.map((niche) => (
            <NicheCard key={niche.id} niche={niche} />
          ))}
        </div>

        <DemoStats />
        <DemoComparison />
        <DemoTimeline />
        <DemoTestimonials />
        <DemoCTA />
      </div>
    </section>
  );
}

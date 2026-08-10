import PublicLayout from "../../components/layout/PublicLayout";
import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
import { SEOProvider } from "../../seo";
import { getUniversalNicheLanding } from "../../data/verticalNiches.v1103_123";
import "../../styles/niche-universal.css";

function registerUrl(data, plan = "pro") {
  const params = new URLSearchParams({
    plan,
    playbook: data.playbook,
    segment: data.playbook,
    source: `vertical_${data.playbook}_v1103_123`,
  });
  return `https://dashboard.leadyia.com/auth/register?${params.toString()}`;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <header className="unv-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </header>
  );
}

export default function UniversalNicheLanding({ niche }) {
  const data = getUniversalNicheLanding(niche);
  if (!data) return null;

  const faq = [
    { question: `A LeadyIA já vem preparada para ${data.label}?`, answer: `Sim. O playbook ${data.playbook} possui intenção, linguagem, ações e contexto próprios para ${data.audience}.` },
    { question: "Posso usar no site e no WhatsApp?", answer: "Sim. O Starter inclui Widget e WhatsApp Essencial por QR. O Pro acrescenta a API Oficial da Meta, Instagram, CRM, campanhas e automações." },
    { question: "A conta começa cobrando?", answer: "Não. O teste dura 7 dias ou 200 mensagens, sem cartão e sem cobrança automática." },
    { question: "A IA substitui o profissional?", answer: `Não. ${data.safety}` },
  ];

  return (
    <PublicLayout showPlanFocus={data.playbook}>
      <SEOProvider
        path={data.href}
        title={`IA para ${data.label} | Atendimento e Vendas com LeadyIA`}
        description={`${data.description} Teste grátis por 7 dias ou 200 mensagens.`}
        schemaType="ProfessionalService"
        niche={data.playbook}
        faq={faq}
        breadcrumb={[{ name: "LeadyIA", url: "/" }, { name: data.label, url: data.href }]}
      />

      <div className="unv-page" style={{ "--unv-accent": data.color }} data-playbook={data.playbook}>
        <section className="unv-hero" id="hero">
          <div className="unv-glow" aria-hidden="true" />
          <div className="unv-shell unv-hero-grid">
            <div className="unv-hero-copy">
              <span className="unv-kicker">{data.icon} {data.eyebrow}</span>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div className="unv-actions">
                <a className="unv-button primary" href={registerUrl(data)}>Testar grátis por 7 dias</a>
                <a className="unv-button secondary" href="#demonstracao">Ver demonstração</a>
              </div>
              <div className="unv-trust"><span>Sem cartão</span><span>200 mensagens incluídas</span><span>Playbook isolado</span></div>
            </div>

            <aside className="unv-chat" id="demonstracao" aria-label={`Demonstração do playbook ${data.label}`}>
              <div className="unv-chat-head">
                <WidgetOrbMark label={`Assistente ${data.label}`} compact />
                <div><strong>Assistente {data.label}</strong><span>● Online agora</span></div>
              </div>
              <div className="unv-bubble ai">Olá! Posso ajudar com {data.primaryAction.toLowerCase()}, {data.secondaryAction.toLowerCase()} ou atendimento humano.</div>
              <div className="unv-bubble user">{data.questions[0]}</div>
              <div className="unv-bubble ai">{data.answers[0]}</div>
              <div className="unv-quick-actions"><span>{data.primaryAction}</span><span>{data.secondaryAction}</span></div>
            </aside>
          </div>
        </section>

        <section className="unv-section light">
          <div className="unv-shell">
            <SectionHeading eyebrow="Resultados do playbook" title={`Uma jornada construída para ${data.audience}.`} text="O atendimento não mistura perguntas, CTAs ou memória de outros segmentos." />
            <div className="unv-card-grid three">
              {data.goals.map((goal, index) => <article key={goal}><span>0{index + 1}</span><h3>{goal}</h3><p>{data.journey[index] || data.summary}</p></article>)}
            </div>
          </div>
        </section>

        <section className="unv-section dark">
          <div className="unv-shell unv-two-columns">
            <div>
              <SectionHeading eyebrow="Pipeline contextual" title="Da primeira mensagem ao próximo passo, sem perder memória." text="Cada resposta alimenta o contexto do próprio tenant e prepara um resumo para a equipe continuar." />
              <ol className="unv-steps">
                {data.journey.map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}
              </ol>
            </div>
            <div className="unv-summary-card">
              <span>Resumo estruturado</span>
              <strong>{data.label}</strong>
              <dl>
                <div><dt>Intenção</dt><dd>{data.primaryAction}</dd></div>
                <div><dt>Playbook</dt><dd>{data.playbook}</dd></div>
                <div><dt>Status</dt><dd>Pronto para continuar</dd></div>
                <div><dt>Próxima ação</dt><dd>Equipe assume com contexto</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="unv-section light">
          <div className="unv-shell">
            <SectionHeading eyebrow="Conversas reais" title="A IA entende a intenção antes de responder." text="Perguntas e respostas seguem o conteúdo oficial configurado para o negócio." />
            <div className="unv-conversation-grid">
              {data.questions.map((question, index) => (
                <article key={question}>
                  <p className="customer">“{question}”</p>
                  <p className="assistant">{data.answers[index]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="unv-section safety">
          <div className="unv-shell unv-safety-card">
            <div><span>Segurança por nicho</span><h2>Automação com limites claros e equipe no controle.</h2></div>
            <p>{data.safety} Tenant, sessão, memória, conhecimento e ações permanecem vinculados ao playbook <strong>{data.playbook}</strong>.</p>
          </div>
        </section>

        <section className="unv-section light" id="faq">
          <div className="unv-shell">
            <SectionHeading eyebrow="Perguntas frequentes" title={`Tudo para começar com ${data.label}.`} />
            <div className="unv-faq">
              {faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="unv-final">
          <div className="unv-shell">
            <span>{data.icon} LeadyIA para {data.label}</span>
            <h2>Teste o atendimento completo antes de escolher o plano.</h2>
            <p>Comece com Starter ou Pro e compare todos os planos quando precisar de mais volume, equipe ou white label.</p>
            <div className="unv-actions centered">
              <a className="unv-button primary" href={registerUrl(data, "starter")}>Testar Starter grátis</a>
              <a className="unv-button secondary" href={registerUrl(data, "pro")}>Testar Pro grátis</a>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}

import PublicLayout from "../../components/layout/PublicLayout";
import { SEOProvider } from "../../seo";
import { PAGE_SEO } from "../../seo/config/pagesSeo.config";
import { aestheticsLanding } from "../../data/niches/aestheticsLanding.data";
import "../../styles/niche-clinic.css";

import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=aesthetics";
const demoUrl = "#aesthetics-widget-demo";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="clinic-section-header">
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function CheckIcon() {
  return <span className="clinic-check" aria-hidden="true">✓</span>;
}

export default function AestheticsLanding() {
  const data = aestheticsLanding;

  return (
    <PublicLayout>
      <SEOProvider
        {...PAGE_SEO.aesthetics}
        niche="aesthetics"
        faq={data.faq}
        breadcrumb={[{ name: "Playbooks", url: "/playbooks" }, { name: "Estética", url: PAGE_SEO.aesthetics.path }]}
        businessName={data.brand?.name}
      />
      <main className="clinic-landing aesthetics-landing" id="aesthetics-landing">
        <section className="clinic-hero" id="hero">
          <div className="clinic-hero__background" aria-hidden="true" />

          <div className="clinic-container clinic-hero__grid">
            <div className="clinic-hero__copy">
              <div className="clinic-pill">{data.hero.badge}</div>
              <h1>{data.hero.title}</h1>
              <p>{data.hero.description}</p>

              <div className="clinic-hero__actions">
                <a className="clinic-button clinic-button--primary" href={demoUrl}>
                  {data.hero.primaryCta}
                </a>
                <a className="clinic-button clinic-button--secondary" href="#como-funciona">
                  {data.hero.secondaryCta}
                </a>
              </div>

              <div className="clinic-hero__stats" aria-label="Indicadores da solução">
                {data.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="clinic-hero__card" aria-label="Resumo da IA para estética">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">EA</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Consultora online agora</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Sou a consultora virtual da estética. Posso te ajudar com procedimentos, avaliação, horários e formas de pagamento.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Quero saber sobre botox.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Claro. O ideal é avaliar regiões e objetivo do tratamento. Posso te ajudar a agendar uma avaliação?
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">📅 Agendar avaliação</button>
                  <button type="button">💳 Ver sinal Pix</button>
                  <button type="button">💬 Falar com consultora</button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="clinic-strip" aria-label="Resumo de valor">
          <div className="clinic-container clinic-strip__grid">
            <strong>{data.brand.headline}</strong>
            <p>{data.brand.subheadline}</p>
          </div>
        </section>

        <section className="clinic-section" id="dores">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="Problemas que a IA resolve"
              title="Sua estética não precisa perder leads por demora, preço solto ou atendimento sem continuidade."
              description="A landing foi escrita como um site real de estética para que o lead teste a IA no contexto certo."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">✦</div>
                  <h3>{pain.title}</h3>
                  <p>{pain.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="como-funciona">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="Como funciona"
              title="Da curiosidade ao agendamento de avaliação com uma experiência guiada."
              description="O fluxo premium evita respostas genéricas: a IA entende intenção, qualifica o lead e sugere a próxima ação."
            />

            <div className="clinic-flow">
              {data.flow.map((item) => (
                <article className="clinic-flow__item" key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-section" id="servicos">
          <div className="clinic-container clinic-two-columns">
            <div>
              <SectionHeader
                eyebrow="Procedimentos e protocolos"
                title="Treinada para vender avaliação sem prometer resultado antes da análise profissional."
                description="A IA apoia atendimento comercial, qualificação e agendamento. Ela não substitui avaliação técnica nem promete resultado estético."
              />

              <div className="clinic-service-list">
                {data.services.map((service) => (
                  <span key={service}><CheckIcon />{service}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Venda com responsabilidade</span>
              <h3>Respostas comerciais, humanas e seguras.</h3>
              <p>
                A IA pode explicar procedimentos, orientar preparo, falar sobre formas de pagamento e conduzir para avaliação. Quando a resposta depende de análise individual, ela encaminha para a equipe.
              </p>
              <ul>
                <li>Não promete resultado estético.</li>
                <li>Não define protocolo sem avaliação.</li>
                <li>Não substitui profissional responsável.</li>
                <li>Direciona dúvidas sensíveis para atendimento humano.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="aesthetics-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de uma estética de verdade."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio estetica.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <div className="clinic-widget-preview__identity">
                  <WidgetOrbMark label="Consultora da Estética" compact />
                  <span>Consultora da Estética</span>
                </div>
                <strong><i aria-hidden="true" /> Online</strong>
              </div>
              <div className="clinic-widget-preview__body">
                {data.conversations.map((conversation) => (
                  <div className="clinic-conversation" key={conversation.user}>
                    <span>{conversation.tag}</span>
                    <p className="clinic-conversation__user">{conversation.user}</p>
                    <p className="clinic-conversation__ai">{conversation.assistant}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="clinic-section" id="beneficios">
          <div className="clinic-container clinic-two-columns clinic-two-columns--reverse">
            <div className="clinic-benefits-card">
              <h3>O que o lead consegue testar nesta landing</h3>
              <ul>
                {data.benefits.map((benefit) => (
                  <li key={benefit}><CheckIcon />{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                eyebrow="Portfólio por nicho"
                title="Esta página funciona como demonstração comercial e base de conhecimento."
                description="Além de vender a experiência, o conteúdo é útil para indexação RAG: perguntas frequentes, fluxos de atendimento, regras de Pix, limites de segurança e procedimentos comuns."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para minha estética
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ para RAG"
              title="Perguntas frequentes que a IA precisa dominar."
              description="Estas respostas podem ser indexadas no dashboard para melhorar a consistência do atendimento da demo estética."
            />

            <div className="clinic-faq">
              {data.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-final-cta">
          <div className="clinic-container clinic-final-cta__card">
            <span>LeadyIA para estética</span>
            <h2>Mostre para o lead uma IA funcionando no nicho dele.</h2>
            <p>
              Use esta landing como portfólio, demonstração e fonte RAG para treinar respostas melhores sobre atendimento, avaliação, agendamento e Pix em estética.
            </p>
            <div className="clinic-hero__actions clinic-hero__actions--center">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>Começar com estética</a>
              <a className="clinic-button clinic-button--secondary" href="#aesthetics-widget-demo">Ver script do widget</a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

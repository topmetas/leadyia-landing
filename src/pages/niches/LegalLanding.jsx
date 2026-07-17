import PublicLayout from "../../components/layout/PublicLayout";
import { SEOProvider } from "../../seo";
import { PAGE_SEO } from "../../seo/config/pagesSeo.config";
import { legalLanding } from "../../data/niches/legalLanding.data";
import "../../styles/niche-clinic.css";

import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=legal";
const demoUrl = "#legal-widget-demo";

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

export default function LegalLanding() {
  const data = legalLanding;

  return (
    <PublicLayout>
      <SEOProvider
        {...PAGE_SEO.legal}
        niche="legal"
        faq={data.faq}
        breadcrumb={[{ name: "Playbooks", url: "/playbooks" }, { name: "Jurídico", url: PAGE_SEO.legal.path }]}
        businessName={data.brand?.name}
      />
      <main className="clinic-landing legal-landing" id="legal-landing">
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

              <div className="clinic-hero__stats" aria-label="Indicadores da solução jurídica">
                {data.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="clinic-hero__card" aria-label="Resumo da IA jurídica">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">AA</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Assistente jurídica online</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Sou a assistente virtual do escritório. Posso fazer uma triagem inicial e ajudar a agendar uma consulta.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Fui demitido e quero saber meus direitos.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Entendi. Posso coletar algumas informações e encaminhar seu caso para uma consulta trabalhista com o advogado.
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">⚖️ Fazer triagem</button>
                  <button type="button">📅 Agendar consulta</button>
                  <button type="button">💬 Falar com advogado</button>
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
              title="Seu escritório não precisa receber leads sem contexto, perder consultas ou responder sempre as mesmas dúvidas."
              description="A landing foi criada como um site jurídico realista para o visitante testar a LeadyIA dentro do contexto de advocacia."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">§</div>
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
              title="Da primeira dúvida ao resumo do caso para o advogado."
              description="A IA organiza a conversa, evita promessas jurídicas indevidas e conduz para a ação correta: triagem, consulta, WhatsApp ou atendimento humano."
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

        <section className="clinic-section" id="areas">
          <div className="clinic-container clinic-two-columns">
            <div>
              <SectionHeader
                eyebrow="Áreas de atuação"
                title="Uma IA preparada para identificar a demanda e encaminhar para o especialista certo."
                description="O conteúdo abaixo serve como demonstração comercial e como base para indexação RAG do atendimento jurídico."
              />

              <div className="clinic-service-list">
                {data.areas.map((area) => (
                  <span key={area}><CheckIcon />{area}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Atendimento jurídico responsável</span>
              <h3>Triagem clara, segura e sem prometer resultado.</h3>
              <p>
                A LeadyIA apoia o primeiro atendimento do escritório: acolhe o visitante, organiza o relato, identifica a área jurídica e encaminha para consulta quando necessário.
              </p>
              <ul>
                {data.safety.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="legal-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de um escritório jurídico realista."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio juridico.leadyia.com ou legal.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <div className="clinic-widget-preview__identity">
                  <WidgetOrbMark label="Assistente Jurídica" compact />
                  <span>Assistente Jurídica</span>
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
                title="Uma página que vende, demonstra e treina a IA jurídica."
                description="O visitante testa a experiência como se estivesse no site de um escritório, enquanto o conteúdo da página alimenta o RAG com áreas de atuação, regras de segurança, dúvidas frequentes e exemplos de conversa."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para meu escritório
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq-rag">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ / RAG"
              title="Perguntas frequentes para indexar e melhorar o atendimento jurídico."
              description="Estas perguntas foram escritas para ajudar o RAG a responder com clareza, limites profissionais e direcionamento para consulta quando necessário."
            />

            <div className="clinic-faq-grid">
              {data.faq.map((item) => (
                <article className="clinic-faq-card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--cta" id="cta-final">
          <div className="clinic-container clinic-final-cta">
            <span>LeadyIA para Advocacia</span>
            <h2>Mostre a IA funcionando em um escritório jurídico antes de vender a solução.</h2>
            <p>
              Use esta landing como portfólio público, demonstração de nicho e base de conhecimento para treinar a assistente jurídica com atendimento responsável.
            </p>
            <div className="clinic-hero__actions">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar conta grátis
              </a>
              <a className="clinic-button clinic-button--secondary" href={demoUrl}>
                Testar widget jurídico
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

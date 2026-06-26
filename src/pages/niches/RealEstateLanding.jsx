import PublicLayout from "../../components/layout/PublicLayout";
import { realEstateLanding } from "../../data/niches/realEstateLanding.data";
import "../../styles/niche-clinic.css";

const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=realestate";
const demoUrl = "#realestate-widget-demo";

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

export default function RealEstateLanding() {
  const data = realEstateLanding;

  return (
    <PublicLayout>
      <main className="clinic-landing realestate-landing" id="realestate-landing">
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

              <div className="clinic-hero__stats" aria-label="Indicadores da solução imobiliária">
                {data.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="clinic-hero__card" aria-label="Resumo da IA imobiliária">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">PH</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Assistente imobiliária online</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Posso ajudar você a encontrar imóveis, tirar dúvidas e agendar uma visita com um corretor.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Procuro um apartamento de 2 quartos em Goiânia.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Perfeito. Qual bairro ou região você prefere e qual faixa de valor deseja considerar?
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">🏢 Ver imóveis</button>
                  <button type="button">📅 Agendar visita</button>
                  <button type="button">💬 Falar com corretor</button>
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
              title="Sua imobiliária não precisa perder leads por demora, falta de qualificação ou visita sem confirmação."
              description="A landing foi criada como um site imobiliário realista para o visitante testar a LeadyIA no contexto de compra, aluguel, venda e visita."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">🏠</div>
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
              title="Do primeiro interesse ao lead pronto para o corretor."
              description="A IA organiza a conversa, identifica intenção, coleta o perfil do imóvel e conduz para imóveis, visita, WhatsApp ou atendimento humano."
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

        <section className="clinic-section" id="segmentos">
          <div className="clinic-container clinic-two-columns">
            <div>
              <SectionHeader
                eyebrow="Fluxos imobiliários"
                title="Uma IA preparada para cada intenção: comprar, alugar, vender, visitar ou falar com corretor."
                description="O conteúdo abaixo serve como demonstração comercial e como base para indexação RAG do atendimento imobiliário."
              />

              <div className="clinic-service-list">
                {data.segments.map((segment) => (
                  <span key={segment}><CheckIcon />{segment}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Atendimento imobiliário inteligente</span>
              <h3>Mais contexto para o corretor, menos lead perdido.</h3>
              <p>
                A LeadyIA apoia a captação imobiliária: acolhe o visitante, entende o imóvel desejado, identifica urgência e envia um resumo organizado para a equipe comercial.
              </p>
              <ul>
                {data.safety.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="realestate-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de uma imobiliária realista."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio imobiliaria.leadyia.com ou realestate.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <span>Assistente Imobiliária</span>
                <strong>Online</strong>
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
                title="Uma página que vende, demonstra e treina a IA imobiliária."
                description="O visitante testa a experiência como se estivesse no site de uma imobiliária, enquanto o conteúdo da página alimenta o RAG com intenção de compra, aluguel, visita, captação e financiamento."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para minha imobiliária
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq-rag">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ / RAG"
              title="Perguntas frequentes para indexar e melhorar o atendimento imobiliário."
              description="Estas perguntas ajudam o RAG a responder com clareza, qualificar melhor o lead e conduzir para visita, corretor ou catálogo."
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
            <span>LeadyIA para Imobiliárias</span>
            <h2>Mostre a IA funcionando em uma imobiliária antes de vender a solução.</h2>
            <p>
              Use esta landing como portfólio público, demonstração de nicho e base de conhecimento para treinar a assistente imobiliária com atendimento consultivo e foco em conversão.
            </p>
            <div className="clinic-hero__actions">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar conta grátis
              </a>
              <a className="clinic-button clinic-button--secondary" href={demoUrl}>
                Testar widget imobiliário
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

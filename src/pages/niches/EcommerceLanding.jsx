import PublicLayout from "../../components/layout/PublicLayout";
import { SEOProvider } from "../../seo";
import { PAGE_SEO } from "../../seo/config/pagesSeo.config";
import ecommerceLanding from "../../data/niches/ecommerceLanding.data.js";
import "../../styles/niche-clinic.css";

import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=ecommerce";
const demoUrl = "#ecommerce-widget-demo";

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

export default function EcommerceLanding() {
  const data = ecommerceLanding;

  return (
    <PublicLayout showPlanFocus="ecommerce">
      <SEOProvider
        {...PAGE_SEO.ecommerce}
        niche="ecommerce"
        faq={data.faq}
        breadcrumb={[{ name: "Playbooks", url: "/playbooks" }, { name: "E-commerce", url: PAGE_SEO.ecommerce.path }]}
        businessName={data.brand?.name}
      />
      <main className="clinic-landing ecommerce-landing" id="ecommerce-landing">
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

              <div className="clinic-hero__stats" aria-label="Indicadores da solução para e-commerce">
                {data.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="clinic-hero__card" aria-label="Resumo da IA para e-commerce">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">LS</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Assistente de loja online</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Posso ajudar você a encontrar produtos, comparar opções e finalizar sua compra.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Quero jogos para alfabetização.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Perfeito. Posso te mostrar jogos por objetivo: sílabas, leitura, consciência fonológica ou frases. Para qual idade você precisa?
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">🛒 Ver produtos</button>
                  <button type="button">📚 Ver coleção</button>
                  <button type="button">💬 Tirar dúvidas</button>
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
              title="Sua loja não precisa perder vendas por dúvida, busca ruim ou carrinho abandonado."
              description="A landing foi criada como uma loja virtual realista para o lead testar a LeadyIA no contexto de catálogo, produto, categoria, checkout e suporte."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">🛍️</div>
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
              title="Da dúvida do visitante ao produto certo, com CTA de compra no momento correto."
              description="A IA organiza a conversa, identifica intenção, busca no catálogo, recomenda produtos e conduz para coleção, checkout ou atendimento humano."
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
                eyebrow="Fluxos de e-commerce"
                title="Uma IA preparada para busca, recomendação, compra, checkout, entrega e pós-venda."
                description="O conteúdo abaixo serve como demonstração comercial e como base para indexação RAG do atendimento de loja virtual."
              />

              <div className="clinic-service-list">
                {data.segments.map((segment) => (
                  <span key={segment}><CheckIcon />{segment}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Atendimento de loja inteligente</span>
              <h3>Produto certo, resposta objetiva e botão coerente.</h3>
              <p>
                A LeadyIA apoia vendas online: acolhe o visitante, entende o que ele procura, evita recomendações fora do catálogo e entrega CTAs conectados à pergunta.
              </p>
              <ul>
                {data.safety.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="ecommerce-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de uma loja virtual realista."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio ecommerce.leadyia.com ou loja.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <div className="clinic-widget-preview__identity">
                  <WidgetOrbMark label="Assistente de Loja" compact />
                  <span>Assistente de Loja</span>
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
                title="Uma página que vende, demonstra e treina a IA de e-commerce."
                description="O visitante testa a experiência como se estivesse em uma loja online, enquanto o conteúdo da página alimenta o RAG com intenção de produto, categoria, compra, entrega e suporte."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para minha loja
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq-rag">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ / RAG"
              title="Perguntas frequentes para indexar e melhorar o atendimento de e-commerce."
              description="Estas perguntas ajudam o RAG a responder com clareza, qualificar melhor o cliente e conduzir para produto, categoria, checkout ou atendimento."
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
            <span>LeadyIA para E-commerce</span>
            <h2>Mostre a IA funcionando em uma loja antes de vender a solução.</h2>
            <p>
              Use esta landing como portfólio público, demonstração de nicho e base de conhecimento para treinar a assistente de loja com atendimento consultivo e foco em conversão.
            </p>
            <div className="clinic-hero__actions">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar conta grátis
              </a>
              <a className="clinic-button clinic-button--secondary" href={demoUrl}>
                Testar widget de e-commerce
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

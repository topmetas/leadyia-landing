import PublicLayout from "../../components/layout/PublicLayout";
import { SEOProvider } from "../../seo";
import { PAGE_SEO } from "../../seo/config/pagesSeo.config";
import { educationLanding } from "../../data/niches/educationLanding.data";
import "../../styles/niche-clinic.css";

import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=education";
const demoUrl = "#education-widget-demo";

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

export default function EducationLanding() {
  const data = educationLanding;

  return (
    <PublicLayout>
      <SEOProvider
        {...PAGE_SEO.education}
        niche="education"
        faq={data.faq}
        breadcrumb={[{ name: "Playbooks", url: "/playbooks" }, { name: "Educação", url: PAGE_SEO.education.path }]}
        businessName={data.brand?.name}
      />
      <main className="clinic-landing education-landing" id="education-landing">
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

              <div className="clinic-hero__stats" aria-label="Indicadores da solução educacional">
                {data.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="clinic-hero__card" aria-label="Resumo da IA para educação">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">ED</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Assistente educacional</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Posso ajudar com matrícula, cursos, diagnóstico pedagógico e agendamento.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Quero saber sobre alfabetização para meu filho.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Claro. Qual a idade dele e qual é a principal dificuldade: reconhecer letras, juntar sílabas, ler palavras ou escrever?
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">🎓 Ver cursos</button>
                  <button type="button">📅 Agendar diagnóstico</button>
                  <button type="button">💬 Falar com coordenação</button>
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
              title="Sua instituição não precisa perder famílias, alunos e matrículas por demora no atendimento."
              description="A landing foi criada como um site educacional realista para o lead testar a LeadyIA em matrícula, diagnóstico, cursos, horários, valores e atendimento pedagógico."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">🎓</div>
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
              title="Da primeira dúvida da família ao agendamento, matrícula ou diagnóstico."
              description="A IA organiza a conversa, identifica intenção, qualifica o aluno ou responsável, explica a proposta e conduz para a próxima ação correta."
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
                eyebrow="Fluxos educacionais"
                title="Uma IA preparada para escola, curso, mentoria, reforço, psicopedagogia e produtos educacionais."
                description="O conteúdo abaixo serve como demonstração comercial e como base para indexação RAG do atendimento educacional."
              />

              <div className="clinic-service-list">
                {data.segments.map((segment) => (
                  <span key={segment}><CheckIcon />{segment}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Atendimento educacional inteligente</span>
              <h3>Mais acolhimento, mais clareza e menos lead perdido.</h3>
              <p>
                A LeadyIA ajuda instituições educacionais a responder rápido, entender a necessidade do aluno e orientar famílias sem transformar o atendimento em algo frio ou técnico.
              </p>
              <ul>
                {data.safety.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="education-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de uma escola, curso ou atendimento pedagógico realista."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio educacao.leadyia.com ou education.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <div className="clinic-widget-preview__identity">
                  <WidgetOrbMark label="Assistente Educacional" compact />
                  <span>Assistente Educacional</span>
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
                title="Uma página que vende, demonstra e treina a IA educacional."
                description="O visitante testa a experiência como se estivesse em uma escola, curso ou atendimento pedagógico, enquanto o conteúdo alimenta o RAG com dúvidas de matrícula, metodologia, diagnóstico e horários."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para educação
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq-rag">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ / RAG"
              title="Perguntas frequentes para indexar e melhorar o atendimento educacional."
              description="Estas perguntas ajudam o RAG a responder com clareza, qualificar melhor famílias e alunos e conduzir para matrícula, diagnóstico, visita ou atendimento humano."
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
            <span>LeadyIA para Educação</span>
            <h2>Mostre a IA funcionando em uma instituição educacional antes de vender a solução.</h2>
            <p>
              Use esta landing como portfólio público, demonstração por nicho e base de conhecimento para treinar a assistente educacional com atendimento humanizado e foco em matrícula.
            </p>
            <div className="clinic-hero__actions">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar conta grátis
              </a>
              <a className="clinic-button clinic-button--secondary" href={demoUrl}>
                Testar widget educacional
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

import PublicLayout from "../../components/layout/PublicLayout";
import { SEOProvider } from "../../seo";
import { PAGE_SEO } from "../../seo/config/pagesSeo.config";
import { clinicLanding } from "../../data/niches/clinicLanding.data";
import "../../styles/niche-clinic.css";

import WidgetOrbMark from "../../components/brand/WidgetOrbMark";
const registerUrl = "https://dashboard.leadyia.com/auth/register?segment=clinic";
const demoUrl = "#clinic-widget-demo";

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

export default function ClinicLanding() {
  const data = clinicLanding;

  return (
    <PublicLayout>
      <SEOProvider
        {...PAGE_SEO.clinic}
        niche="clinic"
        faq={data.faq}
        breadcrumb={[{ name: "Playbooks", url: "/playbooks" }, { name: "Clínica", url: PAGE_SEO.clinic.path }]}
        businessName={data.brand?.name}
      />
      <main className="clinic-landing" id="clinic-landing">
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

            <aside className="clinic-hero__card" aria-label="Resumo da IA para clínica">
              <div className="clinic-phone-card">
                <div className="clinic-phone-card__top">
                  <div className="clinic-avatar">CV</div>
                  <div>
                    <strong>{data.brand.name}</strong>
                    <span>Assistente online agora</span>
                  </div>
                </div>

                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Olá! Sou a assistente virtual da clínica. Posso te ajudar com consulta, retorno, exames, horários e preparo.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--user">
                  Quero agendar uma consulta.
                </div>
                <div className="clinic-chat-bubble clinic-chat-bubble--ai">
                  Claro. Qual especialidade você procura e qual melhor período para atendimento?
                </div>

                <div className="clinic-mini-actions">
                  <button type="button">📅 Agendar consulta</button>
                  <button type="button">💳 Ver sinal Pix</button>
                  <button type="button">💬 Falar com recepção</button>
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
              title="Sua clínica não precisa perder pacientes por demora no primeiro atendimento."
              description="A landing foi escrita como um site real de clínica para que o lead teste a IA dentro do contexto certo."
            />

            <div className="clinic-card-grid clinic-card-grid--3">
              {data.pains.map((pain) => (
                <article className="clinic-card" key={pain.title}>
                  <div className="clinic-card__icon">+</div>
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
              title="Da dúvida ao agendamento com uma experiência guiada."
              description="O fluxo premium evita respostas genéricas: a IA entende intenção, coleta dados e sugere a próxima ação."
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
                eyebrow="Serviços e especialidades"
                title="Treinada para orientar o paciente sem prometer diagnóstico."
                description="A IA pode apoiar atendimento administrativo, triagem comercial e agendamento. Ela não substitui a avaliação profissional."
              />

              <div className="clinic-service-list">
                {data.services.map((service) => (
                  <span key={service}><CheckIcon />{service}</span>
                ))}
              </div>
            </div>

            <div className="clinic-premium-panel">
              <span className="clinic-panel-kicker">Segurança no atendimento</span>
              <h3>Respostas cuidadosas para um nicho sensível.</h3>
              <p>
                A IA pode explicar funcionamento, horários, preparo, valores informados pela clínica e próximos passos. Quando o assunto exige decisão médica, ela encaminha para atendimento humano.
              </p>
              <ul>
                <li>Não emite diagnóstico.</li>
                <li>Não prescreve medicamento.</li>
                <li>Não substitui consulta profissional.</li>
                <li>Direciona urgências para canal adequado.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--dark" id="clinic-widget-demo">
          <div className="clinic-container clinic-widget-grid">
            <div>
              <SectionHeader
                eyebrow="Widget demo"
                title="Coloque a LeadyIA dentro de uma clínica de verdade."
                description={data.widget.description}
              />

              <div className="clinic-code-card">
                <div>
                  <strong>Script do widget</strong>
                  <span>Use este modelo no subdomínio clinica.leadyia.com</span>
                </div>
                <pre><code>{data.widget.script}</code></pre>
              </div>
            </div>

            <div className="clinic-widget-preview">
              <div className="clinic-widget-preview__header">
                <div className="clinic-widget-preview__identity">
                  <WidgetOrbMark label="Assistente da Clínica" compact />
                  <span>Assistente da Clínica</span>
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
                description="Além de vender a experiência, o conteúdo é útil para indexação RAG: perguntas frequentes, fluxos de atendimento, regras de Pix, limites de segurança e serviços comuns."
              />
              <a className="clinic-button clinic-button--primary" href={registerUrl}>
                Criar uma IA para minha clínica
              </a>
            </div>
          </div>
        </section>

        <section className="clinic-section clinic-section--soft" id="faq">
          <div className="clinic-container">
            <SectionHeader
              eyebrow="FAQ para RAG"
              title="Perguntas frequentes que a IA precisa dominar."
              description="Estas respostas podem ser indexadas no dashboard para melhorar a consistência do atendimento da demo clínica."
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
            <span>LeadyIA para clínicas</span>
            <h2>Mostre para o lead uma IA funcionando no nicho dele.</h2>
            <p>
              Use esta landing como portfólio, demonstração e fonte RAG para treinar respostas melhores sobre atendimento, agendamento e Pix em clínicas.
            </p>
            <div className="clinic-hero__actions clinic-hero__actions--center">
              <a className="clinic-button clinic-button--primary" href={registerUrl}>Começar com clínica</a>
              <a className="clinic-button clinic-button--secondary" href="#clinic-widget-demo">Ver script do widget</a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

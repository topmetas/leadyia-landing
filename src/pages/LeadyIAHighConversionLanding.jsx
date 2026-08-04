import React from "react";
import { SEOProvider } from "../seo";
import { PAGE_SEO } from "../seo/config/pagesSeo.config";
import PublicLayout from "../components/layout/PublicLayout";
import Pricing from "../components/landing/Pricing";
import "../styles/leadyia-high-conversion.css";

const REGISTER_URL = "https://dashboard.leadyia.com/auth/register?plan=pro&source=leadyia_main_v1103_43_9&playbook=leadyia";

const painCards = [
  ["Leads esperando resposta", "Quem pede informação agora pode comprar de outra empresa em poucos minutos."],
  ["Equipe presa no repetitivo", "Preço, horário, localização, produto e agendamento consomem o tempo do time."],
  ["Contatos sem continuidade", "Conversas ficam espalhadas e ninguém sabe quem está pronto para avançar."],
  ["Tráfego sem conversão", "Visitantes entram no site, não encontram resposta e saem sem deixar contato."],
];

const benefitCards = [
  ["Atenda no momento do interesse", "A IA responde no site e no WhatsApp, inclusive fora do horário comercial."],
  ["Entenda antes de encaminhar", "Nome, necessidade, urgência, orçamento e próximo passo ficam organizados."],
  ["Priorize quem está pronto", "Lead score e temperatura ajudam a equipe a focar nas melhores oportunidades."],
  ["Continue até a decisão", "Follow-up, lembretes, campanhas e CRM evitam que o contato esfrie."],
];

const niches = [
  ["Clínicas", "Pacientes respondidos, triagem e agendamentos."],
  ["Estética", "Avaliações, confirmações e recorrência."],
  ["Imobiliárias", "Leads qualificados e visitas organizadas."],
  ["Advocacia", "Pré-triagem responsável e casos organizados."],
  ["Educação", "Visitas, aulas experimentais e matrículas."],
  ["E-commerce", "Recomendação de produtos e recuperação."],
  ["SaaS", "Trials, demos e qualificação B2B."],
];


const demoCompanies = [
  "Clínica Horizonte",
  "Estética Lumina",
  "Imob Prime",
  "Colégio Novo Saber",
  "Loja Vitta",
  "Nexus SaaS",
];

const demoTestimonials = [
  {
    quote: "A equipe passou a receber os contatos com muito mais contexto. Ficou mais fácil saber quem precisava de retorno imediato.",
    name: "Mariana Costa",
    role: "Gestora de clínica",
  },
  {
    quote: "O atendimento inicial ficou mais organizado e o WhatsApp deixou de ser uma fila sem prioridade.",
    name: "Rafael Martins",
    role: "Diretor comercial",
  },
  {
    quote: "A LeadyIA nos ajudou a transformar conversas soltas em oportunidades com próxima ação definida.",
    name: "Camila Rocha",
    role: "Coordenadora de atendimento",
  },
];

const faqs = [
  ["A LeadyIA é apenas um chatbot?", "Não. Ela combina atendimento, qualificação, CRM, agendamentos, campanhas, playbooks e integrações em uma única operação."],
  ["Preciso ter site?", "Não. Você pode começar pelo WhatsApp, pelo site, pelos dois canais ou por um onboarding guiado."],
  ["A IA substitui minha equipe?", "Não. Ela cuida do primeiro atendimento, organiza contexto e chama a equipe quando o contato precisa de atendimento humano."],
  ["Consigo usar informações do meu negócio?", "Sim. A base pode usar seu site, documentos, catálogo, perguntas frequentes, políticas e regras configuradas por tenant."],
  ["Os leads entram no CRM?", "Sim. Nome, WhatsApp, e-mail, interesse, origem, temperatura, estágio e próxima ação podem ser registrados no CRM."],
  ["Funciona no WhatsApp?", "Sim. O plano Pro inclui Website + WhatsApp, sujeito à conexão e certificação do canal escolhida pelo tenant."],
  ["Qual plano é indicado para começar?", "Para negócios que desejam CRM, WhatsApp, agendamentos e follow-up, o plano Pro é o caminho recomendado."],
  ["Criar a conta gera cobrança?", "Não. O cadastro inicia o trial. A contratação acontece apenas quando você confirma o plano e segue para o checkout."],
];

function SectionTitle({ kicker, title, text, centered = false }) {
  return (
    <div className={`lyhc-heading ${centered ? "is-centered" : ""}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function LeadyIAHighConversionLanding() {
  return (
    <PublicLayout>
      <SEOProvider
        {...PAGE_SEO.home}
        niche="saas"
        breadcrumb={[{ name: "LeadyIA", url: "/" }]}
        faq={faqs.map(([question, answer]) => ({ question, answer }))}
      />

      <div className="lyhc-page">
        <section className="lyhc-hero" id="topo">
          <div className="lyhc-shell lyhc-hero-grid">
            <div className="lyhc-hero-copy">
              <span className="lyhc-kicker">Atendimento e vendas com IA</span>
              <h1>Responda mais rápido, organize cada lead e transforme conversas em oportunidades.</h1>
              <p>
                A LeadyIA atende no site e no WhatsApp, entende o que o visitante precisa,
                coleta os dados, organiza o CRM e conduz para agendamento, compra, demo ou atendimento humano.
              </p>
              <div className="lyhc-actions">
                <a className="lyhc-button primary" href={REGISTER_URL}>Quero testar gratuitamente</a>
                <a className="lyhc-button secondary" href="#demo-widget">Ver uma conversa real</a>
              </div>
              <div className="lyhc-proofline">
                <span>Trial automático</span><span>Sem cobrança no cadastro</span><span>Comece pelo site ou WhatsApp</span>
              </div>
            </div>

            <div className="lyhc-demo-card" id="demo-widget">
              <div className="lyhc-demo-top"><strong>LeadyIA em ação</strong><span>● Online</span></div>
              <div className="lyhc-bubble customer">Quero automatizar meu atendimento, mas não quero perder o toque humano.</div>
              <div className="lyhc-bubble ai">Perfeito. Posso responder primeiro, entender a necessidade e encaminhar sua equipe apenas quando a conversa realmente precisar.</div>
              <div className="lyhc-bubble customer">Também preciso organizar os contatos e fazer follow-up.</div>
              <div className="lyhc-bubble ai">Eu registro cada oportunidade no CRM, calculo a temperatura do lead e preparo a próxima ação.</div>
              <div className="lyhc-result-card">
                <span>Oportunidade organizada</span>
                <strong>Lead quente • WhatsApp • Próxima ação: demonstração</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="lyhc-section light">
          <div className="lyhc-shell">
            <SectionTitle kicker="O problema" title="Sua empresa pode estar perdendo oportunidades sem perceber." text="A maior parte das perdas acontece antes da proposta: na demora, na falta de contexto e no follow-up que nunca acontece." centered />
            <div className="lyhc-card-grid four">
              {painCards.map(([title, text]) => <article key={title} className="lyhc-card"><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="lyhc-section dark" id="channels">
          <div className="lyhc-shell">
            <SectionTitle kicker="Como a LeadyIA ajuda" title="Uma recepcionista virtual que entende, organiza e conduz." text="Em vez de apenas responder perguntas, a LeadyIA transforma cada conversa em um próximo passo claro." />
            <div className="lyhc-card-grid four">
              {benefitCards.map(([title, text]) => <article key={title} className="lyhc-card dark-card"><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="lyhc-section light" id="scheduling">
          <div className="lyhc-shell lyhc-journey-grid">
            <div>
              <SectionTitle kicker="Jornada completa" title="Do primeiro contato ao próximo passo." text="A IA faz o trabalho inicial e entrega à equipe uma oportunidade mais clara, contextualizada e pronta para avançar." />
              <ol className="lyhc-steps">
                <li><strong>1. O visitante chama</strong><span>Site, WhatsApp ou outro canal integrado.</span></li>
                <li><strong>2. A IA entende</strong><span>Necessidade, urgência, interesse e contexto.</span></li>
                <li><strong>3. Os dados são organizados</strong><span>Nome, WhatsApp, e-mail e estágio entram no CRM.</span></li>
                <li><strong>4. A próxima ação é definida</strong><span>Agendar, comprar, demonstrar, seguir ou chamar a equipe.</span></li>
                <li><strong>5. O relacionamento continua</strong><span>Follow-up, lembretes, campanhas e remarketing.</span></li>
              </ol>
            </div>
            <div className="lyhc-pipeline">
              <span>Nova conversa</span><span>Lead identificado</span><span>Qualificado</span><span>Quente</span><span>Equipe assume</span>
            </div>
          </div>
        </section>

        <section className="lyhc-section social-proof" id="prova-social">
          <div className="lyhc-shell">
            <SectionTitle
              kicker="Prova social"
              title="Negócios de diferentes segmentos podem usar a mesma base para atender, organizar e vender melhor."
              text="Os nomes e depoimentos abaixo são exemplos demonstrativos para você substituir pelos seus casos reais antes da publicação definitiva."
              centered
            />

            <div className="lyhc-trust-metrics" aria-label="Indicadores demonstrativos">
              <article><strong>24/7</strong><span>atendimento inicial disponível</span></article>
              <article><strong>1 CRM</strong><span>para centralizar oportunidades</span></article>
              <article><strong>7 nichos</strong><span>com jornadas especializadas</span></article>
              <article><strong>Omnichannel</strong><span>site, WhatsApp e integrações</span></article>
            </div>

            <div className="lyhc-company-strip">
              {demoCompanies.map((company) => <span key={company}>{company}</span>)}
            </div>

            <div className="lyhc-testimonial-grid">
              {demoTestimonials.map((item) => (
                <article key={item.name} className="lyhc-testimonial">
                  <div className="lyhc-stars" aria-label="5 estrelas">★★★★★</div>
                  <blockquote>“{item.quote}”</blockquote>
                  <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
                </article>
              ))}
            </div>

            <p className="lyhc-demo-disclaimer">Exemplos ilustrativos — substitua por empresas, números e depoimentos reais antes de usar como prova comercial definitiva.</p>
          </div>
        </section>

        <section className="lyhc-section dark" id="playbooks">
          <div className="lyhc-shell">
            <SectionTitle kicker="IA treinada por segmento" title="A LeadyIA fala a língua do seu negócio." text="Cada playbook combina perguntas, limites, regras e próximos passos próprios do nicho." centered />
            <div className="lyhc-niche-grid">
              {niches.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="lyhc-section light">
          <div className="lyhc-shell lyhc-two-columns">
            <div>
              <SectionTitle kicker="CRM que trabalha" title="Cada conversa vira contexto, prioridade e próxima ação." />
              <ul className="lyhc-checklist">
                <li>Nome completo, WhatsApp e e-mail organizados.</li>
                <li>Origem, interesse, canal e playbook registrados.</li>
                <li>Temperatura: frio, morno, quente ou pronto para venda.</li>
                <li>Timeline com mensagens, respostas e mudanças de estágio.</li>
                <li>Campanhas de e-mail e WhatsApp por temperatura.</li>
                <li>Agendamentos, faltas, recuperação e pós-atendimento.</li>
              </ul>
            </div>
            <div className="lyhc-crm-card">
              <div><span>Lead</span><strong>Mariana Oliveira</strong></div>
              <div><span>Interesse</span><strong>Demonstração</strong></div>
              <div><span>Temperatura</span><strong className="hot">Quente</strong></div>
              <div><span>Próxima ação</span><strong>Contato comercial</strong></div>
            </div>
          </div>
        </section>

        <section className="lyhc-section dark">
          <div className="lyhc-shell">
            <SectionTitle kicker="Controle e segurança" title="A IA atua dentro das regras do seu negócio." text="Sua equipe continua no controle, com dados isolados por tenant e limites claros para cada playbook." centered />
            <div className="lyhc-card-grid four">
              <article className="lyhc-card dark-card"><h3>Sem inventar informações</h3><p>A IA usa as fontes configuradas: site, documentos, catálogo e políticas.</p></article>
              <article className="lyhc-card dark-card"><h3>Equipe no controle</h3><p>Casos sensíveis, negociações e exceções podem ser encaminhados.</p></article>
              <article className="lyhc-card dark-card"><h3>Dados por tenant</h3><p>Cada cliente mantém identidade, base, leads e permissões separados.</p></article>
              <article className="lyhc-card dark-card"><h3>Opt-in e opt-out</h3><p>Campanhas respeitam consentimento, quiet hours e interrupção ao responder.</p></article>
            </div>
          </div>
        </section>

        <section className="lyhc-section recommended">
          <div className="lyhc-shell lyhc-plan-card">
            <div>
              <span className="lyhc-kicker">Plano recomendado</span>
              <h2>Comece com o Pro.</h2>
              <p>É o plano ideal para quem quer usar Website + WhatsApp, CRM, agendamentos, lead score, follow-up e playbooks por nicho.</p>
              <ul className="lyhc-checklist compact">
                <li>3 assistentes IA e 5 usuários</li>
                <li>10.000 conversas por mês</li>
                <li>CRM completo e pipeline</li>
                <li>Agendamentos e campanhas</li>
              </ul>
            </div>
            <div className="lyhc-price-box">
              <span>Pro</span><strong>R$ 297</strong><small>/mês</small>
              <div className="lyhc-promo">Implantação gratuita por tempo limitado<br/><small>Valor normal: R$ 197</small></div>
              <a className="lyhc-button primary" href={REGISTER_URL}>Começar meu trial</a>
            </div>
          </div>
        </section>

        <div id="pricing" className="lyhc-pricing-wrap"><Pricing /></div>

        <section className="lyhc-section light">
          <div className="lyhc-shell">
            <SectionTitle kicker="Perguntas frequentes" title="O que você precisa saber antes de começar." centered />
            <div className="lyhc-faq-grid">
              {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="lyhc-final">
          <div className="lyhc-shell">
            <span className="lyhc-kicker">Comece agora</span>
            <h2>Deixe a LeadyIA atender primeiro. Sua equipe entra quando realmente faz diferença.</h2>
            <p>Crie seu tenant, escolha o canal inicial e teste a experiência completa antes de contratar.</p>
            <a className="lyhc-button primary" href={REGISTER_URL}>Criar minha IA agora</a>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}

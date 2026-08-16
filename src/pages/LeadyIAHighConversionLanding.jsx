import React from "react";
import { SEOProvider } from "../seo";
import { PAGE_SEO } from "../seo/config/pagesSeo.config";
import PublicLayout from "../components/layout/PublicLayout";
import Pricing from "../components/landing/Pricing";
import { COMMERCIAL_NICHES_V1103_123 } from "../data/verticalNiches.v1103_123";
import "../styles/leadyia-high-conversion.css";

const REGISTER_URL = "https://dashboard.leadyia.com/auth/register?plan=pro&source=leadyia_main_v1103_206&playbook=leadyia";

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

const niches = COMMERCIAL_NICHES_V1103_123;
const customerSegments = COMMERCIAL_NICHES_V1103_123.map((item) => item.label);

const trustTestimonials = [
  {
    quote: "A implantação foi rápida e conseguimos organizar melhor todos os atendimentos desde o primeiro contato.",
    role: "Clínica médica",
  },
  {
    quote: "Hoje respondemos com mais agilidade e conseguimos acompanhar cada oportunidade sem depender de planilhas.",
    role: "Empresa de serviços",
  },
  {
    quote: "O CRM ficou mais claro e nossa equipe passou a saber exatamente qual lead precisava de atenção primeiro.",
    role: "Operação comercial",
  },
];

const desiredOutcomes = [
  ["Mais agilidade", "Responda no momento em que o visitante demonstra interesse."],
  ["Mais organização", "Centralize contatos, contexto, estágio e próxima ação no CRM."],
  ["Mais continuidade", "Use follow-up, lembretes e campanhas para não deixar o lead esfriar."],
  ["Mais oportunidades", "Conduza cada conversa para um próximo passo claro e mensurável."],
];

const faqs = [
  ["A LeadyIA é apenas um chatbot?", "Não. Ela combina atendimento, qualificação, CRM, agendamentos, campanhas, playbooks e integrações em uma única operação."],
  ["Preciso ter site?", "Não. Você pode começar pelo WhatsApp, pelo site, pelos dois canais ou por um onboarding guiado."],
  ["A IA substitui minha equipe?", "Não. Ela cuida do primeiro atendimento, organiza contexto e chama a equipe quando o contato precisa de atendimento humano."],
  ["Consigo usar informações do meu negócio?", "Sim. A base pode usar seu site, documentos, catálogo, perguntas frequentes, políticas e regras configuradas por tenant."],
  ["Os leads entram no CRM?", "Sim. Nome, WhatsApp, e-mail, interesse, origem, temperatura, estágio e próxima ação podem ser registrados no CRM."],
  ["Funciona no WhatsApp?", "Sim. O Starter inclui WhatsApp Essencial via QR. O Pro e os planos superiores liberam a API Oficial do WhatsApp da Meta; taxas de uso da Meta são separadas."],
  ["Qual plano é indicado para começar?", "O Starter é a entrada de R$ 97 para site, WhatsApp via QR e pré-agendamento. Para CRM, API Oficial da Meta, agendamentos inteligentes e follow-up, recomendamos o Pro."],
  ["Criar a conta gera cobrança?", "Não. O trial dura 7 dias ou 200 mensagens, não exige cartão e só há cobrança quando você confirma o plano no checkout."],
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
              <h1>Atenda, qualifique, agende e venda 24 horas por dia com uma IA preparada para o seu negócio.</h1>
              <p>
                A LeadyIA atende no site e no WhatsApp, usa as informações oficiais da sua empresa, organiza cada lead no CRM e conduz a conversa para agendamento, compra, demonstração ou atendimento humano.
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
              kicker="Confiança para crescer"
              title="Uma estrutura preparada para negócios que precisam atender melhor e vender com mais organização."
              text="A LeadyIA combina atendimento imediato, CRM, automações e acompanhamento em uma única jornada."
              centered
            />

            <div className="lyhc-trust-metrics" aria-label="Diferenciais da plataforma">
              <article><strong>24/7</strong><span>atendimento inicial disponível</span></article>
              <article><strong>1 CRM</strong><span>para centralizar oportunidades</span></article>
              <article><strong>14 nichos</strong><span>com jornadas especializadas</span></article>
              <article><strong>Omnichannel</strong><span>site, WhatsApp e integrações</span></article>
            </div>

            <div className="lyhc-proof-subheading">
              <span>Feita para diferentes tipos de negócio</span>
              <h3>Empresas que podem usar a LeadyIA</h3>
            </div>
            <div className="lyhc-company-strip" aria-label="Segmentos atendidos">
              {customerSegments.map((segment) => <span key={segment}>{segment}</span>)}
            </div>

            <div className="lyhc-proof-subheading outcomes-heading">
              <span>Produto verificável</span>
              <h3>Veja o que acontece em uma operação LeadyIA</h3>
            </div>
            <div className="lyhc-outcomes-grid">
              <article><h4>Atendimento contextual</h4><p>A conversa preserva intenção, dados do lead e próximo passo entre atendimento, agenda e equipe.</p></article>
              <article><h4>Agenda organizada</h4><p>Data, período, horário, dados e confirmação seguem uma jornada guiada e aparecem no fluxo operacional.</p></article>
              <article><h4>Informação oficial</h4><p>Serviços, preços, horários, endereço e políticas usam o Perfil do Negócio e fontes configuradas.</p></article>
              <article><h4>Continuidade humana</h4><p>Quando necessário, a equipe recebe o contexto já coletado em vez de recomeçar o atendimento.</p></article>
            </div>

            <div className="lyhc-proof-subheading outcomes-heading">
              <span>Valor percebido</span>
              <h3>Resultados que nossos clientes buscam</h3>
            </div>
            <div className="lyhc-outcomes-grid">
              {desiredOutcomes.map(([title, text]) => (
                <article key={title}><h4>{title}</h4><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="lyhc-section dark" id="playbooks">
          <div className="lyhc-shell">
            <SectionTitle kicker="IA treinada por segmento" title="A LeadyIA fala a língua do seu negócio." text="Cada playbook combina perguntas, limites, regras e próximos passos próprios do nicho." centered />
            <div className="lyhc-niche-grid">
              {niches.map((niche) => (
                <a key={niche.playbook} href={niche.href} style={{ "--niche-accent": niche.color }}>
                  <span aria-hidden="true">{niche.icon}</span>
                  <h3>{niche.label}</h3>
                  <p>{niche.summary}</p>
                  <strong>Ver landing →</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="lyhc-section light" id="business-profile">
          <div className="lyhc-shell lyhc-two-columns">
            <div>
              <SectionTitle kicker="Perfil do Negócio" title="Sua IA responde com as informações reais da sua empresa." text="Cadastre o que a equipe realmente pode informar. A LeadyIA usa esse contexto durante o atendimento e evita transformar suposições em respostas comerciais." />
              <ul className="lyhc-checklist">
                <li>Serviços, produtos e informações comerciais.</li>
                <li>Preços e formas de pagamento quando cadastrados.</li>
                <li>Horários de funcionamento, endereço e localização.</li>
                <li>Políticas, documentos, site e Base de Conhecimento.</li>
                <li>Regras de encaminhamento para atendimento humano.</li>
                <li>Fail-closed: se a informação oficial não existe, a IA não deve inventá-la.</li>
              </ul>
            </div>
            <div className="lyhc-crm-card">
              <div><span>Serviço</span><strong>Fonte oficial</strong></div>
              <div><span>Horários</span><strong>Perfil do Negócio</strong></div>
              <div><span>Localização</span><strong>Endereço + mapa</strong></div>
              <div><span>Informação ausente</span><strong className="hot">Encaminhar, não inventar</strong></div>
            </div>
          </div>
        </section>

        <section className="lyhc-section dark" id="whatsapp-real">
          <div className="lyhc-shell lyhc-journey-grid">
            <div>
              <SectionTitle kicker="WhatsApp + agendamento" title="Da primeira mensagem ao próximo passo, sem perder o contexto." text="A mesma lógica de atendimento pode entender a necessidade, organizar a preferência de agenda, confirmar dados e continuar a conversa depois do pré-agendamento." />
              <ol className="lyhc-steps">
                <li><strong>1. Entende o objetivo</strong><span>O lead explica o que precisa com as próprias palavras.</span></li>
                <li><strong>2. Organiza a agenda</strong><span>Data, período e horário são conduzidos de forma coerente.</span></li>
                <li><strong>3. Confirma os dados</strong><span>Nome, contato e resumo ficam claros antes do registro.</span></li>
                <li><strong>4. Entrega localização</strong><span>Quando cadastrados, endereço e rota podem acompanhar a confirmação.</span></li>
                <li><strong>5. Continua atendendo</strong><span>Alteração de horário, informações e recepção continuam sem apagar o contexto.</span></li>
              </ol>
            </div>
            <div className="lyhc-demo-card">
              <div className="lyhc-demo-top"><strong>Conversa no WhatsApp</strong><span>● Contexto preservado</span></div>
              <div className="lyhc-bubble customer">Quero agendar uma avaliação.</div>
              <div className="lyhc-bubble ai">Claro. Vou organizar sua preferência de data e horário.</div>
              <div className="lyhc-bubble customer">Amanhã à tarde.</div>
              <div className="lyhc-bubble ai">Perfeito. Depois de confirmar seus dados, seu pré-agendamento fica registrado para a equipe continuar.</div>
              <div className="lyhc-result-card"><span>Próximo passo claro</span><strong>Agenda • CRM • Atendimento humano quando necessário</strong></div>
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
          <div className="lyhc-shell">
            <SectionTitle kicker="Planos por mercado" title="Veja preço, moeda e checkout corretos para o seu país." text="A seleção comercial abaixo usa Mercado Pago/Pix no Brasil e Stripe nos mercados internacionais suportados. Escolha seu país antes de iniciar o trial." centered />
          </div>
        </section>

        <div id="pricing" className="lyhc-pricing-wrap"><Pricing focusOnly /></div>

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

/**
 * =========================================================
 * Arquivo: Features.jsx
 * Caminho: landing/src/components/landing/Features.jsx
 * Responsabilidade: apresentar a transformação comercial do LeadyIA em uma seção
 * premium, visual e orientada a resultado.
 * O que este módulo NÃO deve fazer: não buscar dados do backend, não criar checkout
 * e não decidir plano. Ele apenas comunica valor para conversão da landing.
 * =========================================================
 */

import React from "react";

const DASHBOARD_REGISTER = "https://dashboard.leadyia.com/register";

const FEATURES = [
  {
    step: "01",
    tag: "Atrair",
    title: "Capture visitantes antes que eles abandonem o site",
    description:
      "O LeadyIA abre a conversa no momento certo, entende o interesse do visitante e transforma tráfego anônimo em oportunidade real.",
    metric: "24/7",
    metricLabel: "atendimento ativo",
  },
  {
    step: "02",
    tag: "Entender",
    title: "Qualifique automaticamente quem tem intenção de compra",
    description:
      "Cada resposta ajuda a identificar dor, urgência, segmento, interesse e momento de decisão — sem formulário frio.",
    metric: "100%",
    metricLabel: "contexto registrado",
  },
  {
    step: "03",
    tag: "Responder",
    title: "Atenda como uma equipe treinada para cada nicho",
    description:
      "Playbooks para educação, clínicas, advocacia, ecommerce, SaaS e suporte ajudam a IA falar a língua do seu cliente.",
    metric: "multi",
    metricLabel: "playbook",
  },
  {
    step: "04",
    tag: "Converter",
    title: "Leve o cliente para o próximo passo com CTAs claros",
    description:
      "Comprar, agendar, falar no WhatsApp, ver planos, abrir checkout ou chamar atendimento humano — tudo com rastreabilidade.",
    metric: "+",
    metricLabel: "ações inteligentes",
  },
  {
    step: "05",
    tag: "Operar",
    title: "Acompanhe conversas, leads, RAG e receita no dashboard",
    description:
      "A empresa não fica no escuro: cada interação vira histórico, inteligência, CRM, operação e decisão comercial.",
    metric: "360°",
    metricLabel: "visão do tenant",
  },
  {
    step: "06",
    tag: "Escalar",
    title: "Cresça atendimento sem inflar a equipe",
    description:
      "O LeadyIA organiza demanda, prioriza oportunidades e entrega leads prontos para o time agir onde existe maior chance de fechar.",
    metric: "3x",
    metricLabel: "mais velocidade",
  },
];

export default function Features() {
  return (
    <section id="features" className="leadyia-conversion-section leadyia-feature-system">
      <div className="leadyia-conversion-bg" aria-hidden />

      <div className="leadyia-conversion-container">
        <div className="leadyia-section-kicker">Sistema comercial com IA</div>

        <div className="leadyia-conversion-headline-grid">
          <div>
            <h2>
              Um motor de atendimento, vendas e qualificação no seu site.
            </h2>
          </div>
          <p>
            O LeadyIA não é apenas um chat. É uma camada de inteligência que conversa,
            entende, prioriza e conduz cada visitante para a próxima ação de negócio.
          </p>
        </div>

        <div className="leadyia-feature-grid">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>

        <div className="leadyia-conversion-cta-row">
          <a className="leadyia-primary-cta" href={DASHBOARD_REGISTER}>
            Criar conta gratuita
          </a>
          <a className="leadyia-secondary-cta" href="#playbooks">
            Ver por segmento
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  return (
    <article className="leadyia-feature-card">
      <div className="leadyia-feature-topline">
        <span>{item.step}</span>
        <strong>{item.tag}</strong>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="leadyia-feature-metric">
        <strong>{item.metric}</strong>
        <span>{item.metricLabel}</span>
      </div>
    </article>
  );
}

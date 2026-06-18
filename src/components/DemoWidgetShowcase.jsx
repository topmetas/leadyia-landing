/**
 * =========================================================
 * Arquivo: DemoWidgetShowcase.jsx
 * Caminho: landing/src/components/DemoWidgetShowcase.jsx
 * Responsabilidade:
 * - Demonstrar a experiência multi-playbook da LeadyIA antes do cadastro.
 * - Simular nichos sem depender de autenticação ou dados privados.
 * - Ajudar o visitante a entender como o widget muda por segmento.
 *
 * O que este módulo NÃO deve fazer:
 * - Não conversa com tenant real.
 * - Não usa dados sensíveis.
 * - Não substitui o widget CDN oficial instalado nos clientes.
 *
 * Por quê:
 * Demonstração ao vivo reduz incerteza e aumenta conversão, principalmente
 * quando o produto tem vários nichos e playbooks.
 * =========================================================
 */

import React, { useMemo, useState } from "react";
import "../styles/demo-widget.css";

const PLAYBOOKS = {
  leadyia: {
    label: "LeadyIA",
    eyebrow: "SaaS B2B",
    title: "Assistente de vendas para SaaS",
    assistant: "Consultora LeadyIA",
    color: "#6366f1",
    welcome:
      "Olá! Posso te mostrar planos, explicar como a IA funciona e ajudar você a criar sua conta em poucos minutos.",
    chips: ["Ver planos", "Testar IA", "Como funciona", "Falar com especialista"],
    replies: [
      "A LeadyIA une widget, IA, RAG, CRM, automações e dashboard premium para transformar visitas em conversas e conversas em oportunidades.",
      "Você pode começar com trial e evoluir para Starter, Pro, Business ou Enterprise conforme uso e canais.",
    ],
  },
  education: {
    label: "Educação",
    eyebrow: "Materiais e cursos",
    title: "Assistente pedagógica",
    assistant: "Assistente Pedagógica",
    color: "#10b981",
    welcome:
      "Olá! Posso ajudar a encontrar materiais por idade, série ou objetivo de aprendizagem, como alfabetização, leitura e matemática.",
    chips: ["Ver materiais", "Indicação por idade", "Alfabetização", "Matemática"],
    replies: [
      "Para educação, a IA combina RAG pedagógico com catálogo real para explicar benefícios sem inventar preço ou link.",
      "O atendimento pode indicar atividades, tirar dúvidas e levar o cliente ao produto correto.",
    ],
  },
  clinic: {
    label: "Clínica",
    eyebrow: "Recepção e agenda",
    title: "Recepcionista virtual",
    assistant: "Recepção Virtual",
    color: "#0ea5e9",
    welcome:
      "Olá! Posso ajudar a encontrar horários, explicar formas de atendimento ou encaminhar você para a recepção.",
    chips: ["Agendar consulta", "Ver horários", "Recepção", "Convênios e valores"],
    replies: [
      "Para clínicas, a IA ajuda na triagem inicial, agenda e dúvidas administrativas, sem substituir avaliação profissional.",
      "Se for urgência, o fluxo orienta atendimento humano ou serviço de emergência.",
    ],
  },
  legal: {
    label: "Advocacia",
    eyebrow: "Triagem jurídica",
    title: "Atendimento jurídico premium",
    assistant: "Assistente Jurídica",
    color: "#8b5cf6",
    welcome:
      "Olá! Posso fazer uma triagem inicial, explicar áreas de atuação ou encaminhar seu atendimento para a equipe jurídica.",
    chips: ["Agendar consulta", "Áreas de atuação", "Enviar caso", "Localização"],
    replies: [
      "Para advocacia, a IA organiza a triagem e encaminha ao escritório sem prometer resultado ou dar parecer definitivo.",
      "O atendimento mantém tom discreto, profissional e seguro.",
    ],
  },
  ecommerce: {
    label: "Ecommerce",
    eyebrow: "Vendas e catálogo",
    title: "Vendedor inteligente",
    assistant: "Vendedora Virtual",
    color: "#f97316",
    welcome:
      "Olá! Posso mostrar ofertas, encontrar produtos, ajudar na compra ou direcionar você ao atendimento.",
    chips: ["Ver ofertas", "Quero comprar", "Acompanhar pedido", "Atendimento"],
    replies: [
      "Para ecommerce, o backend resolve produtos reais, preços e links antes de renderizar CTAs no widget.",
      "Assim o assistente vende sem inventar URL e registra sinais no dashboard.",
    ],
  },
  realEstate: {
    label: "Imobiliária",
    eyebrow: "Captação e visitas",
    title: "Consultor imobiliário virtual",
    assistant: "Consultora Imobiliária",
    color: "#14b8a6",
    welcome:
      "Olá! Posso ajudar a encontrar imóveis, entender seu perfil e encaminhar uma visita com a equipe.",
    chips: ["Ver imóveis", "Agendar visita", "Falar com corretor", "Simular interesse"],
    replies: [
      "Para imobiliárias, a IA qualifica perfil, região, orçamento e urgência antes de encaminhar para o corretor.",
      "O dashboard mostra leads, conversas e intenções para priorizar atendimento.",
    ],
  },
};

export default function DemoWidgetShowcase() {
  const [activeKey, setActiveKey] = useState("leadyia");
  const [selectedChip, setSelectedChip] = useState(null);
  const active = PLAYBOOKS[activeKey];

  const currentReply = useMemo(() => {
    if (!selectedChip) return active.replies[0];
    return active.replies[Math.abs(selectedChip.length) % active.replies.length];
  }, [active, selectedChip]);

  function changePlaybook(key) {
    setActiveKey(key);
    setSelectedChip(null);
  }

  return (
    <section className="ly-demo-widget" id="demo-widget">
      <div className="ly-demo-widget__container">
        <div className="ly-demo-widget__header">
          <span>Demonstração multi-playbook</span>
          <h2>Veja como a IA muda conforme o nicho do cliente.</h2>
          <p>
            Um único produto, várias experiências: atendimento, vendas,
            qualificação, agenda, catálogo, RAG e CRM conectados ao tenant.
          </p>
        </div>

        <div className="ly-demo-widget__tabs" role="tablist" aria-label="Playbooks de demonstração">
          {Object.entries(PLAYBOOKS).map(([key, item]) => (
            <button
              key={key}
              type="button"
              className={key === activeKey ? "is-active" : ""}
              onClick={() => changePlaybook(key)}
              style={{ "--accent": item.color }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="ly-demo-widget__grid">
          <div className="ly-demo-widget__copy">
            <span style={{ color: active.color }}>{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>
              O playbook define tom, atalhos, experiência inicial e o tipo de
              ação que o backend pode devolver para o widget renderizar.
            </p>
            <ul>
              <li>✓ Contrato multi-tenant pelo backend</li>
              <li>✓ White-label por marca e domínio</li>
              <li>✓ CTAs renderizados pelo widget</li>
              <li>✓ Conversas registradas no dashboard</li>
            </ul>
          </div>

          <div className="ly-demo-widget__phone" style={{ "--accent": active.color }}>
            <div className="ly-demo-widget__widget-header">
              <div className="ly-demo-widget__avatar">AI</div>
              <div>
                <strong>{active.assistant}</strong>
                <span>online agora</span>
              </div>
            </div>

            <div className="ly-demo-widget__messages">
              <div className="ly-demo-widget__message ly-demo-widget__message--bot">
                {active.welcome}
              </div>
              {selectedChip && (
                <div className="ly-demo-widget__message ly-demo-widget__message--user">
                  {selectedChip}
                </div>
              )}
              <div className="ly-demo-widget__message ly-demo-widget__message--bot">
                {currentReply}
              </div>
            </div>

            <div className="ly-demo-widget__chips">
              {active.chips.map((chip) => (
                <button key={chip} type="button" onClick={() => setSelectedChip(chip)}>
                  {chip}
                </button>
              ))}
            </div>

            <div className="ly-demo-widget__input">
              <span>Digite sua mensagem...</span>
              <strong>→</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

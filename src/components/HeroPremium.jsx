/**
 * =========================================================
 * Arquivo: HeroPremium.jsx
 * Caminho: landing/src/components/HeroPremium.jsx
 * Responsabilidade:
 * - Apresentar a promessa principal da LeadyIA em alta conversão.
 * - Direcionar o visitante para teste, demonstração e criação de conta.
 * - Comunicar multi-playbook, multi-canal e valor comercial rapidamente.
 *
 * O que este módulo NÃO deve fazer:
 * - Não cria checkout diretamente.
 * - Não autentica usuário.
 * - Não decide plano nem permissões.
 * - Não substitui o Pricing conectado ao backend, que virá na Fase 19C.
 *
 * Observação Enterprise:
 * O Hero é a primeira decisão comercial do visitante. Por isso os CTAs
 * apontam para ações de menor fricção: testar, ver demo e criar conta.
 * =========================================================
 */

import React from "react";
import "../styles/hero.css";

import WidgetOrbMark from "./brand/WidgetOrbMark";
const DASHBOARD_REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";

const PRIMARY_SEGMENTS = [
  "Educação",
  "Clínicas",
  "Advocacia",
  "Ecommerce",
  "Imobiliárias",
  "Estética",
];

const TRUST_ITEMS = [
  "Atendimento 24h",
  "RAG por tenant",
  "White-label",
  "WordPress + Widget",
  "CRM + Leads",
  "Billing integrado",
];

export default function HeroPremium() {
  function scrollToDemo() {
    document.getElementById("demo-widget")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToRoi() {
    document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="ly-hero-premium" id="hero">
      <div className="ly-hero-premium__glow ly-hero-premium__glow--one" />
      <div className="ly-hero-premium__glow ly-hero-premium__glow--two" />

      <div className="ly-hero-premium__container">
        <div className="ly-hero-premium__content">
          <span className="ly-hero-premium__badge">
            Plataforma premium de atendimento com IA para empresas
          </span>

          <h1>
            Sua recepcionista virtual com IA para vender, atender e qualificar
            clientes <strong>24h por dia</strong>.
          </h1>

          <p className="ly-hero-premium__subtitle">
            Widget inteligente, playbooks por nicho, CRM, RAG, automações,
            integrações e dashboard executivo em uma única plataforma SaaS.
          </p>

          <div className="ly-hero-premium__actions" aria-label="Ações principais">
            <a className="ly-hero-premium__cta ly-hero-premium__cta--primary" href={DASHBOARD_REGISTER_URL}>
              Criar conta grátis
            </a>
            <button className="ly-hero-premium__cta ly-hero-premium__cta--secondary" type="button" onClick={scrollToDemo}>
              Ver IA funcionando
            </button>
            <button className="ly-hero-premium__cta ly-hero-premium__cta--ghost" type="button" onClick={scrollToRoi}>
              Calcular ROI
            </button>
          </div>

          <div className="ly-hero-premium__segments" aria-label="Nichos atendidos">
            {PRIMARY_SEGMENTS.map((segment) => (
              <span key={segment}>{segment}</span>
            ))}
          </div>

          <div className="ly-hero-premium__trust" aria-label="Recursos premium">
            {TRUST_ITEMS.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>

        <aside className="ly-hero-premium__panel" aria-label="Preview da plataforma LeadyIA">
          <div className="ly-hero-premium__panel-header">
            <div>
              <span>Executive Command Center</span>
              <strong>Tenant saudável</strong>
            </div>
            <span className="ly-hero-premium__status">online</span>
          </div>

          <div className="ly-hero-premium__metrics">
            <Metric label="Conversas" value="488" trend="+18%" />
            <Metric label="Leads" value="20" trend="+12%" />
            <Metric label="RAG" value="110" trend="docs" />
            <Metric label="Canais" value="4" trend="ativos" />
          </div>

          <div className="ly-hero-premium__chat-card">
            <WidgetOrbMark className="ly-hero-premium__bot-avatar" label="Assistente LeadyIA" />
            <div>
              <strong>Assistente LeadyIA</strong>
              <p>
                Posso qualificar leads, recomendar produtos, agendar atendimentos
                e registrar tudo no dashboard.
              </p>
            </div>
          </div>

          <div className="ly-hero-premium__flow">
            <span>Site</span>
            <span>→</span>
            <span>IA</span>
            <span>→</span>
            <span>CRM</span>
            <span>→</span>
            <span>Venda</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Metric({ label, value, trend }) {
  return (
    <div className="ly-hero-premium__metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{trend}</small>
    </div>
  );
}

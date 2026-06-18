/**
 * =========================================================
 * Arquivo: ROICalculator.jsx
 * Caminho: landing/src/components/ROICalculator.jsx
 * Responsabilidade:
 * - Demonstrar economia estimada e valor percebido da LeadyIA.
 * - Converter volume de atendimentos em horas, leads e receita potencial.
 *
 * O que este módulo NÃO deve fazer:
 * - Não promete resultado financeiro garantido.
 * - Não calcula cobrança real.
 * - Não substitui análise comercial personalizada.
 *
 * Por quê:
 * Uma landing B2B premium precisa vender impacto e não apenas recursos.
 * =========================================================
 */

import React, { useMemo, useState } from "react";
import "../styles/roi.css";

const DASHBOARD_REGISTER_URL =
  import.meta.env.VITE_DASHBOARD_REGISTER_URL ||
  "https://dashboard.leadyia.com/register";

function currencyBRL(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ROICalculator() {
  const [monthlyConversations, setMonthlyConversations] = useState(500);
  const [ticket, setTicket] = useState(180);

  const result = useMemo(() => {
    const minutesSaved = monthlyConversations * 8;
    const hoursSaved = Math.round(minutesSaved / 60);
    const recoveredLeads = Math.max(1, Math.round(monthlyConversations * 0.08));
    const potentialRevenue = recoveredLeads * ticket;
    const operationSavings = hoursSaved * 45;

    return {
      hoursSaved,
      recoveredLeads,
      potentialRevenue,
      operationSavings,
      totalImpact: potentialRevenue + operationSavings,
    };
  }, [monthlyConversations, ticket]);

  return (
    <section className="ly-roi" id="roi-calculator">
      <div className="ly-roi__container">
        <div className="ly-roi__copy">
          <span>Calculadora de ROI</span>
          <h2>Quanto atendimento sua empresa pode recuperar com IA?</h2>
          <p>
            Faça uma simulação simples para entender o impacto potencial de uma
            recepcionista virtual atendendo, qualificando e registrando leads.
          </p>
        </div>

        <div className="ly-roi__panel">
          <label>
            <span>Atendimentos por mês</span>
            <strong>{monthlyConversations.toLocaleString("pt-BR")}</strong>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={monthlyConversations}
              onChange={(event) => setMonthlyConversations(Number(event.target.value))}
            />
          </label>

          <label>
            <span>Ticket médio estimado</span>
            <strong>{currencyBRL(ticket)}</strong>
            <input
              type="range"
              min="50"
              max="1500"
              step="10"
              value={ticket}
              onChange={(event) => setTicket(Number(event.target.value))}
            />
          </label>

          <div className="ly-roi__results">
            <RoiCard label="Horas economizadas" value={`${result.hoursSaved}h`} />
            <RoiCard label="Leads recuperados" value={result.recoveredLeads} />
            <RoiCard label="Receita potencial" value={currencyBRL(result.potentialRevenue)} />
            <RoiCard label="Impacto estimado" value={currencyBRL(result.totalImpact)} highlight />
          </div>

          <p className="ly-roi__disclaimer">
            Simulação estimada. Resultados variam conforme tráfego, oferta,
            processo comercial e qualidade da base de conhecimento.
          </p>

          <a className="ly-roi__cta" href={DASHBOARD_REGISTER_URL}>
            Criar conta e testar no meu site
          </a>
        </div>
      </div>
    </section>
  );
}

function RoiCard({ label, value, highlight = false }) {
  return (
    <div className={highlight ? "ly-roi__card is-highlight" : "ly-roi__card"}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

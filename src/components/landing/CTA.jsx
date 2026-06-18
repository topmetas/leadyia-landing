/**
 * =========================================================
 * Arquivo: CTA.jsx
 * Caminho: landing/src/components/landing/CTA.jsx
 * Responsabilidade: fechar a landing com um CTA premium, orientado a urgência,
 * confiança e criação de conta.
 * O que este módulo NÃO deve fazer: não processa pagamento, não autentica usuário
 * e não promete resultado garantido. Ele conduz para o cadastro/checkout.
 * =========================================================
 */

import React from "react";

const REGISTER_URL = "https://dashboard.leadyia.com/register";
const PRICING_ANCHOR = "#pricing";

export default function CTA() {
  return (
    <section id="cta" className="leadyia-final-cta-section">
      <div className="leadyia-final-orb leadyia-final-orb-a" aria-hidden />
      <div className="leadyia-final-orb leadyia-final-orb-b" aria-hidden />

      <div className="leadyia-final-cta-card">
        <div className="leadyia-final-badge">Pronto para vender e atender melhor</div>

        <h2>
          Transforme cada conversa em uma oportunidade mensurável.
        </h2>

        <p>
          Ative uma recepcionista virtual com IA para responder, qualificar, vender,
          agendar e entregar contexto para sua equipe — sem depender de atendimento manual o tempo todo.
        </p>

        <div className="leadyia-final-stats">
          <Stat number="24/7" label="atendimento ativo" />
          <Stat number="3x" label="resposta mais rápida" />
          <Stat number="+38%" label="menos leads perdidos" />
        </div>

        <div className="leadyia-final-actions">
          <a href={REGISTER_URL} className="leadyia-primary-cta leadyia-final-primary">
            Criar conta agora
          </a>
          <a href={PRICING_ANCHOR} className="leadyia-secondary-cta leadyia-final-secondary">
            Ver planos
          </a>
        </div>

        <div className="leadyia-final-trust">
          <span>Setup guiado</span>
          <span>Multi-playbook</span>
          <span>LGPD</span>
          <span>Sem contrato obrigatório</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="leadyia-final-stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

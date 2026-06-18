/**
 * =========================================================
 * Página: Register Premium Multi-Playbook
 * Caminho: landing/src/pages/Register.jsx
 * =========================================================
 *
 * Responsabilidade:
 * - Capturar intenção de cadastro na landing pública.
 * - Coletar segmento, site e plano desejado antes do dashboard.
 * - Encaminhar o usuário para dashboard.leadyia.com com contexto útil.
 *
 * O que este arquivo NÃO deve fazer:
 * - Não cria senha.
 * - Não cria tenant diretamente.
 * - Não decide plano ativo ou libera billing.
 *
 * Por quê:
 * Cadastro público deve ser leve e de alta conversão. O dashboard continua
 * responsável por autenticação, criação do tenant e onboarding completo.
 * =========================================================
 */

import { useMemo, useState } from "react";
import PublicHeader from "../components/layout/PublicHeader";
import PublicFooter from "../components/layout/PublicFooter";
import {
  REGISTER_SEGMENTS,
  getPlaybookBySegment,
  getRegisterSegmentById,
} from "../data/registerSegments";
import { createRegisterIntent } from "../services/registerIntent.service";
import "../styles/register.css";

const DEFAULT_PLAN = "pro_br_brl";

function getInitialPlan() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("plan") || DEFAULT_PLAN;
  } catch {
    return DEFAULT_PLAN;
  }
}

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    segment: "education",
    plan: getInitialPlan(),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedSegment = useMemo(
    () => getRegisterSegmentById(form.segment),
    [form.segment]
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setError("Preencha nome, email e empresa para continuar.");
      return;
    }

    setLoading(true);

    const playbook = getPlaybookBySegment(form.segment);
    const result = await createRegisterIntent({
      ...form,
      playbook,
    });

    setLoading(false);

    if (result?.registerUrl) {
      window.location.href = result.registerUrl;
      return;
    }

    setError("Não foi possível continuar agora. Tente novamente em instantes.");
  }

  return (
    <div className="register-premium-page">
      <PublicHeader />

      <main className="register-premium-shell">
        <section className="register-premium-copy" aria-label="Cadastro LeadyIA">
          <span className="register-premium-badge">Teste grátis • Multi-playbook • IA para negócios</span>

          <h1>
            Crie sua conta e receba uma IA pronta para o seu segmento.
          </h1>

          <p>
            O LeadyIA usa seu segmento para configurar o playbook inicial,
            orientar o widget e acelerar o onboarding no dashboard.
          </p>

          <div className="register-premium-proof-grid">
            <article>
              <strong>2 min</strong>
              <span>para iniciar</span>
            </article>
            <article>
              <strong>24h</strong>
              <span>de atendimento</span>
            </article>
            <article>
              <strong>IA + CRM</strong>
              <span>em um painel</span>
            </article>
          </div>

          <div className="register-premium-preview-card">
            <span>Playbook selecionado</span>
            <h2>{selectedSegment.label}</h2>
            <p>{selectedSegment.headline}</p>
            <small>Exemplo: “{selectedSegment.example}”</small>
          </div>
        </section>

        <section className="register-premium-card" aria-label="Formulário de cadastro">
          <div className="register-premium-card-header">
            <p>Comece agora</p>
            <h2>Dados iniciais</h2>
          </div>

          <form onSubmit={handleSubmit} className="register-premium-form">
            <label>
              Seu nome
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex.: Osvaldo Alves"
                autoComplete="name"
              />
            </label>

            <label>
              Email corporativo
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="voce@empresa.com"
                autoComplete="email"
              />
            </label>

            <label>
              Empresa
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
                autoComplete="organization"
              />
            </label>

            <label>
              Site da empresa
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://suaempresa.com.br"
                inputMode="url"
              />
            </label>

            <label>
              Segmento principal
              <select name="segment" value={form.segment} onChange={handleChange}>
                {REGISTER_SEGMENTS.map((segment) => (
                  <option key={segment.id} value={segment.id}>
                    {segment.label}
                  </option>
                ))}
              </select>
            </label>

            {error ? <div className="register-premium-error">{error}</div> : null}

            <button type="submit" disabled={loading}>
              {loading ? "Preparando seu onboarding..." : "Continuar para criar conta"}
            </button>

            <p className="register-premium-security">
              Você continuará no dashboard seguro da LeadyIA para criar senha,
              confirmar o tenant e finalizar o plano escolhido.
            </p>
          </form>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}

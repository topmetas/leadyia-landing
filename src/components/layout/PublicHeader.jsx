/**
 * =========================================================
 * 🧭 PUBLIC HEADER — LEADYIA ENTERPRISE LANDING
 * =========================================================
 *
 * 📄 Arquivo: PublicHeader.jsx
 * 📁 Caminho: landing/src/components/layout/PublicHeader.jsx
 *
 * 🎯 Responsabilidade:
 * - Exibir o topo público premium da landing LeadyIA.
 * - Guiar o visitante para demo, playbooks, ROI, planos, login e cadastro.
 * - Manter uma navegação responsiva, acessível e compatível com Vercel/CDN.
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Não autentica usuário.
 * - Não cria checkout MercadoPago.
 * - Não decide plano, tenant ou billing.
 * - Não executa tracking sensível.
 *
 * 🧠 Por que existe assim:
 * Em SaaS de alta conversão, o header precisa ser mais que “logo + botão”.
 * Ele funciona como uma barra de confiança: mostra posicionamento, acesso ao
 * produto e caminhos rápidos para as provas de valor da página.
 * =========================================================
 */

import { useEffect, useState } from "react";
import WidgetOrbMark from "../brand/WidgetOrbMark";
import { COMMERCIAL_NICHES_V1103_123 } from "../../data/verticalNiches.v1103_123";

const DASHBOARD_LOGIN_URL = "https://dashboard.leadyia.com/auth/login";
const DASHBOARD_REGISTER_URL = "https://dashboard.leadyia.com/auth/register";

const NAV_ITEMS = [
  { label: "Canais", href: "/#channels" },
  { label: "Agenda", href: "/#scheduling" },
  { label: "Demonstração", href: "/#demo-widget" },
  { label: "Nichos", href: "/#playbooks" },
  { label: "Planos", href: "/#pricing" },
];

const LIVE_PLAYBOOK_MENU = [
  { label: "Hub dos 14 nichos", href: "/#playbooks", icon: "✨" },
  ...COMMERCIAL_NICHES_V1103_123.map((item) => ({ label: item.label, href: item.href, icon: item.icon })),
];

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`ly-public-header ${isScrolled ? "is-scrolled" : ""}`}
      data-menu-open={menuOpen ? "true" : "false"}
    >
      <div className="ly-public-header__shell">
        <a className="ly-public-header__brand" href="/" onClick={closeMenu}>
          <WidgetOrbMark className="ly-public-header__logo" label="LeadyIA" />

          <span className="ly-public-header__brand-copy">
            <strong>
              Leady<span>IA</span>
            </strong>
            <small>Recepcionista virtual inteligente</small>
          </span>
        </a>

        <nav className="ly-public-header__nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <div className="ly-public-header__dropdown">
            <a className="ly-public-header__dropdown-trigger" href="/#playbooks-ao-vivo">
              Playbooks ao vivo
              <span aria-hidden="true">⌄</span>
            </a>

            <div className="ly-public-header__dropdown-panel" aria-label="Playbooks ao vivo por nicho">
              {LIVE_PLAYBOOK_MENU.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  <span aria-hidden="true">{item.icon}</span>
                  <strong>{item.label}</strong>
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="ly-public-header__actions">
          <a className="ly-public-header__login" href={DASHBOARD_LOGIN_URL}>
            Entrar
          </a>

          <a className="ly-public-header__cta" href={DASHBOARD_REGISTER_URL}>
            <span>Teste grátis 7 dias</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h12.2l-4.6-4.6L14 6l7 7-7 7-1.4-1.4 4.6-4.6H5v-2Z" />
            </svg>
          </a>

          <button
            className="ly-public-header__menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="ly-public-header__mobile-panel" aria-hidden={!menuOpen}>
        <div className="ly-public-header__mobile-card">
          <div className="ly-public-header__mobile-kicker">Navegação rápida</div>

          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <div className="ly-public-header__mobile-group">Playbooks ao vivo</div>
          {LIVE_PLAYBOOK_MENU.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.icon} {item.label}
            </a>
          ))}

          <div className="ly-public-header__mobile-actions">
            <a href={DASHBOARD_LOGIN_URL} onClick={closeMenu}>
              Entrar no dashboard
            </a>
            <a href={DASHBOARD_REGISTER_URL} onClick={closeMenu}>
              Testar grátis por 7 dias
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

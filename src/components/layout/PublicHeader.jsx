/**
 * =========================================================
 * 🧭 PUBLIC HEADER — LEADYIA (PREMIUM)
 * =========================================================
 *
 * 📄 Arquivo: PublicHeader.jsx
 * 📁 Caminho: src/components/layout/PublicHeader.jsx
 *
 * 🎯 Ajuste realizado:
 * - CTA "Começar agora" agora aponta para o link real de registro
 * - Removido uso de alias (@/)
 * - Código simples, direto e seguro
 */

export default function PublicHeader() {
  const CTA_LINK = "https://dashboard.leadyia.com/auth/register";

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-white/10
        bg-black/30 backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          px-6
        "
      >
        {/* Branding */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-white">
            Leady<span className="text-brand-blue">IA</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href={CTA_LINK}
          className="
            group relative inline-flex items-center
            rounded-xl px-6 py-2.5
            text-sm font-semibold text-white
            transition-all duration-300
            hover:-translate-y-0.5
            focus:outline-none focus:ring-2 focus:ring-brand-blue/50
          "
          style={{
            background: "var(--cta-primary-bg)",
            boxShadow: "var(--cta-primary-shadow)",
          }}
        >
          {/* Glow premium */}
          <span
            aria-hidden
            className="
              absolute inset-0 -z-10 rounded-xl
              opacity-80 group-hover:opacity-100
              transition-opacity duration-300
            "
            style={{
              background: "var(--cta-primary-glow)",
              filter: "blur(36px)",
            }}
          />

          Começar agora
        </a>
      </div>
    </header>
  );
}
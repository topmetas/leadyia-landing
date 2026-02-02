/**
 * =========================================================
 * 🧭 PUBLIC HEADER — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo: PublicHeader.jsx
 * 📁 Caminho: src/components/layout/PublicHeader.jsx
 *
 * 🎯 Responsabilidade:
 * - Exibir o cabeçalho público do site institucional
 * - Fornecer branding consistente (logo/nome)
 * - Oferecer CTA primário de conversão
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Controlar navegação de rotas
 * - Gerenciar estado global
 * - Implementar lógica de autenticação
 *
 * 🧠 Contexto Enterprise:
 * - Componente puramente apresentacional
 * - Seguro para reutilização em white-label
 * - Compatível com LGPD e auditorias (sem tracking embutido)
 */

export default function PublicHeader() {
  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-black/40 backdrop-blur
      "
    >
      <div
        className="
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          px-6
        "
      >
        {/* Branding
            Mantido simples para fácil white-label */}
        <span className="text-xl font-bold tracking-tight">
          Leadyia
        </span>

        {/* CTA primário
            Link simples por enquanto (sem rota ou tracking) */}
        <a
          href="#"
          className="
            rounded-lg bg-indigo-600
            px-5 py-2 font-semibold
            transition hover:bg-indigo-500
          "
        >
          Começar agora
        </a>
      </div>
    </header>
  );
}

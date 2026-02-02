/**
 * =========================================================
 * 🧾 PUBLIC FOOTER — LEADYIA
 * =========================================================
 *
 * 📄 Arquivo: PublicFooter.jsx
 * 📁 Caminho: src/components/layout/PublicFooter.jsx
 *
 * 🎯 Responsabilidade:
 * - Encerrar páginas públicas do site institucional
 * - Exibir informações legais e institucionais
 * - Reforçar conformidade (LGPD / segurança)
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Executar scripts de tracking
 * - Controlar cookies ou consentimento
 * - Conter lógica de negócio
 *
 * 🧠 Contexto Enterprise:
 * - Conteúdo estático e auditável
 * - Seguro para ambientes regulados
 * - Preparado para expansão legal futura
 */

export default function PublicFooter() {
  return (
    <footer className="border-t border-white/10">
      <div
        className="
          mx-auto max-w-7xl
          px-6 py-16
          text-center text-sm
          text-slate-400
        "
      >
        <p>
          © 2026 LeadyIA. Todos os direitos reservados.
        </p>

        <p className="mt-4">
          Em conformidade com LGPD e boas práticas de segurança.
        </p>
      </div>
    </footer>
  );
}

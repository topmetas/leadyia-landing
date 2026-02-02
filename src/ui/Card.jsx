/**
 * =========================================================
 * 🧱 CARD — DESIGN SYSTEM
 * =========================================================
 */

export default function Card({ children }) {
  return (
    <div className="bg-panel border border-border rounded-xl p-6">
      {children}
    </div>
  );
}

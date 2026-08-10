/**
 * ==========================================================
 * Arquivo: livePlaybooks.js
 * Caminho: src/data/demo/livePlaybooks.js
 * Responsabilidade: centralizar os nichos exibidos no Hub de Playbooks ao vivo.
 *
 * Importante:
 * - Estes links podem apontar para rotas locais durante desenvolvimento.
 * - Em produção, os subdomínios podem ser configurados na Vercel/One.com.
 * - Os TENANT_ID reais continuam fora daqui; esta fase é apenas visual/navegação.
 * ==========================================================
 */

import { COMMERCIAL_NICHES_V1103_123 } from "../verticalNiches.v1103_123";

export const LIVE_PLAYBOOKS = COMMERCIAL_NICHES_V1103_123.map((niche) => ({
  id: niche.playbook,
  icon: niche.icon,
  label: niche.label,
  title: `IA para ${niche.label}`,
  subtitle: niche.summary,
  route: niche.href,
  domain: `leadyia.com${niche.href}`,
  accent: niche.color,
  metrics: ["Atendimento", "Qualificação", "Conversão"],
}));

export const getLivePlaybookById = (id) =>
  LIVE_PLAYBOOKS.find((item) => item.id === id) || LIVE_PLAYBOOKS[0];

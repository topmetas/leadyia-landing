import { calculateSEOScore } from "../services/score.service";

export default function SEOScoreBadge({ page }) {
  const score = calculateSEOScore(page);
  return (
    <span className="seo-score-badge" title="Pontuação SEO estimada">
      SEO {score}/100
    </span>
  );
}

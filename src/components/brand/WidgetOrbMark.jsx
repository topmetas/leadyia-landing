import React, { useId } from "react";

/**
 * Orb Glow oficial da LeadyIA.
 * Espelha o desenho usado no widget em LeadyiaWidgetIcon variant="orb".
 */
export default function WidgetOrbMark({
  className = "",
  label = "LeadyIA",
  compact = false,
}) {
  const uid = useId().replace(/:/g, "");
  const orbBgId = `landingLeadyiaOrbBg${uid}`;
  const orbGlassId = `landingLeadyiaOrbGlass${uid}`;
  const orbHighlightId = `landingLeadyiaOrbHighlight${uid}`;
  const orbShadowId = `landingLeadyiaOrbShadow${uid}`;

  return (
    <span
      className={`ly-widget-orb-mark ly-widget-orb-mark--official ${compact ? "is-compact" : ""} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="ly-widget-orb-mark__aura" aria-hidden="true" />
      <svg
        className="ly-widget-orb-mark__svg"
        viewBox="0 0 72 72"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient
            id={orbBgId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25 20) rotate(46) scale(58)"
          >
            <stop stopColor="var(--leadyia-icon-secondary, #7C3AED)" />
            <stop offset=".46" stopColor="var(--leadyia-icon-primary, #6D5BFF)" />
            <stop offset="1" stopColor="var(--leadyia-icon-accent, #06B6D4)" />
          </radialGradient>

          <linearGradient id={orbGlassId} x1="17" y1="11" x2="56" y2="63">
            <stop stopColor="white" stopOpacity=".72" />
            <stop offset=".25" stopColor="white" stopOpacity=".14" />
            <stop offset=".72" stopColor="white" stopOpacity=".02" />
            <stop offset="1" stopColor="white" stopOpacity=".32" />
          </linearGradient>

          <radialGradient
            id={orbHighlightId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25 18) rotate(67) scale(34 42)"
          >
            <stop stopColor="white" stopOpacity=".72" />
            <stop offset=".38" stopColor="white" stopOpacity=".15" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <filter id={orbShadowId} x="-10" y="-10" width="92" height="98">
            <feDropShadow dx="0" dy="11" stdDeviation="7" floodColor="#020617" floodOpacity=".27" />
          </filter>
        </defs>

        <g filter={`url(#${orbShadowId})`}>
          <circle cx="36" cy="34" r="29" fill={`url(#${orbBgId})`} />
          <circle cx="36" cy="34" r="29" fill="rgba(15, 23, 42, 0.08)" />
          <circle cx="36" cy="34" r="28.2" stroke={`url(#${orbGlassId})`} strokeWidth="1.6" />
          <ellipse cx="29" cy="23" rx="18" ry="14" fill={`url(#${orbHighlightId})`} />

          <path
            d="M36 20.2C37.6 27.4 41.8 31.6 49 33.2C41.8 34.8 37.6 39 36 46.2C34.4 39 30.2 34.8 23 33.2C30.2 31.6 34.4 27.4 36 20.2Z"
            fill="white"
          />

          <path
            d="M51.5 19.8C52.1 22.8 53.8 24.5 56.8 25.1C53.8 25.7 52.1 27.4 51.5 30.4C50.9 27.4 49.2 25.7 46.2 25.1C49.2 24.5 50.9 22.8 51.5 19.8Z"
            fill="white"
            fillOpacity=".92"
          />

          <circle cx="20.5" cy="47.5" r="1.25" fill="white" fillOpacity=".58" />
        </g>
      </svg>
    </span>
  );
}

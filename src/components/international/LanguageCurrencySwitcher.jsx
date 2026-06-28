import React from "react";
import { SUPPORTED_COUNTRIES } from "../../config/international.config";

export default function LanguageCurrencySwitcher({ value, onChange, label = "País/moeda" }) {
  const current = value || SUPPORTED_COUNTRIES[0];

  return (
    <div className="lp-intl-switcher" aria-label={label}>
      <span className="lp-intl-switcher__label">{label}</span>
      <select
        value={current.code}
        onChange={(event) => {
          const next = SUPPORTED_COUNTRIES.find((item) => item.code === event.target.value) || SUPPORTED_COUNTRIES[0];
          onChange?.(next);
        }}
      >
        {SUPPORTED_COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.label} · {country.currency}
          </option>
        ))}
      </select>
      <small>{current.provider === "mercadopago" ? "Mercado Pago / Pix" : "Stripe"}</small>
    </div>
  );
}

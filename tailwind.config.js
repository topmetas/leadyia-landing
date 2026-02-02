export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand */
        "brand-blue": "var(--color-brand-blue)",

        /* Base layout */
        background: "var(--color-bg)",
        foreground: "var(--color-text)",

        /* Superfícies */
        surface: "var(--color-surface)",
        "surface-soft": "var(--color-surface-soft)",
      },
    },
  },
  plugins: [],
};

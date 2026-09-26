import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#4CAF50",
          "green-hover": "#43A047",
          "green-dark": "#388E3C",
          "green-light": "#E8F5E9",
          navy: "#003B73",
          "navy-dark": "#062A52",
          "navy-deep": "#041B35",
        },
        navy: {
          DEFAULT: "#003B73",
          deep: "#041B35",
          brand: "#003B73",
          dark: "#062A52",
          light: "#0D529C",
        },
        green: {
          brand: "#4CAF50",
          dark: "#388E3C",
          light: "#5FAF35",
          accent: "#43A047",
          subtle: "#E8F5E9",
        },
        mist: "#F4F7FA",
        steel: "#5B6B7F",
        slate: {
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        heading: [
          "var(--font-sora)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },

      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        premium: "0 10px 30px -5px rgba(0, 59, 115, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "premium-hover": "0 20px 40px -10px rgba(0, 59, 115, 0.16), 0 8px 20px -4px rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px -2px rgba(0, 20, 50, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;


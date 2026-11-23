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
        brand: {
          green: "#8AB62F",
          "green-dark": "#6F9A1F",
          mint: "#EAF3D3",
          blue: "#0B52B0",
          navy: "#0A1F44",
          mist: "#F2F6FB",
        },
        ink: "#0E1B2E",
        steel: "#5B6B7F",
        // legacy aliases kept so older class names resolve to the new theme
        navy: { DEFAULT: "#0B52B0", deep: "#0A1F44", dark: "#0A1F44", light: "#0B52B0", brand: "#0B52B0" },
        green: { brand: "#8AB62F", dark: "#6F9A1F", light: "#A4CC4A", accent: "#8AB62F", subtle: "#EAF3D3" },
        mist: "#F2F6FB",
        paper: "#F2F6FB",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        heading: [
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },

      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 30s linear infinite" },
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


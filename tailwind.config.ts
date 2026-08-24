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
        navy: {
          DEFAULT: "#0B2A5B",
          deep: "#071D40",
          brand: "#003B8F",
          light: "#1E4FA3",
        },
        green: {
          brand: "#65A30D",
          dark: "#4D7C0F",
          light: "#84CC16",
        },
        mist: "#F5F7FA",
        steel: "#5B6B7F",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;

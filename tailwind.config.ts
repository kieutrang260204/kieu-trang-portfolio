import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#111111",
        card: "#1C1C1C",
        primary: "#F5F1EA",
        secondary: "#B8B1A7",
        accent: "#D8C3A5",
        "accent-hover": "#E7D8C9",
        border: "#2B2B2B",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        // Used only for the large hero name — see Hero.tsx
        signature: ["var(--font-signature)", "cursive"],
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 500ms ease-out forwards",
        fadeIn: "fadeIn 400ms ease-out forwards",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

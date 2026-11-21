import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12304A",
          dark: "#0C2135",
          light: "#1B4366",
        },
        teal: {
          DEFAULT: "#138A8A",
          dark: "#0E6E6E",
        },
        aqua: {
          DEFAULT: "#DDF3F1",
        },
        offwhite: {
          DEFAULT: "#F7FAFC",
        },
        "slate-body": {
          DEFAULT: "#405264",
        },
        highlight: {
          DEFAULT: "#E8F0F7",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Manrope", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(18, 48, 74, 0.06), 0 1px 2px -1px rgba(18, 48, 74, 0.04)",
        "card-hover": "0 10px 25px -5px rgba(18, 48, 74, 0.08), 0 4px 10px -6px rgba(18, 48, 74, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

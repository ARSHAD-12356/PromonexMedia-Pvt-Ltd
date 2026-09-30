import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        promonex: {
          navy: "#020B35",
          darkBlue: "#06144A",
          royalBlue: "#172A7A",
          electricBlue: "#00BFFF",
          brightCyan: "#00D9FF",
          magenta: "#FF2DAA",
          purple: "#5B3CC4",
          lightGray: "#94A3B8",
          cardBorder: "rgba(255, 255, 255, 0.08)",
          glassBg: "rgba(6, 20, 74, 0.45)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glowCyan: "0 0 35px -5px rgba(0, 217, 255, 0.3)",
        glowBlue: "0 0 50px -10px rgba(0, 191, 255, 0.25)",
        glowPurple: "0 0 45px -10px rgba(91, 60, 196, 0.3)",
        buttonShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

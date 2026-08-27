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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#e6fcf5",
          100: "#c3fae8",
          200: "#96f2d7",
          300: "#63e6be",
          400: "#38d9a9",
          500: "#00D26A", // Electric EV Green
          600: "#089e53",
          700: "#097a42",
          800: "#0b6136",
          900: "#0b502e",
        },
        electric: {
          cyan: "#06B6D4",
          blue: "#0284C7",
          green: "#00D26A",
          dark: "#0F172A",
        },
        slate: {
          850: "#151e2e",
          900: "#0f172a",
          950: "#080d1a",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 210, 106, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
export default config;

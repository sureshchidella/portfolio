import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070711",
        surface: "#0e0e1a",
        "surface-2": "#14142b",
        border: "#1e1e3a",
        "border-hover": "#2e2e5a",
        primary: "#6366f1",
        "primary-foreground": "#f8fafc",
        secondary: "#22d3ee",
        accent: "#8b5cf6",
        foreground: "#f8fafc",
        muted: "#94a3b8",
        "muted-foreground": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 27% 37%, hsla(215,98%,61%,0.15) 0, transparent 50%), radial-gradient(at 97% 21%, hsla(125,98%,72%,0.08) 0, transparent 50%), radial-gradient(at 52% 99%, hsla(354,98%,61%,0.06) 0, transparent 50%), radial-gradient(at 10% 29%, hsla(256,96%,67%,0.15) 0, transparent 50%), radial-gradient(at 97% 96%, hsla(38,60%,74%,0.05) 0, transparent 50%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.15)",
        "glow-lg": "0 0 80px rgba(99, 102, 241, 0.2)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 48px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;


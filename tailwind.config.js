/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2735",
          deep: "#141E2A",
          deeper: "#0F1722",
        },
        violet: {
          DEFAULT: "#6055AC",
          bright: "#7B6FD0",
          soft: "#8B81CF",
        },
        teal: {
          DEFAULT: "#00C9A7",
        },
        emerald: {
          DEFAULT: "#10B981",
        },
        gold: {
          DEFAULT: "#F5C26B",
        },
        offwhite: "#F4F6FA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        "glow-violet": "0 0 40px -8px rgba(96, 85, 172, 0.55)",
        "glow-teal": "0 0 40px -8px rgba(0, 201, 167, 0.4)",
        "glow-card": "0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(96,85,172,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 25% 70%, rgba(0,201,167,0.08), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

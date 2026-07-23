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
          pale: "#B7AEE8",
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
        ember: {
          DEFAULT: "#FF8C42",
          deep: "#E85A1A",
          soft: "#FFB35C",
        },
        offwhite: "#F4F6FA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      boxShadow: {
        "glow-violet": "0 0 60px -12px rgba(96, 85, 172, 0.5)",
        "glow-teal": "0 0 60px -12px rgba(0, 201, 167, 0.35)",
        "glow-card":
          "0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px -24px rgba(0,0,0,0.7)",
        sheen: "inset 0 1px 0 rgba(255,255,255,0.22)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 75% 60% at 72% 40%, rgba(255,138,60,0.16), transparent 62%), radial-gradient(ellipse 55% 45% at 12% 18%, rgba(23,126,140,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,201,167,0.06), transparent 60%)",
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        shimmer: "shimmer 9s ease-in-out infinite",
        kenburns: "kenburns 26s ease-in-out infinite",
        sweep: "sweep 7s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        kenburns: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1.06) rotate(-1.4deg)",
          },
          "50%": {
            transform: "translate(-52%, -49%) scale(1.14) rotate(1.4deg)",
          },
        },
        sweep: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "55%, 100%": { transform: "translateX(320%) skewX(-12deg)" },
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  plugins: [],
};

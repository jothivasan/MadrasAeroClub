/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mac: {
          bg: "#F8FAFC", 
          surface: "#FFFFFF",
          surfaceDark: "#E2E8F0",
          primary: "#111827", // Darker navy for exact match
          text: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          accent: "#C49A6C", // Gold from UI reference
          accentBright: "#D4AF84", 
        }
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Figtree'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"], 
        slab: ["'Josefin Slab'", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

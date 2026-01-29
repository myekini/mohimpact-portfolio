/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Premium "Midnight & Slate" Palette
        background: "#F8FAFC", // Slate-50: Crisp, clean background
        surface: "#FFFFFF", // Pure white for cards
        primary: {
          DEFAULT: "#0F52FF", // Vivid International Blue - energetic but professional
          hover: "#0047E1",
          light: "#E5ECFF", // Subtle blue wash
        },
        navy: {
          900: "#020617", // Deepest navy for main headings (almost black)
          800: "#1E293B", // Slate-800 for secondary text
          /*************************************************************************
           * NOTE: We keep standard slate/gray scales from Tailwind defaults,
           * but these specific overrides allow us to semantically usage.
           *************************************************************************/
        },
        neutral: {
          // Tweaked grays for better contrast
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean, modern body
        heading: ["Poppins", "sans-serif"], // Geometric headings
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #F8FAFC 0%, #E5ECFF 100%)",
      },
    },
  },
  plugins: [],
};

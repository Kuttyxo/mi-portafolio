import { keyframes } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scan: "scan 32s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%"},
        },
      },
      colors: {
        // Tu paleta de marca "KuttyDev"
        kutty: {
          primary: "#A649BF",   // Magenta brillante
          secondary: "#5E2D73", // Púrpura medio
          dark: "#3B2D59",      // Violeta oscuro (fondo)
          teal: "#0D688C",      // Azul/Turquesa (detalles)
          light: "#F2F2F2",     // Blanco off-white (texto)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
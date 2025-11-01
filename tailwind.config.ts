import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { PluginAPI } from "tailwindcss/plugin";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "black-100": "#0D0D0D",
        purple: "#8B5CF6",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 1s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-out": "fadeOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: PluginAPI) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)])
      );

      addBase({
        ":root": newVars,
      });
    }),
  ],
};

export default config;

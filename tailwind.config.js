/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dashboard: "url('./public/Images/portfolio/dashboard.jpg')",
      },
      fontFamily: {
        content: ["var(--font-space-mono)"],
        specific: ["var(--font-monoton)"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

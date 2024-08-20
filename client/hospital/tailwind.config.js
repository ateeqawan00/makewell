/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    darkMode: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
        poppins: ["Poppins", "sans"],
      },
      backgroundImage: {
        homeBg: "url('/homeBg.webp')",
        summaryBg: "url('/bg-summary.webp')",
        ctaBg: "url('/cta-bg.webp')",
      },
      borderRadius: {
        scrollBarDefault: "8px",
      },
      screens: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1400px": "1400px",
        "1500px": "1500px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        btnprimary: "#127CC0",
        btnhover: "#2496E0",
        captiongray: "#8692A6",
        label: "#696F79",
        primary: "#503AA7",
      },
    },
  },
  darkMode: "class",
};

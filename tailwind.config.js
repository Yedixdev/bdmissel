/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["UnifrakturMaguntia", "serif"], //títulos
        display: ["Playfair Display", "serif"], //sustitulos
        montserrat: ["Montserrat", "sans-serif"], //parrafos
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

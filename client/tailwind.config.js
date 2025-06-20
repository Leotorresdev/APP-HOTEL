/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#4DB6AC',     // color tranquilizante
        secondary: '#00796B',   // tono más oscuro para detalles
        accent: '#FFC107',      // color para botones o promociones
      },
    },
  },
  plugins: [],
}


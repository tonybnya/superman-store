/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cantarell: ["Cantarell", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        advent: ["Advent Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
}


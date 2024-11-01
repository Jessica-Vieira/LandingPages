/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ["Sansita", "sans-serif"],
        'PTsans' :["PT Sans", "sans-serif"]
      },
      colors: {
        'azulClaro' : '#d9f2ff'
      }
    },
  },
  plugins: [],
};



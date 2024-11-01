/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ["Sansita", "sans-serif"], // Substitua "NomeDaFonte" pelo nome da fonte
      },
    },
  },
  plugins: [],
};



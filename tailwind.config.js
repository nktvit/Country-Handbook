/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: "Lobster two, system-ui, sans-serif"
      },
      borderWidth: {
        '0.5': '0.5px'
      }
    },
  },
  plugins: [],
}
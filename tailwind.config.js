/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emol: {
          100: '#519ad7',
          200: '#367dcc',
          300: '#194da6'
        }
      }
    },
  },
  plugins: [],
}

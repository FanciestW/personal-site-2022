/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'deep-purple': '#312FAD',
      'light-purple': '#B0AEF8',
    },
  },
  plugins: [],
}

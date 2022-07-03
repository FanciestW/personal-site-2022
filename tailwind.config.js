/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        DEFAULT: '0px 4px 4px var(--tw-shadow-color)',
      },
      colors: {
        'deep-purple': '#312FAD',
        'light-purple': '#B0AEF8',
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

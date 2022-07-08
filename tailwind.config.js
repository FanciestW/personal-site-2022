/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        DEFAULT: "0px 4px 4px var(--tw-shadow-color)",
      },
      colors: {
        "deep-purple": "#312FAD",
        "light-purple": "#B0AEF8",
        "blended-text": "rgb(238,238,41)",
      },
      animation: {
        "pop-out":
          "shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      backgroundImage: {
        "intro-wave-svg": `url(/assets/intro_wave.svg)`,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

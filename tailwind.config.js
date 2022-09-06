/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      PRIMARY_COLOR: "#0d0b1a",
      DARK_PRIMARY_COLOR: "#22223B",
      SECONDARY_COLOR: "#E3BA32",
      TEXT_COLOR: "#333333",
      BACKGROUND_COLOR: "#FFFFFF",
      LIGHT_GREY: "#00000029",
      DARK_GREY: "#474B66",
      GREY: "#00000066",
      RED:"#D32F2F",
      transparent: 'transparent',
    },
    fontFamily: {
      "sans": ['"Merriweather"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};

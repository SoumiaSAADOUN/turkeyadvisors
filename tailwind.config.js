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
      BLACK:'#000000',
      BACKGROUND_COLOR: "#FFFFFF",
      LIGHT_GREY: "#eeeeee",
      DARK_GREY: "#474B66",
      GREY: "#cfd8dc",
      RED:"#D32F2F",
      REDISH:'#FF0000',
      transparent: 'transparent',
      PURPLE:'#1F2B50',
      FACEBOOK:"#4267B2",
      YOUTUBE:"#FF0000",
      TWITTER:"#1DA1F2",
      INSTAGRAM:"#E1306C",
      LINKEDIN:"#0A66C2"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "sans": ["'Merriweather'", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      PRIMARY_COLOR: "#1F2B50",
      DARK_PRIMARY_COLOR: "#22223B",
      SECONDARY_COLOR: "#E3BA32",
      TEXT_COLOR: "#333333",
      BACKGROUND_COLOR: "#FFFFFF",
      LIGHT_GREY: "#00000029",
      DARK_GREY: "#474B66",
      GREY: "#00000066",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};

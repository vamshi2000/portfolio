const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  ...{
    "custom-teal": "#03DAC5",
  },
};
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: `media`, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

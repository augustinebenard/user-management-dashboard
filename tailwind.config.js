/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{html,ts,css,scss,sass,less,styl}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#b12025",
        },
      },
    ]
  },
  plugins: [require("daisyui")],
}


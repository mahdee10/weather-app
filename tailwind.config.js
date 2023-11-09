/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      width:{
        'side':"8%",
        'cont':"89%",
      },
      colors:{
        "gb":"rgb(32 43 59)",
        "main":"rgb(11 19 30)",
        "g":"#9399A2"
      }
    },
  },
  plugins: [],
}


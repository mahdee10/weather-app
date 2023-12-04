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
        'today':"38%"
      },
      colors:{
        "gb":"rgb(32 43 59)",
        "lb":"#7b9cc7",
        "mainDark":"rgb(11 19 30)",
        "mainLight":"#4b76ac",
        "g":"#9399A2",
        "dg":"#d7d8e3",
        "yell":"#FCC419"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'primary' : ['Outfit', 'sans-serif']
      },

      colors: {
        neutral: "#fcfcfc",
        accent: "rgb(20 184 166)",

        tprimary: "#1b1c1e",
        tsecondary: "#e5e5e5",
        
        dneutral: "#0a1628",
      }
    },

    fontSize: {
      "midget": "0.625rem",
      "dwarf": "0.75rem",
      "shrimp": "0.875rem",
      "normal": "1rem",
      "h3": "1.25rem",
      "h2": "1.5rem",
      "h1": "2rem",
      "chungus": "2.5rem",
      "big-chungus": "3.5rem",
      "giant-chungus": "4.5rem",
      "humongus-chungus": "5.5rem",
    },

    screens: {
      "xxs": "260px",
      "xs": "370px",
      "sm": "540px",
      "md": "767px",
      "lg": "1024px",
    },

    container: {
      center: true
    }
  },

  plugins: [],
})


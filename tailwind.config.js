/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "Dark-Blue": "hsl(217, 28%, 15%)",
      "main-background": "hsl(218, 28%, 13%)",
      "footer-background": "hsl(216, 53%, 9%)",
      "testimonials-background": "hsl(219, 30%, 18%)",
      "Cyan": "hsl(176, 68%, 64%)",
     "Blue": "hsl(198, 60%, 50%)",
      "Light-Red" : "hsl(0, 100%, 63%)",
      "White": "hsl(0, 0%, 100%)"
      },
      spacing: {
        "100rem": "140rem",
        "90rem": "90rem",
        "80rem": "80rem",
        "77rem": "77rem",
        "60rem": "74rem",
        "38rem": "38rem",
        "40rem": "40rem",
        "45rem": "45rem",
        "32rem": "32rem",
        "20rem": "20rem",
        "100%": "100%",
        "50%":  "50%",
        "70%":  "70%",
      },
      maxWidth: {
        "666px": "666px"
        },
    },
    fontFamily: {
      "Fraunces": "'Fraunces', serif",
      "serif": "'Open Sans', sans-serif"
    }
  },
  plugins: [],
}


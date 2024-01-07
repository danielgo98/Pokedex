/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#303030",
        secondaryColor: "#FFCB05"
      }
    },
  },
  plugins: [],
}


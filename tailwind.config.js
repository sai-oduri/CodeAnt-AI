/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#081735"
      },
      dropShadow: {
        "custom": "0 0 24px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tickertape: ["tickertape", "sans-serif"],
        logoFont: ["logoFont", "sans-seref"],
      },
    },
  },
  plugins: [],
};

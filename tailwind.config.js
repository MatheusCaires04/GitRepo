/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0d1117",
        green: "#238636",
        whiteOp: "#f0f6fc",
      },
      fontFamily: {
        global: ["Mochiy Pop One", "sans-serif"],
      },
      screens: {
        md: "769px",
      },
    },
  },
  plugins: [],
};

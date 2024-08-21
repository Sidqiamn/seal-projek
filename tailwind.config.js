/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    screens: {
      mobile: { min: "320px", max: "760px" },
    },
    extend: {
      keyframes: {
        wiggle: {
          from: {
            opacity: 0,
            clipPath: "inset(100% 100% 0 0)",
            transform: "rotate(0deg)",
          },
          to: {
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear",
      },
    },
  },
  plugins: [],
};

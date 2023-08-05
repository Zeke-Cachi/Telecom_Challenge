import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        extend: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        extend: "extend 1s ease-in-out",
      },
    },
  },
  plugins: [daisyui],
};

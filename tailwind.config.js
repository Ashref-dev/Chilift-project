/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { display: ["Unbounded", "arial"] },
    colors: {
      yellow: "#DEAF1B",
      red: "#C4602D",
      green: "#368161",
      gray: "#8492a6",
    },
    extend: {
      animation: {
        "clip-from-top-animation": "clip-from-top 1s ease-in-out 4.5s forwards",
      },
      keyframes: {
        "clip-from-top": {
          "0%": { "clip-path": "ellipse(100% 100% at 50% 50%)" },
          "100%": { "clip-path": "ellipse(160% 160% at 50% 160%)" },
        },
      },
    },
  },
  plugins: [],
};

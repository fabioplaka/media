/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12303A",
        mist: "#EEF3F2",
        teal: { DEFAULT: "#0F766E", dark: "#0B5750" },
        coin: "#E0A526",
        alert: "#B3261E",
      },
    },
  },
  plugins: [],
};

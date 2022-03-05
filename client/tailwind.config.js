module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#fafafa",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

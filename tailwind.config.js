module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js"],
    options: {
      safelist: ["bg-red-500", "px-4"],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

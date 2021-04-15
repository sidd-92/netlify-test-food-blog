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
    extend: {
      spacing: {
        "20px": "20px",
        "10px": "10px",
        "50px": "50px",
        "100px": "100px",
        "150px": "150px",
        "160px": "160px",
        "180px": "180px",
        "200px": "200px",
        "230px": "230px",
        "240px": "240px",
        "300px": "300px",
        "320px": "320px",
        "360px": "360px",
        "400px": "400px",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

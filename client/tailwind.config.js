/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFF6F9",
        bubblegum: "#FF6FA5",
        bubblegumDark: "#E24E86",
        lavender: "#C9A7EB",
        lavenderDark: "#9B6FCE",
        mint: "#7FE7C4",
        mintDark: "#3FC79E",
        buttercup: "#FFE066",
        ink: "#3D2C3A",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: {
        cute: "0 6px 0 rgba(61,44,58,0.15)",
        pop: "6px 6px 0px rgba(61,44,58,0.9)",
      },
      borderRadius: {
        blob: "42% 58% 61% 39% / 45% 41% 59% 55%",
      },
    },
  },
  plugins: [],
};

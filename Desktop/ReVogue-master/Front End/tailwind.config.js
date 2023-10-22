/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: "#80053a",
        darkorange: {
          "100": "#ff9933",
          "200": "#f1871d",
        },
        white: "#fff",
        gainsboro: {
          "100": "#ddd8d8",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.5)",
        },
        black: "#000",
        silver: "#bcbcbc",
        darkslateblue: "#0f2967",
        goldenrod: "#f9bd20",
        lightseagreen: "#0db3b3",
        crimson: "#d81f25",
        gray: "#171717",
        red: "#e00008",
        peru: "#db9550",
      },
      spacing: {},
      fontFamily: {
        "bits-indian-calligra": "'bits indian calligra'",
        "segoe-ui": "'Segoe UI'",
        inter: "Inter",
        kaivalya: "KAIVALYA",
      },
      borderRadius: {
        "19xl": "38px",
        "26xl": "45px",
        "21xl": "40px",
        "33xl-1": "52.1px",
        "27xl-9": "46.9px",
      },
    },
    fontSize: {
      "91xl": "110px",
      "5xl": "24px",
      "13xl": "32px",
      "17xl": "36px",
      "8xl-8": "27.8px",
      "4xs-6": "8.6px",
      "9xl-1": "28.1px",
      "7xl-9": "26.9px",
      "61xl": "80px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

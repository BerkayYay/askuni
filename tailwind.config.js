/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#2E7D32",
        customBlue: "#3288D1",
        customLightBlue: "#3ECAF0",
        customOrange: "#ED6C02",
        customRed: "#F65242",
        customPurple: "#A43AB7",
      },
      fontSize: {
        "10px": "10px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
      },
    },
  },
  plugins: [],
};

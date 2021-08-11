module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5464F7",
        secondary: "#FF9130",
        "primary-dark": "#0B1571",
        "primary-darkest": "#293991",
        "text-title": "#464646",
        "text-desc": "#6A6A6A",
      },
      fontFamily: {
        sans: [`"Poppins"`, "sans-serif"],
        montserrat: [`"Montserrat"`, "sans-serif"],
        raleway: [`"Raleway"`, "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["hover", "focus", "disabled"],
    },
  },
  plugins: [],
};

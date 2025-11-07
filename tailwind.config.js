/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",     // ✅ This is where your pages are
    "./components/**/*.{js,jsx,ts,tsx}" // ✅ If you create components folder later
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CB3E5",
        mint: "#79D8C7",
        dark: "#2B2B2B",
        light: "#FFFFFF"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 50% -10%, rgba(106,213,239,0.35), rgba(58,148,232,0.15) 40%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

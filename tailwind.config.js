module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#1a202c", // Nuevo color agregado
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-out",
        pulseSlow: "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
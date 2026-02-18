const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#807077", // 🔹 your custom color
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
  ],
};

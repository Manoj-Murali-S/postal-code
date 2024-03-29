module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js",
],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [require("flowbite/plugin"),],
};

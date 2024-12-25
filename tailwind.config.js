module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.clip-footer': {
          'clip-path': 'polygon(0 49%, 100% 8%, 100% 100%, 0% 100%)',
        },
      });
    },
  ],
}

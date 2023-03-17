/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        accentBolder: '#091E42',
        subtle: '#44546F',
        accentRed: '#AE2A19',
        accentYellow: '#7F5F01',
        accentGreen: '#216E4E',
        dimBlue: '#E9F2FF',
      },
      backgroundColor: {
        background: 'rgba(233, 242, 255, 0.5)',
        selectBold: '#0C66E4',
      },
    },
  },
  plugins: [],
};

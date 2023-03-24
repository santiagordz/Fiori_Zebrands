/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grayRGBA: 'rgba(0, 0, 0, 0.5)',
        jiraBlue: '#0C66E4',
        accentBolder: '#091E42',
        subtle: '#44546F',
        accentRed: '#AE2A19',
        accentYellow: '#7F5F01',
        accentGreen: '#216E4E',
        dimBlue: '#E9F2FF',
        blueLight: '#E9F2FF',
        yellowLight: '#FFE2BD',
        redLight: '#FFE6E6',
        greenLight: '#E6FFE6',
        tealLight: '#E6FFFF',
        purpleLight: '#F2E6FF',
        standard: '#F4F5F7',
      },
      backgroundColor: {
        background: 'rgba(233, 242, 255, 0.5)',
        selectBold: '#0C66E4',
      },
    },
  },
  plugins: [],
};

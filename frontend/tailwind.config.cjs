/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textNormal: '#172b4d',
        accentBolder: '#091E42',
        subtle: '#44546F',
        accentRed: '#AE2A19',
        accentYellow: '#7F5F01',
        accentGreen: '#216E4E',
        paragraph: '#44546f',
        selectBold: '#0C66E4',
        discovery: '#5E4DB2',
        information: '#0055CC',
        link: '#0B6CFF',
        mediumDanger: '#D97008',
        green: '#22A06B',
        danger: '#F70000',
        modalSoft: '#424242',
        answerA: '#8070DB',
      },
      backgroundColor: {
        background: 'rgba(233, 242, 255, 0.5)',
        selectBold: '#0C66E4',
      },
    },
  },
  plugins: [],
};

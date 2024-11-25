/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", 
  ],
  theme: {
    extend: {
      margin: {
        '270px': '270px',
      },
      fontFamily: {
        'konkhmer': ['"Konkhmer Sleokchher"', 'sans-serif','Roboto'],
      },
      colors: {
        'blue-sky': '#5384B5' ,
        'white-blue':'#D7EEFE'
      },
    },
  },
  plugins: [],
};


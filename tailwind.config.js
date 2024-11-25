/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", 
  ],
  theme: {
    screens: {
      'mo': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      display: ['responsive'],
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


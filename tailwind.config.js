/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity:{
        "low":'0.10',
        "mid":'0.50',
        "high":'0.90',
      }
      
    },
    screens: {
      'xxs': '458px', // min-width
      'xxxs': '400px', // min-width
      'xxxxs': '360px',//min-width
      'xxxxss': '500px',//min-width
      'six': '630pxs',
      'eight': '790px',
      'seven': '412px',
      'xlg': '1120px',
      'eightFifty':'850px',
    },

   
  },
  plugins: [],
}
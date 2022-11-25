/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
   keyframes:{
    scroll: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(calc(-250px * 14))' },
    },
    flipHorizontal:{
      '50%' : {transform: 'rotateY(180deg)'},
      
    },

   },
   animation:{
    hflip: 'flipHorizontal 2s infinite',
    scroll: 'scroll 40s linear infinite',
   }



    },
  },
  plugins: [require("daisyui")],
}


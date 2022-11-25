/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
   keyframes:{
    flipHorizontal:{
      '50%' : {transform: 'rotateY(180deg)'},
    },

   },
   animation:{
    hflip: 'flipHorizontal 2s infinite',
   }



    },
  },
  plugins: [require("daisyui")],
}


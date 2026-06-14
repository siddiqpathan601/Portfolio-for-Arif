/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        deepBlue:"linear-gradient(90deg, #0B1120 0%, #0F172A 25%, #0F172A 50%, #0F172A 75%, #0B1120 100%)",
        fontBlue:"linear-gradient(50deg, #B597F6 0%, #96C6EA 100%)",
      },
      colors:{
        color1:"#7C3AED",
        color1Hover:"#6D28D9",
        color2:"#22D3EE",
        color3:"#0B1120",
      },
      fontFamily:{
        sora:["Sora","sans"]
      },
      width:{
        radarWidth:"40rem!important"
      },
    },
  },
  plugins: [],
}
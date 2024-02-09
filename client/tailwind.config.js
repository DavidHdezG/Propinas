/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ED6A5A',
        'black':'#3D3D3D',
        'gray':'#C2C2C2',
        'disabled':'#E6E6E6',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mPlus1: ['M PLUS 1', "sans-serif"]
      },
      // backgroundColor: {

      // }
      // colors: {
      //   primary: ""
      // }
    },
  },
  plugins: [],
}
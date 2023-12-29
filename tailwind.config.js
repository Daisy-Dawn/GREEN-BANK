/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";


export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mPlus1: ['M PLUS 1', "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      // backgroundColor: {

      // }
      // colors: {
      //   primary: ""
      // }
    },
  },
  plugins: [],
})
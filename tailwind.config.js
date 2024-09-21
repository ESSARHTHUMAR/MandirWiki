/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#FFFFFF",
        bgSecondary: "#F7F6F0",
        fontColor: "#080E1E",
        fontSecondary: "#345AFA",
        fontThird: "#393636"
      },
      fontFamily: {
        pRegular: ['Poppins-Regular'],
        p500: ['Poppins-Medium500'],
        p600: ['Poppins-SemiBold600'],
        p700: ['Poppins-Bold700']
      },
      fontSize: {
        '3xs': '0.875rem',
        '2xs': '0.9375rem',
        'xs': '1rem',      // Default
        'sm': '1.125rem',
        'md': '1.25rem',
        'lg': '1.5625rem',
        'xl': '2.1875rem',
        '2xl': '2.5rem',
        '3xl': '3.125rem',
        '4xl': '3.75rem',
      },
      boxShadow: {
        'custom': '0px 0px 10px 0px #00000080',
      },
      translate: {
        '-1/2': '-50%',
      },
    },
  },
  plugins: [],
}


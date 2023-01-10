/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min' : '280px' ,'max': '576px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min' : '577px' ,'max': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min' : '769px' ,'max': '991px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min' : '992px'},
      // => @media (min-width: 1280px) { ... }

      //'2xl': {'min':'1400px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

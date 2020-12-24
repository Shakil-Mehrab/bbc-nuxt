// const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode:"layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        customborder:{
          100: '#666',
          200: '#4c4c4c'
        }
      }
    },
  },
  variants: {
    extend: {
      colors:{
        customborder:{
          100: '#666',
          200: '#4c4c4c'
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

// theme: {
//   screens: {
//     'sm': '640px',
//     // => @media (min-width: 640px) { ... }
//     'md': '768px',
//     // => @media (min-width: 768px) { ... }
//     'lg': '1024px',
//     // => @media (min-width: 1024px) { ... }
//     'xl': '1280px',
//     // => @media (min-width: 1280px) { ... }
//     '2xl': '1536px',
//     // => @media (min-width: 1536px) { ... }
//   }
// }

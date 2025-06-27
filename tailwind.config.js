/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors:
      {
        'dark-bg': '#0f0f1b',
        'accent': '#8b5cf6',
        'highlight': '#facc15',

      },


       fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

       backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },

       animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },

       keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
      
  },
  plugins: [],

}

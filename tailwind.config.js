/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#e8f0f7',
          100: '#c5d9eb',
          200: '#9fbddc',
          300: '#77a1cd',
          400: '#5a8abf',
          500: '#3d6fb1',
          600: '#345d99',
          700: '#2b4b81',
          800: '#223969',
          900: '#1e325c',
        },
        accent: {
          DEFAULT: '#4a90d9',
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c0eb',
          300: '#66a1e1',
          400: '#3381d7',
          500: '#1e6cc9',
          600: '#1855a0',
          700: '#123d77',
          800: '#0c264e',
          900: '#060e25',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
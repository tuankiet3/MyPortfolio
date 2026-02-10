/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
        },
        primary: {
          400: '#60A5FA',
          500: '#3B82F6', // Blue for professionalism
          600: '#2563EB',
          700: '#1D4ED8',
        },
        accent: {
          500: '#10B981', // Green for success/skill
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
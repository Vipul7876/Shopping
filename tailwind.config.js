/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%' :{ width: '50%', opacity: '0' },
          '100%': { opacity: '1',width: '100%' }
        }
      }
    },
  },
  plugins: [],
}


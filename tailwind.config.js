/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm550:'550px',
        md850:'850px',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['2.2rem', { lineHeight: '1.2', fontWeight: '350' }],
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '300' }],
        'heading-3': ['1.75rem', { lineHeight: '1.4', fontWeight: '300' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '250' }],
      },
    },
  },
  plugins: [],
}


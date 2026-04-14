/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ferd: {
          red: '#9B3520',
          'red-dark': '#7a2918',
          'red-light': '#FAECE7',
          green: '#3B6D11',
          'green-light': '#EAF3DE',
          amber: '#854F0B',
          'amber-light': '#FAEEDA',
          blue: '#185FA5',
          'blue-light': '#E6F1FB',
          sand: '#f7f5f0',
          'sand-dark': '#DFDDD5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

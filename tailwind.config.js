/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#FDF6F6',
          card: '#FFFFFF',
          primary: '#DCA3A3',
          primaryHover: '#D19191',
          text: '#3D3131',        /* Теплый темно-коричневый для заголовков */
          textLight: '#9C8A8A',   /* Теплый серо-розовый для подзаголовков и плейсхолдеров */
          itemBg: '#F9EEEE',
          border: '#F0E0E0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

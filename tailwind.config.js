// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Sve datoteke u "src" folderu
  ],
  theme: {
    extend: {
      /* colors: {
        green_primary: '#798645',
        white_primary: '#FEFAE0',
        white_secondary: '#F2EED7',
        green_secondary: '#626F47',
      }, */
      colors: {
        green_primary: '#1e3d58',
        white_primary: '#e8eef1',
        white_secondary: '#43b0f1',
        green_secondary: '#057dcd',
      },
    },
  },
  plugins: [],
}

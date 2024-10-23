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
      /* colors: {
        green_primary: '#1e3d58',
        white_primary: '#e8eef1',
        white_secondary: '#43b0f1',
        green_secondary: '#057dcd',
      }, */
      colors: {
        green_primary: '#798645',
        white_primary: '#FEFAE0',
        white_secondary: '#F2EED7',
        green_secondary: '#626F47',
        muted_blue: '#5B7F95',
        Warm_coral: '#EE6C4D',
        Soft_yellow: '#F2C94C',
        Dark_grey: '#333333',
        Light_grey: '#B2B2B2',
        neutral_gray: '#E0E0E0 ',
        gold_highlight: '#D4AF37',
        forest_green: '#2F4F4F',
        olive_muted: '#6B8E23'
      },


    },
  },
  plugins: [],
}

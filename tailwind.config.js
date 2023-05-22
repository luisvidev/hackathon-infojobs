/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '0px',
      xs: '480px',
      sm: '600px',
      md: '840px',
      lg: '960px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        primary: '#167DB7',
        'primary-dark': '#23536E',
      },
      colors: {
        primary: '#167DB7',
        'primary-l2': '#8BBEDB',
        'primary-l3': '#C5DFED',
        'primary-l4': '#E8F2F8',
        'primary-dark': '#23536E',
        'primary-panel': 'rgba(22,125,183,0.7)',
        accent: '#FF6340',
        'accent-dark': '#C0543C',
        'gray-l2': '#CCCCCC',
      },
    },
  },
  plugins: [],
};

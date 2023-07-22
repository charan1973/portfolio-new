module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'cream': '#fdfcfc',
        'seashell': '#FAF3F0',
        // 'cosmic-latte': '#FCF8E8',
        // 'metallic-silver': '#a9a9b3',
        'light-periwinkle': '#cacad9'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

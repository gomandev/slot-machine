module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce: 'bounce linear 1s 2 forwards',
      },
    },
    colors: {
      'main-red': '#ff4a57',
      'main-white': '#fefefe',
      'main-blue': '#1f2235',
      'soft-blue': '#23263a',
      'ui-purple': '#654ea3',
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      borderColor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};

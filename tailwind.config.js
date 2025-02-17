/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        theme: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(26, 115, 232, ${opacityValue})`;
          }
          return "#1A73E8"; 
        },
      },
    },
  },
  plugins: [],
};

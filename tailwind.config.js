// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-6px)" },
//         },
//       },
//       animation: {
//         float: "float 6s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add the marquee animation keyframes and utility
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

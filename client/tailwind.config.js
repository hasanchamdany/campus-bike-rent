/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			inter: ['Inner', 'serif'],
		},
    extend: {
      colors: {
				current: 'currentColor',
				'c-blue': {
					logo: '#1B3067'
				},
				blue: {
					light: '#3A73D0',
					dark: '#1B3067',
          nav: '#315FB1'
				},
				'c-yellow': '#FDFEDB'
			},
    },
  },
  plugins: [],
}
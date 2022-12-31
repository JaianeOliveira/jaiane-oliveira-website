const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			sm: '0.75rem',
			base: '0.875rem',
			xl: '1rem',
			'2xl': '1.125rem',
			'3xl': '1.5rem',
			'4xl': '1.953rem',
			'5xl': '2.441rem',
			'6xl': '3.052rem',
		},
		extend: {
			colors: {
				pallete: {
					primary: '#A393EB',
					secondary: '#5E63B6',
					tertiary: '#27296D',
				},
				gradients: {
					bg: 'bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800',
				},
			},
			fontFamily: {
				sans: ['var(--font-montserrat)', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};

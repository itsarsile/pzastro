const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: 1,
					}
				}
			},
			animation: {
				"fade-in": "fade-in 1s ease-in",
			}
		},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
		themes: ['black'],
	}
}

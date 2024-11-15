/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '374px',
			md: '768px'
		},
		extend: {
			colors: {
				lightRed: 'hsl(0, 100%, 67%)',
				orangeYellow: 'hsl(39, 100%, 56%)',
				greenTeal: 'hsl(166, 100%, 37%)',
				cobaltBlue: 'hsl(234, 85%, 45%)',
				paleBlue: 'hsl(221, 100%, 96%)',
				lightLavender: ' hsl(241, 100%, 89%)',
				darkGreyBlue: 'hsl(224, 30%, 27%)',
				lightCream: 'hsl(30, 38%, 92%,0.5)',
				slateBlue: ' hsl(252, 100%, 67%)',
				royalBlue: 'hsl(241, 81%, 54%)',
				violetBlue: 'hsla(256, 72%, 46%, 1)',
				persianBlue: 'hsla(241, 72%, 46%, 0.58)'
			}
		}
	},

	plugins: []
};

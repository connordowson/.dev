/** @type {import('tailwindcss').Config} */
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontSize: {
			"size-0": "clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)",
			base: "clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)",
			"size-1": "clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)",
			"size-2": "clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)",
			"size-3": "clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)",
			"size-4": "clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)",
			"size-5": "clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)",
		},
		fontFamily: {
			body: ["Inter"],
			display: ["Inter Display"],
			mono: ["Berkeley Mono"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		({ matchUtilities, theme }) => {
			matchUtilities(
				{
					highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				},
			);
		},
	],
	darkMode: {
		dark: 'html[data-theme="dark"]',
	},
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		backgroundImage: {
			gradient:
				"linear-gradient(90.38deg, #00fff0 -3.76%, #00f6ff 34.94%, #b896ff 96.73%)",

			secondGradient:
				"linear-gradient(118.82deg,#0078c2 .5%,#0047ff 47.33%,#8453d2 76.12%)",
		},

		screens: {
			lg: "1132px",
			xl: "932px",
		},

		extend: {},
	},
	plugins: [],
}

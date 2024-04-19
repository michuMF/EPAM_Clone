/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		backgroundImage: {
			gradient:
				"linear-gradient(90.38deg, #00fff0 -3.76%, #00f6ff 34.94%, #b896ff 96.73%)",
		},

		screens: {
			lg: "1132px",
			xl: "932px",
		},

		extend: {},
	},
	plugins: [],
}

import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"8xl": "90rem",
			},
			margin: {
				"8xl/2": "max(calc((100dvw - 90rem) / 2), 0px)",
			},
		},
		fontFamily: {
			sans: ["Figtree", "sans-serif"],
		},
	},
	darkMode: "media",
	plugins: [],
} satisfies Config;

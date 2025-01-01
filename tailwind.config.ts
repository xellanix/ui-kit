import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Figtree", "sans-serif"],
		},
	},
	darkMode: ["variant", "&:not(.light *)"],
	plugins: [],
} satisfies Config;

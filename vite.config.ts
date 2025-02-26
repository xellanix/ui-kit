import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./src/pages"),
			"~": path.resolve(__dirname, "./src/components"),
			"&": path.resolve(__dirname, "./src/lib"),
		},
	},
	plugins: [react()],
	build: {
		minify: true,
		assetsInlineLimit: 0,
		rollupOptions: {
			output: {
				manualChunks: {
					"comlink-worker": ["comlink"],
				},
			},
		},
	},
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://bohdan-lytvynenko-dev.github.io',
	base: 'Marchenko-Anastasiia-art-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});

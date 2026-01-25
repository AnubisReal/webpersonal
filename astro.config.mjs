// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone'
	}),
	server: {
		host: true, // Escucha en todas las interfaces de red (0.0.0.0)
		port: 4321  // Puerto por defecto, puedes cambiarlo si lo necesitas
	},
	devToolbar: {
		enabled: false
	}
});

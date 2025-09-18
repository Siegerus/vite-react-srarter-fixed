import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin']
			}
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or "modern"
				silenceDeprecations: ['legacy-js-api'],
			}
		},
		modules: {
			generateScopedName: '[name]__[local]--[hash:base64:5]', // '[path][name]__[local]--[hash:base64:5]'  '[name]__[local]___[hash:base64:5]'
		}
	}
});


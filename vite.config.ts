import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,         // 👈 enables describe, it, expect without importing
		environment: 'jsdom',  // 👈 needed for React DOM tests
	},
})

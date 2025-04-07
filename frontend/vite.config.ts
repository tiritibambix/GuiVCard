import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8190
  },
  build: {
    outDir: './dist',
    sourcemap: true
  }
})
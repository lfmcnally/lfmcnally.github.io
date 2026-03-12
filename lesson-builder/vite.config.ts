import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lesson-builder/build/',
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
})

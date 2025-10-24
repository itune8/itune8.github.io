import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",  // 👈 this line ensures correct asset paths for GitHub Pages
  plugins: [react()],
})

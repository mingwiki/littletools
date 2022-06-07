import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  // server: {
  //   proxy: {
  //     "/benefit": {
  //       target: "https://benefit.jujienet.com",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/benefit/, ""),
  //     },
  //   },
  // },
})

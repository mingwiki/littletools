import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '172.16.57.114',
    port: 3001,
    //   proxy: {
    //     "/benefit": {
    //       target: "https://benefit.jujienet.com",
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/benefit/, ""),
    //     },
    //   },
  },
})

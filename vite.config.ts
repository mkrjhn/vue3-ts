import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080
  }
})

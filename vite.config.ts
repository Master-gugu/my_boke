import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ie>=11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    })
  ],
  resolve: {
    alias: {
      // '@': '/src',
      '@': resolve(__dirname, 'src'),
    }
  },
  base: './',
  // base: './',
  build: {
    outDir: 'docs',
  }
})

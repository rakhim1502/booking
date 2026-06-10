import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        presets: ['@babel/preset-react'],
        plugins: [
          ['babel-plugin-react-compiler', { target: '19' }]
        ]
      }
    })
  ],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
})
import { defineConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  return {
    // base: '/hash-bingo/',
    plugins: [svgr(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    server: {
      host: true,
      port: 8000,
      proxy: {
        '^/api': {
          target: 'https://iwdpir376d.execute-api.ap-northeast-1.amazonaws.com/dev',
          rewrite: path => path.replace(/^\/api/, ''),
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      }
    },
  }
})

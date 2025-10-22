import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const prefix = '/portal/'
// https://vite.dev/config/
export default defineConfig({
  base: prefix,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@images': path.resolve(__dirname, './public/images'),
    }
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
  // 添加静态资源处理配置
  publicDir: 'public',
  build: {
    asssetsPublicPath: prefix,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
const prefix = '/portal/'
export default defineConfig({
  base: prefix,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@/common': fileURLToPath(new URL('./src/common', import.meta.url)),
      '@/locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
      // '@/assets': path.resolve(__dirname, './src/assets'),
      // '@/common': path.resolve(__dirname, './src/common'),
      // '@images': path.resolve(__dirname, './public/images'),
    }
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
  // 添加静态资源处理配置
  publicDir: 'public',
  build: {
    asssetsPublicPath: prefix,
    assetsDir: 'static',
    rollupOptions: {
      output: {
        // 按资源类型组织静态资源
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name)) {
            return 'static/images/[name]-[hash][extname]';
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'static/fonts/[name]-[hash][extname]';
          }
          
          if (/\.css$/i.test(assetInfo.name)) {
            return 'static/css/[name]-[hash][extname]';
          }
          
          return 'static/[name]-[hash][extname]';
        }
      }
    }
  },
})

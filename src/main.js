import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import 'animate.css';
import './style.css'
import i18n from '@/locales/index'
const t = i18n.global.t
const app = createApp(App)
app.config.globalProperties.t = t;

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')

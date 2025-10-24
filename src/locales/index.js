import { createI18n } from 'vue-i18n'

// 导入翻译文件
// import enMessages from '../locales/en'
// import zhCNMessages from '../locales/zh-CN'
import zh from '@/locales/zh-CN.json' // 中文语言包
import en from '@/locales/en.json' // 英文语言包
import vi from '@/locales/vi.json' // 越南语语言包
// 获取用户偏好语言
const getUserLanguage = () => {
  // 优先使用用户保存的语言偏好
  const savedLanguage = localStorage.getItem('language') || 'zh-CN'
  if (savedLanguage) {
    return savedLanguage
  }
  
  // 其次检查浏览器语言
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('zh')) {
    return 'zh-CN'
  }
  if (browserLang.startsWith('vi')) {
    return 'vi'
  }
  // 默认返回英文
  return 'en'
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API模式
  locale: getUserLanguage(), // 默认语言
  fallbackLocale: 'en', // 回退语言改为英文
  messages: {
    'en': en,
    'zh-CN': zh,
    'vi': vi
  },
  silentTranslationWarn: true, // 禁用翻译警告
  silentFallbackWarn: true // 禁用回退警告
})

export default i18n 
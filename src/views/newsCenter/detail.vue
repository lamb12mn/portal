<template>
  <div class="news-detail-page">
    <!-- 页面头部 -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-blue-500 py-20 md:py-24"
    >
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>

      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>

      <!-- 装饰性光晕 -->
      <div
        class="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl opacity-40"
      ></div>
      <div
        class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl opacity-40"
      ></div>

      <div class="container-custom relative z-10 text-center">
        <div
          class="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
        >
          <span class="flex items-center">
            <span
              class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"
            ></span>
            {{ t("nav.newsCenter") }}
          </span>
        </div>

        <h1
          class="title-first-part title-highlight title-bg-animate text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {{ news.title }}
        </h1>
        
        <div class="flex items-center justify-center text-white/90 mt-6">
          <span>{{ news.date }}</span>
          <span class="mx-2">•</span>
          <span>{{ news.category }}</span>
        </div>
      </div>
    </section>

    <!-- 新闻详情内容 -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
        
          <div class="mb-8 overflow-hidden rounded-xl">
            <img 
              :src="news.image" 
              :alt="news.title" 
              class="w-full h-auto"
            >
          </div>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-6" v-for="(paragraph, index) in news.content" :key="index">
             {{ paragraph }}
            </p>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <router-link 
              to="/newsCenter" 
              class="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              返回新闻中心
            </router-link>
            
            <div class="flex space-x-4">
              <button 
                class="flex items-center text-gray-600 hover:text-gray-900"
                @click="shareTo('wechat')"
              >
                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.975 12-11.111 0-6.136-5.373-11.111-12-11.111zm.642 17.204c-1.234 0-2.235-1.081-2.235-2.413 0-1.331 1.001-2.412 2.235-2.412s2.235 1.081 2.235 2.412c0 1.332-1.001 2.413-2.235 2.413zm-5.292-5.569c-.617 0-1.118-1.081-1.118-2.413 0-1.331.501-2.412 1.118-2.412.617 0 1.118 1.081 1.118 2.412 0 1.332-.5 2.413-1.118 2.413zm10.584 0c-.617 0-1.118-1.081-1.118-2.413 0-1.331.501-2.412 1.118-2.412.617 0 1.118 1.081 1.118 2.412 0 1.332-.5 2.413-1.118 2.413z"/>
                </svg>
                <router-link 
                  to="/contact" 
                  class="flex items-center text-gray-600 hover:text-gray-900 font-medium"
                >
                联系我们
              </router-link>
                
              </button>
              <button 
                class="flex items-center text-gray-600 hover:text-gray-900"
              >
                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.277-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.882-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
                <router-link 
                  to="/about" 
                  class="flex items-center text-gray-600 hover:text-gray-900 font-medium"
                >
                了解我们
              </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关推荐 -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">相关推荐</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(related, index) in relatedNews" 
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="h-48 overflow-hidden">
              <img 
                :src="related.image" 
                :alt="related.title" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              >
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ related.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ related.category }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ related.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ related.excerpt }}</p>
              <router-link 
                :to="`/newsCenter/${related.id}`" 
                class="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                阅读更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { newsList } from '@/common/js/data.js'
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const allNews = newsList

// 获取当前新闻
const news = computed(() => {
  const id = parseInt(route.params.id)
  return allNews.find(item => item.id === id) || allNews[0]
})

// 获取相关推荐（排除当前新闻，取前3个）
const relatedNews = computed(() => {
  return allNews.filter(item => item.id !== news.value.id).slice(0, 3)
})

// 分享功能
const shareTo = (platform) => {
  // 这里可以实现具体的分享逻辑
  console.log(`分享到${platform}: ${news.value.title}`)
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 简单的 prose 样式 */
.prose {
  color: #374151;
  max-width: 65ch;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  line-height: 1.75;
}
</style>
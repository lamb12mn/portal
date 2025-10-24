<template>
  <div class="news-center-page">
      <!-- 页面标题区域 - 增加科技感背景和动态元素 -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-20 md:py-24"
    >
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>

      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>

      <!-- 装饰性光晕 -->
      <div
        class="absolute -top-20 -left-20 w-64 h-64 bg--400/30 rounded-full blur-3xl opacity-40"
      ></div>
      <div
        class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl opacity-40"
      ></div>
      <!-- 新增装饰性光晕 -->
      <div
        class="absolute top-1/4 right-1/3 w-40 h-40 bg-secondary-400/20 rounded-full blur-2xl opacity-30 animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/3 w-36 h-36 bg-accent-400/25 rounded-full blur-2xl opacity-35 animate-ping animation-delay-1000"
      ></div>
      <div
        class="absolute top-2/3 left-1/4 w-28 h-28 bg-white/15 rounded-full blur-3xl opacity-25 animate-float"
      ></div>

      <!-- 动态漂浮元素 -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm animate-float"></div>
      <div class="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm animate-float animation-delay-1000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm animate-float animation-delay-2000"></div>

      <!-- 新增动态粒子 -->
      <div class="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-white/40 animate-ping animation-delay-500"></div>
      <div class="absolute top-2/5 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-300/60 animate-pulse animation-delay-1000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-primary-200/50 animate-ping animation-delay-1500"></div>
      <div class="absolute top-3/4 right-1/3 w-2 h-2 rounded-full bg-secondary-300/40 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent-200/50 animate-ping animation-delay-2500"></div>

      <div class="container-custom relative z-10">
        <div
          class="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
        >
          <span class="flex items-center">
            <span
              class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"
            ></span>
            {{$t('newsCenter.index.6bppjrsvnak0')}}
          </span>
        </div>

        <!-- 优化标题效果，保持国际化支持 -->
        <div class="mb-6">
          <h1 class="text-white flex items-center flex-wrap">
            <span class="title-first-part mr-3">{{$t('newsCenter.index.6bppjrsvolk0')}}</span>
            <span class="relative inline-block title-highlight">
              <!-- 背景效果 -->
              <span
                class="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-lg transform rotate-0 border border-white/20 title-bg-animate"
              ></span>

              <!-- 微妙的装饰光点 -->
              <span
                class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-pulse"
              ></span>
              <span
                class="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-60"
                style="animation: pulse 2s infinite; animation-delay: 0.5s"
              ></span>

              <!-- 文字内容 -->
              <span
                class="relative inline-block px-5 py-1.5 text-white font-bold"
              >
                {{$t('newsCenter.index.6bppjrsvosw0')}}
              </span>

              <!-- 底部装饰线 -->
              <span
                class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-300 to--200 rounded-full title-underline-animate"
              ></span>
            </span>
          </h1>
        </div>

        <p class="text-white text-opacity-90 text-xl max-w-2xl">
          {{$t('newsCenter.index.6bppjrsvoww0')}}
        </p>
      </div>
    </section>

    <!-- 新闻列表区域 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{$t('newsCenter.index.6bppjrsvp0k0')}}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{$t('newsCenter.index.6bppjrsvp3o0')}}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(news, index) in newsList" 
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="h-48 overflow-hidden">
              <img 
                :src="news.image" 
                :alt="news.title" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              >
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ news.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ news.category }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ news.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ news.excerpt }}</p>
              <router-link 
                :to="`/newsCenter/${news.id}`" 
                class="text-blue-600 font-medium hover:text-secondary-700 flex items-center"
              >
                {{$t('newsCenter.index.6bppjrsvp6w0')}}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="mt-12 flex justify-center">
          <nav class="flex space-x-2">
            <button 
              v-for="page in totalPages" 
              :key="page"
              @click="currentPage = page"
              :class="[
                'px-4 py-2 rounded-lg',
                currentPage === page 
                  ? 'bg-secondary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ page }}
            </button>
          </nav>
        </div>
      </div>
    </section>

<!-- 联系我们区域 -->
    <section class="section bg-gradient-tech relative overflow-hidden">
      <!-- 科技感背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>

      <!-- 装饰光晕 -->
      <div
        class="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      ></div>

      <div class="container-custom text-center relative z-10">
        <div
          class="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium"
        >
          <span class="flex items-center">
            <span
              class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"
            ></span>
            {{ t("home.contact.badge") }}
          </span>
        </div>

        <h2 class="mb-6 text-white">{{ t("home.contact.title") }}</h2>

        <p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">
          {{ t("home.contact.description") }}
        </p>

        <router-link
          to="/contact"
          class="btn bg-white text--600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
        >
          {{ t("home.contact.btnText") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </router-link>

        <!-- 技术指标 -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div class="text-2xl font-bold text-white mb-1">7 x 24</div>
            <div class="text-white/80 text-sm">
              {{ t("home.contact.stats.support") }}
            </div>
          </div>
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div class="text-2xl font-bold text-white mb-1">50+</div>
            <div class="text-white/80 text-sm">{{$t('newsCenter.index.6bppjrsvpac0')}}</div>
          </div>
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div class="text-2xl font-bold text-white mb-1">20年+</div>
            <div class="text-white/80 text-sm">
              {{ t("home.contact.stats.experience") }}
            </div>
          </div>
          <div
            class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div class="text-2xl font-bold text-white mb-1">98%</div>
            <div class="text-white/80 text-sm">
              {{ t("home.contact.stats.satisfaction") }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { newsList } from '@/common/js/data.js'
const { t, locale } = useI18n();
const updateStructuredData = () => {
  // 移除现有的结构化数据
  const existingScripts = document.querySelectorAll(
    "script[data-structured-data]"
  );
  existingScripts.forEach((script) => script.remove());

  // 添加网站结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://leepm.com/",
    name: t("common.appName"),
    description: t("home.hero.detailedDesc"),
    potentialAction: {
      "@type": "SearchAction",
      target: "https://leepm.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // 添加组织结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://leepm.com",
    name: t("common.appName"),
    logo: "https://leepm.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-XXX-XXXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["Chinese", "English"],
    },
    sameAs: ["https://weibo.com/xiahuaai", "https://github.com/freeleepm"],
  };

  // 注入结构化数据
  let websiteScript = document.createElement("script");
  websiteScript.type = "application/ld+json";
  websiteScript.textContent = JSON.stringify(websiteSchema);
  websiteScript.setAttribute("data-structured-data", "website");
  document.head.appendChild(websiteScript);

  let organizationScript = document.createElement("script");
  organizationScript.type = "application/ld+json";
  organizationScript.textContent = JSON.stringify(organizationSchema);
  organizationScript.setAttribute("data-structured-data", "organization");
  document.head.appendChild(organizationScript);
};
onMounted(() => {
  updateStructuredData();
});
// 监听语言变化，更新页面内容
watch(locale, () => {
  // 更新结构化数据
  updateStructuredData();
});

const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = computed(() => Math.ceil(newsList.length / itemsPerPage))

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
</style>
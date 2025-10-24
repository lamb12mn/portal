<template>
    <!-- 特色产品区域 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div
        class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-70"
      ></div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span
              class="h-px w-8 bg-gradient-to-r from-transparent to-primary-300"
            ></span>
            <span
              class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide"
              >{{ t("home.features.sectionSubtitle") }}</span
            >
            <span
              class="h-px w-8 bg-gradient-to-l from-transparent to-primary-300"
            ></span>
          </div>
          <h2 class="mb-4">{{ t("home.features.sectionTitle") }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{t('components.featuredProducts.6bpnsynsmck0')}} {{t('components.featuredProducts.6bpnsynsnfs0')}}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(product, index) in featuredProducts"
            :key="index"
            class="group relative"
          >
            <!-- 卡片主体 -->
            <div
              class="card h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div class="h-48 bg-gray-100 overflow-hidden relative">
                <!-- 图片 -->
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <!-- 顶部状态指示器 -->
                <div
                  class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm"
                >
                  {{ product.tip }}
                </div>
              </div>

              <div class="p-6 flex flex-col flex-grow">
                <h3
                  class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors"
                >
                  {{ product.title }}
                </h3>
                <p class="text-gray-600 mb-4 flex-grow">
                  {{ product.description }}
                </p>
                <router-link
                  :to="`/products/${product.id}`"
                  class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  {{ t("common.learnMore") }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </router-link>
              </div>
            </div>

            <!-- 悬浮效果遮罩 -->
            <div
              class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 pointer-events-none rounded-xl"
            ></div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <router-link to="/products" class="btn btn-outline group">
            {{ t("home.features.viewAllProducts") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1 inline-block transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
</template>
<script setup>
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
import { productsList } from "../../../common/js/data.js"
// 将特色产品数据改为计算属性，以响应语言变化
const featuredProducts = computed(() => productsList);
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
// 监听语言变化，更新页面内容
watch(locale, () => {
  // 更新结构化数据
  updateStructuredData();
});
</script>
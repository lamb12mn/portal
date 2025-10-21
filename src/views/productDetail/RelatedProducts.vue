<template>
  <section class="section bg-gray-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"
    ></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-10">
        <h2 class="mb-4 text-gray-800">
          {{ t("productDetail.relatedProductsTitle") }}
        </h2>
        <p class="text-gray-600 text-xl max-w-2xl mx-auto">
          {{ t("productDetail.relatedProductsDesc") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="relatedProduct in relatedProducts"
          :key="relatedProduct.id"
          class="card glow-effect hover:border-primary-100 cursor-pointer transition-all duration-300"
          @click="handleProductClick(relatedProduct.id)"
        >
          <!-- 图片部分 -->
          <div class="h-48 bg-gray-100 overflow-hidden relative">
            <img
              :src="relatedProduct.imageUrl"
              :alt="relatedProduct.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm"
            >
              {{ relatedProduct.tip }}
            </div>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 hover:text-primary-600 transition-colors"
            >
              {{ relatedProduct.title }}
            </h3>

            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ relatedProduct.description }}
            </p>

            <button
              class="btn-primary-outline btn-sm inline-flex items-center group hover:bg-primary-50 active:bg-primary-100"
              @click.stop="handleProductClick(relatedProduct.id)"
            >
              {{ t("productDetail.learnMore") }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { productsList } from "@/common/js/data";
const { t } = useI18n();
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
});
// 获取分类名称的方法
const getCategoryName = (categoryId) => {
  // 使用国际化翻译
  return t(`products.filter.categories.${categoryId}`)
}
// 相关产品示例数据
const relatedProducts = computed(() => {
  // 根据当前产品的类别返回相关产品
  const productId = props.product && props.product?.id;
  const _product = productsList.filter((item) => item.id !== productId);
  return _product // 过滤掉当前产品
});
const handleProductClick = (productId) => {
  router.push(`/products/${productId}`);
};
</script>

<style scoped>
.btn-sm {
  @apply px-3 py-1.5 text-sm;
}

.btn-primary-outline {
  @apply text-primary-500 border border-primary-500 rounded-lg px-4 py-2 hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
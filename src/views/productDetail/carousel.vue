<template>
  <div>
    <!-- 图片标题 -->
    <div class="text-center mb-12">
      <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ pro.name }}</h3>
      <p class="t=ext-gray-600 text-lg max-w-2xl mx-auto">
        {{ pro.description }}
      </p>
    </div>
    <!-- 轮播容器 -->
    <div
      class="relative"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
      v-if="false"
    >
      <!-- 轮播内容 -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
          }"
        >
          <div
            v-for="(image, index) in pro.items"
            :key="index"
            class="flex-shrink-0 w-1/3 px-2"
          >
            <div
              class="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer hover:shadow-lg transition-all duration-300"
              @click="openImageViewer(index)"
            >
              <img
                :src="image.image_url"
                :alt="`${product.title} - ${image.content}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- 图片悬浮效果 -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div
                  class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                    />
                  </svg>
                </div>
                <!-- 图片序号指示器 -->
                <div
                  class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full"
                >
                  {{
                    t("productDetail.photoIndex", {
                      current: index + 1,
                      total: product.images.length,
                    })
                  }}
                </div>
              </div>
            </div>
            <!-- 图片标题 -->
            <div class="mt-2 text-center">
              <h4 class="text-sm font-medium text-gray-700 truncate">
                {{ image.content }}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航按钮 -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-primary-600 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-primary-600 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- 指示器 -->
      <div class="flex justify-center mt-4 space-x-2">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-primary-500' : 'bg-gray-300'"
        ></button>
      </div>
    </div>

    <!-- 图片查看器组件 -->
    <ImageViewer
      :images="pro.items.map((item) => item.image_url)"
      :initial-index="currentImageIndex"
      :is-open="isImageViewerOpen"
      @close="closeImageViewer"
    />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import ImageViewer from "@/components/ImageViewer.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const pro = computed(() => props.item);
// 图片查看器状态
const isImageViewerOpen = ref(false)
const currentImageIndex = ref(0)

// 轮播相关状态
const currentIndex = ref(0)
const itemsPerSlide = ref(3)
const autoPlayInterval = ref(null)

// 计算总幻灯片数
const totalSlides = computed(() => {
  if (!pro.value.items) return 0
  return Math.ceil(pro.value.items.length / itemsPerSlide.value)
})

// 计算最大索引
const maxIndex = computed(() => {
  if (!pro.value.items) return 0
  return Math.max(0, totalSlides.value - 1)
})

// 轮播导航函数
const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    // 循环到第一张
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    // 循环到最后一张
    currentIndex.value = maxIndex.value
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// 开始自动播放
const startAutoPlay = () => {
  // 只有当鼠标不在轮播区域上时才开始自动播放
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, 2000) // 每5秒切换一次
}

// 停止自动播放
const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// 监听产品图片变化，重置轮播状态
watch(() => product.value.images, () => {
  currentIndex.value = 0
  startAutoPlay() // 重新开始自动播放
}, { deep: true })

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoPlay()
})
onMounted(() => {
    // 添加页面可见性监听
  document.addEventListener('visibilitychange', handleVisibilityChange)
  
  // 开始自动播放
  startAutoPlay()
})

// 页面可见性API - 当页面不可见时暂停自动播放
const handleVisibilityChange = () => {
  if (document.hidden) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

// 打开图片查看器
const openImageViewer = (index) => {
  currentImageIndex.value = index
  isImageViewerOpen.value = true
  stopAutoPlay() // 打开查看器时暂停自动播放
  // 添加禁止滚动类
  document.body.classList.add('overflow-hidden')
}

// 关闭图片查看器
const closeImageViewer = () => {
  isImageViewerOpen.value = false
  // 移除禁止滚动类
  document.body.classList.remove('overflow-hidden')
  startAutoPlay() // 关闭查看器时恢复自动播放
}
</script>

<!-- src/components/ProductCarousel.vue -->
<template>
  <div>
    <!-- 图片标题 -->
    <div class="text-center mb-12">
      <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ product.name }}</h3>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        {{ product.description }}
      </p>
    </div>
    
    <!-- 轮播容器 -->
    <div class="relative"
         @mouseenter="stopAutoPlay"
         @mouseleave="startAutoPlay">
      <!-- 轮播内容 -->
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out"
             :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div 
            v-for="(item, index) in extendedItems" 
            :key="index" 
            class="flex-shrink-0 w-full flex">
            <!-- 每页显示 itemsPerSlide 个项目 -->
            <div 
              v-for="(subItem, subIndex) in getItemsForPage(index)" 
              :key="`${index}-${subIndex}`"
              class="w-1/3 px-2">
              <div 
                class="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer hover:shadow-lg transition-all duration-300"
                @click="openImageViewer(getOriginalIndex(index, subIndex))">
                <img 
                  :src="subItem.image_url" 
                  :alt="`${productName} - ${subItem.content}`" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  @error="handleImageError"
                  @load="handleImageLoad"/>
                <!-- 图片悬浮效果 -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                    </svg>
                  </div>
                  <!-- 图片序号指示器 -->
                  <div class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {{ $t('productDetail.photoIndex', { current: getOriginalIndex(index, subIndex) + 1, total: product.items.length }) }}
                  </div>
                </div>
              </div>
              <!-- 图片标题 -->
              <div class="mt-2 text-center">
                <h4 class="text-sm font-medium text-gray-700 truncate">
                  {{ subItem.content }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 导航按钮 -->
      <button 
        @click="prevSlide"
        :disabled="totalSlides <= 1"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-primary-600 rounded-full p-2 shadow-lg transition-all duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        @click="nextSlide"
        :disabled="totalSlides <= 1"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-primary-600 rounded-full p-2 shadow-lg transition-all duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- 指示器 -->
      <div class="flex justify-center mt-4 space-x-2" v-if="totalSlides > 1">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-primary-500' : 'bg-gray-300'">
        </button>
      </div>
    </div>
    
    <!-- 图片查看器组件 -->
    <ImageViewer 
      :images="product.items.map(item => item.image_url)" 
      :initial-index="currentImageIndex" 
      :is-open="isImageViewerOpen" 
      @close="closeImageViewer"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import ImageViewer from '@/components/ImageViewer.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  productName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update-current-index'])

// 图片查看器状态
const isImageViewerOpen = ref(false)
const currentImageIndex = ref(0)

// 轮播相关状态
const currentIndex = ref(0)
const itemsPerSlide = ref(3)
const autoPlayInterval = ref(null)
const imageLoadStatus = ref({}) // 跟踪图片加载状态

// 监听产品数据变化，重置轮播状态
watch(() => props.product.items, (newItems) => {
  if (newItems && newItems.length > 0) {
    currentIndex.value = 0
  }
}, { deep: true })

// 计算总幻灯片数
const totalSlides = computed(() => {
  if (!props.product.items) return 0
  return Math.ceil(props.product.items.length / itemsPerSlide.value)
})

// 扩展项目列表以支持无缝循环
const extendedItems = computed(() => {
  if (!props.product.items || props.product.items.length === 0) return []
  // 返回页数，每页代表一个完整的轮播视图
  return Array.from({ length: totalSlides.value }, (_, i) => i)
})

// 获取每页的项目
const getItemsForPage = (pageIndex) => {
  if (!props.product.items || props.product.items.length === 0) return []
  
  const startIndex = pageIndex * itemsPerSlide.value
  const items = []
  
  for (let i = 0; i < itemsPerSlide.value; i++) {
    const actualIndex = startIndex + i
    if (actualIndex < props.product.items.length) {
      items.push(props.product.items[actualIndex])
    } else {
      // 循环到开头实现无缝效果
      items.push(props.product.items[actualIndex % props.product.items.length])
    }
  }
  
  return items
}

// 获取原始索引（用于图片查看器和编号显示）
const getOriginalIndex = (pageIndex, subIndex) => {
  if (!props.product.items || props.product.items.length === 0) return 0
  
  const actualIndex = pageIndex * itemsPerSlide.value + subIndex
  return actualIndex % props.product.items.length
}

// 轮播导航函数
const nextSlide = () => {
  if (totalSlides.value <= 1) return
  
  if (currentIndex.value < totalSlides.value - 1) {
    currentIndex.value++
  } else {
    // 无缝循环：跳转到第一张
    currentIndex.value = 0
  }
  emit('update-current-index', currentIndex.value)
}

const prevSlide = () => {
  if (totalSlides.value <= 1) return
  
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    // 无缝循环：跳转到最后一张
    currentIndex.value = totalSlides.value - 1
  }
  emit('update-current-index', currentIndex.value)
}

const goToSlide = (index) => {
  if (index >= 0 && index < totalSlides.value) {
    currentIndex.value = index
    emit('update-current-index', currentIndex.value)
  }
}

// 无缝循环自动播放
const autoPlay = () => {
  if (totalSlides.value <= 1) return
  
  if (currentIndex.value < totalSlides.value - 1) {
    currentIndex.value++
  } else {
    // 无缝循环：跳转到第一张
    currentIndex.value = 0
  }
  emit('update-current-index', currentIndex.value)
}

// 开始自动播放
const startAutoPlay = () => {
  if (totalSlides.value <= 1) return
  
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(() => {
    autoPlay()
  }, 3000)
}

// 停止自动播放
const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// 处理图片加载错误
const handleImageError = (event) => {
  const img = event.target
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIEVycm9yPC90ZXh0Pgo8L3N2Zz4K'
}

// 处理图片加载完成
const handleImageLoad = (event) => {
  const src = event.target.src
  imageLoadStatus.value[src] = true
}

// 打开图片查看器
const openImageViewer = (originalIndex) => {
  currentImageIndex.value = originalIndex
  isImageViewerOpen.value = true
  stopAutoPlay()
  document.body.classList.add('overflow-hidden')
}

// 关闭图片查看器
const closeImageViewer = () => {
  isImageViewerOpen.value = false
  document.body.classList.remove('overflow-hidden')
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
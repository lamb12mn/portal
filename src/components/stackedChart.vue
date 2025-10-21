<template>
  <div class="image-stack-container">
    <h2>CSS图片叠加堆放切换效果</h2>
    <div class="content-wrapper">
      <!-- 图片堆叠容器 -->
      <div class="image-stack" ref="stackRef">
        <!-- 使用 v-for 循环渲染图片 -->
        <!-- 图片按索引从后往前渲染，确保 z-index 正确 -->
        <div
          v-for="(img, index) in images"
          :key="index"
          class="image-card"
          :class="{ 'active': currentIndex === index }"
          :style="getCardStyle(index)"
        >
          <img :src="img.src" :alt="img.alt" />
        </div>
      </div>

      <!-- 切换按钮 -->
      <div class="controls">
        <button @click="prevImage" :disabled="currentIndex === 0">上一张</button>
        <span class="indicator">{{ currentIndex + 1 }} / {{ images.length }}</span>
        <button @click="nextImage" :disabled="currentIndex === images.length - 1">下一张</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 定义图片数据
const images = ref([
  {
    src: 'https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?w=400',
    alt: '示例图片 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?w=400',
    alt: '示例图片 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?w=400',
    alt: '示例图片 3'
  },
  {
    src: 'https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?w=400',
    alt: '示例图片 4'
  },
  {
    src: 'https://images.unsplash.com/photo-1601544359642-c76c4f7c3221?w=400',
    alt: '示例图片 5'
  }
]);

// 当前显示的图片索引
const currentIndex = ref(0);

// 引用容器元素，用于计算
const stackRef = ref(null);

// 计算每张卡片的样式（位置、旋转、z-index）
const getCardStyle = (index) => {
  const baseZ = 10; // 基础 z-index

  // 只有当前激活的卡片在最前面，其他卡片根据与当前卡片的距离堆叠
  let zIndex = baseZ;
  let transform = '';

  if (index === currentIndex.value) {
    // 当前卡片在最前面，居中
    zIndex = baseZ + 10;
    transform = 'translateX(0) translateY(0) rotate(0deg)';
  } else if (index < currentIndex.value) {
    // 在当前卡片之前的卡片（已看过的），向左下方堆叠
    const diff = currentIndex.value - index;
    zIndex = baseZ + diff;
    
    // 添加更明显的随机偏移和旋转角度，使堆叠更加不规则
    const randomOffsetX = (Math.random() - 0.5) * 100;
    const randomOffsetY = (Math.random() - 0.5) * 100;
    const randomRotation = (Math.random() - 0.5) * 60;
    
    // 增加倍数使偏移更明显，并加入随机性
    transform = `
      translateX(calc(-${diff * 40}px + ${randomOffsetX}px)) 
      translateY(calc(${diff * 30}px + ${randomOffsetY}px)) 
      rotate(calc(-${diff * 20}deg + ${randomRotation}deg))
    `;
  } else {
    // 在当前卡片之后的卡片（未看过的），向右下方堆叠
    const diff = index - currentIndex.value;
    zIndex = baseZ + diff;
    
    // 添加更明显的随机偏移和旋转角度，使堆叠更加不规则
    const randomOffsetX = (Math.random() - 0.5) * 100;
    const randomOffsetY = (Math.random() - 0.5) * 100;
    const randomRotation = (Math.random() - 0.5) * 60;
    
    // 增加倍数使偏移更明显，并加入随机性
    transform = `
      translateX(calc(${diff * 40}px + ${randomOffsetX}px)) 
      translateY(calc(${diff * 30}px + ${randomOffsetY}px)) 
      rotate(calc(${diff * 20}deg + ${randomRotation}deg))
    `;
  }

  return {
    zIndex,
    transform,
    // 添加以中心点为旋转原点的样式
    transformOrigin: 'center center'
  };
};

// 下一张图片
const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  }
};

// 上一张图片
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// 组件挂载后可以添加一些初始化逻辑（可选）
onMounted(() => {
  console.log('图片堆叠组件已加载');
});
</script>

<style scoped>
.image-stack-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

.image-stack-container h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

/* 内容容器，实现左右布局 */
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* 图片堆叠容器 */
.image-stack {
  position: relative;
  width: 400px;
  height: 300px;
  /* 添加一点背景阴影，增加层次感 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

/* 图片卡片样式 */
.image-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /* 启用硬件加速，提升动画性能 */
  transform-origin: center center;
  /* 平滑过渡动画 */
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 控制按钮区域 */
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 120px;
}

.controls button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s;
  width: 100%;
}

.controls button:hover:not(:disabled) {
  background-color: #0056b3;
}

.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.indicator {
  color: #666;
  font-size: 0.9rem;
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .controls {
    flex-direction: row;
    width: 100%;
  }
}
</style>
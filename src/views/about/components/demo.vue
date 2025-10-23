<template>
 <section class="py-24 relative z-10 bg-white overflow-hidden">
     <!-- 背景装饰 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"
      ></div>
      <div class="absolute inset-0 opacity-5">
        <div
          class="h-full w-full"
          style="
            background-image: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.2) 1px,
              transparent 1px
            );
            background-size: 30px 30px;
          "
        ></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div
            class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2"
          >
            <span
              class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >从产品输出到能力输出</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">我们的贡献</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            格硕科技——您极限制造的系统伙伴
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>
        <!-- 使命内容 -->
        <div
          class="relative z-10 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
        >
          <div
            class="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden"
          >
            <!-- 背景装饰 -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-40 h-40 bg-primary-50 rounded-full -ml-20 -mb-20"
            ></div>

            <div class="relative z-10">
              <p
                class="text-xl mb-12 italic text-center text-gray-700 border-l-4 border-primary-500 border-l-0 border-t-0 border-r-0 border-b py-4"
              >
                我们通过“一站式”解决方案，帮助客户降本增效、规避风险。我们分享最佳实践，带动产业链共同进步，引领行业发展趋势。
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div
                  v-for="(item, index) in contentList"
                  :key="index"
                  class="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up card-glass relative overflow-hidden"
                  :class="{
                    'animation-delay-100': index === 0,
                    'animation-delay-300': index === 1,
                    'animation-delay-500': index === 2,
                  }"
                >
                  <!-- 科技感装饰元素 -->
                  <div class="absolute inset-0 pointer-events-none">
                    <div
                      class="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 blur-xl"
                    ></div>
                    <div
                      class="absolute bottom-0 left-0 w-24 h-24 bg-secondary-500/5 rounded-full -ml-12 -mb-12 blur-xl"
                    ></div>
                  </div>

                  <!-- 悬浮效果遮罩 -->
                  <div
                    class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-xl transition-colors duration-300"
                  ></div>
                  <div class="flex flex-col h-full relative z-10">
                    <div class="mb-4">
                      <span
                        class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
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
                            stroke-width="1.5"
                            :d="item.icon"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 class="text-xl font-bold text-primary-600 mb-3">
                      {{ item.title }}
                    </h3>
                    <p class="text-gray-600 mb-4 flex-grow">
                      {{ item.description }}
                    </p>
                    <div
                      class="bg-gray-200 border-2 border-dashed rounded-xl w-full flex items-center justify-center text-gray-400 h-52 overflow-hidden relative"
                    >
                      <img
                        :src="item.imageUrl"
                        :alt="item.imageText"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
     <!-- <div class="contribution-card ">
       <div class="card-container">
         <h2 class="card-title">我们的贡献</h2>
         <p class="card-description">我们通过"一站式"解决方案，帮助客户降本增效、规避风险。我们分享最佳实践，带动产业链共同进步，引领行业发展趋势。</p>
         
         <div class="content-grid">
           <div class="content-item" v-for="(item, index) in contentList" :key="index">
             <div class="icon-animation">
               <div class="animation-circle"></div>
             </div>
             <h3>{{ item.title }}</h3>
             <p>{{ item.description }}</p>
             <div class="image-placeholder">
               <div class="image-content">{{ item.imageText }}</div>
             </div>
           </div>
         </div>
       </div>
     </div> -->
 </section>
</template>

<script>
export default {
  name: 'ContributionCard',
  data() {
    return {
      contentList: [
        {
          title: '对客户的贡献',
          description: '客户生产车间内，我司加热器与模具集成于自动化产线，设备稳定运行，环境整洁有序，高效协同作业，充分展现产品卓越的性能与可靠性。',
          imageText: '客户生产车间图',
          imageUrl: new URL("@/assets/images/about/contribution1.png", import.meta.url),
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        },
        {
          title: '对行业的贡献',
          description: '荣誉墙集中陈列ISO认证、专利证书及客户授予的“优秀供应商”奖牌，彰显企业卓越品质、创新能力与行业高度认可。',
          imageText: '荣誉墙照片',
          imageUrl: new URL("@/assets/images/about/contribution2.png", import.meta.url),
          icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
        {
          title: '团队与幸福',
          description: '团队在徒步拓展中奋力前行，成员间相互鼓励，笑容洋溢，活力四射，展现了卓越的凝聚力与积极向上的精神风貌。',
          imageText: '团队活动照片',
          imageUrl: new URL("@/assets/images/about/contribution3.png", import.meta.url),
          icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        }
      ]
    }
  }
}
</script>

<style scoped>
.contribution-card {
  padding: 20px;
  /* 修改背景与"企业使命"模块一致 */
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  /* 修改阴影效果与"企业使命"模块一致 */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
  position: relative;
  overflow: hidden;
  /* 添加边框 */
  border: 1px solid #e2e8f0;
}

/* 添加与"企业使命"模块一致的背景装饰元素 */
.contribution-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  opacity: 0.5;
}

.contribution-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 35%);
  pointer-events: none;
}

.card-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.card-title {
  text-align: center;
  font-size: 28px;
  /* 修改标题颜色与"企业使命"模块一致 */
  color: #1e293b;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

/* 为标题添加下划线装饰，与"企业使命"模块一致 */
.card-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  /* 修改渐变色与"企业使命"模块一致 */
  background: linear-gradient(to right, transparent, #7c3aed, transparent);
  border-radius: 1px;
}

.card-description {
  text-align: center;
  font-size: 16px;
  /* 修改描述文字颜色与"企业使命"模块一致 */
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.content-item {
  /* 修改背景与"企业使命"模块一致 */
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
  padding: 30px;
  /* 更新阴影效果与"企业使命"模块一致 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  /* 添加边框与"企业使命"模块一致 */
  border: 1px solid #e2e8f0;
}

.content-item:hover {
  transform: translateY(-8px);
  /* 更新悬停阴影效果与"企业使命"模块一致 */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  /* 添加边框颜色变化与"企业使命"模块一致 */
  border-color: #c7d2fe;
}

.content-item h3 {
  /* 修改标题颜色与"企业使命"模块一致 */
  color: #4f46e5;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
}

.content-item p {
  /* 修改描述文字颜色与"企业使命"模块一致 */
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
}

.icon-animation {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  position: relative;
}

.animation-circle {
  width: 100%;
  height: 100%;
  /* 修改渐变色与"企业使命"模块主色调一致 */
  background: linear-gradient(45deg, #7c3aed, #6d28d9);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.image-placeholder {
  height: 150px;
  /* 修改背景与"企业使命"模块一致 */
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  /* 更新边框样式与"企业使命"模块一致 */
  border: 1px dashed #c7d2fe;
}

.image-content {
  /* 修改文字颜色与"企业使命"模块一致 */
  color: #94a3b8;
  font-size: 14px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    /* 修改脉冲阴影颜色与主色调一致 */
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.5);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(124, 58, 237, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .card-title {
    font-size: 24px;
  }
}
</style>
<style scoped>
:root {
  --primary-rgb: 249, 115, 22;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin 20s linear infinite reverse;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.glow-text {
  text-shadow: 0 0 15px rgba(var(--primary-rgb), 0.7),
    0 0 30px rgba(var(--primary-rgb), 0.4),
    0 0 45px rgba(var(--primary-rgb), 0.2);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px 5px rgba(var(--primary-rgb), 0.15);
}

.opacity-0 {
  opacity: 0;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.particle-1,
.particle-2,
.particle-3 {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: particle 10s linear infinite;
}

.particle-2 {
  top: 60%;
  right: 10%;
  animation: particle 12s linear infinite 2s;
}

.particle-3 {
  bottom: 15%;
  left: 20%;
  animation: particle 8s linear infinite 1s;
}

.skill-bar-animate {
  animation: skillBarGrow 1.5s ease forwards;
  animation-play-state: paused;
}

section:hover .skill-bar-animate {
  animation-play-state: running;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particle {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translate(50px, -50px) scale(2);
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(100px, -100px) scale(1);
    opacity: 0;
  }
}

@keyframes skillBarGrow {
  0% {
    width: 0;
  }
  100% {
    width: var(--target-width);
  }
}

/* 添加标题下划线动画 */
.animate-width-grow {
  animation: widthGrow 1.5s ease-out forwards;
}

@keyframes widthGrow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

/* 让组件成为悬停目标 */
section {
  position: relative;
}

section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* 经验卡片样式调整 */
@media (min-width: 768px) {
  .md\:text-right h3.text-2xl,
  .md\:text-left h3.text-2xl {
    font-size: 1.5rem;
    word-break: break-word;
    hyphens: auto;
  }
}
</style>
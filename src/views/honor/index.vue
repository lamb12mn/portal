<template>
  <div class="honor-page">
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
        class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"
      ></div>
      <div
        class="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl opacity-40"
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
            石墨科技 · 品质见证
          </span>
        </div>

        <!-- 优化标题效果，保持国际化支持 -->
        <div class="mb-6">
          <h1 class="text-white flex items-center flex-wrap">
            <span class="title-first-part mr-3">我们的</span>
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
                荣誉资质
              </span>

              <!-- 底部装饰线 -->
              <span
                class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-300 to-primary-200 rounded-full title-underline-animate"
              ></span>
            </span>
          </h1>
        </div>

        <p class="text-white text-opacity-90 text-xl max-w-2xl">
          凭借卓越的技术实力和产品质量，我们获得了行业内外的广泛认可与赞誉
        </p>
      </div>
    </section>

    <!-- 荣誉资质内容 -->
    <div class="container honor-content">
      <!-- 资质证书 -->
      <section class="certificates-section">
      <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-300"></span>
            <span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide">专业认证</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-primary-300"></span>
          </div>
          <h2 class="mb-4">管理体系认证</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">体现了企业在质量管理、环境管理、职业健康安全管理等方面的合规性和规范性。</p>
        </div>
        <div class="certificates-grid">
          <div 
            class="certificate-card" 
            v-for="(certificate, index) in certificates" 
            :key="index"
          >
            <div class="certificate-image">
              <img :src="certificate.image" :alt="certificate.title" />
            </div>
            <div class="certificate-info">
              <h3 class="certificate-title">{{ certificate.title }}</h3>
              <p class="certificate-date">{{ certificate.date }}</p>
              <p class="certificate-description">{{ certificate.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 企业荣誉 -->
      <section class="awards-section">
      <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-secondary-300"></span>
            <span class="mx-3 text-sm font-semibold text-secondary-600 uppercase tracking-wide">卓越，值得信赖</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-secondary-300"></span>
          </div>
          <h2 class="mb-4">荣誉证书</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">技术领先，创新卓越，荣获多项国家及行业权威认证。</p>
        </div>
        <div class="awards-list">
          <div 
            class="award-item" 
            v-for="(award, index) in awards" 
            :key="index"
          >
            <div class="award-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div class="award-content">
              <h3 class="award-title">{{ award.title }}</h3>
              <p class="award-date">{{ award.date }}</p>
              <p class="award-description">{{ award.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 合作伙伴 -->
      <section class="partners-section">
      <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-accent-300"></span>
            <span class="mx-3 text-sm font-semibold text-accent-600 uppercase tracking-wide">口碑相传</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-accent-300"></span>
          </div>
          <h2 class="mb-4">合作伙伴</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">行业跨度大，实现共赢</p>
        </div>
        <div class="partners-grid">
          <div 
            class="partner-card" 
            v-for="(partner, index) in partners" 
            :key="index"
          >
            <div class="partner-logo">
              <img :src="partner.logo" :alt="partner.name" />
            </div>
            <h3 class="partner-name">{{ partner.name }}</h3>
            <p class="partner-description">{{ partner.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { certificates, awards, partners } from '@/common/js/data.js'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) translateX(10px) rotate(10deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.circuit-bg {
  background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 30px 30px;
}

.dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

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

.honor-page {
  padding: 20px 0;
  min-height: calc(100vh - 200px);
}

/* 修改页面头部样式以匹配其他页面的Hero区域风格 */
.page-header {
  background: linear-gradient(rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.9)), url('@/assets/images/hero-bg.jpg') center/cover no-repeat;
  padding: 80px 0;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.page-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.honor-content {
  padding: 0 20px 40px;
}

/* 修改副标题样式，与首页工厂实拍标题样式保持一致，使用蓝色主题 */
.section-title {
  font-size: 1.875rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.75rem;
  text-align: left;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

/* 新增标题动画效果 */
.title-bg-animate {
  animation: subtle-float 6s ease-in-out infinite;
}

.title-underline-animate {
  animation: glow-line 3s ease-in-out infinite;
}

@keyframes subtle-float {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-2px) rotate(0.5deg);
  }
}

@keyframes glow-line {
  0%, 100% {
    opacity: 0.7;
    width: 100%;
  }
  50% {
    opacity: 1;
    width: 95%;
    margin-left: 2.5%;
  }
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.certificate-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.certificate-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  transition: all 0.6s;
}

.certificate-card:hover::before {
  left: 100%;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.certificate-image {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
}

.certificate-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.certificate-card:hover .certificate-image img {
  transform: scale(1.05);
}

.certificate-info {
  padding: 20px;
}

.certificate-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.certificate-date {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.certificate-description {
  color: #64748b;
  line-height: 1.6;
}

.awards-list {
  margin-bottom: 60px;
}

.award-item {
  display: flex;
  align-items: flex-start;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.award-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  transition: all 0.6s;
}

.award-item:hover::before {
  left: 100%;
}

.award-item:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.award-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
}

.award-icon svg {
  color: white;
  width: 24px;
  height: 24px;
}

.award-content {
  flex: 1;
}

.award-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.award-date {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.award-description {
  color: #64748b;
  line-height: 1.6;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.partner-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.partner-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  transition: all 0.6s;
}

.partner-card:hover::before {
  left: 100%;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-card:hover .partner-logo img {
  transform: scale(1.1);
}

.partner-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.partner-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .award-item {
    flex-direction: column;
  }
  
  .award-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .partners-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
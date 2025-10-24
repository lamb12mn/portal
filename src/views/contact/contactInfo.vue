<template>
  <div class="contact-page">
    <!-- 页面标题区域 - 增加科技感背景和动态元素 -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-20 md:py-24">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>
      
      <!-- 装饰性光晕 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
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
        <div class="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
          <span class="flex items-center">
            <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            {{t('contact.contactInfo.6bppuuoo0q80')}}
          </span>
        </div>
        
        <div class="mb-6">
          <h1 class="text-white flex items-center flex-wrap">
            <span class="title-first-part mr-3">{{t('contact.contactInfo.6bppuuoo15o0')}}</span>
            <span class="relative inline-block title-highlight">
              <!-- 背景效果 -->
              <span class="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-lg transform rotate-0 border border-white/20 title-bg-animate"></span>
              
              <!-- 微妙的装饰光点 -->
              <span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-pulse"></span>
              <span class="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-60" style="animation: pulse 2s infinite; animation-delay: 0.5s"></span>
              
              <!-- 文字内容 -->
              <span class="relative inline-block px-5 py-1.5 text-white font-bold">
                {{t('contact.contactInfo.6bppuuoo17g0')}}
              </span>
              
              <!-- 底部装饰线 -->
              <span class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-300 to-primary-200 rounded-full title-underline-animate"></span>
            </span>
          </h1>
        </div>
        
        <p class="text-white text-opacity-90 text-xl max-w-2xl">{{t('contact.contactInfo.6bppuuoo1940')}}</p>
      </div>
    </section>
    <div class="container-custom py-16 md:py-24 relative z-10">
      <div class="contact-container mb-10">
        <div class="contact-content">
          <!-- 新增联系信息标题 -->
          <div class="section-header text-center mb-8">
            <div class="inline-flex items-center justify-center mb-3">
              <span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-300"></span>
              <span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide">{{t('contact.contactInfo.6bppuuoo1a80')}}</span>
              <span class="h-px w-8 bg-gradient-to-l from-transparent to-primary-300"></span>
            </div>
            <h2 class="mb-4">{{t('contact.contactInfo.6bppuuoo1bo0')}}</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
                {{t('contact.contactInfo.6bppuuoo1dc0')}}
              </p>
          </div>
          
          <!-- 新增联系信息卡片容器 -->
          <div class="contact-items-grid">
            <div class="contact-item-card" style="animation-delay: 0.1s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="card-content">
                <label>{{t('contact.contactInfo.6bppuuoo1ek0')}}</label>
                <span>{{t('contact.contactInfo.6bppuuoo1g00')}}</span>
              </div>
            </div>
            
            <div class="contact-item-card" style="animation-delay: 0.4s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="card-content">
                <label>{{t('contact.contactInfo.6bppuuoo1hg0')}}</label>
                <span>13631692183</span>
              </div>
            </div>
            
            <div class="contact-item-card" style="animation-delay: 0.8s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="18 10 18 4 12 4 12 10"></polyline>
                  <rect x="6" y="4" width="12" height="16"></rect>
                  <path d="M6 10h12"></path>
                </svg>
              </div>
              <div class="card-content">
                <label>{{t('contact.contactInfo.6bppuuoo1j40')}}</label>
                <span>0755-81737007</span>
              </div>
            </div>
            
            <div class="contact-item-card" style="animation-delay: 1.4s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 12.5h-1.5a3.5 3.5 0 1 1 0-7H17V12.5z"></path>
                  <path d="M17 17.5h-1.5a3.5 3.5 0 1 1 0-7H17V17.5z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div class="card-content">
                <label>QQ：</label>
                <span>189773627</span>
              </div>
            </div>
            
            <div class="contact-item-card" style="animation-delay: 2.5s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="card-content">
                <label>{{t('contact.contactInfo.6bppuuoo1kg0')}}</label>
                <span>project@goldstonelee.net</span>
              </div>
            </div>
            
            <div class="contact-item-card" style="animation-delay: 3.6s">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="card-content">
                <label>{{t('contact.contactInfo.6bppuuoo1lo0')}}</label>
                <span>{{t('contact.contactInfo.6bppuuoo1n00')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-custom py-16 md:py-24 relative z-10">
      <div class="contact-container">
        <div class="contact-content">
          <!-- 地图区域 -->
          <div class="map-container">
            <h3 class="map-title">{{t('contact.contactInfo.6bppuuoo1o00')}}</h3>
            <div class="map-wrapper">
              <!-- 集成高德地图API -->
              <div id="amap-container" class="map-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 新增联系信息提交区域 -->
    <div class="container-custom py-8 md:py-12 relative z-10">
      <div class="contact-container">
        <div class="contact-form-section">
          <div class="form-header">
            <h3 class="form-title">{{t('contact.contactInfo.6bppuuoo0q80')}}</h3>
            <p class="form-description">{{t('contact.contactInfo.6bppuuoo1pg0')}}</p>
          </div>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">{{t('contact.contactInfo.6bppuuoo1qo0')}} <span class="required">*</span></label>
                <div class="input-wrapper">
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required 
                    class="form-input"
                    :placeholder="t('contact.contactInfo.6bppuuoo1s80')"
                  />
                  <div class="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">{{t('contact.contactInfo.6bppuuoo1tc0')}} <span class="required">*</span></label>
                <div class="input-wrapper">
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    class="form-input"
                    :placeholder="t('contact.contactInfo.6bppuuoo1v00')"
                  />
                  <div class="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">{{t('contact.contactInfo.6bppuuoo1x00')}} <span class="required">*</span></label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="5"
                  class="form-textarea"
                  :placeholder="t('contact.contactInfo.6bppuuoo1y80')"
                ></textarea>
                <div class="textarea-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span v-if="!isSubmitting" class="button-content">
                  <span>{{t('contact.contactInfo.6bppuuoo2040')}}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span v-else class="button-content">
                  <span>{{t('contact.contactInfo.6bppuuoo21c0')}}</span>
                  <div class="loading-spinner"></div>
                </span>
              </button>
            </div>
            
            <div v-if="submitSuccess" class="form-message success">
              <div class="message-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="message-content">
                {{t('contact.contactInfo.6bppuuoo22w0')}}
              </div>
            </div>
            
            <div v-if="submitError" class="form-message error">
              <div class="message-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </div>
              <div class="message-content">
                {{t('contact.contactInfo.6bppuuoo2440')}}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// 表单数据
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// 提交状态
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

// 提交表单
const submitForm = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false
  
  try {
    // 这里应该调用实际的API接口
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 提交成功
    submitSuccess.value = true
    
    // 重置表单
    form.name = ''
    form.email = ''
    form.message = ''
    
    // 3秒后隐藏成功消息
    setTimeout(() => {
      submitSuccess.value = false
    }, 3000)
  } catch (error) {
    submitError.value = true
    
    // 3秒后隐藏错误消息
    setTimeout(() => {
      submitError.value = false
    }, 3000)
  } finally {
    isSubmitting.value = false
  }
}

// 初始化高德地图
const initMap = () => {
  // 创建地图实例
  const map = new AMap.Map('amap-container', {
    zoom: 16,
    center: [114.058224, 22.614097], // 公司坐标
    mapStyle: 'amap://styles/normal' // 设置地图样式
  })

  // 添加标记点
  const marker = new AMap.Marker({
    position: [114.058224, 22.614097],
    title: t('contact.contactInfo.6bppuuoo2500'),
    map: map
  })

  // 添加信息窗口
  const infoWindow = new AMap.InfoWindow({
    content: `<div style="padding: 8px 12px;"><h4 style="margin: 0 0 5px 0; font-weight: bold;">${t('contact.contactInfo.6bppuuoo2500')}</h4><p style="margin: 0;">${t('contact.adress')}</p><button id="nav-button" style="margin-top: 8px; padding: 4px 10px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">${t('contact.daoHangDaoZheLi')}</button></div>`,
    offset: new AMap.Pixel(0, -30)
  })

  // 默认打开信息窗口
  infoWindow.open(map, marker.getPosition())

  // 点击标记点时打开信息窗口
  marker.on('click', () => {
    infoWindow.open(map, marker.getPosition())
  })

  // 添加导航功能
  map.on('click', (e) => {
    openMap()
  })

  // 监听信息窗口中的导航按钮点击
  setTimeout(() => {
    const navButton = document.getElementById('nav-button')
    if (navButton) {
      navButton.addEventListener('click', (e) => {
        e.stopPropagation()
        openMap()
      })
    }
  }, 100)
}

// 打开高德地图导航
const openMap = () => {
  const gaodeMapUrl = 'https://uri.amap.com/navigation?to=114.058224,22.614097&mode=car'
  window.open(gaodeMapUrl, '_blank')
}

onMounted(() => {
  // 确保高德地图API加载完成后再初始化地图
  if (window.AMap) {
    initMap()
  } else {
    // 如果API未加载完成，等待加载完成后再初始化
    window.onAMapCallback = () => {
      initMap()
    }
  }
})
</script>

<style scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  padding: 0; /* 修改为0以铺满宽度 */
  box-sizing: border-box;
  background: linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%);
  overflow: hidden;
}

.contact-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 新增联系信息卡片网格样式 */
.contact-items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.contact-item-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 12px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.contact-item-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05));
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: -1;
}

.contact-item-card:hover:before {
  opacity: 1;
  transform: scale(1.05);
}

.contact-item-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
}

.card-icon {
  margin-right: 12px;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.contact-item-card:hover .card-icon {
  background: #3b82f6;
  color: white;
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
}

.card-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  transition: all 0.4s ease;
}

.contact-item-card:hover .card-content {
  transform: translateX(5px);
}

.card-content label {
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 2px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.contact-item-card:hover .card-content label {
  color: #3b82f6;
}

.card-content span {
  color: #475569;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-item-card:hover .card-content span {
  color: #1e3a8a;
  font-weight: 600;
}

.map-container {
  flex: 1;
  min-width: 300px;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: slideInLeft 0.5s ease-out;
  animation-fill-mode: both;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.info-item:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(96, 165, 250, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.info-item:hover:before {
  opacity: 1;
}

.info-item:nth-child(1) { animation-delay: 0.1s; }
.info-item:nth-child(2) { animation-delay: 0.2s; }
.info-item:nth-child(3) { animation-delay: 0.3s; }
.info-item:nth-child(4) { animation-delay: 0.4s; }
.info-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  margin-right: 15px;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.info-item:hover .icon-wrapper {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.info-item label {
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 3px;
  font-size: 0.9rem;
}

.info-item span {
  color: #475569;
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
}

.map-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 20px;
}

.map-wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;
}

.map-placeholder {
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
  cursor: pointer;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  background: linear-gradient(135deg, #bae6fd 0%, #e0f2fe 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* 科技感背景样式 */
.circuit-bg {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dot-grid {
  background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 新增标题样式 */
.title-first-part {
  font-size: 2.75rem;
  line-height: 3rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-highlight {
  font-size: 2.75rem;
  line-height: 3rem;
  transition: all 0.3s ease;
}

.title-highlight:hover {
  transform: translateY(-2px);
}

.title-highlight .absolute.bottom-0 {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.title-highlight:hover .absolute.bottom-0 {
  opacity: 1;
  height: 2px;
  transform: translateY(-1px);
}

/* 标题动画效果 */
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

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* 新增联系表单样式 */
.contact-form-section {
  padding: 30px 0;
  position: relative;
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.form-header::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  margin: 15px auto 0;
  border-radius: 2px;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.form-description {
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: 500;
  color: #334155;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.required {
  color: #ef4444;
}

.input-wrapper,
.textarea-wrapper {
  position: relative;
}

.input-wrapper .input-icon,
.textarea-wrapper .textarea-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  transition: all 0.3s ease;
  pointer-events: none;
}

.textarea-wrapper .textarea-icon {
  top: 15px;
  transform: none;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 50px 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  padding: 16px 50px 16px 16px;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.form-input:focus + .input-icon,
.form-textarea:focus + .textarea-icon {
  color: #3b82f6;
}

.form-actions {
  text-align: center;
  margin-top: 30px;
}

.submit-button {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 1.05rem;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.submit-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: all 0.6s ease;
}

.submit-button:hover:not(:disabled)::before {
  left: 100%;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.form-message {
  margin-top: 25px;
  padding: 16px 20px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  animation: fadeIn 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-message.success {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border: 1px solid #86efac;
  color: #166534;
}

.form-message.error {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #fca5a5;
  color: #991b1b;
}

.message-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.message-content {
  font-weight: 500;
}

/* 科技感装饰元素 */
.contact-form-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  opacity: 0.5;
}

.contact-form-section::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  opacity: 0.2;
  animation: pulse 3s infinite;
}

.contact-form-section .form-header::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 20px;
  width: 30px;
  height: 30px;
  border: 2px solid #3b82f6;
  transform: rotate(45deg);
  opacity: 0.2;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
    margin-top: 50px;
  }
  
  .contact-content {
    flex-direction: column;
  }
  
  /* 调整联系信息卡片网格为移动端布局 */
  .contact-items-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-item-card {
    flex-direction: row;
    padding: 12px;
  }
  
  .card-content {
    flex-direction: column;
  }
  
  .card-content label {
    margin-bottom: 2px;
  }
  
  .map-placeholder {
    height: 300px;
  }
  
  .contact-form-section {
    padding: 20px 0;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .form-description {
    font-size: 1rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 12px 45px 12px 14px;
  }
  
  .form-textarea {
    min-height: 120px;
    padding: 14px 45px 14px 14px;
  }
  
  .submit-button {
    width: 100%;
    padding: 14px;
  }
  
  .contact-form-section::after,
  .contact-form-section .form-header::before {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .contact-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-title {
    font-size: 1.6rem;
  }
}
</style>
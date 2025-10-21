<template>
  <div class="about-page bg-gray-50">
    <!-- 科技风格背景元素 -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div class="absolute w-full h-full" style="background-image: radial-gradient(circle at 30% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(var(--primary-rgb), 0.15) 0%, transparent 35%);"></div>
      <div class="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4 opacity-20">
        <div v-for="i in 144" :key="i" class="border border-gray-200"></div>
      </div>
    </div>

    <!-- 头部区域 - 公司介绍 -->
    <section class="relative py-32 overflow-hidden z-10 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      <!-- 装饰元素 -->
      <div class="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white opacity-10"></div>
        <div class="absolute left-1/3 top-3/4 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255,255,255,0.1)" d="M0,160 C320,220 420,120 720,120 C1020,120 1120,200 1440,180 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- 公司Logo区域 -->
          <div class="relative">
            <!-- Logo背景装饰 -->
            <div class="absolute -inset-2 bg-gradient-to-br from-white/30 to-white/5 rounded-full blur-sm animate-pulse-slow"></div>
            <div class="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl hover:border-white/40 transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-b from-primary-400/30 to-primary-800/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <img src="@/assets/images/shawn-avatar.jpg" alt="格硕科技" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>

            <!-- 装饰圆环 -->
            <div class="absolute -inset-5 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
            <div class="absolute -inset-10 border-1 border-dotted border-white/10 rounded-full animate-spin-reverse-slow"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-300/10 rounded-full blur-md"></div>
            
            <!-- 装饰粒子 -->
            <div class="particle-1"></div>
            <div class="particle-2"></div>
            <div class="particle-3"></div>
          </div>
          
          <!-- 公司信息 -->
          <div class="text-white text-center lg:text-left">
            <div class="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-light tracking-wide animate-float">
              <span class="animate-pulse-slow inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              {{ t('about.subtitle') }}
            </div>
            <h1 class="text-5xl font-light tracking-wider mb-4 opacity-0 animate-fade-in-up">
              <span class="text-white">格硕科技</span>
              <span class="font-bold relative ml-2 text-primary-300 glow-text">
                AI<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-300"></span>
              </span>
            </h1>
            <p class="text-xl mb-6 text-white/90 font-light tracking-widest opacity-0 animate-fade-in-up animation-delay-200">{{ t('about.role') }}</p>
            <p class="text-lg mb-8 max-w-2xl backdrop-blur-sm bg-white/5 p-5 rounded-lg border border-white/10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400 hover:bg-white/10 transition-colors duration-500">
              致力于人工智能技术的研发与应用，为客户提供创新的AI解决方案，推动各行业智能化转型。
            </p>
            
            <!-- 公司联系信息 -->
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600">
              <a href="mailto:project@goldstonelee.net" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>project@goldstonelee.net</span>
              </a>
              
              <a href="tel:13631692183" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>136-3169-2183</span>
              </a>

              <a href="#" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297a16.1 16.1 0 0 0-16.1 16.1v430A16.1 16.1 0 0 0 398 760a15.9 15.9 0 0 0 25.3-13.1l296.1-214.7c8.5-6.2 8.5-20.1 0-33.1z" />
                </svg>
                <span>深圳市石金科技有限公司</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 波浪底部装饰 -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full" preserveAspectRatio="none" height="80">
          <path fill="#f8fafc" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,218.7C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- 技能区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.skills.expertise') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">核心技术</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">我们在人工智能领域拥有多项核心技术，为客户提供全方位的AI解决方案</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 技能卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(category, index) in skills" :key="index" 
               class="card p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 rounded-2xl bg-white relative overflow-hidden group transform hover:-translate-y-2 opacity-0"
               :class="{'animate-fade-in-up': true, 'animation-delay-200': index === 0, 'animation-delay-400': index === 1}">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 right-0 w-40 h-40 bg-primary-50 rounded-full -mr-20 -mb-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <!-- 标题和图标 -->
            <div class="flex items-center mb-8 relative z-10">
              <div class="w-14 h-14 rounded-xl bg-primary-100 text-primary-500 flex items-center justify-center mr-5 shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="category.icon" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold">{{ t(category.name) }}</h3>
            </div>
            
            <!-- 技能条 -->
            <div class="space-y-6 relative z-10">
              <div v-for="(skill, i) in category.items" :key="i" 
                   class="transform transition-all duration-500 hover:translate-x-2"
                   :style="`transition-delay: ${i * 100}ms`">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-800">{{ skill.name.includes('.') ? t(skill.name) : skill.name }}</span>
                  <span class="text-primary-600 font-light">{{ skill.level }}%</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative">
                  <div class="absolute top-0 left-0 h-full w-full bg-gray-200 rounded-full" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px);"></div>
                  <div class="h-full rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 relative z-10 skill-bar-animate" 
                       :style="`width: 0%; --target-width: ${skill.level}%`">
                    <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full border-2 border-white bg-primary-500 shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-500" :style="`transition-delay: ${i * 150 + 300}ms`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 经历区域 -->
    <section class="py-24 relative z-10 bg-white overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full" style="background-image: radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px); background-size: 30px 30px;"></div>
      </div>
      
      <div class="container mx-auto px-6 relative">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.experience.careerJourney') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">发展历程</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">格硕科技自成立以来，不断创新发展，为客户提供优质的人工智能解决方案</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 时间线 -->
        <div class="relative max-w-5xl mx-auto">
          <!-- 中间线 -->
          <div class="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 transform md:-translate-x-1/2"></div>
          
          <div class="space-y-24">
            <div v-for="(exp, index) in experiences" :key="index" 
                 class="relative flex flex-col md:flex-row items-start group opacity-0"
                 :class="{'animate-fade-in-up': true, 'animation-delay-100': index === 0, 'animation-delay-300': index === 1, 'animation-delay-500': index === 2, 'animation-delay-700': index === 3}">
              <!-- 时间点 -->
              <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-xl bg-white border border-primary-300 z-10 flex items-center justify-center shadow-lg group-hover:border-primary-500 group-hover:border-2 transition-all duration-300">
                <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <!-- 内容框-左侧 -->
              <div class="md:w-1/2 md:pr-16 md:text-right order-1 md:order-1" :class="index % 2 === 0 ? 'md:block' : 'md:hidden'">
                <div class="ml-16 md:ml-0 md:mr-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <span class="text-primary-500 font-medium block mb-2">{{ exp.period }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">{{ t(exp.title) }}</h3>
                  <p class="text-gray-500 mb-4 font-light">{{ exp.company }}</p>
                  <p class="text-gray-600 leading-relaxed">{{ exp.description }}</p>
                </div>
              </div>
              
              <!-- 空位 -->
              <div class="md:w-1/2 invisible order-1 md:order-2" :class="index % 2 === 0 ? 'md:hidden' : 'md:block'"></div>
              
              <!-- 内容框-右侧 -->
              <div class="md:w-1/2 md:pl-16 md:text-left order-1 md:order-2" :class="index % 2 === 0 ? 'md:hidden' : 'md:block'">
                <div v-if="index % 2 !== 0" class="ml-16 md:ml-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <span class="text-primary-500 font-medium block mb-2">{{ exp.period }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">{{ t(exp.title) }}</h3>
                  <p class="text-gray-500 mb-4 font-light">{{ exp.company }}</p>
                  <p class="text-gray-600 leading-relaxed">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-6 relative">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.contact.stayConnected') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">联系我们</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">如有合作意向或任何问题，请随时与我们联系</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 联系卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="mailto:project@goldstonelee.net" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-100">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">电子邮箱</h3>
              <p class="text-gray-600">project@goldstonelee.net</p>
            </div>
          </a>
          
          <a href="tel:13631692183" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-300">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">联系电话</h3>
              <p class="text-gray-600">136-3169-2183</p>
            </div>
          </a>
          
          <a href="#" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-500">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">公司地址</h3>
              <p class="text-gray-600">深圳市宝安区西乡街道</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 技能数据
const skills = [
  {
    name: 'about.skills.development',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: [
      { name: '自然语言处理', level: 95 },
      { name: '计算机视觉', level: 85 },
      { name: '机器学习', level: 90 },
      { name: '深度学习', level: 88 },
      { name: '数据挖掘', level: 80 }
    ]
  },
  {
    name: 'about.skills.aiAndData',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: [
      { name: '智能客服系统', level: 85 },
      { name: '图像识别', level: 80 },
      { name: '语音识别', level: 90 },
      { name: '推荐系统', level: 78 },
      { name: '数据分析', level: 88 }
    ]
  }
];

// 经历数据
const experiences = [
  {
    period: '2023年',
    title: 'AI智能客服系统上线',
    company: '格硕科技',
    description: '推出基于自然语言处理的智能客服系统，为客户提供7*24小时智能咨询服务，提升客户满意度30%。'
  },
  {
    period: '2022年',
    title: '计算机视觉项目落地',
    company: '格硕科技',
    description: '成功研发图像识别系统，应用于工业质检领域，帮助制造企业提升质检效率50%以上。'
  },
  {
    period: '2021年',
    title: '成立格硕科技',
    company: '格硕科技',
    description: '深圳市石金科技有限公司正式成立，专注于人工智能技术研发与应用。'
  },
  {
    period: '2020年',
    title: '核心技术研发',
    company: '格硕科技',
    description: '组建AI研发团队，开始研发自然语言处理和计算机视觉核心技术。'
  }
];

// 添加结构化数据
onMounted(() => {
  // 关于页面的结构化数据
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "关于格硕科技",
    "description": "了解格硕科技的故事、团队和技术理念，以及我们如何通过技术创新推动行业发展。",
    "publisher": {
      "@type": "Organization",
      "name": "格硕科技",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xiahua-ai.com/logo.png"
      }
    }
  };
  
  // 面包屑导航结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://xiahua-ai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "关于我们",
        "item": "https://xiahua-ai.com/about"
      }
    ]
  };
  
  // 公司信息结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "格硕科技",
    "description": "致力于人工智能技术的研发与应用，为客户提供创新的AI解决方案，推动各行业智能化转型。",
    "url": "https://xiahua-ai.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "project@goldstonelee.net",
      "telephone": "136-3169-2183",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "西乡街道",
      "addressLocality": "深圳市",
      "addressRegion": "广东省"
    }
  };
  
  // 注入结构化数据
  let aboutScript = document.createElement('script');
  aboutScript.type = 'application/ld+json';
  aboutScript.textContent = JSON.stringify(aboutPageSchema);
  document.head.appendChild(aboutScript);
  
  let breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
  
  let organizationScript = document.createElement('script');
  organizationScript.type = 'application/ld+json';
  organizationScript.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(organizationScript);
  
  // 技能条动画
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-animate').forEach(bar => {
      const targetWidth = bar.style.getPropertyValue('--target-width');
      bar.style.width = targetWidth;
    });
  }, 1000);
});
</script>

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
  text-shadow: 0 0 15px rgba(var(--primary-rgb), 0.7), 0 0 30px rgba(var(--primary-rgb), 0.4), 0 0 45px rgba(var(--primary-rgb), 0.2);
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

.particle-1, .particle-2, .particle-3 {
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
  0%, 100% {
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
  0%, 100% {
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
  content: '';
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
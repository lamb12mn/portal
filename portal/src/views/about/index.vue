    <!-- 企业使命区域 -->
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">价值创造的三大维度</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">企业使命</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">为客户创造竞争优势，为行业构建共赢生态，为员工搭建成就舞台</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 使命内容 -->
        <div class="relative z-10 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
          <div class="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <!-- 背景装饰 -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32"></div>
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-primary-50 rounded-full -ml-20 -mb-20"></div>
            
            <div class="relative z-10">
              <p class="text-xl mb-12 italic text-center text-gray-700 border-l-4 border-primary-500 border-l-0 border-t-0 border-r-0 border-b py-4">
                以材料与技术的集成创新，为客户创造竞争优势，为行业构建共赢生态，为员工搭建成就舞台。
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <!-- 使用missions数组动态生成卡片 -->
                <div v-for="(mission, index) in missions" :key="index" class="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div class="flex flex-col h-full">
                    <div class="mb-4">
                      <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="mission.icon" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="text-xl font-bold text-primary-600 mb-3">{{ mission.title }}</h3>
                    <p class="text-gray-600 mb-4 flex-grow">{{ mission.description }}</p>
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 flex items-center justify-center text-gray-400">
                      {{ mission.imageText }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
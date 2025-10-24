<template>
  <div class="about-page bg-gray-50">
    <!-- 科技风格背景元素 -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div
        class="absolute w-full h-full"
        style="
          background-image: radial-gradient(
              circle at 30% 20%,
              rgba(var(--primary-rgb), 0.15) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(var(--primary-rgb), 0.15) 0%,
              transparent 35%
            );
        "
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4 opacity-20"
      >
        <div v-for="i in 144" :key="i" class="border border-gray-200"></div>
      </div>
    </div>

    <!-- 头部区域 - 公司介绍 -->
    <section
      class="relative py-32 overflow-hidden z-10 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600"
    >
      <!-- 装饰元素 -->
      <div
        class="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none"
      >
        <div
          class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white opacity-10"
        ></div>
        <div
          class="absolute left-1/3 top-3/4 w-64 h-64 rounded-full bg-white opacity-10"
        ></div>
        <svg
          class="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,160 C320,220 420,120 720,120 C1020,120 1120,200 1440,180 L1440,200 L0,200 Z"
          ></path>
        </svg>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- 公司Logo区域 -->
          <div class="relative">
            <!-- Logo背景装饰 -->
            <div
              class="absolute -inset-2 bg-gradient-to-br from-white/30 to-white/5 rounded-full blur-sm animate-pulse-slow"
            ></div>
            <div
              class="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl hover:border-white/40 transition-all duration-500"
            >
              <div
                class="absolute inset-0 bg-gradient-to-b from-primary-400/30 to-primary-800/30 opacity-0 hover:opacity-100 transition-opacity duration-500"
              ></div>
              <img
                src="@/assets/images/about/shawn-avatar.jpg"
                :alt="$t('about.index.6bpprduwuyc0')"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <!-- 装饰圆环 -->
            <div
              class="absolute -inset-5 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"
            ></div>
            <div
              class="absolute -inset-10 border-1 border-dotted border-white/10 rounded-full animate-spin-reverse-slow"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-300/10 rounded-full blur-md"
            ></div>

            <!-- 装饰粒子 -->
            <div class="particle-1"></div>
            <div class="particle-2"></div>
            <div class="particle-3"></div>
          </div>

          <!-- 公司信息 -->
          <div class="text-white text-center lg:text-left">
            <div
              class="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-light tracking-wide animate-float"
            >
              <span
                class="animate-pulse-slow inline-block w-2 h-2 rounded-full bg-green-400 mr-2"
              ></span>
              {{$t('about.index.6bpprduwvgk0')}}
            </div>
            <h1
              class="text-5xl font-light tracking-wider mb-4 opacity-0 animate-fade-in-up"
            >
              <span class="text-white">{{$t('about.index.6bpprduwuyc0')}}</span>
              <span class="font-bold relative ml-2 text-primary-300 glow-text">
                {{$t('about.index.6bpprduwvkc0')}}<span
                  class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-300"
                ></span>
              </span>
            </h1>
            <p
              class="text-xl mb-6 text-white/90 font-light tracking-widest opacity-0 animate-fade-in-up animation-delay-200"
            >
              {{$t('about.index.6bpprduww1c0')}}
            </p>
            <p
              class="text-lg mb-8 max-w-2xl backdrop-blur-sm bg-white/5 p-5 rounded-lg border border-white/10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400 hover:bg-white/10 transition-colors duration-500"
            >
              {{$t('about.index.6bpprduww340')}}
            </p>

            <!-- 公司联系信息 -->
            <div
              class="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600"
            >
              <a
                href="mailto:project@goldstonelee.net"
                class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>project@goldstonelee.net</span>
              </a>

              <a
                href="tel:13631692183"
                class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>136-3169-2183</span>
              </a>

              <a
                href="#"
                class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                >
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                  />
                  <path
                    d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297a16.1 16.1 0 0 0-16.1 16.1v430A16.1 16.1 0 0 0 398 760a15.9 15.9 0 0 0 25.3-13.1l296.1-214.7c8.5-6.2 8.5-20.1 0-33.1z"
                  />
                </svg>
                <span>{{$t('about.index.6bpprduww500')}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 波浪底部装饰 -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="w-full"
          preserveAspectRatio="none"
          height="80"
        >
          <path
            fill="#f8fafc"
            fill-opacity="1"
            d="M0,96L48,128C96,160,192,224,288,218.7C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- 技能区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden" v-if="false">
      <div class="container mx-auto px-6">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >{{ t("about.skills.expertise") }}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprduww6w0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprduww8c0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 技能卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            v-for="(category, index) in skills"
            :key="index"
            class="card p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 rounded-2xl bg-white relative overflow-hidden group transform hover:-translate-y-2 opacity-0"
            :class="{
              'animate-fade-in-up': true,
              'animation-delay-200': index === 0,
              'animation-delay-400': index === 1,
            }"
          >
            <!-- 背景装饰 -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-40 h-40 bg-primary-50 rounded-full -mr-20 -mb-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            ></div>

            <!-- 标题和图标 -->
            <div class="flex items-center mb-8 relative z-10">
              <div
                class="w-14 h-14 rounded-xl bg-primary-100 text-primary-500 flex items-center justify-center mr-5 shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    :d="category.icon"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold">{{ t(category.name) }}</h3>
            </div>

            <!-- 技能条 -->
            <div class="space-y-6 relative z-10">
              <div
                v-for="(skill, i) in category.items"
                :key="i"
                class="transform transition-all duration-500 hover:translate-x-2"
                :style="`transition-delay: ${i * 100}ms`"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-800">{{
                    skill.name.includes(".") ? t(skill.name) : skill.name
                  }}</span>
                  <span class="text-primary-600 font-light"
                    >{{ skill.level }}%</span
                  >
                </div>
                <div
                  class="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative"
                >
                  <div
                    class="absolute top-0 left-0 h-full w-full bg-gray-200 rounded-full"
                    style="
                      background-image: repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 5px,
                        rgba(0, 0, 0, 0.03) 5px,
                        rgba(0, 0, 0, 0.03) 10px
                      );
                    "
                  ></div>
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 relative z-10 skill-bar-animate"
                    :style="`width: 0%; --target-width: ${skill.level}%`"
                  >
                    <div
                      class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full border-2 border-white bg-primary-500 shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-500"
                      :style="`transition-delay: ${i * 150 + 300}ms`"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业初心区域 -->
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
            >{{$t('about.index.6bpprduwwls0')}}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprduwwns0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprduwwpc0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 初心内容 -->
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
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                <!-- 左侧：实验室特写 -->
                <div
                  class="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up card-glass relative overflow-hidden"
                  style="animation-delay: 300ms"
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 class="text-xl font-bold text-primary-600 mb-3">
                      {{$t('about.index.6bpprduwwqw0')}}
                    </h3>
                    <p class="text-gray-600 mb-4 flex-grow">
                      {{$t('about.index.6bpprduwxe80')}}
                    </p>
                    <div
                      class="bg-gray-200 border-2 border-dashed rounded-xl w-full flex items-center justify-center text-gray-400 h-72 overflow-hidden relative"
                    >
                      <img
                        src="@/assets/images/about/originalAspiration1.png"
                        :alt="$t('about.index.6bpprduwwqw0')"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <!-- 右侧：团队协作originalAspiration -->
                <div
                  class="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up card-glass relative overflow-hidden"
                  style="animation-delay: 500ms"
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 class="text-xl font-bold text-primary-600 mb-3">
                      {{$t('about.index.6bpprduwyl80')}}
                    </h3>
                    <p class="text-gray-600 mb-4 flex-grow">
                      {{$t('about.index.6bpprduwyrw0')}}
                    </p>
                   <div
                      class="bg-gray-200 border-2 border-dashed rounded-xl w-full flex items-center justify-center text-gray-400 h-72 overflow-hidden relative"
                    >
                      <img
                        src="@/assets/images/about/originalAspiration2.png"
                        :alt="$t('about.index.6bpprduwwqw0')"
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
    </section>

    <!-- 企业使命区域 -->
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
            >{{$t('about.index.6bpprduwyw40')}}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprduwz040')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprduwz440')}}
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
                {{$t('about.index.6bpprduwz7o0')}}
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div
                  v-for="(item, index) in missions"
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
    </section>

    <!-- 企业愿景区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <!-- 背景装饰 -->
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >{{$t('about.index.6bpprduwzek0')}}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprduwzjk0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprduwzmg0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 愿景内容 -->
        <div class="relative z-10">
          <div
            class="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden card-glass"
          >
            <!-- 科技感装饰元素 -->
            <div class="absolute inset-0 pointer-events-none">
              <div
                class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse-slow"
              ></div>
              <div
                class="absolute bottom-0 right-1/4 w-48 h-48 bg-violet-500/10 rounded-full -mr-24 -mb-24 blur-3xl animate-pulse-slow animation-delay-1000"
              ></div>
            </div>
            
            <div class="relative z-10">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- 概念图区域 -->
                <div class="relative">
                  <div class="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gradient-to-br from-gray-900 to-black p-8">
                    <!-- 背景网格 -->
                    <div class="absolute inset-0 opacity-20">
                      <div 
                        class="w-full h-full"
                        style="background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                               background-size: 30px 30px;"
                      ></div>
                    </div>
                    
                    <!-- 中央核心材料 -->
                    <div class="relative flex justify-center items-center h-64">
                      <div class="relative z-20">
                        <div class="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl transform rotate-45 shadow-2xl flex items-center justify-center animate-pulse-slow">
                          <div class="w-16 h-16 bg-white/20 rounded transform -rotate-45"></div>
                        </div>
                        <p class="text-white text-center mt-4 font-medium">{{$t('about.index.6bpprduwzpo0')}}</p>
                      </div>
                      
                      <!-- 光路连接 -->
                      <div class="absolute inset-0">
                        <!-- 连接到半导体芯片 -->
                        <div class="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fade-in-up animation-delay-300">
                          <div class="flex flex-col items-center">
                            <div class="w-1 h-20 bg-gradient-to-b from-blue-500/50 to-transparent mb-2 animate-pulse"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              </svg>
                            </div>
                            <p class="text-white text-sm mt-2 text-center">{{$t('about.index.6bpprduwzso0')}}</p>
                          </div>
                        </div>
                        
                        <!-- 连接到航空航天器 -->
                        <div class="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-0 animate-fade-in-up animation-delay-500">
                          <div class="flex flex-col items-center">
                            <div class="w-1 h-20 bg-gradient-to-b from-violet-500/50 to-transparent mb-2 animate-pulse animation-delay-200"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p class="text-white text-sm mt-2 text-center">{{$t('about.index.6bpprduwzvk0')}}</p>
                          </div>
                        </div>
                        
                        <!-- 连接到新能源汽车 -->
                        <div class="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 opacity-0 animate-fade-in-up animation-delay-700">
                          <div class="flex flex-col items-center">
                            <div class="w-1 h-20 bg-gradient-to-t from-blue-500/50 to-transparent mb-2 animate-pulse animation-delay-400"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p class="text-white text-sm mt-2 text-center">{{$t('about.index.6bpprduwzyc0')}}</p>
                          </div>
                        </div>
                        
                        <!-- 连接到工业生态 -->
                        <div class="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2 opacity-0 animate-fade-in-up animation-delay-900">
                          <div class="flex flex-col items-center">
                            <div class="w-1 h-20 bg-gradient-to-t from-violet-500/50 to-transparent mb-2 animate-pulse animation-delay-600"></div>
                            <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p class="text-white text-sm mt-2 text-center">{{$t('about.index.6bpprdux00o0')}}</p>
                          </div>
                        </div>
                      </div>
                      
                      <!-- 网络生态图 -->
                      <div class="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in-up animation-delay-1100">
                        <div class="w-48 h-48 rounded-full border-2 border-blue-400/30 flex items-center justify-center animate-ping-slow">
                          <div class="w-40 h-40 rounded-full border-2 border-violet-400/50 flex items-center justify-center animate-ping-slow animation-delay-500">
                            <div class="w-32 h-32 rounded-full border-2 border-blue-400/70 flex items-center justify-center animate-ping-slow animation-delay-1000">
                              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                                <span class="text-white text-xs text-center font-medium">{{$t('about.index.6bpprdux03o0')}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 装饰粒子 -->
                  <div class="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-400/30 blur-sm animate-float animation-delay-200"></div>
                  <div class="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-violet-400/30 blur-sm animate-float animation-delay-700"></div>
                </div>
                
                <!-- 文案区域 -->
                <div class="opacity-0 animate-fade-in-up animation-delay-300">
                  <h3 class="text-2xl font-bold text-primary-600 mb-6">
                    {{$t('about.index.6bpprdux06k0')}}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {{$t('about.index.6bpprdux08w0')}}
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-start group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux0bc0')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux0ds0')}}</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-violet-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux0gk0')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux0j40')}}</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux0lc0')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux0o00')}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- 核心价值观区域 -->
    <section class="py-24 relative z-10 bg-white overflow-hidden">
      <!-- 背景装饰 -->
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
            >{{$t('about.index.6bpprdux0q80')}}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprdux0sw0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprduwvgk0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 价值观内容 -->
        <div
          class="relative z-10 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
        >
          <div
            class="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden card-glass"
          >
            <!-- 科技感装饰元素 -->
            <div class="absolute inset-0 pointer-events-none">
              <div
                class="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -mr-32 -mt-32 blur-3xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/5 rounded-full -ml-24 -mb-24 blur-3xl"
              ></div>
            </div>
            
            <!-- 动态粒子效果 -->
            <div class="absolute inset-0 pointer-events-none">
              <div class="particle-1"></div>
              <div class="particle-2"></div>
              <div class="particle-3"></div>
            </div>
            
            <!-- 悬浮效果遮罩 -->
            <div
              class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-2xl transition-colors duration-300"
            ></div>

            <!-- 背景装饰 -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-40 h-40 bg-primary-50 rounded-full -ml-20 -mb-20"
            ></div>

            <div class="relative z-10">
              <div class="prose prose-lg max-w-none text-gray-600">
                <p
                  class="text-xl mb-8 italic border-l-4 border-primary-500 pl-6 py-2 bg-primary-50/30 rounded-r-lg relative overflow-hidden"
                >
                  <span class="relative z-10">
                    {{$t('about.index.6bpprdux0v80')}}
                  </span>
                  <!-- 引用装饰线条 -->
                  <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-30"></div>
                  <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-30"></div>
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div class="group card-glass p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
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
                    
                    <div class="relative z-10">
                      <h3
                        class="text-2xl font-bold text-primary-600 mb-4 flex items-center"
                      >
                        <span
                          class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </span>
                        {{$t('about.index.6bpprdux0y00')}}
                      </h3>
                      <ul class="space-y-4">
                        <li class="flex items-start group/item">
                          <span
                            class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mt-1 mr-3 group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span
                            ><strong>{{$t('about.index.6bpprdux1080')}}</strong
                            >{{$t('about.index.6bpprdux12o0')}}</span
                          >
                        </li>
                        <li class="flex items-start group/item">
                          <span
                            class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mt-1 mr-3 group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span
                            ><strong>{{$t('about.index.6bpprdux15c0')}}</strong
                            >{{$t('about.index.6bpprdux17s0')}}</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="group card-glass p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
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
                    
                    <div class="relative z-10">
                      <h3
                        class="text-2xl font-bold text-primary-600 mb-4 flex items-center"
                      >
                        <span
                          class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
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
                              d="M21 14.25v2.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-2.25M21 12V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v3m18 0V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v3"
                            />
                          </svg>
                        </span>
                        {{$t('about.index.6bpprdux1bc0')}}
                      </h3>
                      <ul class="space-y-4">
                        <li class="flex items-start group/item">
                          <span
                            class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mt-1 mr-3 group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span
                            ><strong>{{$t('about.index.6bpprdux1e80')}}</strong
                            >$t('about.index.6bpprdux1go0')创新大赛或技术研讨会的现场动态照片，捕捉团队成员在白板前激烈讨论、写满公式的瞬间。</span
                          >
                        </li>
                      </ul>

                      <h3
                        class="text-2xl font-bold text-primary-600 mb-4 mt-8 flex items-center"
                      >
                        <span
                          class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </span>
                        {{$t('about.index.6bpprdux1j80')}}
                      </h3>
                      <ul class="space-y-4">
                        <li class="flex items-start group/item">
                          <span
                            class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mt-1 mr-3 group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span
                            ><strong>{{$t('about.index.6bpprdux1lk0')}}</strong
                            >{{$t('about.index.6bpprdux1ns0')}}</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 产品与技术实力区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >{{$t('about.index.6bpprdux1q80')}}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprdux1so0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprdux1vg0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 产品技术内容 -->
        <div class="relative z-10">
          <div
            class="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden card-glass"
          >
            <!-- 科技感装饰元素 -->
            <div class="absolute inset-0 pointer-events-none">
              <div
                class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse-slow"
              ></div>
              <div
                class="absolute bottom-0 right-1/4 w-48 h-48 bg-violet-500/10 rounded-full -mr-24 -mb-24 blur-3xl animate-pulse-slow animation-delay-1000"
              ></div>
            </div>
            
            <div class="relative z-10">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- 产品矩阵图 -->
                <div class="relative">
                  <div class="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gradient-to-br from-gray-900 to-black p-8">
                    <!-- 背景网格 -->
                    <div class="absolute inset-0 opacity-20">
                      <div 
                        class="w-full h-full"
                        style="background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                               background-size: 30px 30px;"
                      ></div>
                    </div>
                    
                    <!-- 产品矩阵 -->
                    <div class="relative grid grid-cols-2 gap-8 h-80">
                      <!-- 左上：基石材料 -->
                      <div class="relative flex flex-col items-center justify-center opacity-0 animate-fade-in-up animation-delay-100">
                        <div class="w-20 h-20 mx-auto bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-2xl flex items-center justify-center mb-3 transform rotate-3">
                          <div class="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm"></div>
                        </div>
                        <p class="text-white text-center text-sm font-medium">{{$t('about.index.6bpprdux1xw0')}}</p>
                        <p class="text-gray-300 text-xs text-center mt-1">{{$t('about.index.6bpprdux20o0')}}</p>
                      </div>
                      
                      <!-- 右上：核心制品 -->
                      <div class="relative flex flex-col items-center justify-center opacity-0 animate-fade-in-up animation-delay-300">
                        <div class="w-20 h-20 mx-auto flex items-center justify-center mb-3">
                          <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                              <div class="w-10 h-10 bg-blue-300 rounded-full"></div>
                            </div>
                            <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-gray-900"></div>
                          </div>
                        </div>
                        <p class="text-white text-center text-sm font-medium">{{$t('about.index.6bpprdux23k0')}}</p>
                        <p class="text-gray-300 text-xs text-center mt-1">{{$t('about.index.6bpprdux2600')}}</p>
                      </div>
                      
                      <!-- 左下：先进复合材料 -->
                      <div class="relative flex flex-col items-center justify-center opacity-0 animate-fade-in-up animation-delay-500">
                        <div class="w-20 h-20 mx-auto bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg shadow-2xl flex items-center justify-center mb-3 transform -rotate-3">
                          <div class="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
                            <div class="grid grid-cols-2 gap-1">
                              <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                              <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                              <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                              <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <p class="text-white text-center text-sm font-medium">{{$t('about.index.6bpprdux28k0')}}</p>
                        <p class="text-gray-300 text-xs text-center mt-1">{{$t('about.index.6bpprdux2bc0')}}</p>
                      </div>
                      
                      <!-- 右下：表面增强服务 -->
                      <div class="relative flex flex-col items-center justify-center opacity-0 animate-fade-in-up animation-delay-700">
                        <div class="w-20 h-20 mx-auto flex items-center justify-center mb-3">
                          <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                              <div class="w-12 h-12 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-md"></div>
                            </div>
                            <div class="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-md border-2 border-gray-900 transform rotate-12 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p class="text-white text-center text-sm font-medium">{{$t('about.index.6bpprdux2dw0')}}</p>
                        <p class="text-gray-300 text-xs text-center mt-1">CVD涂层处理</p>
                      </div>
                      
                      <!-- 中央连接线 -->
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 rounded-full border-2 border-blue-400/30 flex items-center justify-center animate-ping-slow">
                          <div class="w-12 h-12 rounded-full border-2 border-violet-400/50 flex items-center justify-center">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/50 to-violet-500/50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 装饰粒子 -->
                  <div class="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-400/30 blur-sm animate-float animation-delay-200"></div>
                  <div class="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-violet-400/30 blur-sm animate-float animation-delay-700"></div>
                </div>
                
                <!-- 技术服务图 -->
                <div class="opacity-0 animate-fade-in-up animation-delay-300">
                  <h3 class="text-2xl font-bold text-primary-600 mb-6">
                    {{$t('about.index.6bpprdux2g80')}} - {{$t('about.index.6bpprdux2io0')}} - {{$t('about.index.6bpprdux2l00')}}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {{$t('about.index.6bpprdux2n80')}}
                  </p>
                  <div class="space-y-6">
                    <div class="flex group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                          <span class="text-blue-500 font-bold group-hover:text-white">1</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux2g80')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux2q40')}}</p>
                      </div>
                    </div>
                    
                    <div class="flex group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
                          <span class="text-violet-500 font-bold group-hover:text-white">2</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux2sg0')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux2us0')}}</p>
                      </div>
                    </div>
                    
                    <div class="flex group">
                      <div class="flex-shrink-0 mt-1 mr-4">
                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                          <span class="text-blue-500 font-bold group-hover:text-white">3</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-1">{{$t('about.index.6bpprdux2xk0')}}</h4>
                        <p class="text-gray-600">{{$t('about.index.6bpprdux3000')}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <demo />
    <!-- 经历区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >{{ t("about.experience.careerJourney") }}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprdux3g40')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprdux3jg0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 时间线 -->
        <div class="relative max-w-5xl mx-auto">
          <!-- 中间线 -->
          <div
            class="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 transform md:-translate-x-1/2"
          ></div>

          <div class="space-y-24">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative flex flex-col md:flex-row items-start group opacity-0"
              :class="{
                'animate-fade-in-up': true,
                'animation-delay-100': index === 0,
                'animation-delay-300': index === 1,
                'animation-delay-500': index === 2,
                'animation-delay-700': index === 3,
              }"
            >
              <!-- 时间点 -->
              <div
                class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-xl bg-white border border-primary-300 z-10 flex items-center justify-center shadow-lg group-hover:border-primary-500 group-hover:border-2 transition-all duration-300"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:rotate-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <!-- 内容框-左侧 -->
              <div
                class="md:w-1/2 md:pr-16 md:text-right order-1 md:order-1"
                :class="index % 2 === 0 ? 'md:block' : 'md:hidden'"
              >
                <div
                  class="ml-16 md:ml-0 md:mr-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span class="text-primary-500 font-medium block mb-2">{{
                    exp.period
                  }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">
                    {{ t(exp.title) }}
                  </h3>
                  <p class="text-gray-500 mb-4 font-light">{{ exp.company }}</p>
                  <p class="text-gray-600 leading-relaxed">
                    {{ exp.description }}
                  </p>
                </div>
              </div>

              <!-- 空位 -->
              <div
                class="md:w-1/2 invisible order-1 md:order-2"
                :class="index % 2 === 0 ? 'md:hidden' : 'md:block'"
              ></div>

              <!-- 内容框-右侧 -->
              <div
                class="md:w-1/2 md:pl-16 md:text-left order-1 md:order-2"
                :class="index % 2 === 0 ? 'md:hidden' : 'md:block'"
              >
                <div
                  v-if="index % 2 !== 0"
                  class="ml-16 md:ml-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span class="text-primary-500 font-medium block mb-2">{{
                    exp.period
                  }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">
                    {{ t(exp.title) }}
                  </h3>
                  <p class="text-gray-500 mb-4 font-light">{{ exp.company }}</p>
                  <p class="text-gray-600 leading-relaxed">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 联系区域 -->
    <section class="py-24 relative z-10 bg-white overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30 pointer-events-none">
        <div
          class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/50 to-transparent"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
          <span
            class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up"
            >{{ t("about.contact.stayConnected") }}</span
          >
          <h2
            class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          >
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{$t('about.index.6bpprdux3ls0')}}</span>
              <span
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"
              ></span>
            </span>
          </h2>
          <p
            class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200"
          >
            {{$t('about.index.6bpprdux3oc0')}}
          </p>
          <div
            class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"
          ></div>
        </div>

        <!-- 联系卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:project@goldstonelee.net"
            class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-100"
          >
            <!-- 背景装饰 -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"
            ></div>

            <!-- 图标 -->
            <div
              class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <!-- 文本 -->
            <div class="relative z-10">
              <h3
                class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600"
              >
                {{$t('about.index.6bpprdux3qs0')}}
              </h3>
              <p class="text-gray-600">project@goldstonelee.net</p>
            </div>
          </a>

          <a
            href="tel:13631692183"
            class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-300"
          >
            <!-- 背景装饰 -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"
            ></div>

            <!-- 图标 -->
            <div
              class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            <!-- 文本 -->
            <div class="relative z-10">
              <h3
                class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600"
              >
                {{$t('about.index.6bpprdux3tc0')}}
              </h3>
              <p class="text-gray-600">136-3169-2183</p>
            </div>
          </a>

          <a
            href="#"
            class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-500"
          >
            <!-- 背景装饰 -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"
            ></div>

            <!-- 图标 -->
            <div
              class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <!-- 文本 -->
            <div class="relative z-10">
              <h3
                class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600"
              >
                {{$t('about.index.6bpprdux3vw0')}}
              </h3>
              <p class="text-gray-600">{{$t('about.index.6bpprdux3y40')}}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import demo from "./components/demo.vue";
const { t } = useI18n();

// 技能数据
const skills = [
  {
    name: "about.skills.development",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    items: [
      { name: t('about.index.6bpprdux40k0'), level: 95 },
      { name: t('about.index.6bpprdux4340'), level: 85 },
      { name: t('about.index.6bpprdux45k0'), level: 90 },
      { name: t('about.index.6bpprdux48g0'), level: 88 },
      { name: t('about.index.6bpprdux4ao0'), level: 80 },
    ],
  },
  {
    name: "about.skills.aiAndData",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    items: [
      { name: t('about.index.6bpprdux4d00'), level: 85 },
      { name: t('about.index.6bpprdux4fg0'), level: 80 },
      { name: t('about.index.6bpprdux4sw0'), level: 90 },
      { name: t('about.index.6bpprdux4wg0'), level: 78 },
      { name: t('about.index.6bpprdux51s0'), level: 88 },
    ],
  },
];

// 企业使命数据
const missions = [
  {
    title: t('about.index.6bpprdux54g0'),
    description:
      t('about.index.6bpprdux56w0'),
    imageText: t('about.index.6bpprdux5a80'),
    imageUrl: new URL("@/assets/images/about/corporate1.png", import.meta.url),
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: t('about.index.6bpprdux5d40'),
    description:
      t('about.index.6bpprdux5fk0'),
    imageText: t('about.index.6bpprdux5i40'),
    imageUrl: new URL("@/assets/images/about/corporate2.png", import.meta.url),
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: t('about.index.6bpprdux5lg0'),
    description:
      t('about.index.6bpprdux5o80'),
    imageText: t('about.index.6bpprdux5r00'),
    imageUrl: new URL("@/assets/images/about/corporate3.png", import.meta.url),
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

// 经历数据
const experiences = [
  {
    period: "2005年",
    title: t('about.index.6bpprdux5tc0'),
    company: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6cw7'),
  },
  {
    period: "2009年",
    title: t('about.index.6bpprdux5vs0'),
    company: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6cw8'),
  },
  {
    period: "2010年",
    title: t('about.index.6bpprdux5y80'),
    company: t('about.index.6bpprduwuyc0'),
    description: t('about.index.6bpprdux6cw9'),
  },
  {
    period: "2011年",
    title: t('about.index.6bpprdux60g0'),
    company: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6cw6'),
  },
  {
    period: "2012年",
    title: t('about.index.6bpprdux6380'),
    company: t('about.index.6bpprduwuyc0'),
    description: t('about.index.6bpprdux6cw5'),
  },
  {
    period: "2013年",
    title: t('about.index.6bpprdux65g0'),
    company: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6cw4'),
  },
  {
    period: "2015年",
    title: t('about.index.6bpprdux6840'),
    company: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6cw3'),
  },
  {
    period: "2016年",
    title: t('about.index.6bpprdux6ak0'),
    company: t('about.index.6bpprduwuyc0'),
    description: t('about.index.6bpprdux6cw2'),
  },
  {
    period: "2017年",
    title: t('about.index.6bpprdux6cw0'),
    company: t('about.index.6bpprduwuyc0'),
    description: t('about.index.6bpprdux6cw1'),
  },
  {
    period: t('about.index.6bpprdux6f80'),
    title: t('about.index.6bpprdux6i80'),
    company: t('about.index.6bpprduwuyc0'),
    description: t('about.index.6bpprdux6ks0'),
  },
];

// 添加结构化数据
onMounted(() => {
  // 关于页面的结构化数据
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: t('about.index.6bpprdux6mk0'),
    description:
      t('about.index.6bpprdux6oo0'),
    publisher: {
      "@type": "Organization",
      name: t('about.index.6bpprduwuyc0'),
      logo: {
        "@type": "ImageObject",
        url: "https://xiahua-ai.com/logo.png",
      },
    },
  };

  // 面包屑导航结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t('about.index.6bpprdux6qs0'),
        item: "https://xiahua-ai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t('about.index.6bpprdux6sw0'),
        item: "https://xiahua-ai.com/about",
      },
    ],
  };

  // 公司信息结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t('about.index.6bpprduwuyc0'),
    description:
      t('about.index.6bpprdux6wc0'),
    url: "https://xiahua-ai.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "project@goldstonelee.net",
      telephone: "136-3169-2183",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: t('about.index.6bpprdux6zc0'),
      addressLocality: t('about.index.6bpprdux71g0'),
      addressRegion: t('about.index.6bpprdux79g0'),
    },
  };

  // 注入结构化数据
  let aboutScript = document.createElement("script");
  aboutScript.type = "application/ld+json";
  aboutScript.textContent = JSON.stringify(aboutPageSchema);
  document.head.appendChild(aboutScript);

  let breadcrumbScript = document.createElement("script");
  breadcrumbScript.type = "application/ld+json";
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);

  let organizationScript = document.createElement("script");
  organizationScript.type = "application/ld+json";
  organizationScript.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(organizationScript);

  // 技能条动画
  setTimeout(() => {
    document.querySelectorAll(".skill-bar-animate").forEach((bar) => {
      const targetWidth = bar.style.getPropertyValue("--target-width");
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

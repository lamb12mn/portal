<template>
  <!-- Inbox Complexity Section -->
  <el-row class="section1">
    <el-col :span="24">
      <div class="container">
        <!----->
        <el-row :gutter="20">
          <el-col :span="17">
            <el-row>
              <el-col :span="10">
                <el-card
                  class="complexity-card hours-card"
                  shadow="hover"
                  style="
                    display: flex;
                    flex-direction: column;
                    height: 400px;
                    width: calc(100% - 20px);
                    position: relative;
                    overflow: hidden;
                  "
                >
                <div class="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
                  <!-- 外环 -->
                  <div class="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center relative" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
                    <!-- 内环 -->
                    <div class="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
                      <div class="text-white text-center text-xs font-semibold" style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
                        真空<br>包装
                      </div>
                    </div>
                    
                    <!-- 点缀小圆点 -->
                    <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400" style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
                    <div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300" style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>
                    
                    <!-- 动态旋转线 -->
                    <div class="absolute inset-0 rounded-full" style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;"></div>
                  </div>
                </div>
                <div class="h-full bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/image01.png" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <!-- <div class="h-48 bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/image01.png" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">实力雄厚</h3>
                    <p class="text-gray-600 mb-4 flex-grow">石金从事石墨制品定制20年，拥有丰富的行业经验，是国家高新技术企业;6000平米现代化生产基地，熟练工人120人，年产能超2亿；拥有进口加工中心、数控车床、锯床、雕铣机等石墨加工设备80余台，可实现大批量石墨制品生产加工。
                    </p>
                  </div> -->
                 
                </el-card>
              </el-col>
              <el-col :span="14">
                <el-card
                  class="complexity-card"
                  shadow="hover"
                  style="
                    display: flex;
                    flex-direction: row;
                    height: 150px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                  "
                >
                <div class="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
                  <!-- 外环 -->
                  <div class="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center relative" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
                    <!-- 内环 -->
                    <div class="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
                      <div class="text-white text-center text-xs font-semibold" style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
                        外<br>包装
                      </div>
                    </div>
                    
                    <!-- 点缀小圆点 -->
                    <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400" style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
                    <div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300" style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>
                    
                    <!-- 动态旋转线 -->
                    <div class="absolute inset-0 rounded-full" style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;"></div>
                  </div>
                </div>
                <!-- <div>
                    <h3 class="w-48 text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">实力雄厚</h3>
                </div> -->
                <div class="flex-1 bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <!-- <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" /> -->
                  <!-- <div class="w-48 bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">实力雄厚</h3>
                    <p class="text-gray-600 mb-4 flex-grow">石金从事石墨制品定制20年，拥有丰富的行业经验，是国家高新技术企业;6000平米现代化生产基地，熟练工人120人，年产能超2亿；拥有进口加工中心、数控车床、锯床、雕铣机等石墨加工设备80余台，可实现大批量石墨制品生产加工。

</p>
                  </div> -->
                </el-card>
                <!----->
                <el-card
                  class="complexity-card hours-card"
                  shadow="hover"
                  style="height: 230px; margin-top: 20px; width: calc(100%)"
                >
                <div class="absolute top-3/4 left-3/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
                  <!-- 外环 -->
                  <div class="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center relative" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
                    <!-- 内环 -->
                    <div class="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
                      <div class="text-white text-center text-xs font-semibold" style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
                        清洗<br>
                      </div>
                    </div>
                    
                    <!-- 点缀小圆点 -->
                    <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400" style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
                    <div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300" style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>
                    
                    <!-- 动态旋转线 -->
                    <div class="absolute inset-0 rounded-full" style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;"></div>
                  </div>
                </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="7">
            <el-card
              class="complexity-card"
              shadow="hover"
              style="
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                height: 250px;
                width: 100%;
              "
            ><div class="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
                  <!-- 外环 -->
                  <div class="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center relative" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
                    <!-- 内环 -->
                    <div class="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
                      <div class="text-white text-center text-xs font-semibold" style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
                        制品<br>
                      </div>
                    </div>
                    
                    <!-- 点缀小圆点 -->
                    <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400" style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
                    <div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300" style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>
                    
                    <!-- 动态旋转线 -->
                    <div class="absolute inset-0 rounded-full" style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;"></div>
                  </div>
                </div>
            <div class="flex-1 bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              <!-- <div class="h-48 bg-gray-100 overflow-hidden relative">
                    <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">标题</h3>
                    <p class="text-gray-600 mb-4 flex-grow">我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字</p>
              </div> -->
            </el-card>
            <!----->
            <el-card
              class="complexity-card"
              shadow="hover"
              style="
                margin-top: 20px;
                width: 100%;
                height: 130px;
                background-color: #f9f9f9;
                border-radius: 24px;
                position: relative;
                overflow: hidden;
              "
            >
              <div class="h-48 bg-gray-100 overflow-hidden relative">
                    <!-- 图片 -->
                    <img src="@/assets/images/home/banner01.jpg" class="w-full h-full rounded-[0.5rem] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">标题</h3>
                    <p class="text-gray-600 mb-4 flex-grow">我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.section1 {
//   padding: 20px 0;
//   padding-bottom: 50px;
//   max-width: 1280px;
  margin: 0 auto;
  .section-title {
    font-size: 56px;
    font-weight: 700;
    color: #000;
    display: block;
  }
  .complexity-card {
    background-color: #f0f7ff;
    border: 1px solid #e0eefe;
    border-radius: 24px;
    transition: all 0.3s ease;
    position: relative;
    // font-size: 24px;
    // padding: 32px;
    :deep(.el-card__body) {
      height: 100%;
      padding: 0;
    }
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    .card-icon {
  font-size: 24px;
  color: #333;
  margin-bottom: 14px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  display: block;
}

.card-description {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  display: block;
}
.card-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.wide-card {
  grid-column: span 2;
}
  }
  .hours-card {
  border: none;
  border-radius: 24px;
  background-image: url("@/assets/images/home/banner01.jpg");
  background-size: cover;
}
}
</style>

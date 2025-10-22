<template>
  <el-row class="testimonials-section">
    <el-col :span="24">
      <div class="testimonials-container">
        <!-- <el-text tag="h2" class="text-3xl font-bold text-center mb-4rem block font-TobiasTRIAL"
              style="color: black;font-size: 50px; height: 67px; line-height: 67px;">
                Trusted by <span class="yellowBg">8000+</span> Influencers worldwide
            </el-text> -->
        <div class="testimonial-carousel-2row-wrapper">
          <!-- 第一行：从右往左滚动 -->
          <div
            class="testimonial-carousel-2row"
            @mouseenter="pauseCarousel"
            @mouseleave="resumeCarousel"
          >
            <div
              class="testimonial-carousel-track"
              :style="{ transform: `translateX(-${translateX1}px)` }"
            >
              <div
                v-for="(item, idx) in row1Data"
                :key="idx"
                class="testimonial-card-custom2"
              >
                <div class="flex items-center mb-2">
                  <el-avatar :size="40" :src="item.avatar"></el-avatar>
                  <div class="ml-3">
                    <el-text
                      tag="h4"
                      class="font-semibold"
                      style="font-size: 14px; color: #1a130e"
                      >{{ item.name }}</el-text
                    >
                    <el-text
                      tag="p"
                      class="text-sm text-gray-500"
                      style="font-size: 12px"
                      >{{ item.email }}</el-text
                    >
                  </div>
                </div>
                <el-text
                  tag="p"
                  class="text-gray-700 mb-2 testimonial-content"
                  style="color: #48423e; font-size: 14px"
                  >{{ item.content }}</el-text
                >
                <div class="flex items-center justify-between mt-4">
                  <div>
                    <div class="text-xs text-gray-500 mb-1">Co-branding</div>
                    <div class="brand-stack">
                      <div
                        v-for="(logo, i) in item.coBranding"
                        :key="i"
                        class="brand-stack-img"
                        :style="{ zIndex: 10 - i, left: `${i * 18}px` }"
                      >
                        <img :src="logo" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 mb-1">incomes</div>
                    <div
                      class="text-green-500 font-bold text-base"
                      style="font-size: 16px"
                    >
                      +${{ item.incomes }}
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 mb-1">
                      Processing time
                    </div>
                    <div
                      class="text-black font-bold text-base"
                      style="font-size: 16px"
                    >
                      -{{ item.processingTime }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 第二行：从左往右滚动 -->
          <div
            class="testimonial-carousel-2row"
            @mouseenter="pauseCarousel"
            @mouseleave="resumeCarousel"
          >
            <div
              class="testimonial-carousel-track"
              :style="{ transform: `translateX(-${translateX2}px)` }"
            >
              <div
                v-for="(item, idx) in row2Data"
                :key="idx"
                class="testimonial-card-custom2"
              >
                <div class="flex items-center mb-2">
                  <el-avatar :size="40" :src="item.avatar"></el-avatar>
                  <div class="ml-3">
                    <el-text
                      tag="h4"
                      class="font-semibold"
                      style="font-size: 14px; color: #1a130e"
                      >{{ item.name }}</el-text
                    >
                    <el-text
                      tag="p"
                      class="text-sm text-gray-500"
                      style="font-size: 12px"
                      >{{ item.email }}</el-text
                    >
                  </div>
                </div>
                <el-text
                  tag="p"
                  class="text-gray-700 mb-2 testimonial-content"
                  style="color: #48423e; font-size: 14px"
                  >{{ item.content }}</el-text
                >
                <div class="flex items-center justify-between mt-4">
                  <div>
                    <div class="text-xs text-gray-500 mb-1">Co-branding</div>
                    <div class="brand-stack">
                      <div
                        v-for="(logo, i) in item.coBranding"
                        :key="i"
                        class="brand-stack-img"
                        :style="{ zIndex: 10 - i, left: `${i * 18}px` }"
                      >
                        <img :src="logo" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 mb-1">incomes</div>
                    <div
                      class="text-green-500 font-bold text-base"
                      style="font-size: 16px"
                    >
                      +${{ item.incomes }}
                    </div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 mb-1">
                      Processing time
                    </div>
                    <div
                      class="text-black font-bold text-base"
                      style="font-size: 16px"
                    >
                      -{{ item.processingTime }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import {
  Check,
  Message,
  Share,
  Star,
  Plus,
  Close,
  Notebook,
  Clock,
  Warning,
  Document,
  Edit,
} from "@element-plus/icons-vue";
import lottie from "lottie-web";

export default {
  name: "HomeView",
  components: {
    Check,
    Instagram: Message,
    Twitter: Share,
    Facebook: Star,
    Plus,
    Close,
    Notebook,
    Clock,
    Warning,
    Document,
    Edit,
  },
  data() {
    return {
      activeFaqItem: 1,
      lottieAnimation: null,
      smartLottieAnimation: null,
      smartLottieAnimation2: null,
      currentAnimationIndex: 0,
      smartCurrentAnimationIndex: 0,
      smartCurrentAnimationIndex2: 0,
      animationFiles: ["/coollar_demo.json"],
      smartAnimationFiles: ["/Clear-Deal-Flow.json"],
      smartAnimationFiles2: ["/smart-replied.json"],
      row1Testimonials: [
        {
          name: "张工，某头部光伏企业技术总监",
          email: "zhang.tech@pvleader.com",
          content:
            "贵公司提供的高纯石墨加热器和热场方案，使我们的单晶炉能耗降低15%，良率提升显著，合作非常顺畅！",
          avatar: new URL("@/assets/co-branding/2.png", import.meta.url),
          coBranding: [new URL("@/assets/img/7.png", import.meta.url), new URL("@/assets/img/9.png", import.meta.url)],
          incomes: 0, // 工业客户通常不展示个人收入
          processingTime: 0, // 替换为项目周期或效率提升指标
        },
        {
          name: "李总，第三代半导体材料公司CEO",
          email: "li.ceo@sic-material.com",
          content:
            "在SiC长晶炉关键部件上，贵公司的碳碳复合材料完全替代了进口，性能稳定，交付及时，是值得信赖的系统伙伴！",
          avatar: new URL("@/assets/co-branding/3.png", import.meta.url),
          coBranding: [new URL("@/assets/img/3.png", import.meta.url), "@/assets/img/6.png"],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "王博士，知名科研机构研究员",
          email: "wang.research@lab.edu.cn",
          content:
            "贵公司定制的高精度石墨模具和纯化服务，完美满足了我们极端实验条件的需求，其技术响应速度令人印象深刻。",
          avatar: new URL("@/assets/co-branding/4.png", import.meta.url),
          coBranding: [new URL("@/assets/img/1.png", import.meta.url), new URL("@/assets/img/2.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "陈经理，高端装备制造企业采购负责人",
          email: "chen.procurement@equip.com",
          content:
            "从材料选型到应用优化，贵公司提供的一站式服务大大缩短了我们的研发周期，真正做到了降本增效。",
          avatar: new URL("@/assets/co-branding/5png", import.meta.url),
          coBranding: [new URL("@/assets/img/8.png", import.meta.url), new URL("@/assets/img/4.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "赵主任，航空航天材料供应商",
          email: "zhao.director@aerospace.com",
          content:
            "贵公司的耐高温复合材料在我们的热处理工艺中表现出色，长期稳定性好，帮助我们提升了产品的整体性能。",
          avatar: new URL("@/assets/co-branding/6.png", import.meta.url),
          coBranding: [new URL("@/assets/img/2.png", import.meta.url), new URL("@/assets/img/7.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
      ],
      row2Testimonials: [
        {
          name: "孙总，新能源汽车电池材料企业技术主管",
          email: "sun.tech@ev-battery.com",
          content:
            "贵公司的石墨制品和表面增强技术，有效解决了我们烧结工艺中的粘连问题，生产效率提高了20%。",
          avatar: new URL("@/assets/co-branding/6.png", import.meta.url),
          coBranding: [new URL("@/assets/img/4.png", import.meta.url), new URL("@/assets/img/3.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "周工，真空冶金设备制造商",
          email: "zhou.engineer@vac-metallurgy.com",
          content:
            "与贵公司的联合开发让我们设备的热场设计更优化，客户反馈极佳，期待未来更深层次的合作。",
          avatar: new URL("@/assets/co-branding/7.png", import.meta.url),
          coBranding: [new URL("@/assets/img/6.png", import.meta.url), new URL("@/assets/img/5.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "吴博士，材料科学专家",
          email: "wu.expert@material-science.com",
          content:
            "贵公司不仅提供高质量的产品，其深厚的技术积累和开放的共创理念，为行业带来了宝贵的创新动力。",
          avatar: new URL("@/assets/co-branding/8.png", import.meta.url),
          coBranding: [new URL("@/assets/img/10.png", import.meta.url), new URL("@/assets/img/11.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "郑经理，工业炉制造商",
          email: "zheng.manager@industrial-furnace.com",
          content:
            "选择贵公司作为核心部件供应商后，我们整机的运行稳定性和客户满意度都得到了显著提升。",
          avatar: new URL("@/assets/co-branding/9.png", import.meta.url),
          coBranding: [new URL("@/assets/img/3.png", import.meta.url), new URL("@/assets/img/4.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
        {
          name: "刘总，半导体设备维护服务商",
          email: "liu.service@semi-service.com",
          content:
            "贵公司的快速响应和技术支持，帮助我们及时解决了客户设备的紧急问题，保障了产线的正常运行。",
          avatar: new URL("@/assets/co-branding/10.png", import.meta.url),
          coBranding: [new URL("@/assets/img/5.png", import.meta.url), new URL("@/assets/img/6.png", import.meta.url)],
          incomes: 0,
          processingTime: 0,
        },
      ],
      translateX1: 0,
      translateX2: 0,
      row1Data: [],
      row2Data: [],
      isCarouselPaused: false,
      cardWidth: 374, // 卡片宽度 + margin
      animationSpeed: 1, // 动画速度
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqItem = this.activeFaqItem === index ? null : index;
    },
    initLottieAnimation() {
      // 清除之前的动画实例
      if (this.lottieAnimation) {
        this.lottieAnimation.destroy();
      }

      // 加载当前动画
      const animationFile = this.animationFiles[this.currentAnimationIndex];

      this.lottieAnimation = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice", // 保持宽高比并填充容器
          clearCanvas: true,
        },
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.lottieAnimation) {
          this.lottieAnimation.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.lottieAnimation.addEventListener("complete", () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.currentAnimationIndex =
            (this.currentAnimationIndex + 1) % this.animationFiles.length;
          this.initLottieAnimation();
        }, 100);
      });
    },
    initSmartLottieAnimation() {
      // 清除之前的动画实例
      if (this.smartLottieAnimation) {
        this.smartLottieAnimation.destroy();
      }

      // 加载当前动画
      const animationFile =
        this.smartAnimationFiles[this.smartCurrentAnimationIndex];

      this.smartLottieAnimation = lottie.loadAnimation({
        container: this.$refs.smartlottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice", // 保持宽高比并填充容器
          clearCanvas: true,
        },
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.smartLottieAnimation) {
          this.smartLottieAnimation.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.smartLottieAnimation.addEventListener("complete", () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.smartCurrentAnimationIndex =
            (this.smartCurrentAnimationIndex + 1) %
            this.smartAnimationFiles.length;
          this.initSmartLottieAnimation();
        }, 100);
      });
    },
    initSmartLottieAnimation2() {
      // 清除之前的动画实例
      if (this.smartLottieAnimation2) {
        this.smartLottieAnimation2.destroy();
      }

      // 加载当前动画
      const animationFile =
        this.smartAnimationFiles2[this.smartCurrentAnimationIndex2];

      this.smartLottieAnimation2 = lottie.loadAnimation({
        container: this.$refs.smartlottieContainer2,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice", // 保持宽高比并填充容器
          clearCanvas: true,
        },
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.smartLottieAnimation2) {
          this.smartLottieAnimation2.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.smartLottieAnimation2.addEventListener("complete", () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.smartCurrentAnimationIndex2 =
            (this.smartCurrentAnimationIndex2 + 1) %
            this.smartAnimationFiles2.length;
          this.initSmartLottieAnimation();
        }, 100);
      });
    },
    startSeamlessScroll() {
      // 为每行创建三组数据，确保无缝衔接
      this.row1Data = [
        ...this.row1Testimonials,
        ...this.row1Testimonials,
        ...this.row1Testimonials,
      ];
      this.row2Data = [
        ...this.row2Testimonials,
        ...this.row2Testimonials,
        ...this.row2Testimonials,
      ];

      // 设置初始位置
      this.translateX1 = 0;
      // 第二行从最右边开始
      this.translateX2 = this.cardWidth * this.row2Testimonials.length;

      // 启动动画
      this.animateSeamless();
    },
    animateSeamless() {
      if (!this.isCarouselPaused) {
        // 第一行从右向左滚动
        this.translateX1 += this.animationSpeed;
        // 第二行从左向右滚动
        this.translateX2 -= this.animationSpeed;

        // 计算一组数据的宽度
        const groupWidth1 = this.cardWidth * this.row1Testimonials.length;
        const groupWidth2 = this.cardWidth * this.row2Testimonials.length;

        // 当第一行滚动超过一组数据时，重置位置
        if (this.translateX1 >= groupWidth1) {
          this.translateX1 = 0;
        }

        // 当第二行滚动到最左边时，重置到最右边
        if (this.translateX2 <= 0) {
          this.translateX2 = groupWidth2;
        }
      }
      requestAnimationFrame(this.animateSeamless);
    },
    pauseCarousel() {
      this.isCarouselPaused = true;
    },
    resumeCarousel() {
      this.isCarouselPaused = false;
    },
  },
  mounted() {
    // 初始化 Lottie 动画
    this.$nextTick(() => {
      this.initLottieAnimation();
      this.initSmartLottieAnimation();
      this.initSmartLottieAnimation2();
    });
    // 启动两行无感轮播
    this.$nextTick(() => {
      this.startSeamlessScroll();
    });
  },
  beforeUnmount() {
    // 清理动画
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  },
};
</script>
<style scoped>
@import "./home.css";
</style>

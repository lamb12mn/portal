const getImgUrl = async (name) => {
    return new URL(name, import.meta.url)
}
export const navItems = [
  { i18nKey: "nav.home", path: "/", key: "home" }, // 首页0-9
  {
    i18nKey: "nav.graphiteProducts",
    path: "/graphiteProducts",
    key: "graphiteProducts",
  }, // 石墨制品
  {
    i18nKey: "nav.applicationField",
    path: "/applicationField",
    key: "applicationField",
  }, // 应用领域
  { i18nKey: "nav.products", path: "/products", key: "products" }, //
  // { i18nKey: "nav.projects", path: "/projects", key: "projects" }, // 开源项目
  { i18nKey: "nav.about", path: "/about", key: "about" }, // 关于我们
  { i18nKey: "nav.contact", path: "/contact", key: "contact" }, // 联系我们
];
// 石墨制品分类
const categories = [
  { id: "all", name: "汽车领域用石墨" },
  { id: "ai", name: "玻璃封装及烧结用石墨" },
  { id: "data", name: "电子半导体用石墨" },
  { id: "assist", name: "VC散热用石墨" },
  { id: "other", name: "石墨舟" },
  { id: "other1", name: "石墨零件" },
];
export const productsList = [
  {
    id: "watermark",
    title: "石墨制品",
    shortDescription:
      "石墨制品耐高温、导电导热，广泛用于冶金、电子、机械等领域，是重要的工业基础材料。",
    description:
      "石墨制品是以高纯石墨为原料，通过精密加工制成的耐高温、导电导热性能优异的关键零部件。广泛应用于光伏、半导体、真空热处理等领域的加热器、坩埚、电极及结构件，是高温工艺设备的核心组件。",
    imageUrl: new URL("../../assets/images/home/product01.png", import.meta.url),
    category: "ai-tools",
    tip: "核心组件",
    features: [
      "耐高温（可承受3000℃以上）",
      "优良导电性（用于电极、电池）",
      "高导热性（散热与热管理）",
      "自润滑性（减少摩擦，无需润滑剂）",
      "化学稳定性（耐酸碱腐蚀）",
      "高强度与抗压性（结构支撑部件）",
      "易加工成型（可制成复杂形状）",
    ],
    specs: {
      密度: "1.5–1.9 g/cm³",
      抗压强度: "20–60 MPa",
      抗折强度: "15–40 MPa",
      电阻率: "3–10 μΩ·m",
      纯度: "≥99.0%（C含量）",
      灰分含量: "<1.0%",
      挥发分: "<0.5%",
      颗粒尺寸: "1–20 μm（视工艺而定）",
      使用温度: "≤3000℃（惰性气氛下）",
    },
    scenarios: [
      "工业制造 - 利用石墨的耐高温和导电性能",
      "电子设备 - 用于电池电极、半导体等产品",
      "冶金行业 - 作为耐火材料使用",
      "化工领域 - 利用其耐腐蚀特性",
      "机械制造 - 用作润滑剂或密封材料",
    ],
    products: [
      {
        id: "automotiveField",
        name: "汽车领域用石墨",
        description: "汽车用石墨：耐高温自润滑，提升部件性能。",
        items: [
          {
            content: "石墨转子",
            image_url: getImgUrl("../../assets/images/product/car_1.png"),
            description: "用于涡轮增压器、新能源汽车的真空助力器、电子真空泵，新电能汽车冷却系统、电机（涉水电机），化工行业。",
          },
          {
            content: "石墨轴承",
            image_url: getImgUrl("../../assets/images/product/car_2.png"),
            description: "石墨轴承具有优良的特性。",
          },
          {
            content: "石墨转子 旋片 叶片",
            image_url: getImgUrl("../../assets/images/product/car_3.png"),
            description: "石墨转子、旋片和叶片是涡轮增压器和真空泵中的关键部件，具有优异的耐磨性和自润滑性能。",
          },
          {
            content: "石墨制品-石墨轴承",
            image_url: getImgUrl("../../assets/images/product/car_4.png"),
            description: "石墨轴承具有良好的自润滑性能和耐高温特性。",
          },
          {
            content: "石墨制品-转子",
            image_url: getImgUrl("../../assets/images/product/car_5.png"),
            description: "石墨转子广泛应用于汽车涡轮增压器中，具有良好的动平衡性能和耐高温特性。",
          },
          {
            content: "真空助力泵石墨转子",
            image_url: getImgUrl("../../assets/images/product/car_6.png"),
            description: "专为汽车真空助力泵设计的石墨转子，具有高精度、低摩擦和长寿命的特点。",
          },
        ],
      },
      // 玻璃封装及烧结用石墨
      {
        id: "glass",
        name: "玻璃封装及烧结用石墨",
        description: "耐高温密封，助玻璃成型与烧结。",
        items: [
          {
            content: "玻璃封装夹具/烧结板",
            image_url: getImgUrl("../../assets/images/product/glass_1.png"),
            description: "用于玻璃封装和烧结工艺的石墨夹具和烧结板，具有优异的耐高温性能。",
          },
          {
            content: "石金石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_2.jpg"),
            description: "高品质石金石墨制品，适用于精密电子元件的封装和烧结工艺。",
          },
          {
            content: "石金石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_3.png"),
            description: "高品质石金石墨制品，适用于精密电子元件的封装和烧结工艺。",
          },
          {
            content: "石墨零件",
            image_url: getImgUrl("../../assets/images/product/glass_4.png"),
            description: "石墨零件具有良好的耐高温和化学稳定性，适用于各种工业应用。",
          },
          {
            content: "石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_5.png"),
            description: "通用石墨制品，具有优异的导电性和耐高温性能。",
          },
          {
            content: "石墨制品防雷石墨片",
            image_url: getImgUrl("../../assets/images/product/glass_6.png"),
            description: "防雷石墨片具有良好的导电性能，用于防雷保护。",
          },
          {
            content: "石墨夹具",
            image_url: getImgUrl("../../assets/images/product/glass_7.png"),
            description: "石墨夹具用于固定工件，具有良好的耐高温性能。",
          },
          {
            content: "大型石墨制品治具",
            image_url: getImgUrl("../../assets/images/product/glass_8.png"),
            description: "大型石墨制品治具，适用于大规模工业生产。",
          },
          {
            content: "石墨制品玻璃封装治具用石墨",
            image_url: getImgUrl("../../assets/images/product/glass_9.png"),
            description: "专为玻璃封装设计的石墨治具，具有优异的密封性能。",
          },
          {
            content: "破粉碎石墨治具",
            image_url: getImgUrl("../../assets/images/product/glass_11.png"),
            description: "用于破粉碎工艺的石墨治具，具有良好的耐磨性。",
          },
          {
            content: "石墨制品破封烧结用石墨",
            image_url: getImgUrl("../../assets/images/product/glass_12.png"),
            description: "专为破封烧结工艺设计的石墨制品，性能稳定。",
          },
          {
            content: "大型石墨转子",
            image_url: getImgUrl("../../assets/images/product/glass_13.png"),
            description: "大型石墨转子，适用于大型工业设备。",
          },
          {
            content: "石墨制品破碳封装烧结用石墨",
            image_url: getImgUrl("../../assets/images/product/glass_14.png"),
            description: "专为破碳封装烧结设计的石墨制品，耐高温性能优异。",
          },
          {
            content: "大型石墨制品治具",
            image_url: getImgUrl("../../assets/images/product/glass_15.png"),
            description: "大型石墨制品治具，适用于大规模工业生产。",
          },
          {
            content: "石墨夹具",
            image_url: getImgUrl("../../assets/images/product/glass_16.png"),
            description: "石墨夹具用于固定工件，具有良好的耐高温性能。",
          },
          {
            content: "石墨制品防雷石墨片",
            image_url: getImgUrl("../../assets/images/product/glass_17.png"),
            description: "防雷石墨片具有良好的导电性能，用于防雷保护。",
          },
          {
            content: "石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_18.png"),
            description: "通用石墨制品，具有优异的导电性和耐高温性能。",
          },
          {
            content: "石墨零件",
            image_url: getImgUrl("../../assets/images/product/glass_19.png"),
            description: "石墨零件具有良好的耐高温和化学稳定性，适用于各种工业应用。",
          },
          {
            content: "破粉碎石墨治具",
            image_url: getImgUrl("../../assets/images/product/glass_21.png"),
            description: "用于破粉碎工艺的石墨治具，具有良好的耐磨性。",
          },
          {
            content: "石墨制品破封烧结用石墨",
            image_url: getImgUrl("../../assets/images/product/glass_22.png"),
            description: "专为破封烧结工艺设计的石墨制品，性能稳定。",
          },
          {
            content: "大型石墨转子",
            image_url: getImgUrl("../../assets/images/product/glass_23.png"),
            description: "大型石墨转子，适用于大型工业设备。",
          },
          {
            content: "石墨制品破碳封装烧结用石墨",
            image_url: getImgUrl("../../assets/images/product/glass_24.png"),
            description: "专为破碳封装烧结设计的石墨制品，耐高温性能优异。",
          },
          {
            content: "大型石墨制品治具",
            image_url: getImgUrl("../../assets/images/product/glass_25.png"),
            description: "大型石墨制品治具，适用于大规模工业生产。",
          },
          {
            content: "石墨夹具",
            image_url: getImgUrl("../../assets/images/product/glass_26.png"),
            description: "石墨夹具用于固定工件，具有良好的耐高温性能。",
          },
          {
            content: "石墨制品防雷石墨片",
            image_url: getImgUrl("../../assets/images/product/glass_27.png"),
            description: "防雷石墨片具有良好的导电性能，用于防雷保护。",
          },
          {
            content: "石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_28.png"),
            description: "通用石墨制品，具有优异的导电性和耐高温性能。",
          },
          {
            content: "石墨零件",
            image_url: getImgUrl("../../assets/images/product/glass_29.png"),
            description: "石墨零件具有良好的耐高温和化学稳定性，适用于各种工业应用。",
          },
          {
            content: "石墨零件",
            image_url: getImgUrl("../../assets/images/product/glass_31.png"),
            description: "石墨零件具有良好的耐高温和化学稳定性，适用于各种工业应用。",
          },
          {
            content: "石金石墨制品",
            image_url: getImgUrl("../../assets/images/product/glass_32.png"),
            description: "高品质石金石墨制品，适用于精密电子元件的封装和烧结工艺。",
          },
        ],
      },
      //电子半导体用石墨
      {
        id: "graphite",
        name: "电子半导体用石墨",
        description:
          "汽车耐高温石墨转子利用其自润滑和耐热特性，在高温下稳定旋转，减少摩擦磨损。",
        items: [
          {
            content: "石墨制品-电子半导体",
            image_url: getImgUrl("../../assets/images/product/graphite_1.jpg"),
            description: "专为电子半导体行业设计的石墨制品，具有高纯度和优异性能。",
          },
          {
            content: "电子半导体",
            image_url: getImgUrl("../../assets/images/product/graphite_2.jpg"),
            description: "电子半导体用石墨材料，具有优异的导电性和热稳定性。",
          },
          {
            content: "石墨制品电子半导体定制",
            image_url: getImgUrl("../../assets/images/product/graphite_3.jpg"),
            description: "定制化电子半导体用石墨制品，满足特定工艺需求。",
          },
          {
            content: "石墨制品-半导体",
            image_url: getImgUrl("../../assets/images/product/graphite_4.jpg"),
            description: "半导体行业专用石墨制品，具有高纯度和稳定性。",
          },
          {
            content: "石金电子半导体",
            image_url: getImgUrl("../../assets/images/product/graphite_5.png"),
            description: "石金电子半导体用石墨材料，适用于高端半导体制造。",
          },
          {
            content: "石墨碳盘",
            image_url: getImgUrl("../../assets/images/product/graphite_6.png"),
            description: "石墨碳盘具有良好的导电性和耐高温性能。",
          },
          {
            content: "半导体石墨制品",
            image_url: getImgUrl("../../assets/images/product/graphite_7.png"),
            description: "半导体行业专用石墨制品，满足高纯度工艺要求。",
          },
          {
            content: "电子产品用石墨制品",
            image_url: getImgUrl("../../assets/images/product/graphite_8.png"),
            description: "电子产品专用石墨制品，具有优异的性能表现。",
          },
          {
            content: "石墨制品电子烧结石墨治具",
            image_url: getImgUrl("../../assets/images/product/graphite_9.jpg"),
            description: "专为电子烧结工艺设计的石墨治具，性能稳定可靠。",
          },
          {
            content: "石墨制品电子烧结石墨治具",
            image_url: getImgUrl("../../assets/images/product/graphite_10.jpg"),
            description: "专为电子烧结工艺设计的石墨治具，性能稳定可靠。",
          },
        ],
      },
      //VC散热用石墨
      {
        id: "vc",
        name: "VC散热用石墨",
        description: "VC散热用石墨，高效导热，均匀散热，提升设备稳定性与寿命。",
        items: [
          {
            content: "VC散热用石墨制品",
            image_url: getImgUrl("../../assets/images/product/vc_1.png"),
            description: "VC散热用石墨制品，具有优异的导热性能。",
          },
          {
            content: "石金VC散热用石墨制品",
            image_url: getImgUrl("../../assets/images/product/vc_2.jpg"),
            description: "石金VC散热用石墨制品，导热性能优异。",
          },
          {
            content: "VC扩散焊接石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_3.png"),
            description: "用于VC扩散焊接工艺的石墨治具，性能稳定。",
          },
          {
            content: "热管石墨夹具",
            image_url: getImgUrl("../../assets/images/product/vc_4.png"),
            description: "热管石墨夹具，具有良好的导热性能。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_5.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "大型石墨制品模具",
            image_url: getImgUrl("../../assets/images/product/vc_6.png"),
            description: "大型石墨制品模具，适用于大规模生产。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_7.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "石墨制品超薄VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_8.png"),
            description: "超薄VC散热石墨治具，适用于精密设备散热。",
          },
          {
            content: "扩散焊接超薄VC均温板石墨治具生产厂",
            image_url: getImgUrl("../../assets/images/product/vc_9.png"),
            description: "专为扩散焊接超薄VC均温板生产的石墨治具。",
          },
          {
            content: "石墨制品焊结中板",
            image_url: getImgUrl("../../assets/images/product/vc_11.png"),
            description: "石墨制品焊结中板，具有良好的导热性能。",
          },
          {
            content: "石墨制品超薄VC石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_12.png"),
            description: "超薄VC石墨治具，适用于精密散热应用。",
          },
          {
            content: "小型石墨制品",
            image_url: getImgUrl("../../assets/images/product/vc_13.png"),
            description: "小型石墨制品，适用于精密设备应用。",
          },
          {
            content: "扩散焊接超薄VC均温板石墨治具生产厂",
            image_url: getImgUrl("../../assets/images/product/vc_14.png"),
            description: "专为扩散焊接超薄VC均温板生产的石墨治具。",
          },
          {
            content: "石墨制品超薄VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_15.png"),
            description: "超薄VC散热石墨治具，适用于精密设备散热。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_16.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "大型石墨制品模具",
            image_url: getImgUrl("../../assets/images/product/vc_17.png"),
            description: "大型石墨制品模具，适用于大规模生产。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_18.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "热管石墨夹具",
            image_url: getImgUrl("../../assets/images/product/vc_19.png"),
            description: "热管石墨夹具，具有良好的导热性能。",
          },
          {
            content: "石墨制品超薄VC石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_21.png"),
            description: "超薄VC石墨治具，适用于精密散热应用。",
          },
          {
            content: "小型石墨制品",
            image_url: getImgUrl("../../assets/images/product/vc_22.png"),
            description: "小型石墨制品，适用于精密设备应用。",
          },
          {
            content: "扩散焊接超薄VC均温板石墨治具生产厂",
            image_url: getImgUrl("../../assets/images/product/vc_23.png"),
            description: "专为扩散焊接超薄VC均温板生产的石墨治具。",
          },
          {
            content: "石墨制品超薄VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_24.png"),
            description: "超薄VC散热石墨治具，适用于精密设备散热。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_25.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "大型石墨制品模具",
            image_url: getImgUrl("../../assets/images/product/vc_26.png"),
            description: "大型石墨制品模具，适用于大规模生产。",
          },
          {
            content: "石墨制品VC散热石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_27.png"),
            description: "专为VC散热设计的石墨治具，散热效果优异。",
          },
          {
            content: "热管石墨夹具",
            image_url: getImgUrl("../../assets/images/product/vc_28.png"),
            description: "热管石墨夹具，具有良好的导热性能。",
          },
          {
            content: "VC扩散焊接石墨治具",
            image_url: getImgUrl("../../assets/images/product/vc_29.png"),
            description: "VC扩散焊接石墨治具，性能稳定可靠。",
          },
        ],
      },
      //石墨舟
      {
        id: "boat",
        name: "石墨舟",
        description:
          "石墨舟，专业设计，高温炉内传输必备，高效能材料，精准制造，耐用持久，助力工业生产。",
        items: [
          {
            content: "石墨舟",
            image_url: getImgUrl("../../assets/images/product/boat_1.jpg"),
            description: "石墨舟用于高温炉内传输，具有良好的耐高温性能。",
          },
          {
            content: "碳碳板框",
            image_url: getImgUrl("../../assets/images/product/boat_2.png"),
            description: "碳碳板框具有良好的强度和耐高温性能。",
          },
          {
            content: "石墨制品-工艺点",
            image_url: getImgUrl("../../assets/images/product/boat_3.jpg"),
            description: "石墨制品工艺点，用于精密工艺控制。",
          },
          {
            content: "石墨舟配件",
            image_url: getImgUrl("../../assets/images/product/boat_4.jpg"),
            description: "石墨舟配件，用于石墨舟组装和维护。",
          },
          {
            content: "石墨制品-石墨舟配件",
            image_url: getImgUrl("../../assets/images/product/boat_5.png"),
            description: "石墨制品石墨舟配件，性能稳定可靠。",
          },
          {
            content: "石墨制品-石墨舟配件",
            image_url: getImgUrl("../../assets/images/product/boat_6.jpg"),
            description: "石墨制品石墨舟配件，性能稳定可靠。",
          },
          {
            content: "工艺点",
            image_url: getImgUrl("../../assets/images/product/boat_7.png"),
            description: "工艺点用于精密工艺控制和监测。",
          },
          {
            content: "石金工艺点",
            image_url: getImgUrl("../../assets/images/product/boat_8.png"),
            description: "石金工艺点，具有优异的性能表现。",
          },
          {
            content: "石墨舟批发",
            image_url: getImgUrl("../../assets/images/product/boat_9.jpg"),
            description: "石墨舟批发产品，适用于大规模工业应用。",
          },
          {
            content: "石墨杆",
            image_url: getImgUrl("../../assets/images/product/boat_11.jpg"),
            description: "石墨杆具有良好的导电性和耐高温性能。",
          },
          {
            content: "石墨制品-石墨舟用抛光石墨杆",
            image_url: getImgUrl("../../assets/images/product/boat_12.jpg"),
            description: "专为石墨舟设计的抛光石墨杆，表面光洁度高。",
          },
          {
            content: "大型210硅片石墨舟",
            image_url: getImgUrl("../../assets/images/product/boat_13.jpg"),
            description: "专为210硅片设计的大型石墨舟，容量大。",
          },
          {
            content: "27片210石墨舟",
            image_url: getImgUrl("../../assets/images/product/boat_14.jpg"),
            description: "可装载27片210硅片的石墨舟，效率高。",
          },
          {
            content: "石墨制品-石墨舟用石墨螺杆",
            image_url: getImgUrl("../../assets/images/product/boat_15.jpg"),
            description: "专为石墨舟设计的石墨螺杆，连接可靠。",
          },
        ],
      },
      //石墨零件
      {
        id: "part",
        name: "石墨零件",
        description:
          "石墨零件，精密制造，高温抗性，稳定性能，广泛应用于半导体、光伏产业。",
        items: [
          {
            content: "石墨盒",
            image_url: getImgUrl("../../assets/images/product/part_1.png"),
            description: "石墨盒具有良好的耐高温和化学稳定性。",
          },
          {
            content: "石墨夹具",
            image_url: getImgUrl("../../assets/images/product/part_2.png"),
            description: "石墨夹具用于固定工件，具有良好的耐高温性能。",
          },
          {
            content: "石墨模具",
            image_url: getImgUrl("../../assets/images/product/part_3.png"),
            description: "用于玻璃封装和烧结工艺的石墨夹具和烧结板，具有优异的耐高温性能。",
          },
          {
            content: "石墨板",
            image_url: getImgUrl("../../assets/images/product/part_4.png"),
            description: "适用于高温高压工况下的化工、机械等领域。",
          },
        ],
      },
    ],
    detailedDescription:
      "专注于高品质石墨制品的研发与生产，涵盖石墨舟、加热器、坩埚等多种关键组件。我们的石墨材料具有高纯度、优异的导电性和热稳定性，适用于光伏单晶生长、半导体制造及高温热处理等领域。通过先进的精密加工技术，我们确保产品具备卓越的尺寸精度和表面光洁度，满足客户对高性能和长寿命的需求。公司致力于为全球客户提供可靠、高效的石墨解决方案。",
    faqs: [
      {
        id: "faq-1",
        question: "你们主要生产哪些类型的石墨制品？",
        answer:
          "我们主要生产应用于光伏、半导体、高温热处理等领域的石墨制品，包括石墨舟、石墨坩埚、石墨加热器、石墨导流筒、石墨夹头、石墨模具等。",
      },
      {
        id: "faq-2",
        question: "石墨制品的纯度能达到多少？",
        answer:
          "我们采用高纯度等静压石墨为原料，并可通过高温纯化技术将灰分降至5-20ppm，满足半导体级等高端应用对材料纯度的严苛要求。",
      },
      {
        id: "faq-3",
        question: "石墨制品在高温下容易氧化，如何解决？",
        answer:
          "我们可为石墨制品提供CVD涂层服务，如碳化硅（SiC）涂层，能有效提高抗氧化性能，延长产品在高温环境下的使用寿命。",
      },
      {
        id: "faq-4",
        question: "产品的加工精度如何？",
        answer:
          "公司拥有200余台专业进口数控加工设备，具备微米级的精密加工能力，确保产品尺寸精度和表面光洁度满足客户要求。",
      },
      {
        id: "faq-5",
        question: "可以提供定制化服务吗？",
        answer:
          "可以。我们拥有超过20年的石墨制品定制经验，可根据客户的图纸和技术要求，提供从材料选型、结构设计到生产加工的一站式定制解决方案。",
      },
      {
        id: "faq-6",
        question: "如何保证产品质量？",
        answer:
          "我们建立了完善的质量管理体系（已通过ISO9001等认证），配备先进的精密检测设备和专业质检团队，对生产全过程进行严格管控，坚持出厂必检，确保每一件产品品质可靠。",
      },
      {
        id: "faq-7",
        question: "石墨制品的使用寿命是多久？",
        answer:
          "使用寿命受使用温度、气氛、工艺周期等多种因素影响。我们的产品凭借优质材料和精湛工艺，具有较长的使用寿命，具体寿命需根据实际工况评估。",
      },
      {
        id: "faq-8",
        question: "交货周期一般是多长？",
        answer:
          "标准产品通常在15-30天内交付，定制产品根据复杂程度和订单量而定，我们会在确认订单后为您提供准确的交期。",
      },
    ],
  },
  {
    id: "legal-eye",
    title: "石墨材料",
    shortDescription:
      "碳的同素异形体，具有高导电导热、耐高温、化学稳定等优异性能。",
    description:
      "石墨材料具有卓越的耐高温性、导电导热性能及化学稳定性，经高精度加工可制成加热器、坩埚、电极等核心部件，广泛应用于光伏、半导体、真空热处理等高端制造领域，是极端工况下的理想材料选择。",
    imageUrl: getImgUrl("../../assets/images/home/product02.png"),
    category: "enterprise",
    tip: "不可或缺",
    features: [
      "高纯度（>99.9%以上）",
      "各向同性（性能均匀）",
      "低热膨胀系数（尺寸稳定）",
      "高导电率（电子工业基础）",
      "高导热率（热传导材料）",
      "抗热震性（耐温度骤变）",
      "可再生与环保（可回收利用）",
    ],
    specs: {
      "碳含量（纯度）": "天然石墨 90–99.9%，人造石墨 ≥99.9%",
      晶体结构: "六方层状结构",
      莫氏硬度: "1–2（极软）",
      导热系数: "80–400 W/(m·K)",
      导电率: "1×10⁴ – 3×10⁴ S/m",
      热膨胀系数: "1.5–3.0 ×10⁻⁶ /K（室温至1000℃）",
      比表面积: "1–30 m²/g（影响反应活性）",
    },
    scenarios: [
      "工业制造 - 利用石墨的耐高温和导电性能，广泛应用于单晶炉、真空炉、烧结炉等高温设备的热场系统",
      "电子设备 - 用于锂离子电池电极、半导体长晶用石墨舟、集成电路散热基板等关键部件",
      "冶金行业 - 作为耐火材料使用，如炼钢连铸用石墨模具、坩埚、保护套管等",
      "化工领域 - 利用其耐腐蚀特性，制造耐酸碱的换热器、管道、阀门及反应釜内衬",
      "机械制造 - 用作高温润滑剂、机械密封环、电刷等耐磨减摩部件，提升设备运行稳定性",
    ],
    products: [
      //进口石墨
      {
        id: "imported",
        name: "进口石墨",
        description: "高端进口石墨，高纯耐用，性能卓越。",
        items: [
          {
            content: "进口石墨",
            image_url: getImgUrl("../../assets/images/product/imported_1.png"),
            description: "高品质进口石墨材料，纯度高，性能稳定可靠。",
          },
          {
            content: "3D热弯手机玻璃模具石墨材料",
            image_url: getImgUrl("../../assets/images/product/imported_2.jpg"),
            description: "专用于3D热弯手机玻璃模具制造的高性能石墨材料。",
          },
          {
            content: "高纯石墨材料",
            image_url: getImgUrl("../../assets/images/product/imported_3.png"),
            description: "超高纯度石墨材料，杂质含量极低。",
          },
          {
            content: "进口等静压石墨材料",
            image_url: getImgUrl("../../assets/images/product/imported_4.jpg"),
            description: "采用等静压工艺制造的进口石墨，密度均匀。",
          },
        ],
      },
      //国产石墨
      {
        id: "domestic",
        title: "国产石墨",
        description: "优质国产石墨，高性价比，广泛替代进口。",
        items: [
          {
            content: "国产石墨",
            image_url: getImgUrl("../../assets/images/product/domestic_1.png"),
            description: "优质国产石墨产品，性价比高。",
          },
        ],
      },
    ],
    detailedDescription:
      "采用高纯等静压石墨，通过精密加工与CVD涂层技术，生产石墨舟、加热器等核心部件。产品具备高纯度、优异导热导电性、耐高温及良好机械强度，广泛应用于光伏、半导体、真空热处理等领域，为客户提供稳定可靠的高温工况解决方案。",
    faqs: [
      {
        id: "faq-1",
        question: "什么是石墨材料？",
        answer:
          "石墨材料是碳的同素异形体，具有高导电性、高导热性、耐高温、化学稳定性好和良好的润滑性等优异性能，广泛应用于高温、电气和机械领域。",
      },
      {
        id: "faq-2",
        question: "石墨材料的主要类型有哪些？",
        answer:
          "常见的石墨材料包括天然石墨、人造石墨、等静压石墨、高纯石墨和各向同性石墨等，不同类型的石墨在密度、强度、纯度和加工性能上各有特点。",
      },
      {
        id: "faq-3",
        question: "如何提高石墨材料的抗氧化性能？",
        answer:
          "可通过表面涂层技术（如CVD沉积碳化硅）或添加抗氧化剂来提升石墨材料在高温氧化环境下的使用寿命。",
      },
      {
        id: "faq-4",
        question: "石墨材料的纯度对应用有何影响？",
        answer:
          "高纯度石墨（灰分≤20ppm）可减少杂质挥发，避免污染工艺环境，特别适用于半导体、光伏等对洁净度要求极高的领域。",
      },
      {
        id: "faq-5",
        question: "石墨材料能否用于真空高温环境？",
        answer:
          "可以。石墨材料具有极低的放气率和出色的热稳定性，是真空炉、单晶炉、烧结炉等高温真空设备中理想的热场材料。",
      },
      {
        id: "faq-6",
        question: "什么是等静压石墨？有什么优势？",
        answer:
          "等静压石墨是通过等静压成型工艺制成的高密度、各向同性的石墨材料，具有更高的强度、均匀性和加工精度，适用于制造复杂精密部件。",
      },
      {
        id: "faq-7",
        question: "石墨材料在高温下会膨胀吗？",
        answer:
          "石墨具有较低的热膨胀系数，尤其在高温下仍能保持良好的尺寸稳定性，这是其作为高温结构材料的重要优势之一。",
      },
      {
        id: "faq-8",
        question: "石墨材料是否容易加工？",
        answer:
          "石墨材料硬度适中，易于进行车、铣、钻、磨等机械加工，可制成各种复杂形状和精密尺寸的零部件。",
      },
    ],
  },
  {
    id: "id-photo",
    title: "高温真空设备用石墨",
    imageUrl: getImgUrl("../../assets/images/home/product03.png"),
            description: "",
    shortDescription:
      "专为高温真空环境设计的高纯度石墨，耐高温、低气体释放、高稳定性。",
    description:
      "专用于高温真空设备的石墨材料，具备高纯度、低放气、耐热冲击和良好机械强度，经精密加工后用作加热元件、支撑结构和坩埚，确保设备在极端环境下的稳定运行与工艺一致性。",
    category: "platform",
    tip: "高纯度",
    features: [
      "超高纯度（避免污染工艺环境）",
      "低气体释放率（适用于真空环境）",
      "耐极端高温（2000℃以上稳定）",
      "优异抗热震性（频繁升降温不破裂）",
      "各向同性结构（均匀传热导电）",
      "高机械强度（承受设备应力）",
      "耐辐射与耐腐蚀（适用于特种环境）",
    ],
    specs: {
      "纯度（总杂质）": "<50 ppm（高纯级）",
      气体释放率: "<1×10⁻⁸ Pa·m³/(s·cm²)（真空性能关键）",
      最高使用温度: "2800℃（惰性/真空环境）",
      热导率: "80–150 W/(m·K)",
      体积密度: "1.7–1.85 g/cm³",
      抗弯强度: "≥50 MPa",
      "各向同性度（IR值）": "<1.15（越接近1越好）",
      灰分含量: "<100 ppm",
      氧含量: "<500 ppm",
    },
    scenarios: [
      "工业制造 - 利用石墨的耐高温和导电性能，用于单晶炉、多晶炉、真空热处理炉等设备的加热器、坩埚、导流筒等热场部件",
      "电子设备 - 用于半导体长晶炉（如SiC、蓝宝石）中的石墨舟、载盘、加热系统等高纯关键部件",
      "冶金行业 - 作为高温烧结炉、真空感应熔炼炉中的耐火材料和导电部件，承受极端热循环工况",
      "化工领域 - 在真空或惰性气氛下，利用其耐腐蚀特性，用于高温反应釜、扩散炉等设备的结构件",
      "机械制造 - 用作高温真空环境下的轴承、密封环、电接触材料等精密部件，确保设备稳定运行",
    ],
    products: [
      //铸锭炉
      {
        id: "furnace",
        name: "铸锭炉",
        description: "高效铸锭炉，专用于多晶硅定向凝固生产。",
        items: [
          {
            content: "铸锭炉热场石墨件",
            image_url: getImgUrl("../../assets/images/product/furnace_1.png"),
            description: "",
          },
        ],
      },
      //真空热处理炉
      {
        id: "vacuum",
        name: "真空热处理炉",
        description:
          "真空热处理炉，高效能隔热设计，确保温度均匀，适用于多种金属精密热处理工艺。",
        items: [
          {
            content: "高温炉石墨配件",
            image_url: getImgUrl("../../assets/images/product/vacuum_1.png"),
            description: "",
          },
          {
            content: "石墨烤架",
            image_url: getImgUrl("../../assets/images/product/vacuum_2.png"),
            description: "",
          },
          {
            content: "真空炉石墨连接件",
            image_url: getImgUrl("../../assets/images/product/vacuum_3.jpg"),
            description: "",
          },
        ],
      },
      //MIM炉
      {
        id: "mim",
        name: "MIM炉",
        description: "金属注射成型炉，高效精准，专为复杂零件打造。",
        items: [
          {
            content: "石墨盘",
            image_url: getImgUrl("../../assets/images/product/mim_1.png"),
            description: "",
          },
          {
            content: "高温设备石墨治具",
            image_url: getImgUrl("../../assets/images/product/mim_2.png"),
            description: "",
          },
          {
            content: "石墨托架",
            image_url: getImgUrl("../../assets/images/product/mim_3.png"),
            description: "",
          },
        ],
      },
      //加热器
      {
        id: "heater",
        name: "加热器",
        description: "广泛应用于家庭与工业。",
        items: [
          {
            content: "石墨加热器",
            image_url: getImgUrl("../../assets/images/product/heater_1.png"),
            description: "",
          },
        ],
      },
      //保温毡
      {
        id: "insulation",
        name: "保温毡",
        description: "高性能保温毡，轻质耐高温，隔热节能。",
        items: [
          {
            content: "贴布石墨保温毡",
            image_url: getImgUrl(
              "../../assets/images/product/insulation_1.png"
            ),
          },
          {
            content: "石墨碳硬毡",
            image_url: getImgUrl(
              "../../assets/images/product/insulation_2.png"
            ),
          },
        ],
      },
      //软毡
      {
        id: "softFelt",
        name: "软毡",
        description: "柔软耐高温，填充密封佳，隔热性能优。",
        items: [
          {
            content: "石墨软毡",
            image_url: getImgUrl("../../assets/images/product/softFelt_1.jpg"),
            description: "",
          },
        ],
      },
      //石墨连接板
      {
        id: "shim",
        name: "石墨连接板",
        description: "高强导电石墨板，耐高温，连接稳定可靠。",
        items: [
          {
            content: "石墨连接板",
            image_url: getImgUrl("../../assets/images/product/shim_1.png"),
            description: "",
          },
        ],
      },
    ],
    detailedDescription:
      "专业生产高温真空设备用高纯石墨部件，包括加热器、坩埚、导流筒等。产品采用优质等静压石墨，经精密加工与特殊处理，具备优异的耐高温、抗热震和低挥发性能，适用于单晶炉、半导体长晶炉等高端装备，为客户提供稳定可靠的热场解决方案。",
    faqs: [
      {
        id: "faq-1",
        question: "高温真空设备为何选用石墨材料？",
        answer:
          "石墨材料具有耐高温、低热膨胀、高导热、高纯度和低放气率等特性，非常适合在真空和高温极端环境下稳定工作，是热场系统的核心材料。",
      },
      {
        id: "faq-2",
        question: "你们提供哪些高温真空设备用石墨部件？",
        answer:
          "我们提供加热器、坩埚、导流筒、保温筒、电极、支架等全套石墨热场部件，广泛应用于单晶炉、烧结炉、真空热处理炉等设备。",
      },
      {
        id: "faq-3",
        question: "石墨部件的最高使用温度是多少？",
        answer:
          "在真空或惰性气氛下，高品质石墨部件可长期工作在2800℃以下，短期耐温可达3000℃以上，具体需根据材料牌号和工况确定。",
      },
      {
        id: "faq-4",
        question: "如何防止石墨部件在高温下氧化？",
        answer:
          "我们可提供CVD碳化硅（SiC）涂层服务，显著提升抗氧化能力，延长部件在含氧环境或高温循环中的使用寿命。",
      },
      {
        id: "faq-5",
        question: "产品能否满足高纯工艺要求？",
        answer:
          "可以。我们采用高纯等静压石墨原料，并通过高温纯化技术将灰分控制在5-20ppm，满足半导体、光伏等高端制造的洁净需求。",
      },
      {
        id: "faq-6",
        question: "是否支持定制化设计与加工？",
        answer:
          "支持。我们可根据设备型号和客户图纸，提供从材料选型、结构优化到精密加工的一站式定制服务，确保完美匹配客户需求。",
      },
      {
        id: "faq-7",
        question: "加工精度和表面质量如何保证？",
        answer:
          "公司配备200余台进口CNC设备，具备微米级加工能力，并通过严格质检流程，确保尺寸精度和表面光洁度符合高标准要求。",
      },
      {
        id: "faq-8",
        question: "交货周期和质量保证是怎样的？",
        answer:
          "标准件15-30天交付，定制件根据复杂度确定交期；产品执行ISO9001质量体系，出厂全检，提供材质证明和质检报告。",
      },
    ],
  },
  {
    id: "id-photo1",
    title: "太阳能光伏",
    imageUrl: getImgUrl("../../assets/images/home/product04.png"),
            description: "",
    shortDescription: "利用光伏效应将太阳光直接转换为电能的清洁能源技术。",
    description:
      "太阳能光伏利用半导体材料将阳光直接转化为电能，通过太阳能电池板实现发电，具有清洁、可再生、无噪音、维护成本低等优点，是推动能源转型和实现碳中和目标的关键技术之一。",
    category: "platform",
    tip: "清洁能源",
    features: [
      "光能直接转换为电能（光伏发电）",
      "清洁无污染（零碳排放）",
      "可再生可持续（太阳能取之不尽）",
      "模块化安装（灵活适用于屋顶、电站）",
      "低运维成本（无机械运动部件）",
      "分布式供电（减少输电损耗）",
      "提升能源安全（减少化石能源依赖）",
    ],
    specs: {
      光电转换效率: "单晶硅 22–25%，多晶硅 18–22%，TOPCon >25%",
      "开路电压（Voc）": "0.6–0.7 V（单个电池）",
      "短路电流（Isc）": "8–10 A（标准组件）",
      "填充因子（FF）": "75–85%",
      温度系数: "-0.3% ~ -0.5%/℃（功率随温度下降）",
      组件功率: "400–700 Wp（主流商用组件）",
      使用寿命: "25年以上（衰减<20%）",
      工作温度范围: "-40℃ 至 +85℃",
      最大系统电压: "1000V 或 1500V（DC）",
    },
    scenarios: [
      "单晶硅生长炉 - 使用高纯石墨加热器、坩埚和导流筒，构建高效稳定的热场系统",
      "多晶铸锭炉 - 采用石墨模具和加热部件，实现硅料的均匀熔融与定向凝固",
      "光伏电池制造 - 使用石墨舟在PECVD、扩散等环节承载硅片，确保镀膜与掺杂工艺的均匀性",
      "N型高效电池技术 - 为TOPCon、HJT等先进电池工艺提供高洁净、长寿命的碳碳复合材料热场解决方案",
      "大尺寸硅片生产 - 支持210mm等大尺寸单晶硅棒的生长，提供适配大炉型的定制化热场系统",
    ],
    products: [
      //保温毡
      {
        id: "warmFelt",
        name: "保温毡",
        description: "轻质高强，耐高温隔热，节能高效。",
        items: [
          {
            content: "石墨保温毡",
            image_url: getImgUrl("../../assets/images/product/warmFelt_1.jpg"),
            description: "",
          },
          {
            content: "太阳能光伏石墨毡",
            image_url: getImgUrl("../../assets/images/product/warmFelt_2.jpg"),
            description: "",
          },
          {
            content: "石墨碳毡",
            image_url: getImgUrl("../../assets/images/product/warmFelt_3.png"),
            description: "",
          },
        ],
      },
      //热场
      {
        id: "heatPark",
        name: "热场",
        description: "高效节能热场，温度均匀，稳定可靠。",
        items: [
          {
            content: "热场配件",
            image_url: getImgUrl("../../assets/images/product/heatPark_1.png"),
            description: "",
          },
        ],
      },
      //碳碳复合材料
      {
        id: "carbonComposite",
        name: "碳碳复合材料",
        description: "碳碳复合材料，结构简单，性能高。",
        items: [
          {
            content: "碳碳石墨制品",
            image_url: getImgUrl(
              "../../assets/images/product/carbonComposite_1.png"
            ),
          },
          {
            content: "碳碳螺杆螺母",
            image_url: getImgUrl(
              "../../assets/images/product/carbonComposite_2.jpg"
            ),
          },
          {
            content: "碳碳垫片",
            image_url: getImgUrl(
              "../../assets/images/product/carbonComposite_3.png"
            ),
          },
          {
            content: "碳碳复合材料连接板",
            image_url: getImgUrl(
              "../../assets/images/product/carbonComposite_4.png"
            ),
          },
          {
            content: "碳碳紧固件",
            image_url: getImgUrl(
              "../../assets/images/product/carbonComposite_5.png"
            ),
          },
        ],
      },
      //隔热笼
      {
        id: "insulationCage",
        name: "隔热笼",
        description: "高效隔热笼，耐高温，结构稳定，节能降耗。",
        items: [
          {
            content: "隔热笼,隔热材料",
            image_url: getImgUrl(
              "../../assets/images/product/insulationCage_1.png"
            ),
          },
        ],
      },
      //热场用石墨配件
      {
        id: "accessories",
        name: "热场用石墨配件",
        description: "高纯耐高温，精密可靠，保障热场稳定运行。",
        items: [
          {
            content: "CFC螺栓螺母",
            image_url: getImgUrl(
              "../../assets/images/product/accessories_1.png"
            ),
          },
          {
            content: "热场配件",
            image_url: getImgUrl(
              "../../assets/images/product/accessories_2.png"
            ),
          },
        ],
      },
    ],
    detailedDescription:
      "为太阳能光伏产业提供高性能碳基热场材料，包括碳碳复合材料坩埚、保温筒、导流筒及石墨加热器等。产品具备高纯度、优异热稳定性和长寿命，专为单晶硅生长炉设计，有效提升晶体生长效率与品质，助力光伏企业降本增效，推动清洁能源发展。",
    faqs: [
      {
        id: "faq-1",
        question: "公司为光伏产业提供哪些产品？",
        answer:
          "我们提供单晶硅生长炉用全套热场部件，包括碳碳复合材料坩埚、保温筒、导流筒，以及高纯石墨加热器、石墨电极、石墨夹头等核心组件。",
      },
      {
        id: "faq-2",
        question: "光伏热场产品有哪些性能优势？",
        answer:
          "产品具备高纯度、优异热稳定性、良好的抗热震性和长寿命，能有效提升单晶硅生长效率与晶体品质，降低断线率和能耗。",
      },
      {
        id: "faq-3",
        question: "碳碳复合材料坩埚相比传统石墨坩埚有何优点？",
        answer:
          "碳碳复合材料具有更高的强度、更好的抗热冲击性能和更长的使用寿命，可支持大尺寸、高投料量的单晶生长工艺需求。",
      },
      {
        id: "faq-4",
        question: "产品是否适用于大尺寸单晶炉？",
        answer:
          "是的，我们可生产适配28寸、32寸及更大规格单晶炉的热场系统，满足N型、P型高效电池技术对大尺寸硅片的生产要求。",
      },
      {
        id: "faq-5",
        question: "如何保证产品的高纯度和洁净度？",
        answer:
          "采用高纯原料，结合高温纯化和精密加工工艺，严格控制灰分在20ppm以下，避免金属杂质污染，保障硅棒少子寿命。",
      },
      {
        id: "faq-6",
        question: "是否提供定制化热场解决方案？",
        answer:
          "提供。我们可根据客户炉型、工艺参数和性能目标，进行热场结构设计与优化，实现降本增效的定制化服务。",
      },
      {
        id: "faq-7",
        question: "产品的使用寿命有多长？",
        answer:
          "在正常工况下，碳碳热场使用寿命可达300炉次以上，石墨加热器可达150炉次以上，具体寿命受工艺参数和维护情况影响。",
      },
      {
        id: "faq-8",
        question: "如何支持客户的技术升级？",
        answer:
          "公司拥有200余项专利技术，与多家科研机构合作，持续研发适用于N型TOPCon、HJT等新型电池技术的先进热场材料与方案。",
      },
    ],
  },
];
//汽车领域用石墨
export const automotiveField = [
  {
    content: "石墨转子",
    image_url: getImgUrl("../../assets/images/product/car_1.png"),
      description: "",
  },
  {
    content: "石墨轴承",
    image_url: getImgUrl("../../assets/images/product/car_2.png"),
            description: "",
  },
  {
    content: "石墨转子 旋片 叶片",
    image_url: getImgUrl("../../assets/images/product/car_3.png"),
            description: "",
  },
  {
    content: "石墨制品-石墨轴承",
    image_url: getImgUrl("../../assets/images/product/car_4.png"),
            description: "",
  },
  {
    content: "石墨制品-转子",
    image_url: getImgUrl("../../assets/images/product/car_5.png"),
            description: "",
  },
  {
    content: "真空助力泵石墨转子",
    image_url: getImgUrl("../../assets/images/product/car_6.png"),
            description: "",
  },
];

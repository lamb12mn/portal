import i18n from "@/locales/index";
const t = i18n.global.t;
export const navItems = [
  { i18nKey: "nav.home", path: "/", key: "home" }, // 首页0-9
  // {
  //   i18nKey: "nav.graphiteProducts",
  //   path: "/graphiteProducts",
  //   key: "graphiteProducts",
  // }, // 石墨制品
  // {
  //   i18nKey: "nav.applicationField",
  //   path: "/applicationField",
  //   key: "applicationField",
  // }, // 应用领域
  { i18nKey: "nav.products", path: "/products", key: "products" }, //
  // 荣誉资质
  { i18nKey: "nav.honor", path: "/honor", key: "honor" },
  // { i18nKey: "nav.projects", path: "/projects", key: "projects" }, // 开源项目
  // 新闻中心
  { i18nKey: "nav.newsCenter", path: "/newsCenter", key: "newsCenter" },
  { i18nKey: "nav.about", path: "/about", key: "about" }, // 关于我们
  { i18nKey: "nav.contact", path: "/contact", key: "contact" }, // 联系我们
];
// 石墨制品分类
const categories = [
  { id: "all", name: t("js.data.6bpolqynhzc0") },
  { id: "ai", name: t("js.data.6bpolqyniq80") },
  { id: "data", name: t("js.data.6bpolqynitc0") },
  { id: "assist", name: "t('js.data.vcSanReYongShiMo')" },
  { id: "other", name: t("js.data.6bpolqyniv40") },
  { id: "other1", name: t("js.data.6bpolqyniwk0") },
];
export const productsList = [
  {
    id: "watermark",
    title: t("js.data.6bpolqynj3k0"),
    shortDescription: t("js.data.6bpolqynj500"),
    description: t("js.data.6bpolqynj6g0"),
    imageUrl: new URL(
      "../../assets/images/home/product01.png",
      import.meta.url
    ),
    category: "ai-tools",
    tip: t("js.data.6bpolqynj880"),
    features: [
      t("js.data.6bpolqynj9s0"),
      t("js.data.6bpolqynjbs0"),
      t("js.data.6bpolqynjdc0"),
      t("js.data.6bpolqynjeo0"),
      t("js.data.6bpolqynjg80"),
      t("js.data.6bpolqynjhs0"),
      t("js.data.6bpolqynjjc0"),
    ],
    specs: {
      [t('js.data.6bpp5eij3pk0')]: "1.5–1.9 g/cm³",
      [t('js.data.6bpp5eij4g00')]: "20–60 MPa",
      [t('js.data.6bpp5eij4i80')]: "15–40 MPa",
      [t('js.data.6bpp5eij4k40')]: "3–10 μΩ·m",
      [t('js.data.6bpp5eij4n00')]: "≥99.0%（C含量）",
      [t('js.data.6bpp5eij4og0')]: "<1.0%",
      [t('js.data.6bpp5eij4q00')]: "<0.5%",
      [t('js.data.6bpp5eij4ro0')]: "1–20 μm（视工艺而定）",
      [t('js.data.6bpp5eij4u00')]: "≤3000℃（惰性气氛下）",
    },
    scenarios: [
      t("js.data.watermark.scenarios01"),
      t("js.data.watermark.scenarios02"),
      t("js.data.watermark.scenarios03"),
      t("js.data.watermark.scenarios04"),
      t("js.data.watermark.scenarios05"),
    ],
    products: [
      {
        id: "automotiveField",
        name: t("js.data.6bpolqynhzc0"),
        description: t("js.data.6bpolqynjkk0"),
        items: [
          {
            content: t("js.data.6bpolqynjmg0"),
            image_url: new URL(
              "../../assets/images/product/car_1.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynjo80"),
          },
          {
            content: t("js.data.6bpolqynjpk0"),
            image_url: new URL(
              "../../assets/images/product/car_2.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynjrw0"),
          },
          {
            content: "石墨转子 旋片 叶片",
            image_url: new URL(
              "../../assets/images/product/car_3.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynjtc0"),
          },
          {
            content: t("js.data.6bpolqynjv00"),
            image_url: new URL(
              "../../assets/images/product/car_4.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynjw80"),
          },
          {
            content: t("js.data.6bpolqynjxo0"),
            image_url: new URL(
              "../../assets/images/product/car_5.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynjyo0"),
          },
          {
            content: t("js.data.6bpolqynk000"),
            image_url: new URL(
              "../../assets/images/product/car_6.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynk140"),
          },
        ],
      },
      // 玻璃封装及烧结用石墨
      {
        id: "glass",
        name: t("js.data.6bpolqyniq80"),
        description: t("js.data.6bpolqynk280"),
        items: [
          {
            content: t("js.data.6bpolqynk380"),
            image_url: new URL(
              "../../assets/images/product/glass_1.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynk4c0"),
          },
          {
            content: t("js.data.6bpolqynkm80"),
            image_url: new URL(
              "../../assets/images/product/glass_2.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkww0"),
          },
          {
            content: t("js.data.6bpolqynkm80"),
            image_url: new URL(
              "../../assets/images/product/glass_3.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkww0"),
          },
          {
            content: t("js.data.6bpolqyniwk0"),
            image_url: new URL(
              "../../assets/images/product/glass_4.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkzw0"),
          },
          {
            content: t("js.data.6bpolqynj3k0"),
            image_url: new URL(
              "../../assets/images/product/glass_5.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl2c0"),
          },
          {
            content: t("js.data.6bpolqynl5g0"),
            image_url: new URL(
              "../../assets/images/product/glass_6.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl7w0"),
          },
          {
            content: t("js.data.6bpolqynla40"),
            image_url: new URL(
              "../../assets/images/product/glass_7.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlcg0"),
          },
          {
            content: t("js.data.6bpolqynlek0"),
            image_url: new URL(
              "../../assets/images/product/glass_8.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlgs0"),
          },
          {
            content: t("js.data.6bpolqynljg0"),
            image_url: new URL(
              "../../assets/images/product/glass_9.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlls0"),
          },
          {
            content: t("js.data.6bpolqynloo0"),
            image_url: new URL(
              "../../assets/images/product/glass_11.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlsw0"),
          },
          {
            content: t("js.data.6bpolqynlv00"),
            image_url: new URL(
              "../../assets/images/product/glass_12.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlxc0"),
          },
          {
            content: t("js.data.6bpolqynlzk0"),
            image_url: new URL(
              "../../assets/images/product/glass_13.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynm1k0"),
          },
          {
            content: t("js.data.6bpolqynm400"),
            image_url: new URL(
              "../../assets/images/product/glass_14.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynm640"),
          },
          {
            content: t("js.data.6bpolqynlek0"),
            image_url: new URL(
              "../../assets/images/product/glass_15.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlgs0"),
          },
          {
            content: t("js.data.6bpolqynla40"),
            image_url: new URL(
              "../../assets/images/product/glass_16.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlcg0"),
          },
          {
            content: t("js.data.6bpolqynl5g0"),
            image_url: new URL(
              "../../assets/images/product/glass_17.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl7w0"),
          },
          {
            content: t("js.data.6bpolqynj3k0"),
            image_url: new URL(
              "../../assets/images/product/glass_18.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl2c0"),
          },
          {
            content: t("js.data.6bpolqyniwk0"),
            image_url: new URL(
              "../../assets/images/product/glass_19.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkzw0"),
          },
          {
            content: t("js.data.6bpolqynloo0"),
            image_url: new URL(
              "../../assets/images/product/glass_21.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlsw0"),
          },
          {
            content: t("js.data.6bpolqynlv00"),
            image_url: new URL(
              "../../assets/images/product/glass_22.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlxc0"),
          },
          {
            content: t("js.data.6bpolqynlzk0"),
            image_url: new URL(
              "../../assets/images/product/glass_23.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynm1k0"),
          },
          {
            content: t("js.data.6bpolqynm400"),
            image_url: new URL(
              "../../assets/images/product/glass_24.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynm640"),
          },
          {
            content: t("js.data.6bpolqynlek0"),
            image_url: new URL(
              "../../assets/images/product/glass_25.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlgs0"),
          },
          {
            content: t("js.data.6bpolqynla40"),
            image_url: new URL(
              "../../assets/images/product/glass_26.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlcg0"),
          },
          {
            content: t("js.data.6bpolqynl5g0"),
            image_url: new URL(
              "../../assets/images/product/glass_27.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl7w0"),
          },
          {
            content: t("js.data.6bpolqynj3k0"),
            image_url: new URL(
              "../../assets/images/product/glass_28.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynl2c0"),
          },
          {
            content: t("js.data.6bpolqyniwk0"),
            image_url: new URL(
              "../../assets/images/product/glass_29.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkzw0"),
          },
          {
            content: t("js.data.6bpolqyniwk0"),
            image_url: new URL(
              "../../assets/images/product/glass_31.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkzw0"),
          },
          {
            content: t("js.data.6bpolqynkm80"),
            image_url: new URL(
              "../../assets/images/product/glass_32.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynkww0"),
          },
        ],
      },
      //电子半导体用石墨
      {
        id: "graphite",
        name: t("js.data.6bpolqynitc0"),
        description: t("js.data.6bpolqynm880"),
        items: [
          {
            content: t("js.data.6bpolqynma80"),
            image_url: new URL(
              "../../assets/images/product/graphite_1.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynmcg0"),
          },
          {
            content: t("js.data.6bpolqynmek0"),
            image_url: new URL(
              "../../assets/images/product/graphite_2.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynmgo0"),
          },
          {
            content: t("js.data.6bpolqynmis0"),
            image_url: new URL(
              "../../assets/images/product/graphite_3.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynml40"),
          },
          {
            content: t("js.data.6bpolqynmn40"),
            image_url: new URL(
              "../../assets/images/product/graphite_4.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynmpo0"),
          },
          {
            content: t("js.data.6bpolqynmsk0"),
            image_url: new URL(
              "../../assets/images/product/graphite_5.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynmuk0"),
          },
          {
            content: t("js.data.6bpolqynmwk0"),
            image_url: new URL(
              "../../assets/images/product/graphite_6.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynmzc0"),
          },
          {
            content: t("js.data.6bpolqynn1k0"),
            image_url: new URL(
              "../../assets/images/product/graphite_7.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynn3s0"),
          },
          {
            content: t("js.data.6bpolqynn5o0"),
            image_url: new URL(
              "../../assets/images/product/graphite_8.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynn880"),
          },
          {
            content: t("js.data.6bpolqynnac0"),
            image_url: new URL(
              "../../assets/images/product/graphite_9.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnck0"),
          },
          {
            content: t("js.data.6bpolqynnac0"),
            image_url: new URL(
              "../../assets/images/product/graphite_10.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnck0"),
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
            image_url: new URL(
              "../../assets/images/product/vc_1.png",
              import.meta.url
            ),
            description: "VC散热用石墨制品，具有优异的导热性能。",
          },
          {
            content: t("js.data.6bpolqynnh80"),
            image_url: new URL(
              "../../assets/images/product/vc_2.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnjo0"),
          },
          {
            content: "VC扩散焊接石墨治具",
            image_url: new URL(
              "../../assets/images/product/vc_3.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnm00"),
          },
          {
            content: t("js.data.6bpolqynnoc0"),
            image_url: new URL(
              "../../assets/images/product/vc_4.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnqg0"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_5.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqynnws0"),
            image_url: new URL(
              "../../assets/images/product/vc_6.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnz00"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_7.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqyno100"),
            image_url: new URL(
              "../../assets/images/product/vc_8.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno340"),
          },
          {
            content: t("js.data.6bpolqyno5c0"),
            image_url: new URL(
              "../../assets/images/product/vc_9.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno7c0"),
          },
          {
            content: t("js.data.6bpolqyno9c0"),
            image_url: new URL(
              "../../assets/images/product/vc_11.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynobc0"),
          },
          {
            content: t("js.data.6bpolqynods0"),
            image_url: new URL(
              "../../assets/images/product/vc_12.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynohk0"),
          },
          {
            content: t("js.data.6bpolqynojs0"),
            image_url: new URL(
              "../../assets/images/product/vc_13.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynon00"),
          },
          {
            content: t("js.data.6bpolqyno5c0"),
            image_url: new URL(
              "../../assets/images/product/vc_14.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno7c0"),
          },
          {
            content: t("js.data.6bpolqyno100"),
            image_url: new URL(
              "../../assets/images/product/vc_15.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno340"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_16.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqynnws0"),
            image_url: new URL(
              "../../assets/images/product/vc_17.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnz00"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_18.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqynnoc0"),
            image_url: new URL(
              "../../assets/images/product/vc_19.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnqg0"),
          },
          {
            content: t("js.data.6bpolqynods0"),
            image_url: new URL(
              "../../assets/images/product/vc_21.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynohk0"),
          },
          {
            content: t("js.data.6bpolqynojs0"),
            image_url: new URL(
              "../../assets/images/product/vc_22.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynon00"),
          },
          {
            content: t("js.data.6bpolqyno5c0"),
            image_url: new URL(
              "../../assets/images/product/vc_23.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno7c0"),
          },
          {
            content: t("js.data.6bpolqyno100"),
            image_url: new URL(
              "../../assets/images/product/vc_24.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqyno340"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_25.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqynnws0"),
            image_url: new URL(
              "../../assets/images/product/vc_26.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnz00"),
          },
          {
            content: t("js.data.6bpolqynnsg0"),
            image_url: new URL(
              "../../assets/images/product/vc_27.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnuo0"),
          },
          {
            content: t("js.data.6bpolqynnoc0"),
            image_url: new URL(
              "../../assets/images/product/vc_28.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynnqg0"),
          },
          {
            content: t('js.data.6bpolqynnoc1'),
            image_url: new URL(
              "../../assets/images/product/vc_29.png",
              import.meta.url
            ),
            description: t('js.data.6bpolqynnoc2'),
          },
        ],
      },
      //石墨舟
      {
        id: "boat",
        name: t("js.data.6bpolqyniv40"),
        description: t("js.data.6bpolqynopk0"),
        items: [
          {
            content: t("js.data.6bpolqyniv40"),
            image_url: new URL(
              "../../assets/images/product/boat_1.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynorw0"),
          },
          {
            content: t("js.data.6bpolqynotw0"),
            image_url: new URL(
              "../../assets/images/product/boat_2.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynow40"),
          },
          {
            content: t("js.data.6bpolqynoys0"),
            image_url: new URL(
              "../../assets/images/product/boat_3.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynp100"),
          },
          {
            content: t("js.data.6bpolqynp3c0"),
            image_url: new URL(
              "../../assets/images/product/boat_4.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynp5c0"),
          },
          {
            content: t("js.data.6bpolqynp7w0"),
            image_url: new URL(
              "../../assets/images/product/boat_5.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpa80"),
          },
          {
            content: t("js.data.6bpolqynp7w0"),
            image_url: new URL(
              "../../assets/images/product/boat_6.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpa80"),
          },
          {
            content: t("js.data.6bpolqynpcs0"),
            image_url: new URL(
              "../../assets/images/product/boat_7.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpf40"),
          },
          {
            content: t("js.data.6bpolqynph80"),
            image_url: new URL(
              "../../assets/images/product/boat_8.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpjo0"),
          },
          {
            content: t("js.data.6bpolqynpm40"),
            image_url: new URL(
              "../../assets/images/product/boat_9.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpo80"),
          },
          {
            content: t("js.data.6bpolqynpqw0"),
            image_url: new URL(
              "../../assets/images/product/boat_11.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynptc0"),
          },
          {
            content: t("js.data.6bpolqynpvs0"),
            image_url: new URL(
              "../../assets/images/product/boat_12.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynpy00"),
          },
          {
            content: t("js.data.6bpolqynq0c0"),
            image_url: new URL(
              "../../assets/images/product/boat_13.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynq2s0"),
          },
          {
            content: "27片210石墨舟",
            image_url: new URL(
              "../../assets/images/product/boat_14.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynq540"),
          },
          {
            content: t("js.data.6bpolqynq7g0"),
            image_url: new URL(
              "../../assets/images/product/boat_15.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynq9g0"),
          },
        ],
      },
      //石墨零件
      {
        id: "part",
        name: t("js.data.6bpolqyniwk0"),
        description: t("js.data.6bpolqynqbs0"),
        items: [
          {
            content: t("js.data.6bpolqynqds0"),
            image_url: new URL(
              "../../assets/images/product/part_1.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynqg00"),
          },
          {
            content: t("js.data.6bpolqynla40"),
            image_url: new URL(
              "../../assets/images/product/part_2.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynlcg0"),
          },
          {
            content: t("js.data.6bpolqynqi80"),
            image_url: new URL(
              "../../assets/images/product/part_3.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynk4c0"),
          },
          {
            content: t("js.data.6bpolqynqkw0"),
            image_url: new URL(
              "../../assets/images/product/part_4.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynqmw0"),
          },
        ],
      },
    ],
    detailedDescription: t("js.data.6bpolqynqp40"),
    faqs: [
      {
        id: "faq-1",
        question: t("js.data.6bpolqynqs00"),
        answer: t("js.data.6bpolqynquc0"),
      },
      {
        id: "faq-2",
        question: t("js.data.6bpolqynqwk0"),
        answer: t("js.data.6bpolqynqyw0"),
      },
      {
        id: "faq-3",
        question: t("js.data.6bpolqynr140"),
        answer: t("js.data.6bpolqynr3k0"),
      },
      {
        id: "faq-4",
        question: t("js.data.6bpolqynr5w0"),
        answer: t("js.data.6bpolqynr880"),
      },
      {
        id: "faq-5",
        question: t("js.data.6bpolqynrac0"),
        answer: t("js.data.6bpolqynrcg0"),
      },
      {
        id: "faq-6",
        question: t("js.data.6bpolqynreo0"),
        answer: t("js.data.6bpolqynrh80"),
      },
      {
        id: "faq-7",
        question: t("js.data.6bpolqynrjo0"),
        answer: t("js.data.6bpolqynrls0"),
      },
      {
        id: "faq-8",
        question: t("js.data.6bpolqynrnw0"),
        answer: t("js.data.6bpolqynrq80"),
      },
    ],
  },
  {
    id: "legal-eye",
    title: t("js.data.6bpolqynrsk0"),
    shortDescription: t("js.data.6bpolqynruw0"),
    description: t("js.data.6bpolqynrx40"),
    imageUrl: new URL(
      "../../assets/images/home/product02.png",
      import.meta.url
    ),
    category: "enterprise",
    tip: t("js.data.6bpolqynrzk0"),
    features: [
      t('js.data.6bpolqynnoc3'),
      t("js.data.6bpolqyns280"),
      t("js.data.6bpolqyns4k0"),
      t("js.data.6bpolqyns740"),
      t("js.data.6bpolqyns980"),
      t("js.data.6bpolqynsbg0"),
      t("js.data.6bpolqynsdk0"),
    ],
    specs: {
      [t('js.data.6bpolqynsg40')]: t('js.data.6bpolqynsi81'),
      [t('js.data.6bpolqynsi83')]: t('js.data.6bpolqynsi80'),
      [t('js.data.6bpolqynsi84')]: t('js.data.6bpolqynsi85'),
      [t('js.data.6bpolqynsi86')]: t('js.data.6bpolqynsi87'),
      [t('js.data.6bpolqynsi88')]: t('js.data.6bpolqynsi89'),
      [t('js.data.6bpolqynsi91')]: t('js.data.6bpolqynsi92'),
      [t('js.data.6bpolqynsi93')]: t('js.data.6bpolqynsi94'),
    },
    scenarios: [
      t("js.data.legalEye.scenarios01"),
      t("js.data.legalEye.scenarios02"),
      t("js.data.legalEye.scenarios03"),
      t("js.data.legalEye.scenarios04"),
      t("js.data.legalEye.scenarios05"),
    ],
    products: [
      //进口石墨
      {
        id: "imported",
        name: t("js.data.6bpolqynskc0"),
        description: t("js.data.6bpolqynsmg0"),
        items: [
          {
            content: t("js.data.6bpolqynskc0"),
            image_url: new URL(
              "../../assets/images/product/imported_1.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynsog0"),
          },
          {
            content: t('js.data.6bpolqynsqs1'),
            image_url: new URL(
              "../../assets/images/product/imported_2.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynsqs0"),
          },
          {
            content: t("js.data.6bpolqynst80"),
            image_url: new URL(
              "../../assets/images/product/imported_3.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynsw00"),
          },
          {
            content: t("js.data.6bpolqynsy80"),
            image_url: new URL(
              "../../assets/images/product/imported_4.jpg",
              import.meta.url
            ),
            description: t("js.data.6bpolqynt080"),
          },
        ],
      },
      //国产石墨
      {
        id: "domestic",
        title: t("js.data.6bpolqynt2c0"),
        description: t("js.data.6bpolqynt4g0"),
        items: [
          {
            content: t("js.data.6bpolqynt2c0"),
            image_url: new URL(
              "../../assets/images/product/domestic_1.png",
              import.meta.url
            ),
            description: t("js.data.6bpolqynt6k0"),
          },
        ],
      },
    ],
    detailedDescription: t("js.data.6bpolqynt9k0"),
    faqs: [
      {
        id: "faq-1",
        question: t("js.data.6bpolqyntbw0"),
        answer: t("js.data.6bpolqynteg0"),
      },
      {
        id: "faq-2",
        question: t("js.data.6bpolqyntgw0"),
        answer: t("js.data.6bpolqyntjc0"),
      },
      {
        id: "faq-3",
        question: t("js.data.6bpolqyntlg0"),
        answer: t("js.data.6bpolqyntng0"),
      },
      {
        id: "faq-4",
        question: t("js.data.6bpolqyntpk0"),
        answer: t("js.data.6bpolqyntro0"),
      },
      {
        id: "faq-5",
        question: t("js.data.6bpolqyntto0"),
        answer: t("js.data.6bpolqyntw00"),
      },
      {
        id: "faq-6",
        question: t("js.data.6bpolqynty80"),
        answer: t("js.data.6bpolqynu4g0"),
      },
      {
        id: "faq-7",
        question: t("js.data.6bpolqynu740"),
        answer: t("js.data.6bpolqynu9k0"),
      },
      {
        id: "faq-8",
        question: t("js.data.6bpolqynubw0"),
        answer: t("js.data.6bpolqynue00"),
      },
    ],
  },
  {
    id: "id-photo",
    title: t("js.data.6bpolqynug80"),
    imageUrl: new URL(
      "../../assets/images/home/product03.png",
      import.meta.url
    ),
    shortDescription: t("js.data.6bpolqynuic0"),
    description: t("js.data.6bpolqynukw0"),
    category: "platform",
    tip: t("js.data.6bpolqynun80"),
    features: [
      t("js.data.6bpolqynupc0"),
      t("js.data.6bpolqynurc0"),
      t("js.data.6bpolqynutc0"),
      t("js.data.6bpolqynuvg0"),
      t("js.data.6bpolqynuxg0"),
      t("js.data.6bpolqynuzk0"),
      t("js.data.6bpolqynv200"),
    ],
    specs: {
      [t('js.data.6bpolqynsqs2')]: t('js.data.6bpolqynsqs3'),
      "气体释放率": "<1×10⁻⁸ Pa·m³/(s·cm²)（真空性能关键）",
      "最高使用温度": "2800℃（惰性/真空环境）",
      "热导率": "80–150 W/(m·K)",
      "体积密度": "1.7–1.85 g/cm³",
      "抗弯强度": "≥50 MPa",
      [t('js.data.6bpolqynv680')]: "<1.15（越接近1越好）",
      [t('js.data.6bpp5eij4og0')]: "<100 ppm",
      "氧含量": "<500 ppm",
    },
    scenarios: [
      t("js.data.idPhoto.scenarios01"),
      t("js.data.idPhoto.scenarios02"),
      t("js.data.idPhoto.scenarios03"),
      t("js.data.idPhoto.scenarios04"),
      t("js.data.idPhoto.scenarios05"),
    ],
    products: [
      //铸锭炉
      {
        id: "furnace",
        name: t("js.data.6bpolqynv8g0"),
        description: t("js.data.6bpolqynvas0"),
        items: [
          {
            content: t("js.data.6bpolqynvd00"),
            image_url: new URL(
              "../../assets/images/product/furnace_1.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //真空热处理炉
      {
        id: "vacuum",
        name: t("js.data.6bpolqynvf40"),
        description: t("js.data.6bpolqynvh00"),
        items: [
          {
            content: t("js.data.6bpolqynvjk0"),
            image_url: new URL(
              "../../assets/images/product/vacuum_1.png",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqynwgg0"),
            image_url: new URL(
              "../../assets/images/product/vacuum_2.png",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqynwwg0"),
            image_url: new URL(
              "../../assets/images/product/vacuum_3.jpg",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //MIM炉
      {
        id: "mim",
        name: t('js.data.6bpolqynx381'),
        description: t("js.data.6bpolqynwzw0"),
        items: [
          {
            content: t("js.data.6bpolqynx380"),
            image_url: new URL(
              "../../assets/images/product/mim_1.png",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqynx5w0"),
            image_url: new URL(
              "../../assets/images/product/mim_2.png",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqynx840"),
            image_url: new URL(
              "../../assets/images/product/mim_3.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //加热器
      {
        id: "heater",
        name: t("js.data.6bpolqynxb00"),
        description: t("js.data.6bpolqynxdc0"),
        items: [
          {
            content: t("js.data.6bpolqynxrw0"),
            image_url: new URL(
              "../../assets/images/product/heater_1.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //保温毡
      {
        id: "insulation",
        name: t("js.data.6bpolqynxys0"),
        description: t("js.data.6bpolqyny180"),
        items: [
          {
            content: t("js.data.6bpolqyny2c0"),
            image_url: new URL(
              "../../assets/images/product/insulation_1.png",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyny3k0"),
            image_url: new URL(
              "../../assets/images/product/insulation_2.png",
              import.meta.url
            ),
          },
        ],
      },
      //软毡
      {
        id: "softFelt",
        name: t("js.data.6bpolqynz2g0"),
        description: t("js.data.6bpolqynzao0"),
        items: [
          {
            content: t("js.data.6bpolqynze80"),
            image_url: new URL(
              "../../assets/images/product/softFelt_1.jpg",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //石墨连接板
      {
        id: "shim",
        name: t("js.data.6bpolqynzgs0"),
        description: t("js.data.6bpolqynzj40"),
        items: [
          {
            content: t("js.data.6bpolqynzgs0"),
            image_url: new URL(
              "../../assets/images/product/shim_1.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
    ],
    detailedDescription: t("js.data.6bpolqynzm80"),
    faqs: [
      {
        id: "faq-1",
        question: t("js.data.6bpolqynzok0"),
        answer: t("js.data.6bpolqynzrk0"),
      },
      {
        id: "faq-2",
        question: t("js.data.6bpolqynztw0"),
        answer: t("js.data.6bpolqynzwo0"),
      },
      {
        id: "faq-3",
        question: t("js.data.6bpolqynzz00"),
        answer: t("js.data.6bpolqyo01c0"),
      },
      {
        id: "faq-4",
        question: t("js.data.6bpolqyo04c0"),
        answer: t("js.data.6bpolqyo06o0"),
      },
      {
        id: "faq-5",
        question: t("js.data.6bpolqyo09g0"),
        answer: t("js.data.6bpolqyo0c00"),
      },
      {
        id: "faq-6",
        question: t("js.data.6bpolqyo0e80"),
        answer: t("js.data.6bpolqyo0h80"),
      },
      {
        id: "faq-7",
        question: t("js.data.6bpolqyo0jw0"),
        answer: t("js.data.6bpolqyo0mo0"),
      },
      {
        id: "faq-8",
        question: t("js.data.6bpolqyo0p40"),
        answer: t("js.data.6bpolqyo0rs0"),
      },
    ],
  },
  {
    id: "id-photo1",
    title: t("js.data.6bpolqyo0tw0"),
    imageUrl: new URL(
      "../../assets/images/home/product04.png",
      import.meta.url
    ),
    shortDescription: t("js.data.6bpolqyo0w40"),
    description: t("js.data.6bpolqyo0y40"),
    category: "platform",
    tip: t("js.data.6bpolqyo1040"),
    features: [
      t("js.data.6bpolqyo12g0"),
      t("js.data.6bpolqyo14g0"),
      t("js.data.6bpolqyo16g0"),
      t("js.data.6bpolqyo18k0"),
      t("js.data.6bpolqyo1b00"),
      t("js.data.6bpolqyo1dg0"),
      t("js.data.6bpolqyo1fs0"),
    ],
    specs: {
      "光电转换效率": "单晶硅 22–25%，多晶硅 18–22%，TOPCon >25%",
      [t('js.data.6bpolqyo1i80')]: "0.6–0.7 V（单个电池）",
      [t('js.data.6bpolqyo1kg0')]: "8–10 A（标准组件）",
      [t('js.data.6bpolqyo1mk0')]: "75–85%",
      "温度系数": "-0.3% ~ -0.5%/℃（功率随温度下降）",
      "组件功率": "400–700 Wp（主流商用组件）",
      "使用寿命": "25年以上（衰减<20%）",
      "工作温度范围": "-40℃ 至 +85℃",
      "最大系统电压": "1000V 或 1500V（DC）",
    },
    scenarios: [
      t("js.data.idPhoto1.scenarios01"),
      t("js.data.idPhoto1.scenarios02"),
      t("js.data.idPhoto1.scenarios03"),
      t("js.data.idPhoto1.scenarios04"),
      t("js.data.idPhoto1.scenarios05"),
    ],
    products: [
      //保温毡
      {
        id: "warmFelt",
        name: t("js.data.6bpolqynxys0"),
        description: t("js.data.6bpolqyo1os0"),
        items: [
          {
            content: t("js.data.6bpolqyo1qs0"),
            image_url: new URL(
              "../../assets/images/product/warmFelt_1.jpg",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqyo1tc0"),
            image_url: new URL(
              "../../assets/images/product/warmFelt_2.jpg",
              import.meta.url
            ),
            description: "",
          },
          {
            content: t("js.data.6bpolqyo1w40"),
            image_url: new URL(
              "../../assets/images/product/warmFelt_3.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //热场
      {
        id: "heatPark",
        name: t("js.data.6bpolqyo1yc0"),
        description: t("js.data.6bpolqyo20o0"),
        items: [
          {
            content: t("js.data.6bpolqyo2340"),
            image_url: new URL(
              "../../assets/images/product/heatPark_1.png",
              import.meta.url
            ),
            description: "",
          },
        ],
      },
      //碳碳复合材料
      {
        id: "carbonComposite",
        name: t("js.data.6bpolqyo25g0"),
        description: t("js.data.6bpolqyo2880"),
        items: [
          {
            content: t("js.data.6bpolqyo2b00"),
            image_url: new URL(
              "../../assets/images/product/carbonComposite_1.png",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyo2d40"),
            image_url: new URL(
              "../../assets/images/product/carbonComposite_2.jpg",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyo2fo0"),
            image_url: new URL(
              "../../assets/images/product/carbonComposite_3.png",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyo2i00"),
            image_url: new URL(
              "../../assets/images/product/carbonComposite_4.png",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyo2k80"),
            image_url: new URL(
              "../../assets/images/product/carbonComposite_5.png",
              import.meta.url
            ),
          },
        ],
      },
      //隔热笼
      {
        id: "insulationCage",
        name: t("js.data.6bpolqyo2mw0"),
        description: t("js.data.6bpolqyo2pg0"),
        items: [
          {
            content: t("js.data.6bpolqyo2sc0"),
            image_url: new URL(
              "../../assets/images/product/insulationCage_1.png",
              import.meta.url
            ),
          },
        ],
      },
      //热场用石墨配件
      {
        id: "accessories",
        name: t("js.data.6bpolqyo2ug0"),
        description: t("js.data.6bpolqyo2ww0"),
        items: [
          {
            content: "CFC螺栓螺母",
            image_url: new URL(
              "../../assets/images/product/accessories_1.png",
              import.meta.url
            ),
          },
          {
            content: t("js.data.6bpolqyo2340"),
            image_url: new URL(
              "../../assets/images/product/accessories_2.png",
              import.meta.url
            ),
          },
        ],
      },
    ],
    detailedDescription: t("js.data.6bpolqyo2z00"),
    faqs: [
      {
        id: "faq-1",
        question: t("js.data.6bpolqyo31s0"),
        answer: t("js.data.6bpolqyo34g0"),
      },
      {
        id: "faq-2",
        question: t("js.data.6bpolqyo36s0"),
        answer: t("js.data.6bpolqyo39c0"),
      },
      {
        id: "faq-3",
        question: t("js.data.6bpolqyo3e80"),
        answer: t("js.data.6bpolqyo3gw0"),
      },
      {
        id: "faq-4",
        question: t("js.data.6bpolqyo3j40"),
        answer: t("js.data.6bpolqyo3lg0"),
      },
      {
        id: "faq-5",
        question: t("js.data.6bpolqyo3ns0"),
        answer: t("js.data.6bpolqyo3pw0"),
      },
      {
        id: "faq-6",
        question: t("js.data.6bpolqyo3s40"),
        answer: t("js.data.6bpolqyo3uc0"),
      },
      {
        id: "faq-7",
        question: t("js.data.6bpolqyo3wk0"),
        answer: t("js.data.6bpolqyo3yo0"),
      },
      {
        id: "faq-8",
        question: t("js.data.6bpolqyo41c0"),
        answer: t("js.data.6bpolqyo43k0"),
      },
    ],
  },
];
//汽车领域用石墨
export const automotiveField = [
  {
    content: t("js.data.6bpolqynjmg0"),
    image_url: new URL(
      "../../assets/images/product/car_1.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynjo80"),
  },
  {
    content: t("js.data.6bpolqynjpk0"),
    image_url: new URL(
      "../../assets/images/product/car_2.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynjrw0"),
  },
  {
    content: "石墨转子 旋片 叶片",
    image_url: new URL(
      "../../assets/images/product/car_3.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynjtc0"),
  },
  {
    content: t("js.data.6bpolqynjv00"),
    image_url: new URL(
      "../../assets/images/product/car_4.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynjw80"),
  },
  {
    content: t("js.data.6bpolqynjxo0"),
    image_url: new URL(
      "../../assets/images/product/car_5.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynjyo0"),
  },
  {
    content: t("js.data.6bpolqynk000"),
    image_url: new URL(
      "../../assets/images/product/car_6.png",
      import.meta.url
    ),
    description: t("js.data.6bpolqynk140"),
  },
];

// 模拟新闻数据
export const newsList = [
  {
    id: 1,
    title: t("js.data.6bpolqyo45s0"),
    excerpt: t("js.data.6bpolqyo47s0"),
    date: "2024-06-15",
    category: t("js.data.6bpolqyo4a00"),
    image: new URL("@/assets/images/news/news1.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo4co0"),
      t("js.data.6bpolqyo4fk0"),
      t("js.data.6bpolqyo4hs0"),
      t("js.data.6bpolqyo4k80"),
    ],
  },
  {
    id: 2,
    title: t("js.data.6bpolqyo4mo0"),
    excerpt: t("js.data.6bpolqyo4ps0"),
    date: "2024-06-10",
    category: t("js.data.6bpolqyo4s80"),
    image: new URL("@/assets/images/news/news2.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo4uo0"),
      t("js.data.6bpolqyo4xk0"),
      t("js.data.6bpolqyo5000"),
      t("js.data.6bpolqyo5280"),
    ],
  },
  {
    id: 3,
    title: t("js.data.6bpolqyo54g0"),
    excerpt: t("js.data.6bpolqyo5740"),
    date: "2024-06-05",
    category: t("js.data.6bpolqyo59k0"),
    image: new URL("@/assets/images/news/news3.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo5cg0"),
      t("js.data.6bpolqyo5eo0"),
      t("js.data.6bpolqyo5h80"),
      t("js.data.6bpolqyo5jk0"),
    ],
  },
  {
    id: 4,
    title: t("js.data.6bpolqyo5n00"),
    excerpt: t("js.data.6bpolqyo5pg0"),
    date: "2024-05-28",
    category: t("js.data.6bpolqyo5rs0"),
    image: new URL("@/assets/images/news/news4.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo5ug0"),
      t("js.data.6bpolqyo5ww0"),
      t("js.data.6bpolqyo5zc0"),
      t("js.data.6bpolqyo61w0"),
    ],
  },
  {
    id: 5,
    title: t("js.data.6bpolqyo64c0"),
    excerpt: t("js.data.6bpolqyo66o0"),
    date: "2024-05-20",
    category: t("js.data.6bpolqyo68s0"),
    image: new URL("@/assets/images/news/news5.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo6b00"),
      t("js.data.6bpolqyo6d40"),
      t("js.data.6bpolqyo6fc0"),
      t("js.data.6bpolqyo6hs0"),
    ],
  },
  {
    id: 6,
    title: t("js.data.6bpolqyo6k00"),
    excerpt: t("js.data.6bpolqyo6mg0"),
    date: "2024-05-15",
    category: t("js.data.6bpolqyo6oo0"),
    image: new URL("@/assets/images/news/news6.png", import.meta.url).href,
    content: [
      t("js.data.6bpolqyo6qw0"),
      t("js.data.6bpolqyo6sw0"),
      t('js.data.6bpolqyo6sw1'),
      t("js.data.6bpolqyo6vc0"),
    ],
  },
];
export const certificates = [
  {
    title: t('js.data.6bpolqyo6xk1'),
    date: t('js.data.6bpolqynx383'),
    description: t('js.data.6bpolqyo6xk2'),
    image: new URL("@/assets/images/honor/cert1.png", import.meta.url),
  },
  {
    title: t('js.data.6bpolqyo6xk3'),
    date: "2019年",
    description: t("js.data.6bpolqyo6xk0"),
    image: new URL("@/assets/images/honor/cert2.png", import.meta.url),
  },
  {
    title: t('js.data.6bpolqyo6xk5'),
    date: "2021年",
    description: t("js.data.6bpolqyo7080"),
    image: new URL("@/assets/images/honor/cert3.png", import.meta.url),
  },
  {
    title: t('js.data.6bpolqyo6xk6'),
    date: "2021年",
    description: t("js.data.6bpolqyo72k0"),
    image: new URL("@/assets/images/honor/cert4.png", import.meta.url),
  },
];
export const awards = [
  {
    title: t("js.data.6bpolqyo74w0"),
    date: t('js.data.6bpolqyo6xk7'),
    description: t("js.data.6bpolqyo77c0"),
  },
  {
    title: t("js.data.6bpolqyo79s0"),
    date: t('js.data.6bpolqyo6xk8'),
    description: t("js.data.6bpolqyo7c00"),
  },
  {
    title: t("js.data.6bpolqyo7e80"),
    date: t("js.data.6bpolqyo7gc0"),
    description: t("js.data.6bpolqyo7ig0"),
  },
  {
    title: t("js.data.6bpolqyo7ks0"),
    date: t('js.data.6bpolqyo6xk9'),
    description: t("js.data.6bpolqyo7n00"),
  },
  {
    title: t("js.data.6bpolqyo7pk0"),
    date: t("js.data.6bpolqyo7gc0"),
    description: t("js.data.6bpolqyo7rs0"),
  },
  // 添加的新荣誉资质
  {
    title: t("js.data.6bpolqyo7u40"),
    date: t('js.data.6bpolqyo6x10'),
    description: t("js.data.6bpolqyo7wc0"),
  },
  {
    title: t("js.data.6bpolqyo7yo0"),
    date: t('js.data.6bpolqyo6x11'),
    description: t("js.data.6bpolqyo80s0"),
  },
  {
    title: t("js.data.6bpolqyo8340"),
    date: t("js.data.6bpolqyo7gc0"),
    description: t("js.data.6bpolqyo85c0"),
  },
  {
    title: t("js.data.6bpolqyo8eg0"),
    date: t("js.data.6bpolqyo7gc0"),
    description: t("js.data.6bpolqyo8h40"),
  },
];

export const partners = [
  {
    name: t('js.data.keJiJiTuanGongSi'),
    description: t("js.data.6bpolqyo8j80"),
    logo: new URL("@/assets/images/honor/partner1.png", import.meta.url),
  },
  {
    name: t('js.data.gongYeGongSi'),
    description: t("js.data.6bpolqyo8lk0"),
    logo: new URL("@/assets/images/honor/partner2.png", import.meta.url),
  },
  {
    name: t('js.data.yanJiuYuan'),
    description: t("js.data.6bpolqyo8no0"),
    logo: new URL("@/assets/images/honor/partner3.png", import.meta.url),
  },
  {
    name: t('js.data.xinNengYuanGongSi'),
    description: t("js.data.6bpolqyo8q80"),
    logo: new URL("@/assets/images/honor/partner4.png", import.meta.url),
  },
];

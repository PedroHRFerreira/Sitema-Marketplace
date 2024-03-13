import { NuxtConfig } from "nuxt";

const config: NuxtConfig = {
  head: {
    title: "test in title",
    htmlAttrs: {
      lang: "pt-br",
    },
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Test in description",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "null", href: "null" }],
  },

  devtools: { enabled: process.env.NODE_ENV === "development" },

  ssr: false,

  css: ["~/assets/css/global.css"],

  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],

  image: {
    inject: true,
  },

  components: [
    "@/components",
    {
      path: "@/components/templates/",
      prefix: "template",
      extensions: ["vue"],
    },
    {
      path: "@/components/organisms/",
      prefix: "organism",
      extensions: ["vue"],
    },
    {
      path: "@/components/molecules/",
      prefix: "molecule",
      extensions: ["vue"],
    },
    {
      path: "@/components/atoms/",
      prefix: "atom",
      extensions: ["vue"],
    },
  ],

  googleFonts: {
    display: "swap",
    preload: true,
    families: {
      Sora: {
        wght: [200, 300, 400, 500, 600, 700],
      },
      Poppins: {
        wght: [200, 300, 400, 500, 600, 700],
      },
    },
  },
};

export default config;

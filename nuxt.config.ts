// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "florify",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "https://i.ibb.co/dQfTqMw/icon-1.png",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: '404',
  //       path: '*',
  //       component: resolve(__dirname, 'layouts/error.vue')
  //     })
  //   }
  // },
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    // "@nuxtjs/i18n",
    // {
    //   locales: ['en', 'es'],
    //   defaultLocale: 'en',
    //   vueI18n: {
    //     fallbackLocale: 'en',
    //     messages: {
    //       en: {
    //         greeting: 'Hello world!'
    //       },
    //       es: {
    //         greeting: '¡Hola mundo!'
    //       }
    //     }
    //   }
    // }
  ],
  // i18n: {
  //   locales: ["en", "fr", "es"],
  //   defaultLocale: "en",
  //   vueI18n: {
  //     fallbackLocale: "en",
  //     messages: {
  //       en: {
  //         welcome: "Welcome",
  //       },
  //       fr: {
  //         welcome: "Bienvenue",
  //       },
  //       es: {
  //         welcome: "Bienvenido",
  //       },
  //     },
  //   },
  // },
});

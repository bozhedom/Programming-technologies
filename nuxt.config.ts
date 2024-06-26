// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: false,
  modules: [
    'nuxt-svgo',
    'nuxt-swiper',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Open Sans': [400, 700],
          Montserrat: true,
        },
      },
    ],
  ],
});

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  image: {
    // Здесь можно указать провайдер, например static, ipx, cloudinary и т.п.
    provider: 'ipx',
    ipx: {
      dir: 'public', // если используешь /public
    }
  }
});
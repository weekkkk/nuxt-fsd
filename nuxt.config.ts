export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});

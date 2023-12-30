// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt'
  ],
  app: {
    baseURL: '/msu-naawan/',
    buildAssetsDir: 'assets'
  },
  plugins:['@/plugins/antd']
})

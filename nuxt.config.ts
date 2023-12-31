// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt'
  ],
  app: {
    baseURL: '/msu-naawan/',
    buildAssetsDir: 'assets'
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver(
          {
            importStyle: false,
          }
        )],
      }),
    ]
  },
})

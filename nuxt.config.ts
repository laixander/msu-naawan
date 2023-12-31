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
    ssr: {
      noExternal: ["ant-design-vue"],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      Components({
        resolvers: [
          // resolveIcons true will error with NITRO_PRESET=cloudflare
          AntDesignVueResolver({ importStyle: "less" }),
        ],
        dts: "types/components.d.ts",
      }),
    ]
  },
})

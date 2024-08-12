// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@ant-design-vue/nuxt'
    ],
    css: [
        '~/assets/scss/main.scss'
    ],
    // app: {
    //     baseURL: '/',
    //     // buildAssetsDir: 'assets',
    //     pageTransition: { name: 'page', mode: 'out-in' }
    // }
})

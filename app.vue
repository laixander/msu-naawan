<template>
  <a-layout>
    <layout-sider />
    <a-layout>
      <layout-header />
      <a-layout-content>
          <NuxtPage />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>



<style scoped lang="scss">
.ant-layout .ant-layout-header {
  line-height: normal;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
</style>

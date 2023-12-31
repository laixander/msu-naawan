<template>
  <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
          <AppLogo />
          <AppMenu />
      </a-layout-sider>
      <a-layout>
          <a-layout-header>
              <a-space align="center" :size="0" style="flex: 1;">
                  <MenuOutlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                  <MoreOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                  <Breadcrumb />
              </a-space>

              <a-typography-title :level="5" style="margin: 0; flex: 1; text-align: center;">
                  <a-tag color="#2F54EB">SIS</a-tag> Student Information System
              </a-typography-title>

              <a-space size="large" align="center" style="flex: 1; justify-content: flex-end;">
                  <a-space>
                      <a-button :icon="h(BankOutlined)" style="background: transparent;">Naawan Campus</a-button>
                      <a-button :icon="h(BookOutlined)" style="background: transparent;">College Level</a-button>
                  </a-space>
                  <a-badge dot>
                      <bell-outlined style="font-size: 16px" />
                  </a-badge>

                  <a-dropdown>
                      <a class="ant-dropdown-link" @click.prevent>
                          <appstore-outlined style="font-size: 16px" />
                      </a>
                      <template #overlay>
                        <a-menu>
                          <a-menu-item>
                            <a href="javascript:;">1st menu item</a>
                          </a-menu-item>
                          <a-menu-item>
                            <a href="javascript:;">2nd menu item</a>
                          </a-menu-item>
                          <a-menu-item>
                            <a href="javascript:;">3rd menu item</a>
                          </a-menu-item>
                        </a-menu>
                      </template>
                    </a-dropdown>

                  <a-avatar size="large">
                      <template #icon>
                          <UserOutlined />
                      </template>
                  </a-avatar>
              </a-space>
          </a-layout-header>
          <a-layout-content>
              <NuxtPage />
          </a-layout-content>
      </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
      UserOutlined,
      MenuOutlined,
      MoreOutlined,
      BellOutlined,
      BankOutlined,
      BookOutlined,
      AppstoreOutlined,
  } from '@ant-design/icons-vue';
  const collapsed = ref<boolean>(false);
</script>
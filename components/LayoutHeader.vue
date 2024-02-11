<template>
    <a-layout-header :style="{ padding: '0 16px', display: 'flex', alignItems: 'center' }">
        <a-row :style="{ width: '100%' }"  align="middle">
          <a-col :xs="10" :sm="6" :md="8">
            <!-- <breadcrumb /> -->
            <a-space class="cms-options">
              <a-select
                v-model:value="value2"
                :options="options2"
                @change="handleChange"
              >
                <template #suffixIcon><bank-outlined class="ant-select-suffix" :style="{color: 'rgba(0, 0, 0, 0.88)', fontSize: '14px'}" /></template>
              </a-select>
              <a-select
                v-model:value="value1"
                :options="options1"
                @change="handleChange"
              >
                <template #suffixIcon><book-outlined class="ant-select-suffix" :style="{color: 'rgba(0, 0, 0, 0.88)', fontSize: '14px'}" /></template>
              </a-select>
            </a-space>
          </a-col>
          <a-col :xs="4" :sm="12" :md="8" :style="{ textAlign: 'center' }">
            <a-tag color="#f50">LMS</a-tag> <a-typography-text strong>Learning Management System</a-typography-text>
          </a-col>
          <a-col :xs="10" :sm="6" :md="8" :style="{ textAlign: 'right' }">
            <a-space size="large">
              <a-dropdown placement="bottomRight" :trigger="['click']">
                <a-badge dot @click.prevent>
                  <BellOutlined style="font-size: 16px" />
                </a-badge>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        <a-space align="start" size="middle">
                          <NotificationOutlined />
                          <a-flex vertical>
                            <a-typography-text
                              :style="ellipsis ? { width: '320px' } : {}"
                              :ellipsis="ellipsis"
                              content="Ant Design, a design language for background applications, is refined by Ant UED Team."
                            />
                            <a-typography-text type="secondary">Jan 10, 2024</a-typography-text>
                          </a-flex>
                        </a-space>
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        <a-space align="start" size="middle">
                          <NotificationOutlined />
                          <a-flex vertical>
                            <a-typography-text
                              :style="ellipsis ? { width: '320px' } : {}"
                              :ellipsis="ellipsis"
                              content="Ant Design, a design language for background applications, is refined by Ant UED Team."
                            />
                            <a-typography-text type="secondary">Jan 10, 2024</a-typography-text>
                          </a-flex>
                        </a-space>
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        <a-space align="start" size="middle">
                          <NotificationOutlined />
                          <a-flex vertical>
                            <a-typography-text
                              :style="ellipsis ? { width: '320px' } : {}"
                              :ellipsis="ellipsis"
                              content="Ant Design, a design language for background applications, is refined by Ant UED Team."
                            />
                            <a-typography-text type="secondary">Jan 10, 2024</a-typography-text>
                          </a-flex>
                        </a-space>
                      </a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
              <a-dropdown placement="bottomRight" :trigger="['click']">
                <a-tooltip placement="bottomRight" arrow-point-at-center :mouseEnterDelay="1.5" :mouseLeaveDelay="0">
                  <template #title>
                    <div>Juan dela Cruz</div>
                    <div>Administrator</div>
                  </template>
                  <a-avatar size="large" @click.prevent>
                    <template #icon><UserOutlined /></template>
                  </a-avatar>
                </a-tooltip>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                      </a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </a-space>
          </a-col>
        </a-row>
        
      </a-layout-header>
</template>

<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';
import { ref } from 'vue';
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const options2 = ref<SelectProps['options']>([
  {
    value: 'naawan',
    label: 'Naawan Campus',
  },
  {
    value: 'marawi',
    label: 'Marawi Campus',
  }
]);
const value2 = ref('naawan');
const options1 = ref<SelectProps['options']>([
  {
    value: 'college',
    label: 'College Level',
  },
  {
    value: 'secondary',
    label: 'Secondary Level',
  }
]);
const value1 = ref('college');

const ellipsis = ref(true);
</script>

<style scoped lang="scss">
.ant-typography {
    display: none;
  }
  
  @media (min-width: 1200px) {
    .ant-typography {
      display: inline;
    }
  }
.ant-select {
    &:not(.ant-select-customize-input) {
      & :deep(.ant-select-selector) {
        background-color: transparent;
      }
    }
    :deep(.ant-select-selection-item) {
      padding-inline-end: 0;
      padding-inline-start: 24px
    }
    :deep(.ant-select-arrow) {
      inset-inline-end: auto;
      inset-inline-start: 12px
    }
  }
</style>
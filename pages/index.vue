<template>
  <div style="width: 100%;">
    <a-row :gutter="[0, 12]" class="intro" style="background: linear-gradient(0deg, rgba(25, 25, 112, 0.80) 0%, rgba(25, 25, 112, 0.80) 100%), url(/img/bnr_bg.jpg); background-size: cover; background-position: center; padding: 0 24px 32px; text-align: center">
      <a-col :span="24">
          <a-typography-title :level="2" style="color: #fff;">
              Faculty Information System
          </a-typography-title>
          <a-typography-paragraph style="color: #fff;">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore voluptate neque adipisci minus.
          </a-typography-paragraph>
      </a-col>
      <a-col :span="24">
          <a-space direction="vertical" class="responsive-buttons">
              <a-button :icon="h(ReadOutlined)" ghost>
                  Documentation
              </a-button>
              <a-button type="primary" :icon="h(SettingOutlined)">
                  Manage Faculty
              </a-button>
              <!-- <Button /> -->
          </a-space>
      </a-col>
    </a-row>

    <div :style="{ padding: '20px' }">
      <div style="margin: 0 auto; max-width: 1440px;">
        <a-row :gutter="[12, 12]">
            <template v-for="item in items">
                <a-col :xs="24" :md="12" :xl="6">
                    <a-card :bordered="false" class="card-stats">
                        <a-row :gutter="12" :wrap="false" align="middle">
                            <a-col flex="none">
                                <a-card class="stats-color" :class="item.color">
                                    <a-typography-title :level="4" style="margin: 0;">{{ item.stat }}</a-typography-title>
                                </a-card>
                            </a-col>
                            <a-col flex="auto">
                                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                                    <a-typography-title :level="5" style="margin: 0;" :style="ellipsis ? { width: '100%' } : {}"
  :ellipsis="ellipsis ? { tooltip: item.title } : false" :content="item.title">
                                    </a-typography-title>
                                    <a-button type="link" :icon="h(SelectOutlined)"></a-button>
                                    
                                </div>
                                <a-typography-text type="secondary" :style="ellipsis ? { width: '100%' } : {}"
  :ellipsis="ellipsis ? { tooltip: 'As of ' + item.timeStamp } : false" :content="'As of ' + item.timeStamp"></a-typography-text>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </template>
            <a-col :xs="24" :md="8" :xl="6">
                <a-card title="Recent Activities" :bordered="false" style="height: 100%;">
                    <template #extra><a @click="showDrawer">View All</a></template>
                    <a-timeline>
                        <a-timeline-item v-for="recent in timeline">
                            <a-flex vertical>
                                <a-typography-text :ellipsis="ellipsis">{{ recent.activity }}</a-typography-text>
                                <a-typography-text :ellipsis="ellipsis" type="secondary">{{ recent.timestamp }}</a-typography-text>
                            </a-flex>
                        </a-timeline-item>
                    </a-timeline>
                </a-card>
            </a-col>
            <a-col :xs="24" :md="16" :xl="18">
                <a-card title="Faculty Loads Ratio" :bordered="false">
                    <template #extra>
                        <a-space>
                            <a-button :icon="h(PrinterOutlined)">Print</a-button>
                            <a-button :icon="h(DownloadOutlined)">Download</a-button>
                        </a-space>
                    </template>
                    <Chart />
                </a-card>
            </a-col>
        </a-row>
      </div>
    </div>
  </div>

  <a-drawer
                title="Recent Activities"
                placement="right"
                :closable="false"
                :open="open"
                @close="onClose"
            >
                <template #extra>
                    <a-button type="text" @click="onClose">
                        <template #icon>
                            <CloseOutlined />
                        </template>
                    </a-button>
                </template>
                <a-timeline>
                    <a-timeline-item v-for="recent in timeline">
                        <a-flex vertical>
                            <a-typography-text :ellipsis="ellipsis">{{ recent.activity }}</a-typography-text>
                            <a-typography-text :ellipsis="ellipsis" type="secondary">{{ recent.timestamp }}</a-typography-text>
                        </a-flex>
                    </a-timeline-item>
                </a-timeline>
            </a-drawer>
</template>

<script lang="ts" setup>
    import { h } from 'vue';
    import { ReadOutlined, SettingOutlined, PrinterOutlined, DownloadOutlined, SelectOutlined } from '@ant-design/icons-vue';
    const ellipsis = ref(true);
    const items = reactive(
      [
            {
                stat: '54',
                title: 'Faculty',
                timeStamp: 'Oct 31, 2023 10:10PM',
                color: 'color-1'
            },
            {
                stat: '176',
                title: 'Teaching Load',
                timeStamp: 'Oct 31, 2023 10:10PM',
                color: 'color-2'
            },
            {
                stat: '38',
                title: 'Administrative Load',
                timeStamp: 'Oct 31, 2023 10:10PM',
                color: 'color-3'
            },
            {
                stat: '920',
                title: 'Research & Development',
                timeStamp: 'Oct 31, 2023 10:10PM',
                color: 'color-4'
            }
        ]
    )
    const timeline = reactive(
      [
            {
                activity: 'Create a services site',
                timestamp: '1h ago'
            },
            {
                activity: 'Solve initial network problems',
                timestamp: 'February 10, 2024 at 10:34:32 PM'
            },
            {
                activity: 'Technical testing',
                timestamp: 'January 30, 2024 at 08:19:01 PM'
            },
            {
                activity: 'Network problems being solved',
                timestamp: 'December 05, 2023 at 09:24:03 AM'
            },
            {
                activity: 'Fix bugs',
                timestamp: 'November 27, 2023 at 11:45:12 AM'
            }
        ]
    )
    // Drawer
    const open = ref<boolean>(false);

    const showDrawer = () => {
        open.value = true;
    };
    const onClose = () => {
        open.value = false;
    };
</script>

<style scoped lang="scss">
.responsive-buttons {
  width: 100%;
  button {
    width: 100%;
  }
}
@media (min-width: 576px) {
  .responsive-buttons {
    flex-direction: row;
    justify-content: center;
  }
}
.card-stats {
  .stats-color {
      border: 0;
      width: max-content;
      &.color-1 {
          background-color: #e6f7ff;
          h4 {
              color: #1890ff;
          }
      }
      &.color-2 {
          background-color: #fff7e6;
          h4 {
              color: #fa8c16;
          }
      }
      &.color-3 {
          background-color: #f9f0ff;
          h4 {
              color: #9254de;
          }
      }
      &.color-4 {
          background-color: #fff0f6;
          h4 {
              color: #eb2f96;
          }
      }
  }
  :deep(.ant-card-body) {
      padding: 16px;
  }
}

:deep(.vue-apexcharts) {
    .apexcharts-legend {
        gap: 24px;
    }
}
</style>
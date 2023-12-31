<template>
    <a-space direction="vertical" size="middle" style="width: 100%;">

        <a-row :gutter="[0, 12]" class="intro" style="background: linear-gradient(0deg, rgba(25, 25, 112, 0.80) 0%, rgba(25, 25, 112, 0.80) 100%), url(/img/bnr_bg.jpg); background-size: cover; background-position: center; padding: 8px 24px 32px;">
            <a-col :span="24">
                <a-typography-title :level="2" style="color: #fff;">
                    Faculty Information System
                </a-typography-title>
                <a-typography-paragraph style="color: #fff;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore voluptate neque adipisci minus.
                </a-typography-paragraph>
            </a-col>
            <a-col :span="24">
                <a-space>
                    <a-button size="large" :icon="h(ReadOutlined)" style="background-color: transparent; color: #fff;">
                        Documentation
                    </a-button>
                    <a-button type="primary" size="large" :icon="h(PicLeftOutlined)" class="green">
                        Manage Faculty
                    </a-button>
                    <!-- <Button /> -->
                </a-space>
            </a-col>
        </a-row>

        <div style="margin: 0 auto; width: 1440px;">
            <a-row :gutter="[12, 12]">
                <template v-for="item in items">
                    <a-col :xs="24" :lg="12" :xl="6">
                        <a-card :bordered="false" class="stat">
                            <a-row :gutter="12" :wrap="false" align="middle">
                                <a-col flex="none">
                                    <a-card class="style" :class="item.color">
                                        <a-typography-title :level="4" style="margin: 0;">{{ item.stat }}</a-typography-title>
                                    </a-card>
                                </a-col>
                                <a-col flex="auto">
                                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                                        <a-typography-title :level="5" style="margin: 0;" :style="ellipsis ? { width: '100%' } : {}"
:ellipsis="ellipsis ? { tooltip: item.title } : false" :content="item.title">
                                        </a-typography-title>
                                        <SelectOutlined style="color: #1890ff;" />
                                    </div>
                                    <a-typography-text type="secondary" :style="ellipsis ? { width: '100%' } : {}"
:ellipsis="ellipsis ? { tooltip: 'As of ' + item.timeStamp } : false" :content="'As of ' + item.timeStamp"></a-typography-text>
                                </a-col>
                            </a-row>
                        </a-card>
                    </a-col>
                </template>
                <a-col :xs="24" :lg="8" :xl="6">
                    <a-card title="Recent Activities" :bordered="false" style="height: 100%;">
                        <template #extra><a @click="showDrawer">View All</a></template>
                        <a-timeline>
                            <a-timeline-item>Create a services site<br> <a-typography-text type="secondary">1h ago</a-typography-text></a-timeline-item>
                            <a-timeline-item>Solve initial network problems<br> <a-typography-text type="secondary">Yesterday</a-typography-text></a-timeline-item>
                            <a-timeline-item>Technical testing<br> <a-typography-text type="secondary">Dec 25, 2023 at 8:00:28 AM</a-typography-text></a-timeline-item>
                            <a-timeline-item>Network problems being solved<br> <a-typography-text type="secondary">Dec 24, 2023 at 7:48:19 AM</a-typography-text></a-timeline-item>
                            <a-timeline-item style="padding-bottom: 0;">Create a services site<br> <a-typography-text type="secondary">Nov 31, 2023 at 9:15:32 AM</a-typography-text></a-timeline-item>
                        </a-timeline>
                    </a-card>
                </a-col>
                <a-col :xs="24" :lg="16" :xl="18">
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
                    <a-timeline-item>Create a services site<br> <a-typography-text type="secondary">1h ago</a-typography-text></a-timeline-item>
                    <a-timeline-item>Solve initial network problems<br> <a-typography-text type="secondary">Yesterday</a-typography-text></a-timeline-item>
                    <a-timeline-item>Technical testing<br> <a-typography-text type="secondary">Dec 25, 2023 at 8:00:28 AM</a-typography-text></a-timeline-item>
                    <a-timeline-item>Network problems being solved<br> <a-typography-text type="secondary">Dec 24, 2023 at 7:48:19 AM</a-typography-text></a-timeline-item>
                    <a-timeline-item style="padding-bottom: 0;">Create a services site<br> <a-typography-text type="secondary">Nov 31, 2023 at 9:15:32 AM</a-typography-text></a-timeline-item>
                </a-timeline>
            </a-drawer>
        </div>
        
    </a-space>
</template>
<script lang="ts" setup>
    import { h } from 'vue';
    import { 
        ReadOutlined,
        PrinterOutlined,
        DownloadOutlined,
        PicLeftOutlined,
        CloseOutlined
    } from '@ant-design/icons-vue';
    const ellipsis = ref(true);
    import type { SelectOutlined } from '#build/components';
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

    // Drawer
    const open = ref<boolean>(false);

    const showDrawer = () => {
        open.value = true;
    };
    const onClose = () => {
        open.value = false;
    };
</script>
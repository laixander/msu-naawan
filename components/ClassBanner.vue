<template>
    <a-row :gutter="[0, 12]" class="banner">
        <a-col :span="24">
            <a-space direction="vertical" :size="8">
                <a-typography-title :level="2">
                    Basic Programming
                </a-typography-title>
                <div>
                    <a-typography-text>
                        Section 1
                    </a-typography-text>
                    <a-divider type="vertical" />
                    <a-typography-text>
                        First Semester
                    </a-typography-text>
                    <a-divider type="vertical" />
                    <a-typography-text>
                        Midterm
                    </a-typography-text>
                </div>
                <a-button type="text" ghost>
                    <template #icon>
                        <EditOutlined />
                    </template>
                </a-button>
            </a-space>
        </a-col>
    </a-row>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
    .banner {
        background: linear-gradient(0deg, rgba(25, 25, 112, 0.80) 0%, rgba(25, 25, 112, 0.80) 100%), url(/img/bnr_bg.jpg); 
        background-size: cover; 
        background-position: center; 
        padding: 24px 32px;
        min-width: 100%;
        border-radius: 8px;
        .ant-typography {
            color: #fff;
            margin: 0;
        }
        .ant-divider-vertical {
            border-inline-start: 1px solid rgba(255, 255, 255, 0.50);
        }
        .ant-btn {
            color: #fff;
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>
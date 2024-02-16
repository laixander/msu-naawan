<template>
    <section class="wrapper">
        <main>
            <class-banner />
            <a-row :gutter="16">
                <a-col :xxl="6">
                    <a-card title="Default size card" :bordered="false">
                        <template #extra><a href="#">more</a></template>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :xxl="18">
                    <a-card title="Default size card" :bordered="false">
                        <template #extra><a href="#">more</a></template>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
            </a-row>
        </main>
    </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
    .wrapper {
        // padding: 24px;
        main {
            margin: 0 auto; 
            width: 100%; 
            max-width: 1440px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .ant-tabs {
                width: 100%;
            }
        }
    }
</style>
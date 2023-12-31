<template>
    <section class="container" style="margin: 0 auto; width: 100%; max-width: 1440px;">
        <a-space direction="vertical" size="middle" :style="baseStyle">
            <a-flex justify="space-between">
                <a-input-search
                    v-model:value="value"
                    placeholder="input search text"
                    style="width: 200px"
                    @search="onSearch"
                />
    
                <a-button type="primary">
                    <template #icon>
                        <PlusOutlined />
                    </template>
                    New Student
                </a-button>
            </a-flex>
    
            <a-card title="List of Students" class="container-cards" :bordered="false">
                <template #extra>
                    <a-radio-group v-model:value="display">
                        <a-radio-button value="card"><CreditCardOutlined :style="iconSize" /> Card</a-radio-button>
                        <a-radio-button value="table"><TableOutlined :style="iconSize" /> Table</a-radio-button>
                    </a-radio-group>
                </template>
                <a-flex gap="8">
                    <a-card title="Hello World">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, qui.</p>
                    </a-card>
                    <a-card title="Hello World">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, qui.</p>
                    </a-card>
                    <a-card title="Hello World">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, qui.</p>
                    </a-card>
                    <a-card title="Hello World">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, qui.</p>
                    </a-card>
                </a-flex>
            </a-card>
        </a-space>
    </section>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import type { CSSProperties } from 'vue';
    import { PlusOutlined } from '@ant-design/icons-vue';

    const value = ref<string>('');

    const display = ref<string>('card');

    const onSearch = (searchValue: string) => {
        console.log('use value', searchValue);
        console.log('or use this.value', value.value);
    };

    const baseStyle: CSSProperties = {
        width: '100%'
    };

    const iconSize: CSSProperties = {
        fontSize: '12px',
        marginRight: '6px'
    };
</script>
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
                    <a-button type="text">
                        <template #icon>
                            <BlockOutlined />
                        </template>
                    </a-button>
                    <a-button type="text">
                        <template #icon>
                            <TableOutlined />
                        </template>
                    </a-button>
                    <!-- <a-radio-group v-model:value="display">
                        <a-radio-button value="card"><CreditCardOutlined :style="iconSize" /> Card</a-radio-button>
                        <a-radio-button value="table"><TableOutlined :style="iconSize" /> Table</a-radio-button>
                    </a-radio-group> -->
                </template>
                <a-flex gap="8" wrap="wrap">
                    <a-card hoverable class="student-info" v-for="student in students" :key="student.id" >
                        <a-avatar :size="72">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                        <a-typography-paragraph strong>{{ student.name }}</a-typography-paragraph>
                        <a-typography-paragraph type="secondary">{{ student.number }}</a-typography-paragraph>
                    </a-card>
                </a-flex>
            </a-card>
        </a-space>
    </section>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import type { CSSProperties } from 'vue';
    import { PlusOutlined, BlockOutlined, TableOutlined, UserOutlined } from '@ant-design/icons-vue';

    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
        console.log('use value', searchValue);
        console.log('or use this.value', value.value);
    };

    const baseStyle: CSSProperties = {
        width: '100%'
    };

    const students = reactive(
        [
            {
                id: '1',
                name: 'Paityn Botosh',
                number: '2024-063010-51'
            },
            {
                id: '2',
                name: 'Tatiana Aminoff',
                number: '2024-063010-51'
            },
            {
                id: '3',
                name: 'Ann Baptista',
                number: '2024-063010-51'
            },
            {
                id: '4',
                name: 'Miracle Stanton',
                number: '2024-063010-51'
            },
            {
                id: '5',
                name: 'Marley Herwitz',
                number: '2024-063010-51'
            },
            {
                id: '6',
                name: 'Emerson Rosser',
                number: '2024-063010-51'
            },
            {
                id: '7',
                name: 'Corey Donin',
                number: '2024-063010-51'
            },
        ]
    )
</script>
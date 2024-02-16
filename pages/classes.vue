<template>
    <section class="wrapper">
        <main>
            <a-card title="List of Classes" class="card-container" :bordered="false" :bodyStyle="display === 'Card' ? { padding: '24px' } : { padding: '0' }">
                <template #extra>
                    <a-segmented v-model:value="display" :options="type" />
                </template>
                <template v-if="display === 'Card'">
                    <a-row :gutter="[16, 16]">
                        <a-col :xs="24" :sm="12" :md="6" v-for="index in 4" :key="index">
                            <a-card :title="`Section ` + index" hoverable>
                                <a-flex vertical>
                                    <a-typography-text type="secondary">Subject:</a-typography-text>
                                    <a-typography-text>Basic Programming</a-typography-text>
                                </a-flex>
                                <a-flex vertical>
                                    <a-typography-text type="secondary">Schedule:</a-typography-text>
                                    <a-typography-text>08:00 AM - 12:00 PM, MWF</a-typography-text>
                                </a-flex>
                                <a-flex vertical>
                                    <a-typography-text type="secondary">Learning Approach:</a-typography-text>
                                    <a-typography-text>Synchronous</a-typography-text>
                                </a-flex>
                                <a-flex vertical>
                                    <a-typography-text type="secondary">Term:</a-typography-text>
                                    <a-typography-text>Midterm</a-typography-text>
                                </a-flex>
                                <template #actions>
                                    <a-tooltip v-for="action in actions" :key="action.id">
                                        <template #title>{{ action.tooltip }}</template>
                                        <component :is="action.icon" :key="action.key" />
                                    </a-tooltip>
                                </template>
                            </a-card>
                        </a-col>
                    </a-row>
                </template>
                <template v-if="display === 'Table'">
                    <a-table :columns="columns" :data-source="repeatedData" style="width: 100%;">
                            <template #headerCell="{ column }">
                                <template v-if="column.key === 'section'">
                                    Section
                                </template>
                            </template>
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'action'">
                                    <a-button>
                                        <template #icon>
                                            <EyeOutlined />
                                        </template>
                                    </a-button>
                                </template>
                            </template>
                    </a-table>
                </template>
            </a-card>
        </main>
    </section>
    
</template>

<script lang="ts" setup>
const type = reactive(['Card', 'Table']);
const display = ref(type[0]);

import { HomeOutlined, CheckCircleOutlined, ExperimentOutlined, PercentageOutlined, UnorderedListOutlined } from '@ant-design/icons-vue';

const actions = ref([
{
          id: 'Name',
          tooltip: 'Name',
          key: 'name',
          icon: HomeOutlined
        },
        {
          id: 'Attendance',
          tooltip: 'Attendance',
          key: 'attendance',
          icon: CheckCircleOutlined
        },
        {
          id: 'Task',
          tooltip: 'Task',
          key: 'task',
          icon: ExperimentOutlined
        },
        {
          id: 'Class Grade',
          tooltip: 'Class Grade',
          key: 'class-grades',
          icon: PercentageOutlined
        },
        {
          id: 'Grade Criteria',
          tooltip: 'Grade Criteria',
          key: 'grade-criteria',
          icon: UnorderedListOutlined
        }
]);

const columns = [
    {
        title: 'Section',
        dataIndex: 'section',
        key: 'section',
    },
    {
        title: 'Schedule',
        dataIndex: 'schedule',
        key: 'schedule',
    },
    {
        title: 'Learning Approach',
        dataIndex: 'learningApproach',
        key: 'learningApproach',
    },
    {
        title: 'Term',
        dataIndex: 'term',
        key: 'term',
    },
    {
        title: 'Action',
        key: 'action',
    },
];

const repeatedData: any[] = [];

for (let i = 1; i <= 4; i++) {
    const data = [
        {
            key: i.toString(), // Convert to string
            section: 'Section',
            schedule: '08:00 AM - 12:00 PM, MWF',
            learningApproach: 'Synchronous',
            term: 'Midterm',
        },
    ];

    const newData = data.map(item => ({
        ...item,
        key: item.key + i, 
        section: item.section + ' ' + i 
    }));
    repeatedData.push(...newData);
}

// const modifiedData = data.map(item => ({
//   ...item,
//   section: item.section + ' ' + item.key,
// }));
// const repeatedData = [...modifiedData, ...modifiedData, ...modifiedData, ...modifiedData];
</script>

<style scoped lang="scss">
    .wrapper {
        padding: 24px;
        main {
            margin: 0 auto; 
            width: 100%; 
            max-width: 1440px;
            display: flex;
            gap: 16px;
            .card-container {
                width: 100%;
                & > :deep(.ant-card-body) {
                    border-top: 1px solid #F0F0F0;
                    background-color: #F8F9FA;
                    .ant-card {
                        .ant-flex:not(:last-child) {
                            margin-bottom: 16px;
                        }
                        .anticon {
                            svg {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
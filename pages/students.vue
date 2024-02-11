<template>
    <section class="container" style="margin: 0 auto; width: 100%; max-width: 1440px;">
        <a-space direction="vertical" size="middle" class="student">
            <a-flex justify="space-between">
                <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px"
                    @search="onSearch" />

                <a-button type="primary" @click="showModal">
                    <template #icon>
                        <PlusOutlined />
                    </template>
                    New Student
                </a-button>
            </a-flex>

            <a-card title="List of Students" class="container-cards" :bordered="false" :bodyStyle="display === 'Card' ? { padding: '24px' } : { padding: '0' }">
                <template #extra>
                    <a-segmented v-model:value="display" :options="type" />
                </template>
                <template v-if="display === 'Card'">
                    <a-row :gutter="[16, 16]">
                        <template v-for="student in paginatedStudents" :key="student.id">
                            <a-col :xs="24" :sm="12" :md="6">
                                <a-card hoverable class="student-info" @click="showDrawer(student)">
                                    <a-avatar :size="72">
                                        <template #icon>
                                            <UserOutlined />
                                        </template>
                                    </a-avatar>
                                    <a-typography-paragraph strong>{{ student.name }}</a-typography-paragraph>
                                    <a-typography-paragraph type="secondary">{{ student.number }}</a-typography-paragraph>
                                </a-card>
                            </a-col>
                        </template>
                    </a-row>
                    <a-pagination v-model:current="current" :total="totalStudents" :page-size="pageSize" show-less-items @change="handlePageChange" :style="{ textAlign: 'right', paddingTop: '16px' }" />
                </template>

                <a-flex v-if="display === 'Table'">

                    <a-table :columns="columns" :data-source="students" style="width: 100%;">
                        <template #headerCell="{ column }">
                            <template v-if="column.key === 'name'">
                                Name
                            </template>
                        </template>
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'action'">
                                <a-button @click="showDrawer(record)">
                                    <template #icon>
                                        <EyeOutlined />
                                    </template>
                                </a-button>
                            </template>
                        </template>
                    </a-table>

                </a-flex>
            </a-card>
        </a-space>

        <a-drawer title="Student Information" placement="right" size="large" :closable="false" :open="drawerVisible" @close="onClose">
            <template #extra>
                <a-button type="text" @click="onClose">
                    <template #icon>
                        <CloseOutlined />
                    </template>
                </a-button>
            </template>
            <a-descriptions :column="1" bordered>
                <a-descriptions-item label="Last Name">{{ selectedStudent.lname }}</a-descriptions-item>
                <a-descriptions-item label="First Name">{{ selectedStudent.fname }}</a-descriptions-item>
                <a-descriptions-item label="Middle Name">{{ selectedStudent.mname }}</a-descriptions-item>
                <a-descriptions-item label="Gender">{{ selectedStudent.gender }}</a-descriptions-item>
                <a-descriptions-item label="Birthdate">{{ selectedStudent.bdate }}</a-descriptions-item>
                <a-descriptions-item label="Birth Place">{{ selectedStudent.bplace }}</a-descriptions-item>
                <a-descriptions-item label="Civil Status">{{ selectedStudent.cstatus }}</a-descriptions-item>
                <a-descriptions-item label="Religion">{{ selectedStudent.religion }}</a-descriptions-item>
                <a-descriptions-item label="Address">{{ selectedStudent.address }}</a-descriptions-item>
            </a-descriptions>
        </a-drawer>

        <a-modal v-model:open="modalVisible" title="Basic Modal" @ok="handleOk">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
    </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { CSSProperties } from 'vue';
import { PlusOutlined, BlockOutlined, TableOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons-vue';
import studentsJsonData from "~/data/students.json"; // Adjust the path accordingly

interface Student {
    id: string;
    lname: string;
    fname: string;
    mname: string;
    number: string;
    gender: string;
    bdate: string;
    bplace: string;
    cstatus: string;
    religion: string;
    address: string;
    name?: string;
}

const value = ref<string>('');
// const display = ref<string>('card');
const type = reactive(['Card', 'Table']);
const display = ref(type[0]);

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};

const iconSize: CSSProperties = {
    fontSize: '14px',
    marginRight: '6px'
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Student Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Action',
        key: 'action',
    },
];

const students: Student[] = reactive(
    studentsJsonData
)

// Pagination
const current = ref(1);
const pageSize = 12; // Number of students per page
const totalStudents = computed(() => students.length);

const paginatedStudents = computed(() => {
    const start = (current.value - 1) * pageSize;
    const end = start + pageSize;
    return students.slice(start, end);
});

const handlePageChange = (page: number) => {
    current.value = page;
};

// Combine fname and lname into name for each student
students.forEach(student => {
    student.name = `${student.fname} ${student.lname}`;
});

// Drawer
const drawerVisible = ref<boolean>(false);
const selectedStudent: Student = reactive({});

const showDrawer = (student: Student): void => {
    selectedStudent.lname = student.lname;
    selectedStudent.fname = student.fname;
    selectedStudent.mname = student.mname;
    selectedStudent.gender = student.gender;
    selectedStudent.bdate = student.bdate;
    selectedStudent.bplace = student.bplace;
    selectedStudent.cstatus = student.cstatus;
    selectedStudent.religion = student.religion;
    selectedStudent.address = student.address;

    drawerVisible.value = true;
};

const onClose = () => {
    drawerVisible.value = false;
};

// Modal
const modalVisible = ref<boolean>(false);
const showModal = () => {
  modalVisible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  modalVisible.value = false;
};
</script>

<style scoped lang="scss">
.container {
    padding: 24px;
    &-cards {
        width: 100%;
        > :deep(.ant-card-body) {
            border-top: 1px solid #F0F0F0;
            background-color: #F8F9FA;
        } 
    }
    .student {
        width: 100%;
        &-info {
            width: 100%;
            text-align: center;
            .ant-avatar {
                margin-bottom: 0.35em;
            }
            .ant-typography {
                margin-bottom: 0;
            }
        }
        .ant-table-wrapper {
            .ant-table-tbody {
                > tr.ant-table-row {
                    &:hover {
                        > td {
                            background-color: #e6f4ff;
                        }
                    }
                }
            }
        }
    }
}
</style>
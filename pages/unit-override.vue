<template>
    <section class="container" style="margin: 0 auto; width: 100%; max-width: 1440px;">
        <a-space direction="vertical" size="middle" class="student">
            <a-flex justify="space-between">
                <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px"
                    @search="onSearch" />

                <a-button type="primary">
                    <template #icon>
                        <PlusOutlined />
                    </template>
                    New Student
                </a-button>
            </a-flex>

            <a-card title="List of Students" class="container-cards" :bordered="false" :bodyStyle="display === 'card' ? { padding: '24px' } : { padding: '0' }">
                <template #extra>
                    <a-radio-group v-model:value="display">
                        <a-radio-button value="card">
                            <BlockOutlined :style="iconSize" /> Card
                        </a-radio-button>
                        <a-radio-button value="table">
                            <TableOutlined :style="iconSize" /> Table
                        </a-radio-button>
                    </a-radio-group>
                </template>
                <a-flex gap="12" wrap="wrap" v-if="display === 'card'">
                    <a-card hoverable class="student-info" v-for="student in students" :key="student.id"
                        @click="showDrawer(student)">
                        <a-avatar :size="72">
                            <template #icon>
                                <UserOutlined />
                            </template>
                        </a-avatar>
                        <a-typography-paragraph strong>{{ student.name }}</a-typography-paragraph>
                        <a-typography-paragraph type="secondary">{{ student.number }}</a-typography-paragraph>
                    </a-card>
                </a-flex>

                <a-flex v-if="display === 'table'">

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

        <a-drawer title="Student Information" placement="right" size="large" :closable="false" :open="open" @close="onClose">
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
    </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { CSSProperties } from 'vue';
import { PlusOutlined, BlockOutlined, TableOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons-vue';

const value = ref<string>('');
const display = ref<string>('card');

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

const students = reactive(
    [
        {
            id: '1',
            lname: 'Botosh',
            fname: 'Paityn',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Female',
            bdate: 'Dec 25, 1992',
            bplace: 'Manila City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Sampaloc, Manila City'
        },
        {
            id: '2',
            lname: 'Aminoff',
            fname: 'Tatiana',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Female',
            bdate: 'March 18, 1992',
            bplace: 'Taguig City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Taguig City'
        },
        {
            id: '3',
            lname: 'Baptista',
            fname: 'Ann',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Female',
            bdate: 'Nov 24, 1992',
            bplace: 'Las Pinas City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Las Pinas City'
        },
        {
            id: '4',
            lname: 'Stanton',
            fname: 'Miracle',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Female',
            bdate: 'Dec 25, 1992',
            bplace: 'Taguig City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Taguig City'
        },
        {
            id: '5',
            lname: 'Herwitz',
            fname: 'Marley',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Male',
            bdate: 'Dec 25, 1992',
            bplace: 'Manila City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Sampaloc, Manila City'
        },
        {
            id: '6',
            lname: 'Emerson',
            fname: 'Rosser',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Male',
            bdate: 'July 3, 1992',
            bplace: 'Quezon City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Proj. 4, Quezon City'
        },
        {
            id: '7',
            lname: 'Donin',
            fname: 'Corey',
            mname: 'Cruz',
            number: '2024-063010-51',
            gender: 'Male',
            bdate: 'Feb 12, 1992',
            bplace: 'Quezon City',
            cstatus: 'Single',
            religion: 'Catholic',
            address: 'Quezon City'
        },
    ]
)

// Combine fname and lname into name for each student
students.forEach(student => {
    student.name = `${student.fname} ${student.lname}`;
});

// Drawer
const open = ref(false);
const selectedStudent = reactive({});

const showDrawer = (student) => {
    selectedStudent.lname = student.lname;
    selectedStudent.fname = student.fname;
    selectedStudent.mname = student.mname;
    selectedStudent.gender = student.gender;
    selectedStudent.bdate = student.bdate;
    selectedStudent.bplace = student.bplace;
    selectedStudent.cstatus = student.cstatus;
    selectedStudent.religion = student.religion;
    selectedStudent.address = student.address;

    open.value = true;
};

const onClose = () => {
    open.value = false;
};
</script>
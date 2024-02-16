<template>
    <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="Classroom">
            <ClassesClassroom />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Attendance">
            Attendance
        </a-tab-pane>
        <a-tab-pane key="3" tab="Syllabus">
            Syllabus
        </a-tab-pane>
        <a-tab-pane key="4" tab="Class Grade">
            Class Grade
        </a-tab-pane>
        <a-tab-pane key="5" tab="Grade Criteria">
            Grade Criteria
        </a-tab-pane>
    </a-tabs>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const activeKey = ref('1');
</script>

<style scoped lang="scss">
</style>
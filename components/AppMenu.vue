<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item v-for="menuItem in menuItems" :key="menuItem.key" :title="menuItem.label">
      <NuxtLink :to="menuItem.to">
        <component :is="menuItem.icon" />
        <span>{{ menuItem.label }}</span>
      </NuxtLink>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { DashboardOutlined, AppstoreOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const { path } = toRefs(route);

const menuItems = ref([
  { key: '1', to: '/', icon: DashboardOutlined, label: 'Dashboard' },
  { key: '2', to: '/students', icon: AppstoreOutlined, label: 'Students' },
  { key: '3', to: '/credit-subject', icon: AppstoreOutlined, label: 'Credit Subject' },
  { key: '4', to: '/subject-override', icon: AppstoreOutlined, label: 'Subject Override' },
  { key: '5', to: '/unit-override', icon: AppstoreOutlined, label: 'Unit Override' },
  { key: '6', to: '/subject-request', icon: AppstoreOutlined, label: 'Subject Request' },
  { key: '7', to: '/enrollment-cancellation', icon: AppstoreOutlined, label: 'Enrollment Cancellation' },
  { key: '8', to: '/grade-slip', icon: AppstoreOutlined, label: 'Grade Slip' },
  { key: '9', to: '/alumni', icon: AppstoreOutlined, label: 'Alumni' }
]);

const selectedKeys = computed(() => {
  const selectedItem = menuItems.value.find(item => item.to === path.value);
  return selectedItem ? [selectedItem.key] : [];
});
</script>

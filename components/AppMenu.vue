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
import { DashboardOutlined, UserOutlined, SwapOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const { path } = toRefs(route);

const menuItems = ref([
  { key: '1', to: '/', icon: DashboardOutlined, label: 'Dashboard' },
  { key: '2', to: '/students', icon: UserOutlined, label: 'Students' },
  { key: '3', to: '/shift-course', icon: SwapOutlined, label: 'Shift Course' },
]);

const selectedKeys = computed(() => {
  const selectedItem = menuItems.value.find(item => item.to === path.value);
  return selectedItem ? [selectedItem.key] : [];
});
</script>

<template>
    <a-layout-sider
      theme="light"
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <logo />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
            <a-menu-item v-for="menuItem in menuItems" :key="menuItem.key" :title="menuItem.label">
                <NuxtLink :to="menuItem.to">
                    <component :is="menuItem.icon" />
                    <span>{{ menuItem.label }}</span>
                </NuxtLink>
            </a-menu-item>
        </a-menu>
        <template #trigger>
          <div class="custom-trigger">
            <!-- Your custom handle icon or content goes here -->
            <MenuOutlined />
            <!-- <CloseOutlined />
            <component :is="triggerIcon" /> -->
          </div>
        </template>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { DashboardOutlined, TeamOutlined, UserOutlined,  UploadOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const { path } = toRefs(route);

const menuItems = ref([
    { key: '1', to: '/', icon: DashboardOutlined, label: 'Dashboard' },
    { key: '2', to: '/classes', icon: TeamOutlined, label: 'Classes' },
    { key: '3', to: '/students', icon: UserOutlined, label: 'Students' },
    { key: '4', to: '/lessons', icon: UploadOutlined, label: 'Lessons' }
]);

const selectedKeys = computed(() => {
    const selectedItem = menuItems.value.find(item => item.to === path.value);
    return selectedItem ? [selectedItem.key] : [];
});

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

// const collapsed = ref<boolean>(false);
// export default {
//   data() {
//     return {
//       // Add a variable to track the state of the trigger icon
//       isCollapsed: false,
//     };
//   },
//   computed: {
//     // Computed property to determine the trigger icon based on the 'isCollapsed' state
//     triggerIcon() {
//       return this.isCollapsed ? CloseOutlined : MenuOutlined;
//     },
//   },
//   methods: {
//     onCollapse(collapsed) {
//       this.isCollapsed = collapsed;
//     },
//     onBreakpoint(broken) {
//       // Handle breakpoint change if needed
//     },
//   },
// };
</script>

<style scoped>
[data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
</style>

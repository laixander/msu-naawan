<template>
  <div>
    <a-button @click="handleMessage">
      button
    </a-button>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<script lang="ts" setup>
const handleMessage = () => {
  message.info("This is a normal message");
}
</script>
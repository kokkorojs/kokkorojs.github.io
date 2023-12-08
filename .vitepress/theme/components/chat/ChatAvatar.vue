<template>
  <div class="chat-avatar-container">
    <img class="avatar" :src="url" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ChatAvatarProps {
  qq: number;
}

const props = defineProps<ChatAvatarProps>();
const url = computed(() => `https://q1.qlogo.cn/g?b=qq&nk=${props.qq}&s=100`);
</script>

<style lang="scss" scoped>
.chat-avatar-container {
  display: inline-block;

  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    display: inline-flex;
    line-height: 0;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
}
</style>

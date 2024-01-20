<template>
  <div class="chat-avatar">
    <img class="image" :src="url" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface AvatarProps {
    qq: string;
  }

  const props = defineProps<AvatarProps>();
  const url = computed(() => `https://q1.qlogo.cn/g?b=qq&nk=${props.qq}&s=100`);
</script>

<style lang="scss" scoped>
  .chat-avatar {
    display: inline-block;

    .image {
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

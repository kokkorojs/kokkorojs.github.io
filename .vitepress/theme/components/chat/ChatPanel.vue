<template>
  <div class="chat-panel">
    <template v-if="props.controls">
      <div class="controls">
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle green"></div>
        <div class="title">{{ props.title }}</div>
      </div>
    </template>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface PanelProps {
    controls?: boolean;
    title?: string;
  }

  const props = withDefaults(defineProps<PanelProps>(), {
    controls: true,
    title: '聊天记录',
  });
</script>

<style lang="scss" scoped>
  .chat-panel {
    position: relative;
    border-radius: 0.5rem;
    margin: 1rem auto;
    padding: 0.3rem 0;
    background-color: var(--vp-sidebar-bg-color);
    overflow: hidden;

    .controls {
      display: initial;
      width: 100%;
      padding: 0.5rem;

      .circle {
        display: inline-block;
        margin: 0.5rem 0rem 0.5rem 0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;

        &.red {
          background-color: #ff5f56;
        }

        &.yellow {
          background-color: #ffbd2e;
        }

        &.green {
          background-color: #27c93f;
        }
      }

      .title {
        position: absolute;
        text-align: center;
        width: 100%;
        font-size: 0.8rem;
        line-height: 1rem;
        top: 0.8rem;
      }
    }

    .content {
      padding: 0 1rem;
    }
  }
</style>

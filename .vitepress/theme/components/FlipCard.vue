<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useData } from 'vitepress';

  interface FlipCardProps {
    front: string;
    back: string;
  }

  const props = defineProps<FlipCardProps>();
  const { isDark } = useData();
</script>

<template>
  <div class="flip-card-container">
    <img class="original" :src="props.front" />

    <div class="card" :class="{ dark: isDark }">
      <div class="front">
        <img :src="props.front" />
      </div>
      <div class="back">
        <img :src="props.back" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flip-card-container {
    position: relative;

    .original {
      opacity: 0;
    }

    .card {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      perspective: 100vw;

      .front,
      .back {
        position: absolute;
        backface-visibility: hidden;
        transition: transform 0.4s;
      }

      .back {
        transform: rotateY(-180deg);
      }

      &.dark {
        .front {
          transform: rotateY(180deg);
        }

        .back {
          transform: rotateY(0deg);
        }
      }
    }
  }
</style>

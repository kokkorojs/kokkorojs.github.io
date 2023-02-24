<script setup lang="ts">
import { useData } from 'vitepress';
const { isDark } = useData();
</script>

<template>
  <div class="kokkoro-container">
    <img class="original" src="/images/priconne/105931.png" alt="kokkoro">

    <div class="card" :class="{ dark: isDark }">
      <div class="cover">
        <img src="/images/priconne/105931.png" alt="kokkoro">
      </div>
      <div class="back">
        <img src="/images/priconne/107661.png" alt="kokkoro">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.kokkoro-container {
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

    .cover,
    .back {
      position: absolute;
      backface-visibility: hidden;
      transition: transform .4s;
    }

    .back {
      transform: rotateY(-180deg);
    }

    &.dark {
      .cover {
        transform: rotateY(180deg);
      }

      .back {
        transform: rotateY(0deg);
      }
    }
  }
}
</style>

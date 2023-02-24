<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue';

const data = useData();
const src = computed((): string => {
  return !data.isDark.value
    ? '/images/priconne/105931.png'
    : '/images/priconne/107661.png';
});
</script>

<template>
  <img :src="src" alt="kokkoro">
</template>

<style lang="scss"></style>

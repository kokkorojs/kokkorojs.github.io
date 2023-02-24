<script setup lang="ts">
import { useData } from 'vitepress';
const { isDark } = useData();
</script>

<template>
  <img v-show="!isDark" src="/images/priconne/105931.png" alt="kokkoro">
  <img v-show="isDark" src="/images/priconne/107661.png" alt="kokkoro">
</template>

<style lang="scss"></style>

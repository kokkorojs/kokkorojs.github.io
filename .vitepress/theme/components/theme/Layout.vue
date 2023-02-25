<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import Gitalk from '../gitalk/index.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <Gitalk />
    </template>
  </Layout>
</template>

<style lang="scss" scoped></style>

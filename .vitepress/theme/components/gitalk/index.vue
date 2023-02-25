<script setup lang="ts">
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { onMounted, watch, ref } from 'vue';
import { useRoute, useData } from 'vitepress';

const data = useData();
const route = useRoute();
const gitalkRef = ref<HTMLElement>();
const emptyNode = (node: HTMLElement): void => {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild!);
  }
};
const initGitalk = (): void => {
  emptyNode(gitalkRef.value!);

  if (location.pathname === '/' || data.frontmatter.value.comments === false) {
    return;
  }
  const gitalk = new Gitalk({
    clientID: '2966b08bee02e561b5f0',
    clientSecret: '717c72176ebe736b21274c4821a2ee23a8042b73',
    repo: 'kokkorojs.github.io',
    owner: 'kokkorojs',
    admin: ['dcyuki'],
    id: location.pathname,
    distractionFreeMode: false,
  });
  gitalk.render(gitalkRef.value!);
};

onMounted(() => {
  initGitalk();
});

watch(
  () => route.path,
  () => {
    initGitalk();
  }
);
</script>

<template>
  <div ref="gitalkRef"></div>
</template>

<style lang="scss" scoped></style>

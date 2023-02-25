<script setup lang="ts">
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const initGitalk = () => {
  const gitalk = new Gitalk({
    clientID: '2966b08bee02e561b5f0',
    clientSecret: '717c72176ebe736b21274c4821a2ee23a8042b73',
    repo: 'kokkorojs.github.io',
    owner: 'kokkorojs',
    admin: ['dcyuki'],
    id: location.pathname,
    distractionFreeMode: false,
  });

  gitalk.render('gitalk-container');
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
  <div id="gitalk-container"></div>
</template>

<style lang="scss"></style>

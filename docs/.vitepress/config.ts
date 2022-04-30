import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Kokkoro',
  description: 'とある咕咕の QQ 机器人框架',
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '开发',
        link: '/develop/',
      },
      {
        text: '插件',
        link: '/plugin/',
      },
    ],
    repo: 'kokkorojs/kokkoro',
  }
});
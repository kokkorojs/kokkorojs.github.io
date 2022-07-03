import { defineConfigWithTheme } from "vitepress";

const nav = [
  {
    text: '指南',
    link: '/guide/introduce',
  },
  {
    text: '进阶',
    link: '/manual/introduction.md',
    activeMatch: '/manual/',
  },
];

const sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduce' },
        { text: '快速开始', link: '/guide/start' },
      ]
    },
    {
      text: '开发',
      items: [
        {
          text: '简单示例',
          link: '/develop/example'
        },
      ]
    },
  ],
};
export default defineConfigWithTheme({
  title: 'kokkoro',
  description: 'とある咕咕の QQ 机器人框架',
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present yuki & kokkorojs'
    },
  }
});

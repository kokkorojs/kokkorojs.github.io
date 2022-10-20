import { defineConfigWithTheme } from 'vitepress';

const nav = [
  {
    text: '指南',
    link: '/guide/introduce',
    activeMatch: '/guide/',
  },
  {
    text: '开发',
    link: '/develop/example',
    activeMatch: '/develop/',
  },
  {
    text: '插件',
    link: '/plugin/awesome',
    activeMatch: '/plugin/',
  },
  {
    text: '更多',
    link: '/about/history',
    activeMatch: '/about/',
  },
];

const sidebar = [
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
        text: '编写一个插件',
        link: '/develop/example'
      },
      {
        text: '生命周期',
        link: '/develop/liftcycle'
      },
    ]
  },
  {
    text: '插件',
    items: [
      {
        text: '插件列表',
        link: '/plugin/awesome'
      },
    ]
  },
];

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
      copyright: 'Copyright © 2020-2022 yuki'
    },
    editLink: {
      pattern: 'https://github.com/kokkorojs/kokkorojs.github.io/edit/master/src/:path',
      text: '帮助改善当前页面',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kokkorojs/kokkoro' }
    ],
    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'kokkoro'
    },
  },
  markdown: {
    // lineNumbers: true
  },
});

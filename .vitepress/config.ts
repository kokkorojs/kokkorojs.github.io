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
    activeMatch: '/about/',
    items: [
      { text: '计划', link: '/about/project' },
      { text: '历史', link: '/about/history' },
    ]
  },
];

const sidebar = [
  {
    text: '开始',
    collapsible: true,
    items: [
      { text: '简介', link: '/guide/introduce' },
      { text: '快速开始', link: '/guide/start' },
      { text: '配置项', link: '/guide/config' },
    ]
  },
  {
    text: '开发',
    collapsible: true,
    items: [
      {
        text: '编写一个插件',
        link: '/develop/example',
      },
      {
        text: '消息事件',
        link: '/develop/message',
      },
      // {
      //   text: '生命周期',
      //   link: '/develop/liftcycle',
      // },
    ]
  },
  {
    text: '插件',
    collapsible: true,
    items: [
      {
        text: '插件列表',
        link: '/plugin/awesome',
      },
    ]
  },
];

export default defineConfigWithTheme({
  title: 'kokkoro',
  base: 'https://kokkoro.js.org/',
  description: 'とある咕咕の QQ 机器人框架',
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    nav,
    sidebar,
    footer: {
      message: 'Released under the <a href="https://github.com/kokkorojs/kokkoro/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2020-2022 <a href="https://github.com/dcyuki">Yuki</a>'
    },
    editLink: {
      pattern: 'https://github.com/kokkorojs/kokkorojs.github.io/edit/master/src/:path',
      text: '帮助改善当前页面',
    },
    lastUpdatedText: '更新日期',
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

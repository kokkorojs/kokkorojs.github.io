import { defineConfigWithTheme } from 'vitepress';

const nav = [
  {
    text: '文档',
    items: [
      { text: '深度指南', link: '/guide/introduce' },
      { text: '快速上手', link: '/guide/quick-start' },
    ]
  },
  {
    text: '开发',
    link: '/develop/application',
    activeMatch: '/develop/',
  },
  {
    text: 'API',
    link: '/api/application',
    activeMatch: '/api/',
  },
  {
    text: '插件社区',
    link: '/plugin/awesome',
    activeMatch: '/plugin/',
  },
  {
    text: '关于',
    activeMatch: '/about/',
    items: [
      { text: '常见问题', link: '/about/faq' },
      { text: '计划', link: '/about/project' },
      { text: '历史', link: '/about/history' },
    ]
  },
];
const sidebar = {
  '/develop/': [
    {
      text: '基础',
      items: [
        {
          text: '概述',
          link: '/develop/overview',
        },
        {
          text: '编写一个插件',
          link: '/develop/application',
        },
      ]
    },
    {
      text: '进阶',
      items: [
        {
          text: '消息事件',
          link: '/develop/event',
        },
        {
          text: '指令前缀',
          link: '/develop/prefix',
        },
        {
          text: '语法糖',
          link: '/develop/sugar',
        },
        {
          text: '参数获取',
          link: '/develop/query',
        },
        {
          text: '指令鉴权',
          link: '/develop/auth',
        },
        {
          text: '定时任务',
          link: '/develop/schedule',
        },
      ]
    },
    {
      text: '权限',
      items: [
        {
          text: '插件配置项',
          link: '/develop/option',
        },
      ]
    },
  ],
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduce' },
        { text: '快速上手', link: '/guide/quick-start' },
      ]
    },
    {
      text: '使用',
      items: [
        { text: '配置文件', link: '/guide/config' },
        { text: '基础指令', link: '/guide/command' },
      ]
    },
    {
      text: '插件',
      items: [
        {
          text: '插件列表',
          link: '/plugin/awesome',
        },
      ]
    },
  ],
  '/api/': [
    {
      text: '全局 API',
      items: [
        {
          text: '应用实例',
          link: '/api/application',
        },
        {
          text: 'web',
          link: '/api/web',
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
    [
      'link', {
        rel: 'icon',
        href: '/images/logo.png',
      },
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav,
    sidebar,
    footer: {
      message: 'Released under the <a href="https://github.com/kokkorojs/kokkoro/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2020-2023 <a href="https://github.com/dcyuki">Yuki</a>'
    },
    outlineTitle: '本页目录',
    editLink: {
      pattern: 'https://github.com/kokkorojs/kokkorojs.github.io/edit/master/src/:path',
      text: '帮助改善当前页面',
    },
    lastUpdatedText: '更新日期',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kokkorojs/kokkoro' }
    ],
    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: 'kokkoro'
    // },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
  markdown: {
    lineNumbers: true,
  },
});

import axios from 'axios';
import { defineConfigWithTheme } from 'vitepress';

function getPackageVersion(name: string) {
  return axios
    .get(`https://registry.npmjs.org/${name}/latest`)
    .then(result => result.data.version)
}

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
    link: '/develop/overview',
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
  // {
  //   text: getPackageVersion('kokkoro'),
  //   items: [
  //     {
  //       text: '更新日志',
  //       link: 'https://github.com/kokkorojs/kokkoro/releases',
  //     },
  //   ],
  // },
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
        // {
        //   text: '插件列表',
        //   link: '/plugin/awesome',
        // },
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
      {
        icon: 'github',
        link: 'https://github.com/kokkorojs/kokkoro',
      },
      {
        icon: {
          svg: '<svg t="1677242901737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5393" width="200" height="200"><path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="5394"></path></svg>'
        },
        link: 'https://jq.qq.com/?_wv=1027&k=3hcWCnhq',
      },
    ],
    algolia: {
      appId: '5U0A1D2B9B',
      apiKey: 'bb75354d004316adaf47ceb8c54b3119',
      indexName: 'kokkoro-js',
      placeholder: '搜索',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
  markdown: {
    lineNumbers: true,
  },
});

import { DefaultTheme, defineConfig } from 'vitepress';

const nav: DefaultTheme.NavItem[] = [
  {
    text: '文档',
    items: [
      { text: '深度指南', link: '/guide/introduce' },
      { text: '快速上手', link: '/guide/quick-start' },
    ],
  },
  {
    text: '开发',
    link: '/develop/overview',
    activeMatch: '/develop/',
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
    ],
  },
];
const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduce' },
        { text: '快速上手', link: '/guide/quick-start' },
      ],
    },
    {
      text: '基础',
      items: [{ text: '配置文件', link: '/guide/config' }],
    },
  ],
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
      ],
    },
    {
      text: '进阶',
      items: [
        {
          text: '消息事件',
          link: '/develop/event',
        },
        {
          text: '参数获取',
          link: '/develop/query',
        },
        {
          text: '数据库',
          link: '/develop/database',
        },
      ],
    },
  ],
};
const search: DefaultTheme.Config['search'] = {
  provider: 'algolia',
  options: {
    appId: '5U0A1D2B9B',
    apiKey: 'fe71b8264dbbb9e369659eee7a8977dc',
    indexName: 'kokkoro-js',
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kokkoro',
  description: 'とある咕咕の QQ 机器人框架',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outline: {
      label: '本页目录',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/kokkorojs/kokkoro',
      },
      {
        icon: {
          svg: '<svg t="1677242901737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5393" width="200" height="200"><path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="5394"></path></svg>',
        },
        link: 'https://jq.qq.com/?_wv=1027&k=3hcWCnhq',
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/kokkorojs/kokkoro/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2020-2024 <a href="https://github.com/xueelf">Yuki</a>',
    },
    editLink: {
      pattern: 'https://github.com/kokkorojs/kokkorojs.github.io/edit/master/src/:path',
      text: '帮助改善当前页面',
    },
    lastUpdated: {
      text: '更新日期',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search,
  },
});

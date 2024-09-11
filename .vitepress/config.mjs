import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Mist Docs",
  description: "A MC server docs",

  locales: {
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: {
          label: '概览'
        },
        nav: [
          { text: '主页', link: '/zh-CN/' },
          { text: 'QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=3dDOOsgeMGjDJEVWTIj8C15zKBoN-sX8&authKey=nxS%2FooJ3cRB6SJNzf%2BfSZ%2BngRdqrPl8RbVUT6fykDfrx%2BgM96tMrLErOprxR8y99&noverify=0&group_code=807505406' }
        ],
        sidebar: {
          '/zh-CN/': [
            {
              text: '从这开始',
              items: [
                { text: '开始', link: '/zh-CN/docs/start/start' },
                { text: '规则', link: '/zh-CN/docs/start/rule' },
                { text: '服务器配置', link: '/zh-CN/docs/start/config' },
                { text: '服务器更新日志', link: '/zh-CN/docs/start/new' },
              ]
            },
            {
              text: '教程',
              collapsed: true,
              items: [
                { text: '登录', link: '/zh-CN/docs/guide/login' },
                {
                  text: '功能',
                  collapsed: true,
                  items: [
                    { text: '传送', link: '/zh-CN/docs/guide/function/tpa' },
                    { text: '菜单', link: '/zh-CN/docs/guide/function/menu' },
                    { text: '圈地', link: '/zh-CN/docs/guide/function/land' },
                    { text: '生电党狂喜', link: '/zh-CN/docs/guide/function/redstone' },
                    { text: '抓小偷', link: '/zh-CN/docs/guide/function/coi' },
                    { text: '举报', link: '/zh-CN/docs/guide/function/report' },
                    { text: '听音乐', link: '/zh-CN/docs/guide/function/music' },
                    { text: '开麦', link: '/zh-CN/docs/guide/function/vocie' },
                  ]
                },
                {
                  text: '粘液科技教程',
                  collapsed: true,
                  items: [
                    { text: 'P1', link: '/zh-CN/docs/guide/slimefun/1' },
                    { text: 'P2', link: '/zh-CN/docs/guide/slimefun/2' },
                  ]
                },
                {
                  text: '岚币',
                  collapsed: true,
                  items: [
                    { text: '如何获得', link: '/zh-CN/docs/guide/Mcoin/getmcoin' },
                    { text: '市场', link: '/zh-CN/docs/guide/Mcoin/market' },
                  ]
                },
                {
                  text: '芝士卷',
                  collapsed: true,
                  items: [
                    { text: '如何获得', link: '/zh-CN/docs/guide/cheese/get' },
                  ]
                },
                {
                  text: '特色武器',
                  collapsed: true,
                  items: [
                    { text: '列表', link: '/zh-CN/docs/guide/mmoitem/list' },
                  ]
                },
                {
                  text: '称号',
                  collapsed: true,
                  items: [
                    { text: 'Bili', link: '/zh-CN/docs/guide/title/bili' },
                    { text: '建筑师', link: '/zh-CN/docs/guide/title/build' },
                    { text: '摄影师', link: '/zh-CN/docs/guide/title/photoer' },
                    { text: '举报者', link: '/zh-CN/docs/guide/title/reporter' },
                  ]
                },
                { text: '起床战争', link: '/zh-CN/docs/guide/bedwar' },
              ]
            },
            {
              text: '其它',
              collapsed: true,
              items: [
                { text: '良心', link: '/zh-CN/docs/other/goodxin' },
                { text: '安全性', link: '/zh-CN/docs/other/protect' },
                { text: '常见问题', link: '/zh-CN/docs/other/question' },
                { text: '快乐', link: '/zh-CN/docs/other/happy' },
                {
                  text: 'Mist团队',
                  collapsed: true,
                  items: [
                    { text: '人员', link: '/zh-CN/docs/other/team/player' },
                    { text: '规定', link: '/zh-CN/docs/other/team/rule' },
                  ]
                },
              ]
            },
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        footer: {
          message: 'MistMC 服务器文档',
          copyright: '2024-2025 © Mist Team'
        }
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          {
            text: 'Languages',
            items: [
              { text: '简体中文', link: '/zh-CN/', ariaLabel: 'Switch to Simplified Chinese' },
              { text: 'English', link: '/en-US/', ariaLabel: 'Switch to English' },
            ],
          },
          { text: 'Examples', link: '/en-US/docs/markdown-examples' }
        ],
        sidebar: {
          '/en-US/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/en-US/docs/getting-started' },
                { text: 'About Mist', link: '/en-US/docs/about-mist' }
              ]
            },
            {
              text: 'Guides',
              items: [
                { text: 'Installation', link: '/en-US/docs/guides/installation' },
                { text: 'Configuration', link: '/en-US/docs/guides/configuration' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    }
  }
});
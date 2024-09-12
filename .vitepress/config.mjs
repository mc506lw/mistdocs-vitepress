import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Mist Docs",
  description: "A MC server docs",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到匹配的结果',
                resetButtonTitle: '清除搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mc506lw/mistdocs-vitepress' },
    ],
  },

  locales: {
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: {
          label: '概览'
        },
        editLink: {
          pattern: 'https://github.com/mc506lw/mistdocs-vitepress/edit/main/:path',
          text: '在Github编辑此页面'
        },
        nav: [
          { text: '主页', link: '/zh-CN/' },
          { text: 'QQ群', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=3dDOOsgeMGjDJEVWTIj8C15zKBoN-sX8&authKey=nxS%2FooJ3cRB6SJNzf%2BfSZ%2BngRdqrPl8RbVUT6fykDfrx%2BgM96tMrLErOprxR8y99&noverify=0&group_code=807505406' }
        ],
        lastUpdated: {
          text: '最近更新时间',
        },
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
                    { text: '开麦', link: '/zh-CN/docs/guide/function/voice' },
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
        outline: {
          label: 'Overview'
        },
        editLink: {
          pattern: 'https://github.com/mc506lw/mistdocs-vitepress/edit/main/:path',
          text: 'Edit this page on Github'
        },
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'QQ Group', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=3dDOOsgeMGjDJEVWTIj8C15zKBoN-sX8&authKey=nxS%2FooJ3cRB6SJNzf%2BfSZ%2BngRdqrPl8RbVUT6fykDfrx%2BgM96tMrLErOprxR8y99&noverify=0&group_code=807505406' }
        ],
        lastUpdated: {
          text: 'Last Updated',
        },
        sidebar: {
          '/en-US/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en-US/docs/start/start' },
                { text: 'Rules', link: '/en-US/docs/start/rule' },
                { text: 'Server Configuration', link: '/en-US/docs/start/config' },
                { text: 'Server Update Log', link: '/en-US/docs/start/new' },
              ]
            },
            {
              text: 'Tutorials',
              collapsed: true,
              items: [
                { text: 'Login', link: '/en-US/docs/guide/login' },
                {
                  text: 'Features',
                  collapsed: true,
                  items: [
                    { text: 'Teleportation', link: '/en-US/docs/guide/function/tpa' },
                    { text: 'Menu', link: '/en-US/docs/guide/function/menu' },
                    { text: 'Claiming Land', link: '/en-US/docs/guide/function/land' },
                    { text: 'Redstone Delight', link: '/en-US/docs/guide/function/redstone' },
                    { text: 'Catch the Thief', link: '/en-US/docs/guide/function/coi' },
                    { text: 'Report', link: '/en-US/docs/guide/function/report' },
                    { text: 'Listen to Music', link: '/en-US/docs/guide/function/music' },
                    { text: 'Voice Chat', link: '/en-US/docs/guide/function/voice' },
                  ]
                },
                {
                  text: 'SlimeFun',
                  collapsed: true,
                  items: [
                    { text: 'Part 1', link: '/en-US/docs/guide/slimefun/1' },
                    { text: 'Part 2', link: '/en-US/docs/guide/slimefun/2' },
                  ]
                },
                {
                  text: 'Mcoin',
                  collapsed: true,
                  items: [
                    { text: 'How to Get', link: '/en-US/docs/guide/Mcoin/getmcoin' },
                    { text: 'Market', link: '/en-US/docs/guide/Mcoin/market' },
                  ]
                },
                {
                  text: 'Cheese Rolls',
                  collapsed: true,
                  items: [
                    { text: 'How to Get', link: '/en-US/docs/guide/cheese/get' },
                  ]
                },
                {
                  text: 'Unique Weapons',
                  collapsed: true,
                  items: [
                    { text: 'List', link: '/en-US/docs/guide/mmoitem/list' },
                  ]
                },
                {
                  text: 'Titles',
                  collapsed: true,
                  items: [
                    { text: 'Bili', link: '/en-US/docs/guide/title/bili' },
                    { text: 'Architect', link: '/en-US/docs/guide/title/build' },
                    { text: 'Photographer', link: '/en-US/docs/guide/title/photoer' },
                    { text: 'Reporter', link: '/en-US/docs/guide/title/reporter' },
                  ]
                },
                { text: 'Bed Wars', link: '/en-US/docs/guide/bedwar' },
              ]
            },
            {
              text: 'Miscellaneous',
              collapsed: true,
              items: [
                { text: 'Conscience', link: '/en-US/docs/other/goodxin' },
                { text: 'Security', link: '/en-US/docs/other/protect' },
                { text: 'FAQ', link: '/en-US/docs/other/question' },
                { text: 'Joy', link: '/en-US/docs/other/happy' },
                {
                  text: 'Mist Team',
                  collapsed: true,
                  items: [
                    { text: 'Members', link: '/en-US/docs/other/team/player' },
                    { text: 'Rules', link: '/en-US/docs/other/team/rule' },
                  ]
                },
              ]
            },
          ]
        },
        footer: {
          message: 'MistMC Server Documentation',
          copyright: '2024-2025 © Mist Team'
        }
      }
    }
  }
});
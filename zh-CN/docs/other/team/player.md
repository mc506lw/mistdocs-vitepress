---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const adminMembers = [
  {
    avatar: 'https://www.example.com/lw.jpg',
    name: 'lw（老万）',
    title: '开发，官网，提供服务器',
    links: [
      { icon: 'github', link: 'https://github.com/lw' },
      { icon: 'twitter', link: 'https://twitter.com/lw' }
    ]
  },
  {
    avatar: 'https://www.example.com/moshushi.jpg',
    name: 'moshushi（魔术师）',
    title: '维护插件，客服，官网维护',
    links: [
      { icon: 'github', link: 'https://github.com/moshushi' },
      { icon: 'twitter', link: 'https://twitter.com/moshushi' }
    ]
  }
]

const dafengguanMembers = [
  {
    avatar: 'https://www.example.com/ljh.jpg',
    name: 'LJH',
    title: '财务，备份，客服，找资源',
    links: [
      { icon: 'github', link: 'https://github.com/ljh' },
      { icon: 'twitter', link: 'https://twitter.com/ljh' }
    ]
  },
  {
    avatar: 'https://www.example.com/ddbox.jpg',
    name: 'DDbox（董董不懂）',
    title: '活动策划，官网维护',
    links: [
      { icon: 'github', link: 'https://github.com/ddbox' },
      { icon: 'twitter', link: 'https://twitter.com/ddbox' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      我们的团队由一群充满热情的成员组成，他们共同推动项目向前发展。
    </template>
  </VPTeamPageTitle>
  
  <!-- 分割线 -->
  <h2 class="team-divider">管理员</h2>

  <!-- 管理员团队 -->
  <VPTeamMembers
    :members="adminMembers"
  />
  
  <!-- 分割线 -->
  <h2 class="team-divider">大风机关</h2>
  
  <!-- 大风机关团队 -->
  <VPTeamMembers
    :members="dafengguanMembers"
  />
</VPTeamPage>

<style>
.team-divider {
  text-align: center; /* 居中标题 */
  font-size: 24px; /* 标题字体大小 */
  font-weight: bold; /* 加粗标题 */
  margin-top: 30px; /* 标题上方的间距 */
  margin-bottom: 20px; /* 标题下方的间距 */
  color: #333; /* 标题颜色 */
}
</style>
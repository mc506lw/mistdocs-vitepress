// 导入Vue和默认主题
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app, router, siteData }) {
    // 在这里可以执行一些增强应用的功能，例如添加全局组件、混入、指令等。
  }
}


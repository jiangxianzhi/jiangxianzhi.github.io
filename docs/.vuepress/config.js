import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { navBar } from './navBar/navBar'
import sideBar from './sidebar/sidebar'

export default defineUserConfig({

  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
  // head icon设置
  title: 'JiangXZ',
  description: 'Welcome to my Website and just take a look!',

  theme: defaultTheme({
    lastUpdated: 'Last Updated',
    logo: '/images/20140331153342-37130304.jpg',
// 导航栏 logo
    navbar: navBar,
    repo: 'https://github.com/jiangxianzhi?tab=repositories',
    // 仓库位置,
    // 侧边栏
    // 不支持中文匹配？
    // 换text名字
    sidebarDepth: 3,
    displayAllHeaders: true,
    sidebar: sideBar,


  }),

  bundler: viteBundler(),
})

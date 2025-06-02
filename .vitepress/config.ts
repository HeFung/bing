import { defineConfig } from 'vitepress'

import sidebar from './sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: '必应壁纸',
  description: '必应每日超清壁纸（4K）',
  metaChunk: true,
  markdown: {
    theme: { light: 'one-light', dark: 'dracula-soft' },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
    }
  },
  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
 
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
      ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
      ['meta', { name: 'theme-color', content: '#5f67ee' }],
      ['meta', { name: 'og:type', content: 'website' }],
      ['meta', { name: 'og:locale', content: 'zh-CN' }],
      ['meta', { name: 'og:site_name', content: '必应壁纸' }],
      ['meta', { name: 'og:image', content: '/logo.svg' }],
      ['meta', { name: 'og:description', content: '必应每日超清壁纸（4K）' }],
  ],

  base: '/',
  srcDir: 'docs',
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: { label: '简体中文' },
    en: { label: '英文' },
  },

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'full', timeStyle: 'full', hourCycle: 'h24' }
    },
      // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '壁纸',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    sidebar,
    footer: {
      message: '必应每日超清壁纸（4K）',
      copyright: 'MIT Licensed | Copyright © 2020-present Mr.HeFung'
    }
  }
})

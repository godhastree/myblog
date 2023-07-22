import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import bloglist from './bloglist'
import autoIncludePlugin from './autoIncludePlugin'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '圆核',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        colorModeSwitch: true,
        logo: '/logo.png',
        // repo: 'https://gitlab.com/foo/bar',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '博客',
                link: '/blog/',
            },
            { text: 'GitHub', link: 'https://github.com/yourusername' },

        ],
        sidebar: {
            '/blog/': autoIncludePlugin(),
            displayAllHeaders: false,
            sidebarDepth:1
        },
        search: true,
        searchMaxSuggestions: 10,
    }),
    plugins: [
        // require('./autoIncludePlugin'),
        searchPlugin({
            // 配置项
            isSearchable: (page) => page.path !== '/',
            maxSuggestions:10,
            locales: {
                '/': {
                  placeholder: 'Search',
                },
                '/zh/': {
                  placeholder: '搜索',
                },
              },
          })
        ]
    // bundler: viteBundler({
    //     viteOptions: {},
    //     vuePluginOptions: {},
    //   }),
})
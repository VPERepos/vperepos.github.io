import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { seoPlugin } from '@vuepress/plugin-seo'

export default defineUserConfig({
  // Site title & description
  title: 'Dr. Vladimir Petukhov',
  description: 'A portfolio site as a general C++/Python programmer, general algorithms developer, industrial computer vision engineer, machine learning engineer and web apps developer.',

  // Head tags (GA, theme color, mobile)
  head: [
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-6HX7S00F14' },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-6HX7S00F14');",
      ],
    ],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  // Bundler
  bundler: viteBundler(),

  // Theme
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Services', link: '/Services/' },
      { text: 'Contact', link: '/Contact/' },
      { text: 'CV', link: '/Resume/' },
      { text: 'Blog', link: '/Blog/' },
      { text: 'Github', link: 'https://github.com/vperepos' },
    ],

    // Auto sidebar from headings
    // Manual sidebar
    sidebar: {
      '/Blog/': [
        '/Blog/state-machine-design-pattern',
        '/Blog/task-queue-design-pattern',
        '/Blog/cpp-performance-cache-study',
        '/Blog/java-vector-field-widget',
        '/Blog/knowledge_base',
        '/Blog/readings',
      ],
      '/Contact/': ['/Contact/index'],
      '/index/': ['/index'],
      '/Resume/': ['/Resume/index'],
      '/Services/': ['/Services/index'],
    },
    sidebarDepth: 2, // include h2 and h3 in sidebar
  }),

  // Plugins
  plugins: [
    // Math plugin with KaTeX
    markdownMathPlugin({ type: 'katex' }),

    // SEO plugin
    seoPlugin({
      hostname: 'https://vperepos.github.io', // required
      author: 'Dr. Vladimir Petukhov',
      autoDescription: true, // generate meta description automatically
    }),
  ],
})

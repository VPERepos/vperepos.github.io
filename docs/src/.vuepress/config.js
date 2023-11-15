const { description } = require('../../package')

module.exports = {
  title: 'Dr. Vladimir Petukhov',
  description: 'A portfolio site as a general C++/Python programmer, general algorithms developer, industrial computer vision engineer, machine learning engineer and web apps developer.',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Curriculum Vitae',
        link: '/Curriculum/',
      },
      {
        text: 'Contact and Availability',
        link: '/Contact/'
      },
      {
        text: 'Github',
        link: 'https://github.com/vperepos'
      }
    ],
    
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

const { description } = require('../../package')

module.exports = {
  title: 'Dr. Vladimir Petukhov',
  description: 'A portfolio site as a general C++/Python programmer, general algorithms developer, industrial computer vision engineer, machine learning engineer and web apps developer.',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {}, `
      async src="https://www.googletagmanager.com/gtag/js?id=G-6HX7S00F14"
    `],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-6HX7S00F14');
    `],
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Blogs',
        link: '/Blogs/',
      },
      {
        text: 'Curriculum Vitae',
        link: '/Curriculum/',
      },
      {
        text: 'Computer Science Skills',
        link: '/ComputerScienceSkills/',
      },
      {
        text: 'Publications',
        link: '/Publications/',
      },
      {
        text: 'Certifications',
        link: '/Certifications/',
      },
      {
        text: 'Readings',
        link: '/Readings/',
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

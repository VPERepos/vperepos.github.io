const { description } = require('../../package')

module.exports = {
    title: 'Dr. Vladimir Petukhov',
    description: 'A portfolio site as a general C++/Python programmer, general algorithms developer, industrial computer vision engineer, machine learning engineer and web apps developer.',
    head: [
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-6HX7S00F14',
            },
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
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        sidebarDepth: 2,
        nav: [
            {
                text: 'Services',
                link: '/Services/'
            },
            {
                text: 'Contact Information',
                link: '/Contact/'
            },
            {
                text: 'CV',
                link: '/Resume/',
            },
            {
                text: 'Blog',
                link: '/Blog/',
            },
            {
                text: 'Github',
                link: 'https://github.com/vperepos'
            },
            
                                                            
        ],

    },

    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/plugin-google-analytics@next',
        '@vuepress/plugin-seo'
    ]
}

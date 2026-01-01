export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Dr. Vladimir Petukhov\",\"description\":\"A portfolio site as a general C++/Python programmer, general algorithms developer, industrial computer vision engineer, machine learning engineer and web apps developer.\",\"head\":[[\"script\",{\"async\":true,\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-6HX7S00F14\"}],[\"script\",{},[\"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-6HX7S00F14');\"]],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

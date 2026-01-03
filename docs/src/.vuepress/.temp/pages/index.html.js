import comp from "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/Titelbild.jpg\",\"tagline\":\"Freelance data scientist specializing in business analytics, predictive modeling and time-series analysis.\",\"actions\":[{\"text\":\"Contact me →\",\"link\":\"/Contact/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Predictive Business Analytics\",\"details\":\"Transform business and operational data into actionable forecasts and insights to support planning, risk management, and decision-making.\"},{\"title\":\"Time Series & Forecasting Models\",\"details\":\"Develop, evaluate, and optimize statistical and machine-learning models for complex temporal data, including ARIMA, LSTM, and hybrid approaches.\"},{\"title\":\"Decision Support & Scenario Modeling\",\"details\":\"Build data-driven simulations and scenario analyses that help management evaluate options, understand trade-offs, and make confident strategic and operational decisions.\"}],\"footer\":\"Made by Dr. Vladimir Petukhov\",\"tags\":[\"machine-learning\",\"data-science\",\"freelance\",\"portfolio\",\"freelancer data scientist\"]},\"git\":{\"updatedTime\":1766679732000,\"contributors\":[{\"name\":\"Vladimir Petukhov\",\"username\":\"\",\"email\":\"v.petukhov@mail.de\",\"commits\":1}],\"changelog\":[{\"hash\":\"0b1b33559df802af3d993e140b0127033fe2f2e5\",\"time\":1766679732000,\"email\":\"v.petukhov@mail.de\",\"author\":\"Vladimir Petukhov\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

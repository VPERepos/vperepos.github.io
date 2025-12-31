import { CodeTabs } from "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

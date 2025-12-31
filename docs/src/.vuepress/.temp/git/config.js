import { GitContributors } from "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/WORKSPACE/Personal/Softwareentwicklung/VpeFreelancerPage/vperepos.github.io/docs/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

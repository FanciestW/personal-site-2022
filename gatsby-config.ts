import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `William Lin — Software Engineer`,
    description: `Platform-focused software engineer building reliable infrastructure and developer tooling.`,
    siteUrl: `https://fanciestw.github.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
  ],
};

export default config;

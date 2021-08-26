module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-essentials",
  ],
  typescript: {
    reactDocgen: "none",
  },
  features: {
    postcss: false,
  },
};

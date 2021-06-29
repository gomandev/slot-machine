const path  = require('path')
module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src/.'));
    return config;
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@modules': path.resolve(__dirname, '../src/', 'components'),
      '@pages': path.resolve(__dirname, '../src/', 'utils'),
      '@utils': path.resolve(__dirname, '../src/', 'pages'),
    },
  },
   
}

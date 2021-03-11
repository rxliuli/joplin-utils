module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal(config = {}, options = {}) {
    const css_regex = '/\\.css$/'
    const cssRule = config.module.rules.find(
      (_) => _.test.toString() === css_regex,
    )

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter((_) => _.test.toString() !== css_regex),
          {
            ...cssRule,
            exclude: /\.module\.css$/,
          },
          {
            ...cssRule,
            test: /\.module\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
            ],
          },
        ],
      },
    }
  },
}

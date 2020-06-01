const prettierConfigStandard = require('prettier-config-standard')

module.exports = {
  ...prettierConfigStandard,
  // 自定义配置
  overrides: [
    {
      files: ['*.md', '*.json', '*.yml', '*.yaml'],
      options: {
        tabWidth: 2,
      },
    },
  ]
}

# 贡献

> [English](CONTRIBUTING.md), [中文](CONTRIBUTING.ZH_CN.md)

欢迎任何社区贡献，需要遵守 [行为准则](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## 代码风格

请使用项目中的 prettier 配置格式化代码，编辑器集成参考 [Prettier Editor Integration](https://prettier.io/docs/en/editors.html)

## 提交消息

提交消息应该以以下关键词开头，参考：[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

## 测试

如果修改了代码，需要更新单元测试。如果测试失败，则有可能不被接受。

> 测试需要使用 [Joplin 开发者模式](https://joplinapp.org/api/references/development_mode/)

## 开发

- `build`: 打包代码
- `dev`: 打包代码（监视模式）
- `deploy`: 生成并部署 api 文档
- `test`: 运行所有单元测试

## 发布

1. `yarn test` 运行所有单元测试
2. `yarn build` 打包代码
3. `yarn version` 更新版本并创建标签
4. 更新 `CHANGELOG.md` 发布信息
5. `npm publish` 发布到 npm
6. `yarn deploy` 生成并部署文档

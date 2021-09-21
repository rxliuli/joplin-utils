# joplin-plugin-cli

## 简介

一个 joplin 插件的 cli，支持创建与打包插件，核心使用 esbuild，它非常**快**。

## 使用

```sh
npm i -g joplin-plugin-cli # 安装
jpl generate --name test-plugin # 生成项目
cd test-plugin
yarn build # 打包
```

## 动机

### 为什么不使用官方的插件模板项目？

最近前端打包工具发生了很大的变化，主要是 esbuild 和 swc 引发的性能革命（这样说一点都不为过），vue 作者放弃 webpack 而基于 esbuild 和 rollup 构建了新的跨框架工具 vite，所以我也更喜欢基于 esbuild 构建更快的工具。

## 参考

- [打包工具性能对比](https://esbuild.github.io/)
- [vscode 官方推荐使用 esbuild 打包插件](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)

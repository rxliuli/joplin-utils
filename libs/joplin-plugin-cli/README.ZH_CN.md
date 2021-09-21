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

## FAQ

### 动机

为什么不使用官方的插件模板项目？

最近前端打包工具发生了很大的变化，主要是 esbuild 和 swc 引发的性能革命（这样说一点都不为过），vue 作者放弃 webpack 而基于 esbuild 和 rollup 构建了新的跨框架工具 vite，所以我也更喜欢基于 esbuild 构建更快的工具。

> 官方插件模板项目使用 webpack 构建大约需要 3.87s，而这个 cli 基于 esbuild 只需要 0.17s。
> ![diff](./assets/diff.png)

## 如何迁移现有插件？

1. 安装依赖

   ```sh
   yarn add -D joplin-plugin-api joplin-plugin-cli
   ```

2. 删除 _package.json_ 中的 `dist/prepare/update` 命令，并添加 `dev/build` 命令

   ```json
   {
     "scripts": {
       "build": "jpl build",
       "dev": "jpl build -w"
     }
   }
   ```

3. 运行构建命令

   ```sh
   yarn build
   ```

## 参考

- [打包工具性能对比](https://esbuild.github.io/)
- [vscode 官方推荐使用 esbuild 打包插件](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)

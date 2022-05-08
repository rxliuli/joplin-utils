# 非开发者安装指南

即便不是开发者，也可以按照教程一步步安装 joplin-blog，如果你遇到了什么无法解决的问题，请在 github 提出 [issue](https://github.com/rxliuli/joplin-utils/issues)，吾辈会尽力帮你解决。

## 前置条件

由于 joplin-blog 依赖于现有工具，所以需要安装 nodejs/git/vscode，参考: [环境要求](../dev/require.md)

## 创建 blog/wiki 项目

> 如果你从未接触过 hexo/vuepress 这些静态网站生成器，那建议你下载示例项目，下面以 hexo blog 为例。

1. 从 github 将 [joplin-utils](https://github.com/rxliuli/joplin-utils) 项目以 zip 格式下载
   ![downloadJoplinUtilZip](/images/downloadJoplinUtilZip.png)
2. 解压 zip 文件
3. 将 _examples/blog-hexo-example_ 目录剪切到解压目录之外你想要的位置

## 启动本地服务器

1. 从终端进入到上一步创建的项目目录
2. `npm i` 初始化
3. `npm run server` 启动本地开发环境
4. 在浏览器打开 <http://localhost:4000/> 可以看到博客页面

## 配置 joplin-blog

1. 使用 vscode 打开 _.joplin-blog.json_ 配置文件
2. 主要应该修改 `token` 配置
3. 删除 _source/\_posts_ 目录
4. 为一些笔记添加 `blog` 标签
5. 运行 `npm run run gen` 从 joplin 读取 `blog` 标签的笔记并写入到当前目录
6. 重新运行 `npm run server`
7. 在浏览器打开 <http://localhost:4000/> 可以看到 joplin 笔记

> 配置项含义参考 [配置](./README.md#配置)

## 配置 git

1. `git init` 初始化
2. 修改 _.gitignore_ 添加 _.joplin-blog_ 将之忽略
3. `git add -A && git commit -m "initial commit"` 添加并提交全部内容

## 部署到远端

> 虽然只需要静态服务器便可部署在线网站，但这里使用 github pages 作为示例，参考 [github 官方文档](https://docs.github.com/cn/pages)。

1. 注册 github 账号
2. 创建名为 `<user>.github.io` 的项目
3. `git remote add origin <github-url>` 关联本地项目与 github 项目
4. `git push origin master` 推送所有文件到仓库
5. `npm run build && npm run deploy` 部署到远端 gh-pages 分支
6. 从浏览器访问 `<user>.github.io`

> 具体更详细的文档参考 [创建 GitHub Pages 站点](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)

# Joplin Publisher

## 简介

发布 Joplin 笔记到 GitHub，并通过 GitHub Actions 来自动化构建部署。

## 使用

### GitHub

1. 如果你还没有的话，[注册](https://github.com/signup)一个 GitHub 账户。
2. 使用模版项目 [joplin-blog-template](https://github.com/joplin-utils/joplin-blog-template) 作为模版创建一个新的仓库，名字是 `<github username>.github.io`
   ![create 1](/images/joplin-publisher-github-create-1.png)
   ![create 2](/images/joplin-publisher-github-create-2.png)
   ![create 3](/images/joplin-publisher-github-create-3.png)
3. 修改 Settings > Pages > Build and deployment，选择 GitHub Actions
   ![setting 1](/images/joplin-publisher-github-setting-1.png)
4. [创建](https://github.com/settings/personal-access-tokens/new)一个 github token，至少选择 content 和 `<github username>.github.io` 仓库的权限，创建完成之后复制得到的 token
   ![setting 2](/images/joplin-publisher-github-setting-2.png)

### Joplin

1. 安装插件
2. 打开 Joplin > Settings > Plugins > Publisher，分别设置 GitHub token/username/repo
   ![setting 1](/images/joplin-publisher-joplin-setting-1.png)
3. 选择一个笔记，添加标签 **blog**
   ![setting 2](/images/joplin-publisher-joplin-setting-2.png)
4. 点击 Tools > Publish to GitHub 发布
   ![publish 1](/images/joplin-publisher-joplin-publish-1.png)

稍等两分钟，就可以前往 `<github username>.github.io` 查看你发布的笔记了。

![blog](/images/joplin-publisher-joplin-blog-1.png)

你可以继续为希望发布的笔记添加标签 blog，然后重新运行 **Publish to GitHub**，这会将笔记更新到网站上。

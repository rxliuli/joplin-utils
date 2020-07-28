# VSCode + Markdown

> 吾辈发布了一个 VSCode Markdown 扩展包插件，可以直接安装 [Markdown Extension Pack](https://marketplace.visualstudio.com/items?itemName=rxliuli.markdown-extension-pack) 以获得开箱即用的 Markdown 插件。

## 场景

Markdown 是一种轻量级的标记语言（[Wiki](https://zh.wikipedia.org/zh-hant/Markdown)），目前已经是很流行的写作语言了。因为 Markdown 真的非常简单，易读易写是 Markdown 的目标。然而，虽然 Markdown 已经足够简单了，但我们还是希望能有一个专门的写作环境，用于实现诸如 **语法高亮**，**快捷键**，**即时预览**，**导出其他格式** 等功能。  
而如果你和吾辈一样是个 Developer，那么 VSCode 应该是最好的选择，不仅能拥有完善的 Markdown 写作环境，同时 VSCode 的庞大生态任你使用！

> 没有学习过 Markdown 的话可以去 [markdown 语法说明](https://blog.rxliuli.com/p/5042aac0/) 这里看看，15 分钟内应该就能基本了解了哦

## 安装

> 如果你已经安装并熟悉 VSCode 则可以直接跳过这一步。

首先我们去到 [官网](https://code.visualstudio.com/) 的 [下载页面](https://code.visualstudio.com/#alt-downloads)。这里吾辈推荐免安装的 `.zip` 包，因为它是真正开箱即用的！

![VSCode 下载](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181201152415.png)

将文件解压到一个文件夹中，解压后的目录基本是这个样子

![VSCode 解压目录](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181201152813.png)

点击其中的 **Code.exe** 运行 VSCode。

![VSCode 首页](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181201161858.png)

## 安装插件

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)：Markdown 语言支持，
  提供比 VSCode 原生更加强大的语法高亮，以及非常好用的格式化功能
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)：Markdown 写作规范，
  没有规范是不行的，即便是 Markdown 如此简单的标记语言亦是如此。它能够提示我们写 Markdown 时的最佳实践
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)：自动修复，
  markdown 文档中经常有一些不好的格式错误，上面的 markdownlint 插件提示完自然要有自动修复啦
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)：Markdown 导出 PDF，
  写 Markdown 文档固然很方便，然而给别人看（尤其是不会 Markdown 的人）的时候却是不太友好，还是转换为 PDF 这种通用文档更好一点呢

## 配置

```js
{
  "markdown-pdf.executablePath": "C://Program Files (x86)//Google//Chrome//Application//chrome.exe",
  // markdown toc 设置兼容 github
  "markdown.extension.toc.githubCompatibility": true,
  // 保存时不要自动更新目录
  "markdown.extension.toc.updateOnSave": false,
  // 禁用表格格式化功能
  "markdown.extension.tableFormatter.enabled": false,
}
```

## 使用图片

众所周知，Markdown 显示图片一直是个不大不小的麻烦。但因为 VSCode 丰富的生态，所以我们可以使用插件来弥补这一缺陷。

- [PicGo](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)：图片上传

这个插件是开箱即用的，只要安装完成后就可以直接上传图片了，不需要任何配置。

常用操作只有三个：

- 截图上传 `Ctrl-Alt-U`  
  ![截图上传](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181205102050.gif)
- 文件管理器选择上传 `Ctrl-Alt-E`  
  ![文件管理器选择上传](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181205102356.gif)
- 输入文件路径上传 `Ctrl-Alt-O`  
  ![输入文件路径上传](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181205102418.gif)

> PicGo 默认使用 [smms](https://sm.ms/) 图床，如果你不想使用这个图床，则可以配置 GitHub 或者其他的图床，具体参考 [官方文档](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)。

## 效果

最后，配置完成的 VSCode 编辑器编辑 Mardkown 的效果图如下

![编辑效果](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20181201165338.png)

那么，接下来，便使用 VSCode 愉快的写作吧 ヾ（＠＾ ▽ ＾＠）ノ

# 常问问题

## 显示错误信息 **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

请尝试在 CMD/Bash 执行以下命令，如果没有问题，它应该返回 **JoplinClipperServer**，否则你需要向 Joplin 官方提 issue。

```cmd
curl http://127.0.0.1:41184/ping
```

## 如何列出 VSCode 打开的 joplin 笔记

虽然没有正式的支持，但你可以使用快捷键 `c+j c+o` 来列出最后修改的 20 个 joplin 笔记做到类似的事情。

> 之所以没有正式支持，可能就是因为两者的功能重叠，另外，vscode 的最近打开的文件也不仅仅是当前编辑器正在打开的文件，而是包括已经关闭的。

## 插件没有显示列表

请检查完 joplin 的配置项之后，重新启动 VSCode。

## 在侧边栏中点击无法打开笔记

这个问题可能有多个原因

1. 检查是否可以在 joplin 中通过 **切换外部编辑** 功能打开 vscode
   1. 如果不能打开，则需要检查设置页面中的文本编辑器命令，你需要设置一个编辑器，或者有无效的设置，参考：<https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774>
   2. 如果仍然有问题，请去 joplin 官方项目 [提出 issue](https://github.com/laurent22/joplin/issues)
2. 请使用版本 v1.4 或更高，因为它包含了必须的 [action api](https://discourse.joplinapp.org/t/9277/11)，例如在 VSCode 中根据 noteId 打开笔记
3. 确定是在当前电脑上安装 Joplin 桌面版，该插件并不支持 CLI，因为它并不包含上述的 action api，参考: <https://discourse.joplinapp.org/t/16735>
4. 检查下面命令是否能够正常执行，如果仍然无法在编辑器中打开，可能要询问 @laurent22

   ```sh
   curl --location --request POST 'http://localhost:41184/services/externalEditWatcher?token=***' \
   --header 'Content-Type: application/json' \
   --data-raw '{
    "action": "openAndWatch",
    "noteId": "257f6a9dacc1409580ee526d50ac4d49"
   }'
   ```

## Windows 10 无法上传剪切版图片

可能是没有安装 powershell，在 CMD 中输入 powershell 检查

```sh
powershell
```

![powershell](https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png)

如果提示 `spawn powershell ENOENT` 则需要安装 powershell，参考：[在 Windows 上安装 PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)

## 如何在两个配置同步的 vscode 使用插件

默认情况下，每台电脑上的 joplin 会生成随机的 token，但您可以手动修改它，一般配置文件在 _~/.config/joplin-desktop/settings.json_，您只需要修改其中的 `api.token` 为相同的 token 即可。

![手动设置 joplin 的 token](/images/manually-set-token-of-joplin.png)

> 参考：<https://github.com/rxliuli/joplin-utils/issues/25>

## markdown 预览无法显示图片

当你第一次使用 joplin vscode 插件时，你也许会遇到无法在 markdown 预览中查看图片的问题，在预览中存在提示 **Some content has been disabled in this document**，这个问题可以很简单的解决。

1. 输入命令 `markdown.showPreviewSecuritySelector`
2. 在列表中选择 `Allow insecure local content`

> [vscode markdown 文档](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)

## 不兼容插件 Markdown Preview Enhanced

由于 Markdown Preview Enhanced 自行构建了 markdown 文件渲染的 webview 页面，而且不在乎 vscode 提供的 [markdown-it 扩展接口 api](https://code.visualstudio.com/api/extension-guides/markdown-extension)，所以现在无法兼容，推荐使用 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)，参考：<https://github.com/rxliuli/joplin-utils/issues/46>

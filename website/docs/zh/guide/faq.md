# 常问问题

## 显示错误信息 **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

请尝试在 CMD/Bash 执行以下命令，如果没有问题，它应该返回 **JoplinClipperServer**，否则你需要向 Joplin 官方提 issue。

```cmd
curl http://127.0.0.1:41184/ping
```

## 点击后在其他编辑器中打开

请参考官方的默认外部编辑器设置：[How can I edit my note in an external text editor?](https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor)

## 如何列出 VSCode 打开的 joplin 笔记

虽然没有正式的支持，但你可以使用快捷键 `c+j c+o` 来列出最后修改的 20 个 joplin 笔记做到类似的事情。

> 之所以没有正式支持，可能就是因为两者的功能重叠，另外，vscode 的最近打开的文件也不仅仅是当前编辑器正在打开的文件，而是包括已经关闭的。

## 插件没有显示列表

请检查完 joplin 的配置项之后，重新启动 VSCode。

## 在侧边栏中点击无法打开笔记

这个问题可能有多个原因

1. 请使用版本 v1.4 或更高，因为它包含了必须的 [action api](https://discourse.joplinapp.org/t/hope-that-the-web-api-adds-the-following-features-to-support-the-development-of-third-party-extensions/9277/11?u=rxliuli)，例如在 VSCode 中根据 noteId 打开笔记
2. 当前版本是 Joplin Desktop，该插件并不支持 CLI，因为它并不包含上述的 action api，参考: <https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735>
3. 检查下面命令是否能够正常执行，如果仍然无法在编辑器中打开，可能要询问 @laurent22

   ```sh
   curl --location --request POST 'http://localhost:27584/services/externalEditWatcher?token=***' \
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

# 常问问题

## 显示错误信息 **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

请尝试在 CMD/Bash 执行以下命令，如果没有问题，它应该返回 **JoplinClipperServer**，否则你需要向 Joplin 官方提 issue。

```cmd
curl http://127.0.0.1:41184/ping
```

## 点击后没有在 VSCode 中打开

请参考官方的默认外部编辑器设置：[How can I edit my note in an external text editor?](https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor)

## 如何列出 VSCode 打开的 joplin 笔记

虽然没有正式的支持，但你可以使用快捷键 `c+j c+o` 来列出最后修改的 20 个 joplin 笔记做到类似的事情。

> 之所以没有正式支持，可能就是因为两者的功能重叠，另外，vscode 的最近打开的文件也不仅仅是当前编辑器正在打开的文件，而是包括已经关闭的。

## 插件没有显示列表

请检查完 joplin 的配置项之后，重新启动 VSCode。

## 在侧边栏中点击无法打开笔记

请使用版本 [v1.0.224](https://github.com/laurent22/joplin/releases/tag/v1.0.224) 或更高，因为它包含了必须的几个新 API，例如在 VSCode 中根据 noteId 打开笔记。

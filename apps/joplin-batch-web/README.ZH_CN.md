# joplin-batch-web

处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。

- [x] 检查是否存在没有引用的附件资源
      一些没有使用的附件资源没有被及时清理
- [x] 检查引用的附件资源不存在的情况
      一些正在使用的附件可能由于各种原因不存在了
- [x] 转换外部链接为内部笔记引用
      希望能够将之前的 blog 链接转换为内部的 `:/id` 链接以保证永不过期
- [ ] 检查是否存在没有父级目录的笔记（一般是错误）

## FAQ

### 为什么不使用 cli 的形式

cli 的形式不太适合这种场景，例如需要预览异常的附件或笔记，在命令行下比较麻烦。

### 如何使用它

1. 打开 joplin 桌面版
2. 启用网页剪辑器
3. 在 [设置](https://joplin-utils.rxliuli.com/joplin-batch-web/#/settings) 页面填写配置
4. 导航到相关功能页面

![guide](https://github.com/rxliuli/joplin-utils/raw/dev/apps/joplin-batch-web/docs/images/guide.gif)

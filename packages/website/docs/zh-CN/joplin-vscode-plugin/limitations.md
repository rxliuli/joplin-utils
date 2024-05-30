# 限制

虽然目前插件已经实现了 joplin 的常用功能，但却是存在一些难以处理的限制。也正是由于这些限制的存在，所以吾辈才没有使用直接基于 vscode 的笔记插件。

- [x] 无法拖放笔记，参考: <https://github.com/Microsoft/vscode/issues/32592>
- [ ] 无法将文件（例如图片）拖放到编辑器中并自动创建引用，参考: <https://github.com/microsoft/vscode/issues/5240>
- [ ] 无法预览显示音视频，参考: <https://github.com/microsoft/vscode/issues/32540>
- [ ] 无法自定义插件的 ui, 参考: <https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access>
- [x] 默认的快捷键设置比较麻烦，需要考虑与现有快捷键的冲突（目前已通过将之分配到 `ctrl+j` 命名空间下暂时解决）

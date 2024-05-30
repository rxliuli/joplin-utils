# Limitations

Although the current plugin has realized the common functionalities of Joplin, there are some limitations that are challenging to address. It is precisely because of these limitations that I have not used a note plugin directly based on VSCode.

- [x] Unable to drag and drop notes, see: <https://github.com/Microsoft/vscode/issues/32592>
- [ ] Unable to drag and drop files (such as images) into the editor and automatically create a reference, see: <https://github.com/microsoft/vscode/issues/5240>
- [ ] Unable to preview audio and video, see: <https://github.com/microsoft/vscode/issues/32540>
- [ ] Unable to customize the plugin UI, see: <https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access>
- [x] The default shortcut key settings are cumbersome and need to consider conflicts with existing shortcut keys (currently resolved temporarily by assigning them to the `ctrl+j` namespace)

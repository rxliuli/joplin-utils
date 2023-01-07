# Limitations

Although the plugin currently implements the common features of joplin, there are some limitations that are difficult to deal with. It is also because of these limitations that I do not use a direct vscode-based notes plugin.

- Unable to drag and drop notes, see: <https://github.com/Microsoft/vscode/issues/32592>
- Can't drag and drop files (e.g. images) into the editor and create references automatically, see: <https://github.com/microsoft/vscode/issues/5240>
- Cannot preview audio and video, see: <https://github.com/microsoft/vscode/issues/32540>
- Cannot customize the ui of the plugin, see: <https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access>
- Default shortcuts are a bit tricky to set, you need to consider conflicts with existing shortcuts (temporarily solved by assigning them to the `ctrl+j` namespace)
